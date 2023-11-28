import * as React from "react";

export function AvatarOnline({ ...other }) {
    return (
        <svg {...other} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="9.5" fill="#22AD5C" stroke="white" strokeWidth="3" />
        </svg>
    );
}
