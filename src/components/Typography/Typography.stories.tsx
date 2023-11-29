import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../Typography/Typography";

const meta: Meta<typeof Typography> = {
    component: Typography,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
    args: {
        variant: "h1",
    },
    argTypes: {},
    render: props => <Typography {...props}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>,
};
