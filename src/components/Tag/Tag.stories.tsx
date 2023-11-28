import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
    component: Tag,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
    args: {
        disabled: false,
    },
    argTypes: {},
    render: props => <Tag {...props}>Tag</Tag>,
};
