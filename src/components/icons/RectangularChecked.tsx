import * as React from "react";

export function RectangularChecked({ ...other }) {
    return (
        <svg {...other} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" fill="#F1F4FF" stroke="#009AEE" />
            <rect x="5" y="5" width="10" height="10" rx="2" fill="#009AEE" />
        </svg>
    );
}
