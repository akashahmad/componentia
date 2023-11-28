import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
    title: "Components/Modal",
    component: Modal,
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
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        open: true,
        children: "Modal Content Here",
        position: "center",
    },
    argTypes: {
        children: {
            table: {
                type: { summary: "React.ReactNode" },
                defaultValue: { summary: "undefined" },
            },
        },
        onClose: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
    },
    render: props => (
        <div style={{ position: "relative", width: "100%", height: "500px" }}>
            <Modal {...props} />
        </div>
    ),
};
