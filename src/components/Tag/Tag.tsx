import * as React from "react";

import cx from "classnames";

import { Typography } from "../Typography/Typography";

export function Tag({ children, disabled = false }: TagProps) {
    return (
        <button
            disabled={disabled}
            className={cx(
                "py-[5px] px-[14px] rounded-md text-black inline-block cursor-pointer box-border",
                "focus:border-stroke focus:border-2 focus:bg-grey-9 focus:text-black",
                {
                    ["bg-grey-3 text-primary-text cursor-not-allowed"]: disabled,
                    ["bg-grey-9 hover:bg-primary hover:text-white"]: !disabled,
                },
            )}
        >
            <Typography variant="body2">{children}</Typography>
        </button>
    );
}

interface TagProps {
    children?: React.ReactNode;
    disabled?: boolean;
}
