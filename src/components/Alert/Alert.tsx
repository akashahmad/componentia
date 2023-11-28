import * as React from "react";

import cx from "classnames";

import { AlertIcon } from "./Icon";
import { CloseIcon } from "../icons/CloseIcon";

export function Alert({ children, kind = "info", title = "Title Text", onCloseClick }: AlertProps) {
    return (
        <div
            className={cx("p-[35px] rounded-lg flex items-start border-l-[6px]", {
                ["border-blue-dark bg-blue-light-6"]: kind === "info",
                ["border-yellow bg-yellow-light-4"]: kind === "warning",
                ["border-green bg-green-light-6"]: kind === "success",
                ["border-red bg-red-light-6"]: kind === "error",
            })}
        >
            <AlertIcon kind={kind} />
            <div className={cx("w-full")}>
                <div className={cx("relative")}>
                    <h4
                        className={cx("leading-[26px] font-semibold text-lg mb-[14px]", {
                            ["text-info-text"]: kind === "info",
                            ["text-warning-text"]: kind === "warning",
                            ["text-success-text"]: kind === "success",
                            ["text-danger-text"]: kind === "error",
                        })}
                    >
                        {title}
                    </h4>
                    <div onClick={onCloseClick} className={cx("absolute top-0 right-0 w-5 cursor-pointer")}>
                        <CloseIcon />
                    </div>
                </div>
                <p
                    className={cx("text-base leading-6 font-normal", {
                        ["text-primary-text"]: kind === "info" || kind === "success",
                        ["text-warning-text-light"]: kind === "warning",
                        ["text-red-light"]: kind === "error",
                    })}
                >
                    {children}
                </p>
            </div>
        </div>
    );
}

export type kindPropType = "error" | "warning" | "info" | "success";
interface AlertProps {
    kind?: kindPropType;
    title: string;
    children: React.ReactNode;
    onCloseClick?: () => void;
}
