import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
    component: ProgressBar,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
    args: {},
    argTypes: {
        color: {
            table: {
                type: { summary: "hex code, e.g #FFFFFF" },
                defaultValue: { summary: '"#25CBA1" ' },
            },
        },
    },
    render: props => <ProgressBar {...props} />,
};
