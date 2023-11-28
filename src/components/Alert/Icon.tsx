import * as React from "react";

import cx from "classnames";

import { WarningIcon } from "../icons/WarningIcon";
import { CheckmarkCircleIcon } from "../icons/CheckmarkCircleIcon";
import { CrossCircleIcon } from "../icons/CrossCircleIcon";
import { InformationAltIcon } from "../icons/InformationAltIcon";

import { kindPropType } from "./Alert";

export function AlertIcon({ kind }: { kind: kindPropType }) {
    const Icon = () => {
        if (kind === "success") return <CheckmarkCircleIcon />;
        else if (kind === "warning") return <WarningIcon />;
        else if (kind === "error") return <CrossCircleIcon />;
        else if (kind === "info") return <InformationAltIcon />;
    };

    return (
        <div
            className={cx(`inline-block rounded-md p-2 mr-[22px]`, {
                ["bg-blue-dark"]: kind === "info",
                ["bg-green"]: kind === "success",
                ["bg-red"]: kind === "error",
                ["bg-yellow"]: kind === "warning",
            })}
        >
            <Icon />
        </div>
    );
}
