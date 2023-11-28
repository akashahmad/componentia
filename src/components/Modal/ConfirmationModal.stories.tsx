import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { ConfirmationModal } from "./ConfirmationModal";

import { WarningIcon } from "../icons/WarningRedIcon";
import { colors } from "../../utils/colors";

const meta: Meta<typeof ConfirmationModal> = {
    title: "Components/ConfirmationModal",
    component: ConfirmationModal,
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
type Story = StoryObj<typeof ConfirmationModal>;

export const Default: Story = {
    args: {
        open: true,
        title: "Your Message Sent Successfully",
        position: "top",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    },
    argTypes: {
        desc: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
        onClose: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
        icon: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
        actionButtonBgColor: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
        onActionButtonClick: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
    },
    render: props => (
        <div style={{ position: "relative", width: "100%", height: "500px" }}>
            <ConfirmationModal {...props} />
        </div>
    ),
};

export const WithIcon: Story = {
    args: {
        open: true,
        actionButtonBgColor: colors.redDark,
        title: "Deactivate Your Account",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum been.",
        actionButtonText: "Deactivate",
        icon: () => <WarningIcon />,
    },
    argTypes: {},
    render: props => (
        <div style={{ position: "relative", width: "100%", height: "600px" }}>
            <ConfirmationModal {...props} />
        </div>
    ),
};
