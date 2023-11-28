import * as React from "react";

import cx from "classnames";

export function Button({
    children,
    icon: Icon,
    variant = "default",
    color = "primary",
    size = "Large",
    disabled = false,
    style = {},
    className = "",
    fullWidth = false,
    type,
    onClick,
    ...other
}: ButtonProps) {
    return (
        <button
            role="button"
            disabled={disabled}
            type={type}
            onClick={onClick}
            className={cx(
                "rounded-md px-7 py-3 border font-medium flex justify-center items-center",
                {
                    ["w-full"]: fullWidth,
                    ["text-base px-7 py-3 loading-6"]: size === "Large",
                    ["text-base px-7 py-[8px] loading-6"]: size === "Medium",
                    ["text-sm leading-[22px] px-7 py-[5px]"]: size === "Small",
                    ["bg-primary text-white hover:bg-blue-dark cursor-pointer"]:
                        variant === "default" && color === "primary" && !disabled,
                    ["bg-secondary text-white hover:bg-teal-dark cursor-pointer"]:
                        variant === "default" && color === "secondary" && !disabled,
                    ["bg-dark text-white hover:bg-primary-text cursor-pointer"]:
                        variant === "default" && color === "tertiary" && !disabled,
                    ["text-primary border-primary hover:bg-blue-light-5 cursor-pointer"]:
                        variant === "outlined" && color === "primary" && !disabled,
                    ["text-secondary border-secondary hover:bg-teal-light-3 cursor-pointer"]:
                        variant === "outlined" && color === "secondary" && !disabled,
                    ["text-dark border-dark hover:bg-grey-4 cursor-pointer"]:
                        variant === "outlined" && color === "tertiary" && !disabled,
                    ["bg-grey-3 text-dark-5 border-grey-3 hover:text-primary-text hover:bg-grey-3 cursor-not-allowed"]:
                        disabled,
                },
                className,
            )}
            style={style}
            {...other}
        >
            {Icon && (
                <span
                    className={cx("mr-2 w-5", {
                        ["w-[18px]"]: size === "Small",
                        ["text-grey-3"]: disabled,
                    })}
                >
                    {Icon}
                </span>
            )}
            {children}
        </button>
    );
}

interface ButtonProps {
    children: React.ReactNode;
    variant?: "default" | "outlined";
    color?: "primary" | "secondary" | "tertiary";
    type?: "button" | "submit" | "reset" | undefined;
    size?: "Large" | "Medium" | "Small";
    disabled?: boolean;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    fullWidth?: boolean;
    className?: string;
    onClick?: () => void;
}
