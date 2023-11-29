import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "../Alert/Alert";

const meta: Meta<typeof Alert> = {
    component: Alert,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Warning: Story = {
    args: {
        title: "Attention needed",
        kind: "warning",
        children: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when`,
    },
    argTypes: {
        children: {
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "undefined" },
            },
        },
        onCloseClick: {
            type: "function",
            table: {
                type: { summary: "() => void" },
                defaultValue: { summary: "undefined" },
            },
        },
    },
    render: props => <Alert {...props} />,
};
