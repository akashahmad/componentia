import * as React from "react";

import cx from "classnames";

import { RendererProps } from "./Tabs";

export const DefaultRenderer = ({ titles, activeIndex, setActiveIndex }: RendererProps) => {
    return (
        <div className="flex items-center bg-white">
            {titles.map((title, index) => {
                const isActive = activeIndex === index;

                return (
                    <p
                        key={title + index}
                        className={cx(
                            "inline-block first:ml-[25px] text-sm leading-6 font-medium cursor-pointer py-[9px] mx-5",
                            {
                                ["text-primary-text"]: !isActive,
                                [`border-b-2 text-primary border-primary`]: isActive,
                                ["border-b-2 border-white"]: !isActive,
                            },
                        )}
                        onClick={() => setActiveIndex(index)}
                    >
                        {title}
                    </p>
                );
            })}
        </div>
    );
};
