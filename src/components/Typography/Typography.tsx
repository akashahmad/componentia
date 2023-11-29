import * as React from "react";

import { Body1, Body2, Body3, Body4, H1, H2, H3, H4 } from "./Utils";

export function Typography({ children, variant = "body2", weight = "regular", className = "" }: TypographyProps) {
    if (variant === "h1") return <H1 className={className}>{children}</H1>;
    if (variant === "h2") return <H2 className={className}>{children}</H2>;
    if (variant === "h3") return <H3 className={className}>{children}</H3>;
    if (variant === "h4") return <H4 className={className}>{children}</H4>;

    if (variant === "body1")
        return (
            <Body1 className={className} variant={weight}>
                {children}
            </Body1>
        );

    if (variant === "body2")
        return (
            <Body2 className={className} variant={weight}>
                {children}
            </Body2>
        );

    if (variant === "body3")
        return (
            <Body3 className={className} variant={weight}>
                {children}
            </Body3>
        );

    if (variant === "body4")
        return (
            <Body4 className={className} variant={weight}>
                {children}
            </Body4>
        );

    return (
        <Body2 variant="regular" className={className}>
            {children}
        </Body2>
    );
}

interface TypographyProps {
    variant?: "h1" | "h2" | "h3" | "h4" | "body1" | "body2" | "body3" | "body4";
    weight?: "regular" | "medium" | "semibold" | "bold";
    className?: string;
    children: React.ReactNode;
}
