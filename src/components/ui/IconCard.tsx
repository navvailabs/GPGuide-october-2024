import React from 'react'
export interface IconCardProps {
  /** Image source URL */
  src: string
  /** Alt text for the image */
  alt?: string
  /** Size of the card container in pixels */
  size?: number
  /** Size of the icon/image in pixels */
  iconSize?: number
  /** Background color (Tailwind class or hex) */
  backgroundColor?: string
  /** Optional data-id for component identification */
  'data-id'?: string
}
export function IconCard({
  src,
  alt = 'icon',
  size = 76,
  iconSize = 44,
  backgroundColor = 'bg-[#0E1C29]',
  'data-id': dataId,
}: IconCardProps) {
  return (
    <div
      data-id={dataId}
      className={`${backgroundColor} flex items-center justify-center rounded-[10px] shadow-[0_0.706592px_0.706592px_-0.666667px_rgba(16,49,77,0.24),0_1.80656px_1.80656px_-1.33333px_rgba(16,49,77,0.23),0_3.62176px_3.62176px_-2px_rgba(16,49,77,0.22),0_6.8656px_6.8656px_-2.66667px_rgba(16,49,77,0.2),0_13.6468px_13.6468px_-3.33333px_rgba(16,49,77,0.16),0_30px_30px_-4px_rgba(16,49,77,0.06)] p-4`}
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className="relative"
        style={{
          width: iconSize,
          height: iconSize,
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          style={{
            imageRendering: 'auto',
          }}
        />
      </div>
    </div>
  )
}
