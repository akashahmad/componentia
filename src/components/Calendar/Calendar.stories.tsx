import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Calendar } from "./Calendar";

const meta: Meta<typeof Calendar> = {
    component: Calendar,
    tags: ["autodocs"],
    parameters: {
        docs: {
            story: {
                height: "600px",
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
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
    args: {},
    argTypes: {
        onChange: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
        onDoneClick: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
        onRemoveClick: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
    },
    render: props => {
        return <Calendar {...props} />;
    },
};
