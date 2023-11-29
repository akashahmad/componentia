import * as React from "react";

export function ToggleCircularUnActiveIcon({ fill = "#009AEE" }: { fill?: string }) {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_310_13958)">
                <circle cx="18" cy="18" r="14" fill="white" />
            </g>
            <circle cx="18" cy="18" r="6" fill={fill} />
            <defs>
                <filter
                    id="filter0_d_310_13958"
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_310_13958" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_310_13958" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}
