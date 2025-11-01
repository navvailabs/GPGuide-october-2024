import React from 'react';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

const imageUrls = [
  "https://deljvtvdkqepubeshmvy.supabase.co/storage/v1/object/public/website-assets/website-images/GPCCM%20dark.png",
  "https://deljvtvdkqepubeshmvy.supabase.co/storage/v1/object/public/website-assets/website-images/MHTP.png",
  "https://deljvtvdkqepubeshmvy.supabase.co/storage/v1/object/public/website-assets/website-images/GPCCM%20light.png",
  "https://deljvtvdkqepubeshmvy.supabase.co/storage/v1/object/public/website-assets/website-images/Workers%20comp.png"
];

const ImageAutoSlider = () => {
    // We duplicate the images to create a seamless looping effect.
    const duplicatedImages = imageUrls.length > 0 ? [...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls] : [];

    if (imageUrls.length === 0) {
        return (
            <div className="py-16 sm:py-20 text-center">
                <p className="text-brand-text-muted">Please add image URLs to the `image-auto-slider.tsx` component to display the gallery.</p>
            </div>
        );
    }

    return (
        <div className="py-16 sm:py-20">
            <div className="text-center max-w-3xl mx-auto mb-12 px-4">
                <GradientHeading as="h2" className="text-3xl md:text-4xl font-bold">
                    A Glimpse Into Your New Workflow
                </GradientHeading>
                <Description className="mt-4 text-lg">
                    Visualise a more efficient practice with tools designed to give you time back.
                </Description>
            </div>
            <div className="w-full relative overflow-hidden">
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
            </div>
        </div>
    );
};

export default ImageAutoSlider;
