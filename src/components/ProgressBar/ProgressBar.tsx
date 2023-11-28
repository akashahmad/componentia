import * as React from "react";

import cx from "classnames";

export function ProgressBar({ percentage = 50, color }: ProgressBarProps) {
    return (
        <div className={cx("bg-grey-10 w-full h-[7px] rounded-full overflow-hidden inline-block")}>
            <span
                style={{ width: `${percentage}%`, ...(color ? { background: color } : {}) }}
                className={cx("inline-block h-[7px] absolute rounded-full", {
                    ["bg-teal-light-4"]: !color,
                })}
            />
        </div>
    );
}

interface ProgressBarProps {
    percentage?: number;
    color?: string;
}
