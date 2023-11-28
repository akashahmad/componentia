import * as React from "react";

import cx from "classnames";

import { colors } from "../../utils/colors";

import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Button";

import { Modal } from "./Modal";

export function ConfirmationModal({
    open = false,
    onClose,
    position = "top",
    title = "",
    desc,
    actionButtonText = "View Details",
    onActionButtonClick,
    icon: Icon,
    iconBgColor = colors.redLight5,
    actionButtonBgColor,
}: ConfirmationModalProps) {
    const [_open, set_Open] = React.useState(open || false);

    React.useEffect(() => {
        set_Open(open);
    }, [open]);

    const handleCloseClick = () => {
        set_Open(prev => !prev);
        onClose && onClose();
    };

    return (
        <Modal
            open={_open}
            onClose={onClose}
            showCloseIcon={false}
            position={position}
            className={cx("flex flex-col justify-center items-center")}
        >
            {Icon && (
                <div style={{ background: iconBgColor }} className={cx("p-[18px] rounded-full mb-[22px]")}>
                    {<Icon />}
                </div>
            )}
            <Typography variant="h3">{title}</Typography>
            {!Icon && <span className={cx("inline-block w-[90px] h-[3px] bg-primary rounded-xl mt-[18px]")} />}
            {desc && (
                <div className="mt-6 text-center text-primary-text">
                    <Typography variant="body2">{desc}</Typography>
                </div>
            )}
            <div className={cx("w-full flex items-center justify-between mt-[35px]")}>
                <Button
                    className="mr-[9px]"
                    fullWidth
                    variant="outlined"
                    color="tertiary"
                    onClick={handleCloseClick}
                    style={{ borderColor: colors.stroke }}
                >
                    Cancel
                </Button>
                <Button
                    className="ml-[9px]"
                    fullWidth
                    color="primary"
                    onClick={onActionButtonClick}
                    style={{
                        borderColor: colors.stroke,
                        ...(actionButtonBgColor ? { background: actionButtonBgColor } : {}),
                    }}
                >
                    {actionButtonText}
                </Button>
            </div>
        </Modal>
    );
}

interface ConfirmationModalProps {
    open?: boolean;
    onClose?: () => void;
    position?: "top" | "center" | "bottom";
    title: string;
    desc?: string;
    icon?: React.FC;
    actionButtonText?: string;
    actionButtonBgColor?: string;
    iconBgColor?: string;
    onActionButtonClick?: () => void;
}
