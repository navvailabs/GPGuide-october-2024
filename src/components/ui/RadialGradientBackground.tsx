import { useBrightness } from '@/contexts/BrightnessContext';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

const DarkBackground = () => {
    return (
        <>
            {/* Gradient Layer */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_bottom,#0b0f20_0%,#3c2f5d_40%,#8f6c91_80%,#b07d6f_100%)]"
            />

            {/* Noise Overlay */}
            <div
                className="absolute inset-0 opacity-[0.035] mix-blend-soft-light pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '400px 400px',
                }}
            />
        </>
    );
};

const LightBackground = () => {
    return (
        <>
            {/* Base light color from the original landing page */}
            <div className="absolute inset-0 bg-brand-bg" />

            {/* Aurora Effect */}
            <div
              className={cn(
                `
                [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
                [--aurora:repeating-linear-gradient(100deg,var(--amber-500)_10%,var(--orange-300)_15%,var(--amber-300)_20%,var(--yellow-200)_25%,var(--amber-400)_30%)]
                [background-image:var(--white-gradient),var(--aurora)]
                [background-size:300%,_200%]
                [background-position:50%_50%,50%_50%]
                filter blur-[10px]
                after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
                after:[background-size:200%,_100%] 
                after:animate-aurora after:[background-attachment:fixed] after:mix-blend-multiply
                pointer-events-none
                absolute -inset-[10px] opacity-[0.15] will-change-transform`,
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
              )}
            ></div>

            {/* Noise Overlay from original LightBackground */}
            <div
                className="absolute inset-0 opacity-[0.02] mix-blend-multiply pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundSize: '400px 400px',
                }}
            />
        </>
    );
};


const ThemedBackground = () => {
    const { theme } = useTheme();
    return theme === 'light' ? <LightBackground /> : <DarkBackground />;
};


const RadialGradientBackground = () => {
    const { brightness } = useBrightness();

    return (
        <div
            className="fixed inset-0 -z-20 overflow-hidden"
            style={{ 
                filter: `brightness(${brightness})`, 
                transition: 'filter 0.3s ease-in-out',
                transform: 'translateZ(0)'
            }}
        >
            <ThemedBackground />
        </div>
    );
};

export default RadialGradientBackground;
