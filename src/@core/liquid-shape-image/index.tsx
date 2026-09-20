import React, { useId } from "react";
import { Box } from "@mui/material";

export interface ILiquidImageProps {
  width?: number | string;
  height?: number | string;
  bgColor?: string;
  imageUrl: string;
  title?: string;
  className?: string;
}

const LiquidImage: React.FC<ILiquidImageProps> = ({
  width = 600,
  height = 600,
  bgColor = "#6366f1",
  imageUrl,
  title,
  className = "",
}) => {
  const id = useId().replace(/:/g, "");

  return (
    <Box
      className={`relative flex items-center justify-center ${className}`}
      sx={{ width, height }}
    >
      {/* SVG defs */}
      <svg width="0" height="0">
        <defs>
          <clipPath id={`liquidClip-${id}`} clipPathUnits="objectBoundingBox">
            <path>
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="
                M0.86,0.51 C0.86,0.72 0.72,0.86 0.5,0.86 C0.28,0.86 0.14,0.72 0.14,0.51 C0.14,0.29 0.28,0.14 0.5,0.14 C0.72,0.14 0.86,0.29 0.86,0.51 Z;
                M0.88,0.52 C0.84,0.74 0.66,0.9 0.46,0.86 C0.27,0.82 0.1,0.67 0.13,0.46 C0.17,0.25 0.34,0.11 0.55,0.13 C0.75,0.15 0.92,0.3 0.88,0.52 Z;
                M0.86,0.51 C0.86,0.72 0.72,0.86 0.5,0.86 C0.28,0.86 0.14,0.72 0.14,0.51 C0.14,0.29 0.28,0.14 0.5,0.14 C0.72,0.14 0.86,0.29 0.86,0.51 Z
                "
              />
            </path>
          </clipPath>
        </defs>
      </svg>

      {/* Background blob */}
      <div
        className="absolute inset-0 blur-2xl opacity-60 animate-pulse"
        style={{
          background: bgColor,
          clipPath: `url(#liquidClip-${id})`,
        }}
      />

      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="relative z-10 w-full h-full object-cover"
        style={{ clipPath: `url(#liquidClip-${id})` }}
      />
    </Box>
  );
};

export default LiquidImage;
