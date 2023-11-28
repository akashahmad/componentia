import * as React from "react";

import cx from "classnames";

import { Button } from "../Button/Button";

import { SizeContext } from "./context";

export function ButtonGroupChild({ children, active = false, onClick, ...other }: ButtonChildProps) {
    const { value: size } = React.useContext(SizeContext);

    return (
        <div className={cx("border-r last:border-r-0")}>
            <Button
                size={size}
                onClick={onClick}
                variant={active ? "default" : "outlined"}
                className={cx("border-transparent rounded-none border-r")}
                style={!active ? { color: "#111928" } : { color: "white" }}
                {...other}
            >
                {children}
            </Button>
        </div>
    );
}

interface ButtonChildProps {
    active?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}
