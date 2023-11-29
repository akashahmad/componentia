import * as React from "react";

import cx from "classnames";

import { ButtonGroupChild } from "./ButtonChild";

import { SizeContext } from "./context";

export function ButtonGroup({ children, size = "Large" }: ButtonGroupProps) {
    return (
        <SizeContext.Provider value={{ value: size }}>
            <div className={cx("inline-block border rounded-md overflow-hidden")}>
                <div className={cx("flex items-center")}>{children}</div>
            </div>
        </SizeContext.Provider>
    );
}

export type sizePropType = "Large" | "Small" | "Medium";

export interface ButtonGroupProps {
    children: React.ReactNode;
    size?: sizePropType;
}

ButtonGroup.Child = ButtonGroupChild;
