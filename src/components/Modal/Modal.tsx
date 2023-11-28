import * as React from "react";

import cx from "classnames";

import { CloseIcon } from "../icons/CloseIcon";

import { ConfirmationModal } from "./ConfirmationModal";

export function Modal({
    open = true,
    width = "530px",
    position = "top",
    className = "",
    style = {},
    children,
    onClose,
    showCloseIcon = true,
}: ModalProps) {
    return (
        <div
            style={{ width, ...style }}
            className={cx(
                "absolute translate-x-[-50%]",
                "rounded-[20px] p-[50px] shadow-2 bg-white z-50",
                {
                    ["left-1/2 top-[30px]"]: position === "top",
                    ["left-1/2 translate-y-[-50%] top-1/2"]: position === "center",
                    ["left-1/2 bottom-[30px]"]: position === "bottom",
                    ["block"]: open,
                    ["hidden"]: !open,
                },
                className,
            )}
        >
            {showCloseIcon && (
                <div onClick={onClose} className="relative w-full cursor-pointer select-none">
                    <span className={cx("absolute right-[-20px] top-[-20px]")}>
                        <CloseIcon />
                    </span>
                </div>
            )}
            {children}
        </div>
    );
}

interface ModalProps {
    width?: string;
    open?: boolean;
    onClose?: () => void;
    showCloseIcon?: boolean;
    position?: "top" | "center" | "bottom";
    children: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

export { ConfirmationModal };
