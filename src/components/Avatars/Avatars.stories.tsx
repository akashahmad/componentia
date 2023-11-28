import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatars";

const meta: Meta<typeof Avatar> = {
    title: "Components/Avatars",
    component: Avatar,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        label: "Form Field",
        isOnline: true,
        size: "Small",
        photoURL:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    argTypes: {
        label: {
            defaultValue: { summary: "undefined" },
        },
        size: {
            defaultValue: { summary: '"Small"' },
        },
        photoURL: {
            defaultValue: {
                summary: '""',
            },
        },
        isOnline: {
            control: { type: "boolean" },
            defaultValue: { summary: "true" },
        },
    },
    render: props => <Avatar {...props} />,
};
export const WithoutImage: Story = {
    args: {
        label: "Test Field",
        isOnline: true,
        size: "Large",
    },
    render: props => <Avatar {...props} />,
};
export const WithoutIcon: Story = {
    args: {
        label: "Test Field",
        isOnline: false,
        size: "Large",
    },
    render: props => <Avatar {...props} />,
};
