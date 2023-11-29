import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Notification } from "./Notification";

const meta: Meta<typeof Notification> = {
    component: Notification,
    tags: ["autodocs"],
    parameters: {
        docs: {
            story: {
                height: "500px",
            },
        },
        backgrounds: {
            default: "grey",
            values: [
                {
                    name: "white",
                    value: "#FFFFFF",
                },
                {
                    name: "grey",
                    value: "#E5E5E5",
                },
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
    args: {
        title: "Congratulations",
        desc: "your message sent successfully",
        position: "top",
        variant: "success",
    },
    argTypes: {
        desc: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
        onCloseClick: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
    },
    render: props => {
        return <Notification {...props} />;
    },
};
