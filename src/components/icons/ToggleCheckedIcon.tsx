import * as React from "react";

export function ToggleCheckedIcon({ fill = "#009AEE", ...other }: { fill?: string }) {
    return (
        <svg {...other} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_310_13994)">
                <circle cx="18" cy="18" r="14" fill={fill} />
            </g>
            <path
                d="M23.0915 14.952L23.0867 14.9461L23.0813 14.9406C22.9008 14.7536 22.6103 14.7531 22.4293 14.9393L17.162 20.2296L14.5851 17.6347C14.404 17.4484 14.1135 17.4488 13.9329 17.6358C13.7557 17.8193 13.7557 18.1087 13.9329 18.2922L13.9329 18.2923L13.9349 18.2942L16.5805 20.9583C16.7368 21.1196 16.9498 21.2 17.1473 21.2C17.362 21.2 17.5596 21.1177 17.7141 20.9584L23.0468 15.6023C23.2436 15.4199 23.2421 15.1339 23.0915 14.952ZM17.2327 20.3008L17.2317 20.2998C17.2321 20.3001 17.2324 20.3005 17.2327 20.3008L17.2327 20.3008Z"
                fill="white"
                stroke="white"
                strokeWidth="0.4"
            />
            <defs>
                <filter
                    id="filter0_d_310_13994"
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
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_310_13994" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_310_13994" result="shape" />
                </filter>
            </defs>
        </svg>
    );
}
