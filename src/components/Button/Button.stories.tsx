import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { colors } from "../../utils/colors";

import { Button } from "./Button";
import { PlusIcon } from "../icons/PlusIcon";

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        variant: "default",
        color: "primary",
        disabled: false,
        size: "Large",
        fullWidth: false,
        children: "Button",
    },
    argTypes: {
        color: {
            options: ["primary", "secondary", "tertiary"],
            control: { type: "radio" },
        },
        disabled: {
            control: { type: "boolean" },
        },
        type: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
        icon: {
            table: {
                type: { summary: "React.FC<{}>" },
                defaultValue: { summary: "undefined" },
            },
        },
        children: {
            control: { type: "text" },
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "undefined" },
            },
        },
        onClick: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
    },
    render: props => <Button {...props} />,
};

export const Outlined: Story = {
    args: {
        variant: "outlined",
        color: "primary",
        disabled: false,
        size: "Large",
        children: "Button",
    },
    argTypes: {},
    render: props => <Button {...props} />,
};

export const IconDefault: Story = {
    args: {
        variant: "default",
        color: "primary",
        disabled: false,
        size: "Large",
    },
    argTypes: {},
    render: props => (
        <Button
            icon={<PlusIcon fill={props.variant === "outlined" ? colors[props.color!] : colors.white} />}
            {...props}
        >
            Button
        </Button>
    ),
};

export const IconOutlined: Story = {
    args: {
        variant: "outlined",
        color: "primary",
        disabled: false,
        size: "Large",
    },
    argTypes: {},
    render: props => (
        <Button
            icon={<PlusIcon fill={props.variant === "outlined" ? colors[props.color || "primary"] : "white"} />}
            {...props}
        >
            Button
        </Button>
    ),
};
