import * as React from "react";
import cx from "classnames";

export function TextArea({
    variant = "Default",
    size = "Small",
    label,
    helperText,
    palceholder,
    value,
    name,
    required,
    readOnly,
    className,
    rows = 4,
    cols,
    onChange,
}: InputProps) {
    return (
        <div className="flex flex-col gap-[5px]">
            <span
                className={cx(
                    "text-dark flex gap-1",
                    {
                        "text-lg font-medium ": size === "Large",
                        "text-base font-medium leading-6": size === "Medium",
                        "text-sm font-medium leading-6 ": size === "Small",
                        "text-gray-500": readOnly,
                    },
                    className,
                )}
            >
                <p>{label}</p> {required && <span>*</span>}
            </span>
            <div className="">
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={cx(
                        "text-primary-text py-[9px] px-[15px] border placeholder-input-placeholder text-base font-normal rounded-md focus:ring-primary focus:outline-primary focus:border-primary block w-full",
                        {
                            "border-stroke": variant === "Default",
                            "border-green": variant === "Success",
                            "border-red": variant === "Error",

                            "bg-grey-3": readOnly,
                            "text-gray-500": readOnly,
                            "bg-grey-3 focus:ring-0 focus:outline-0 focus:border-none": readOnly,
                            "focus:ring-primary focus:outline-primary focus:border-primary": !readOnly,
                        },
                    )}
                    placeholder={palceholder}
                    readOnly={readOnly}
                    required={required}
                    rows={rows}
                    cols={cols}
                />
            </div>
            <p
                className={cx(" text-xs font-normal leading-5", {
                    "text-[#4B5563]": variant === "Default",
                    "text-green": variant === "Success",
                    "text-red": variant === "Error",
                    "text-gray-500": readOnly,
                })}
            >
                {helperText}
            </p>
        </div>
    );
}

interface InputProps {
    variant?: "Success" | "Error" | "Default";
    size?: "Small" | "Medium" | "Large";
    label?: string;
    helperText?: string;
    value?: string | ReadonlyArray<string> | number | undefined;
    onChange?: (_e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    palceholder?: string;
    name?: string;
    required?: boolean;
    readOnly?: boolean;
    className?: string;
    rows?: number;
    cols?: number;
}
