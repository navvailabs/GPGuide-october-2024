import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';
import { Loader2, AlertTriangle, RefreshCw } from 'lucide-react';

const BUCKET_NAME = 'website-assets';
const FOLDER_NAME = 'website-images';

const ImageAutoSlider = () => {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchImages = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const { data: fileList, error: listError } = await supabase.storage
                .from(BUCKET_NAME)
                .list(FOLDER_NAME, {
                    limit: 20,
                    offset: 0,
                    sortBy: { column: 'created_at', order: 'desc' },
                });

            if (listError) {
                throw listError;
            }

            if (!fileList || fileList.length === 0) {
                setError(`Your '${FOLDER_NAME}' folder inside the '${BUCKET_NAME}' bucket is empty. Please upload your website images there following the instructions.`);
                setImages([]);
                setLoading(false);
                return;
            }

            const imageUrls = fileList
                .filter(file => file.name !== '.emptyFolderPlaceholder')
                .map(file => {
                    const { data: { publicUrl } } = supabase.storage
                        .from(BUCKET_NAME)
                        .getPublicUrl(`${FOLDER_NAME}/${file.name}`);
                    return publicUrl;
                });
            
            if (imageUrls.length === 0) {
                setError(`No images found in the '${FOLDER_NAME}' folder. Please upload your images.`);
                setImages([]);
            } else {
                // Add a cache-busting query parameter to force refresh
                const cacheBustedUrls = imageUrls.map(url => `${url}?t=${new Date().getTime()}`);
                setImages(cacheBustedUrls);
            }

        } catch (err: any) {
            console.error("Error fetching images from Supabase:", err);
            if (err.message.includes("Bucket not found")) {
                setError(`Bucket '${BUCKET_NAME}' not found. Please create a public bucket with this name in your Supabase project.`);
            } else {
                setError("Failed to load images from Supabase. Check the console for details and ensure your bucket is public.");
            }
            setImages([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    const duplicatedImages = images.length > 0 ? [...images, ...images, ...images, ...images] : [];

    const renderContent = () => {
        if (loading && images.length === 0) { // Only show full-screen loader on initial load
            return (
                <div className="flex flex-col items-center justify-center h-96 text-brand-text-muted">
                    <Loader2 className="w-12 h-12 animate-spin text-brand-accent" />
                    <p className="mt-4 text-lg">Loading images from Supabase...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="flex flex-col items-center justify-center h-96 text-brand-text-muted bg-amber-500/10 border border-amber-500/20 rounded-2xl p-8 mx-4">
                    <AlertTriangle className="w-12 h-12 text-amber-500" />
                    <p className="mt-4 text-lg font-semibold text-amber-600">Could not load images</p>
                    <p className="mt-2 text-center max-w-md">{error}</p>
                </div>
            );
        }

        if (images.length === 0 && !loading) {
            return (
                <div className="flex items-center justify-center h-96 text-brand-text-muted">
                    <p className="text-lg">No images to display.</p>
                </div>
            );
        }

        return (
            <div className="scroll-container w-full">
                <div className="infinite-scroll flex gap-6 w-max">
                    {duplicatedImages.map((image, index) => (
                        <div
                            key={`${image}-${index}`}
                            className="flex-shrink-0 w-64 h-96 rounded-2xl overflow-hidden shadow-2xl bg-brand-bg/5 shadow-black/10 transition-transform duration-300 ease-out hover:scale-105"
                        >
                            <img
                                src={image}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="py-16 sm:py-20">
            <div className="text-center max-w-3xl mx-auto mb-12 px-4">
                <div className="flex items-center justify-center gap-4">
                    <GradientHeading as="h2" className="text-3xl md:text-4xl font-bold">
                        A Glimpse Into Your New Workflow
                    </GradientHeading>
                    <button 
                        onClick={fetchImages} 
                        disabled={loading} 
                        className="p-2 rounded-full text-brand-text-muted hover:bg-gray-200/50 hover:text-brand-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Refresh images"
                    >
                        <RefreshCw className={`w-6 h-6 ${loading ? 'animate-spin' : ''}`} />
                    </button>
                </div>
                <Description className="mt-4 text-lg">
                    Visualise a more efficient practice with tools designed to give you time back.
                </Description>
            </div>
            <div className="w-full relative overflow-hidden">
                {renderContent()}
            </div>
        </div>
    );
};

export default ImageAutoSlider;
