import React from 'react';
import { GradientHeading } from '@/components/ui/GradientHeading';
import { Description } from '@/components/ui/Description';

// NOTE: You can replace these placeholder images with actual screenshots from your web app.
const images = [
    "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=2230&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2340&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2152&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2126&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1965&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=80&w=1935&auto=format&fit=crop"
];

const duplicatedImages = [...images, ...images];

const ImageAutoSlider = () => {
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
                                key={index}
                                className="flex-shrink-0 w-64 h-96 rounded-2xl overflow-hidden shadow-2xl shadow-black/10 transition-transform duration-300 ease-out hover:scale-105"
                            >
                                <img
                                    src={image}
                                    alt={`Gallery image ${(index % images.length) + 1}`}
                                    className="w-full h-full object-cover"
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
