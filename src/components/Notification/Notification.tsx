import * as React from "react";

import cx from "classnames";

import { CloseIcon } from "../icons/CloseIcon";
import { Typography } from "../Typography/Typography";

import { CheckmarkCircleIcon } from "../icons/CheckmarkCircleIcon";
import { InformationAltIcon } from "../icons/InformationAltIcon";
import { WarningIcon } from "../icons/WarningIcon";
import { CrossCircleIcon } from "../icons/CrossCircleIcon";

export function Notification({
    title = "",
    desc,
    variant = "info",
    position = "bottom",
    onCloseClick,
}: NotificationProps) {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        onCloseClick && onCloseClick();

        setOpen(false);
    };

    const Icon =
        variant === "success" ? (
            <div className={cx("bg-green text-white p-2 rounded-full")}>
                <CheckmarkCircleIcon width={24} height={24} />
            </div>
        ) : variant === "info" ? (
            <div className={cx("bg-blue-dark text-white p-2 rounded-full")}>
                <InformationAltIcon width={24} height={24} />
            </div>
        ) : variant === "warning" ? (
            <div className={cx("bg-yellow text-white p-2 rounded-full")}>
                <WarningIcon width={24} height={24} />
            </div>
        ) : (
            variant === "danger" && (
                <div className={cx("bg-red text-white p-2 rounded-full")}>
                    <CrossCircleIcon width={24} height={24} />
                </div>
            )
        );

    return (
        <div
            className={cx("bg-white shadow-2 py-[18px] px-[30px] rounded-lg w-[422px] absolute", {
                ["top-[30px] right-5"]: position === "top",
                ["bottom-[30px] right-5"]: position === "bottom",
                ["top-1/2 right-5 translate-y-[-50%]"]: position === "center",
                ["flex justify-between items-center"]: open,
                ["hidden"]: !open,
            })}
        >
            <div className={cx("flex items-center")}>
                {Icon}
                <div className={cx("ml-5")}>
                    <Typography variant="body1" weight="semibold">
                        {title}
                    </Typography>
                    <div className="text-primary-text">
                        <Typography variant="body3">{desc}</Typography>
                    </div>
                </div>
            </div>
            <div onClick={handleClose} className={cx("cursor-pointer")}>
                <CloseIcon />
            </div>
        </div>
    );
}

interface NotificationProps {
    title: string;
    desc?: string;
    variant?: "success" | "danger" | "info" | "warning";
    position?: "top" | "center" | "bottom";
    onCloseClick?: () => void;
}
