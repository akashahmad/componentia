import * as React from "react";

import cx from "classnames";

import { AvatarOnline } from "../icons/AvatarOnline";

export function Avatar({ photoURL, size, isOnline, label, customImageRendrer: ImageRendrer, badgeSize }: AvatarProps) {
    const getFirstLetters = (input: string) => {
        const words = input.split(" ");
        const firstLetters = words.map(word => word.charAt(0));
        return firstLetters.join("");
    };

    return (
        <div>
            <div className="relative inline-block">
                {ImageRendrer && <ImageRendrer size={size!} photoURL={photoURL!} />}
                {photoURL && !ImageRendrer ? (
                    <img
                        className={cx("rounded max-auto", {
                            ["w-[30px] h-[30px]"]: size === "Extra Small",
                            ["w-[40px] h-[40px]"]: size === "Small",
                            ["w-[42px] h-[42px]"]: size === "Medium",
                            ["w-[52px] h-[52px]"]: size === "Large",
                            ["w-[80px] h-[80px]"]: size === "Extra Large",
                        })}
                        src={photoURL}
                        alt="avatar"
                    />
                ) : (
                    label && (
                        <div
                            className={cx("flex justify-center align-middle items-center bg-primary rounded", {
                                "w-6 h-6": size === "Extra Small",
                                "w-[38px] h-[38px]": size === "Small",
                                "w-[42px] h-[42px]": size === "Medium",
                                "w-[52px] h-[52px]": size === "Large",
                                "w-20 h-20": size === "Extra Large",
                            })}
                        >
                            <span
                                className={cx("text-white font-semibold", {
                                    "text-xs": size === "Extra Small",
                                    "text-[14px] leading-[22px]": size === "Small",
                                    "text-base": size === "Medium",
                                    "text-xl": size === "Large",
                                    "text-[28px] leading-[40px]": size === "Extra Large",
                                })}
                            >
                                {label && getFirstLetters(label)}{" "}
                            </span>
                        </div>
                    )
                )}
                {isOnline && (
                    <div
                        style={badgeSize ? badgeSize : {}}
                        className={cx("absolute", {
                            "right-[-4px] top-[-4px] w-[8px] h-[8px]": size === "Extra Small" && !badgeSize,
                            "right-[-7px] top-[-7px] w-[14px] h-[14px]": size === "Small" && !badgeSize,
                            "right-[-8px] top-[-8px] w-[16px] h-[16px]": size === "Medium" && !badgeSize,
                            "right-[-9px] top-[-9px] w-[18px] h-[18px]": size === "Large" && !badgeSize,
                            "right-[-11px] top-[-11px] w-[22px] h-[22px]": size === "Extra Large" && !badgeSize,
                        })}
                    >
                        <AvatarOnline />
                    </div>
                )}
            </div>
        </div>
    );
}

type sizeType = "Extra Small" | "Small" | "Medium" | "Large" | "Extra Large";
interface AvatarProps {
    size?: sizeType;
    label?: string;
    photoURL?: string;
    isOnline: boolean;
    customImageRendrer?: React.FC<{ photoURL: string; size: sizeType }>;
    customBadgeRendrer?: React.FC<{ badgeIcon: typeof AvatarOnline }>;
    badgeSize?: { width: number; height: number };
}
