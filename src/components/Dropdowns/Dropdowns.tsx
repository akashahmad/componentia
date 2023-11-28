import * as React from "react";

import cx from "classnames";

import { Icondropdownbottom, IcondropdownUp } from "../icons/InputIcons";

export function Dropdown({
    options = [],
    variant = "Small",
    readOnly,
    value,
    label,
    className,
    onChange,
    required,
}: DropdownProps): React.ReactElement {
    const [showdropdown, setshowdropdown] = React.useState(false);
    const [dropdownvalue, setdropdownvalue] = React.useState(
        value ? options?.filter(data => data?.value === value)[0].label : options[0]?.label,
    );

    return (
        <div className="relative w-full">
            <span
                className={cx(
                    " flex gap-1 mb-[5px]",
                    {
                        "text-lg font-medium ": variant === "Large",
                        "text-base font-medium leading-6": variant === "Medium",
                        "text-sm font-medium leading-6 ": variant === "Small",
                        "text-gray-500 ": readOnly,
                        "text-dark": !readOnly,
                    },
                    className,
                )}
            >
                <p>{label}</p> {required && <span>*</span>}
            </span>
            <div
                className={cx(
                    "flex justify-between text-base border border-stroke  border-input-border-normal-500 focus:ring-primary focus:outline-primary focus:border-primary rounded-md  px-3  w-full",
                    {
                        "py-2 px-5": variant === "Large",
                        "py-[5.4px] px-5": variant === "Medium",
                        "py-[5px] px-5": variant === "Small",
                        "bg-dark-8": readOnly,
                        "bg-white": !readOnly,
                    },
                )}
                onClick={() => !readOnly && setshowdropdown(!showdropdown)}
            >
                <div
                    className={cx("text-primary-text", {
                        "text-base font-normal": variant === "Medium",
                        "text-sm font-medium": variant === "Small",
                    })}
                >
                    {dropdownvalue}
                </div>
                <div
                    className={cx("cursor-pointer", {
                        "pt-[0.6rem]": variant === "Large",
                        "pt-2": variant === "Medium",
                        "pt-[0.4rem]": variant === "Small",
                    })}
                >
                    {!showdropdown ? <Icondropdownbottom /> : <IcondropdownUp />}
                </div>
            </div>
            {showdropdown && (
                <div
                    className={cx(
                        "z-10 absolute bg-white w-full flex flex-col gap-2 justify-between  py-3 border rounded-lg h-auto max-h-[20rem] overflow-auto mt-3 shadow-dropdown",
                        {
                            "top-13": variant === "Medium",
                            "top-15": variant === "Large",
                            "top-[3.5rem]": variant === "Small",
                        },
                    )}
                >
                    {options?.map((option, index) => (
                        <p
                            key={index}
                            className={cx(" cursor-pointer hover:bg-primary px-[16px] hover:text-white", {
                                "text-base font-normal py-[7px]": variant === "Medium" || variant === "Large",
                                "text-sm font-medium py-[3px]": variant === "Small",
                                "bg-primary text-white": dropdownvalue === option?.label,
                                "text-primary-text": dropdownvalue !== option?.label,
                            })}
                            onClick={() => {
                                setdropdownvalue(option?.label);
                                setshowdropdown(false);
                                onChange && onChange(option);
                            }}
                        >
                            {option?.label}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}

interface DropdownProps {
    options: { value: string; label: string }[];
    variant: "Medium" | "Small" | "Large";
    readOnly?: boolean;
    value?: string;
    onChange?: (_data: { label: string; value: string }) => void;
    label?: string;
    className?: string;
    required?: boolean;
}
