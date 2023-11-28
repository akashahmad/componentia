import * as React from "react";

import cx from "classnames";

import { ChevronRightIcon } from "../icons/ChevronRightIcon";
import { colors } from "../../utils/colors";

export function Breadcrumbs({
    items,
    currentItemRenderer: Renderer,
    linksTextColor = colors.primaryText,
    currentLinkTextColor = colors.primary,
    className = "",
    ...other
}: BreadcrumbsProps) {
    const _getCustomCurrentLinkColor = (index: number) => {
        return items.length !== index + 1
            ? linksTextColor
            : currentLinkTextColor && items.length !== index
            ? currentLinkTextColor
            : colors.primary;
    };

    return (
        <div className={cx("mr flex items-center leading-6 font-medium text-base", className)} {...other}>
            {items.map(({ path, icon: Icon, text }, index) => (
                <div
                    key={path + index}
                    style={{ color: _getCustomCurrentLinkColor(index) }}
                    className={cx("first:pl-[30px] flex items-center mr-3 py-[5px]")}
                >
                    {Icon && (
                        <span className="mr-2">
                            <Icon fill={linksTextColor} />
                        </span>
                    )}
                    <div className={cx("mr-3")}>
                        <Renderer path={path} text={text} icon={Icon} />
                    </div>
                    {items.length !== index + 1 && <ChevronRightIcon fill={linksTextColor} />}
                </div>
            ))}
        </div>
    );
}

export type BreadcrumbsItem = {
    path: string;
    text: string;
    icon?: React.FC<{ fill?: string }>;
};
interface BreadcrumbsProps {
    items: BreadcrumbsItem[];
    currentItemRenderer: React.FC<BreadcrumbsItem>;
    className?: string;
    linksTextColor?: string;
    currentLinkTextColor?: string;
}
