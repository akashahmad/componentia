import * as React from "react";

export function ToggleCrossIcon({ fill = "#637381", ...other }: { fill?: string }) {
    return (
        <svg {...other} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_310_13989)">
                <circle cx="18" cy="18" r="14" fill="white" />
            </g>
            <path
                d="M21.4652 13.9269L21.4655 13.9266C21.6346 13.7578 21.904 13.7578 22.0731 13.9266C22.2423 14.0956 22.2423 14.3651 22.0732 14.5341L22.0734 14.534L21.9318 14.3927L22.0731 14.5342L21.4652 13.9269ZM21.4652 13.9269L18.006 17.3944L21.4652 13.9269ZM22.0601 21.469L18.6137 18.0019L21.6068 21.9351C21.6458 21.974 21.7108 22 21.7628 22C21.8148 22 21.8798 21.974 21.9188 21.9351C22.0097 21.8442 22.0097 21.7014 21.9188 21.6105L22.0606 21.4696L22.0604 21.4694C22.0603 21.4693 22.0602 21.4692 22.0601 21.469ZM14.5345 22.0766L18.0062 18.6091L14.5345 13.9396L14.3932 14.0811L14.5343 13.9394L14.5344 13.9395C14.3653 13.7708 14.0959 13.7708 13.9269 13.9396C13.7577 14.1086 13.7577 14.3782 13.9269 14.5472L13.9272 14.5474L17.3985 18.0021L13.9399 21.469C13.9398 21.4691 13.9397 21.4692 13.9397 21.4693C13.9397 21.4693 13.9397 21.4693 13.9396 21.4693C13.7707 21.6383 13.7708 21.9077 13.9399 22.0766C14.0168 22.1534 14.1329 22.2 14.2372 22.2C14.3416 22.2 14.4576 22.1534 14.5345 22.0766Z"
                fill={fill}
                stroke={fill}
                strokeWidth="0.4"
            />
            <defs>
                <filter
                    id="filter0_d_310_13989"
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
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_310_13989" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_310_13989" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}
