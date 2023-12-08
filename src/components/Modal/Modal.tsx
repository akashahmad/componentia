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
    overlyStyle = {},
    children,
    onClose,
    showCloseIcon = true,
    showOverlay = false,
}: ModalProps) {
    return (
        <>
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

            {showOverlay && open && (
                <div
                    style={{ ...overlyStyle }}
                    onClick={onClose}
                    className="bg-dark absolute left-0 right-0 bottom-0 top-0 w-full h-full opacity-40 z-40"
                />
            )}
        </>
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
    overlyStyle?: React.CSSProperties;
    className?: string;
    showOverlay?: boolean;
}

export { ConfirmationModal };
