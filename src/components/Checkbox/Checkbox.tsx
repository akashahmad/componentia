import * as React from "react";

import cx from "classnames";

import { Typography } from "../Typography/Typography";
import { UncheckedIcon } from "../icons/UncheckedIcon";
import { RectangularChecked } from "../icons/RectangularChecked";
import { CheckmarkedChecked } from "../icons/CheckmarkChecked";

export function Checkbox({ label, checked = false, boxType = "default", value, onChange, ...other }: CheckboxProps) {
    const [isChecked, setIsChecked] = React.useState(false);

    React.useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const handleChecked = () => {
        setIsChecked(prev => !prev);

        onChange(value);
    };

    const checkedIcon = boxType === "default" ? <RectangularChecked /> : <CheckmarkedChecked />;

    return (
        <div className={cx("flex items-center select-none cursor-pointer w-max")} onClick={handleChecked}>
            <span className={cx("inline-block mr-[10px] cursor-pointer")}>
                {isChecked ? checkedIcon : <UncheckedIcon />}
            </span>
            {label && <Typography variant="body2">{label}</Typography>}
            <input
                checked={isChecked}
                onChange={e => onChange(e.target.value)}
                value={value}
                type="checkbox"
                className={cx("appearance-none opacity-0")}
                {...other}
            />
        </div>
    );
}

type CheckboxProps = CheckboxCustomProps;
interface CheckboxCustomProps {
    label?: React.ReactNode;
    checked?: boolean;
    value: string;
    onChange: (_value: string) => void;
    boxType?: "default" | "checkmark";
}
