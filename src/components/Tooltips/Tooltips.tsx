import * as React from "react";

import "../../styles/tooltip.css";
import cx from "classnames";

export function Tooltip({ children, description, direction = "top", className, theme = "dark", title }: TooltipProps) {
    const getDirection = () => {
        switch (direction) {
            case "top":
            case "right":
            case "left":
                return `${direction}`;
            default:
                return `bottom`;
        }
    };
    return (
        <div className={cx(className)}>
            <div className={`tooltip-wrapper z-10  ${getDirection()}`}>
                <span className="relative ">{children}</span>
                <div
                    className={cx({
                        "bg-dark-2   description": theme === "dark",
                        "bg-white  descriptionlight shadow-dropdown": theme === "light",
                    })}
                >
                    {title && title !== "" && (
                        <p
                            className={cx("text-sm leading-[22px] font-medium", {
                                "text-white": theme === "dark",
                                "text-dark": theme === "light",
                            })}
                        >
                            {title}
                        </p>
                    )}
                    <p
                        className={cx("text-[12px] font-normal", {
                            "text-dark-6": theme === "dark",
                            " text-dark-5": theme === "light",
                        })}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

type position = "top" | "bottom" | "left" | "right";
interface TooltipProps {
    children: React.ReactNode;
    direction?: position;
    description?: string;
    theme?: "dark" | "light";
    className?: string;
    title?: string;
}
