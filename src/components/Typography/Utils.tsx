import * as React from "react";

import cx from "classnames";

export function H1({ children, className }: { children: React.ReactNode; className: string }) {
    return <h1 className={cx("text-[30px] font-bold leading-[38px]", className)}>{children}</h1>;
}

export function H2({ children, className }: { children: React.ReactNode; className: string }) {
    return <h2 className={cx("text-[28px] font-semibold leading-[40px]", className)}>{children}</h2>;
}

export function H3({ children, className }: { children: React.ReactNode; className: string }) {
    return <h3 className={cx("text-[24px] font-semibold leading-[30px]", className)}>{children}</h3>;
}

export function H4({ children, className }: { children: React.ReactNode; className: string }) {
    return <h4 className={cx("text-[20px] font-semibold leading-[26px]", className)}>{children}</h4>;
}

export function Body1({ children, variant, className = "" }: BodyProps) {
    return (
        <p
            className={cx(
                "text-lg leading-[26px]",
                {
                    ["font-normal"]: variant === "regular",
                    ["font-medium"]: variant === "medium",
                    ["font-semibold"]: variant === "semibold",
                    ["font-bold"]: variant === "bold",
                },
                className,
            )}
        >
            {children}
        </p>
    );
}

export function Body2({ children, variant, className = "" }: BodyProps) {
    return (
        <p
            className={cx(
                "text-base leading-6",
                {
                    ["font-normal"]: variant === "regular",
                    ["font-medium"]: variant === "medium",
                    ["font-semibold"]: variant === "semibold",
                    ["font-bold"]: variant === "bold",
                },
                className,
            )}
        >
            {children}
        </p>
    );
}

export function Body3({ children, variant, className = "" }: BodyProps) {
    return (
        <p
            className={cx(
                "text-sm leading-[22px]",
                {
                    ["font-normal"]: variant === "regular",
                    ["font-medium"]: variant === "medium",
                    ["font-semibold"]: variant === "semibold",
                    ["font-bold"]: variant === "bold",
                },
                className,
            )}
        >
            {children}
        </p>
    );
}

export function Body4({ children, variant, className }: BodyProps) {
    return (
        <p
            className={cx(
                "text-xs leading-5",
                {
                    ["font-normal"]: variant === "regular",
                    ["font-medium"]: variant === "medium",
                    ["font-semibold"]: variant === "semibold",
                    ["font-bold"]: variant === "bold",
                },
                className,
            )}
        >
            {children}
        </p>
    );
}

interface BodyProps {
    children: React.ReactNode;
    variant: "regular" | "medium" | "semibold" | "bold";
    className: string;
}
