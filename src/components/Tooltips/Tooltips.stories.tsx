import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltips";

const meta: Meta<typeof Tooltip> = {
    title: "Components/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        direction: "left",
        description: "Tooltip on left",
        theme: "dark",
        className: "flex justify-center",
    },
    argTypes: {
        direction: {
            defaultValue: { summary: '"left"' },
        },
        description: {
            defaultValue: { summary: "undefined" },
        },
        theme: {
            defaultValue: { summary: "dark" },
        },
        className: {
            defaultValue: { summary: " " },
        },
        title: {
            defaultValue: { summary: "undefined" },
        },
    },
    render: props => (
        <Tooltip {...props}>
            {" "}
            <div className="bg-primary text-white h-[100px] w-5">
                <h2>Tooltip on left </h2>
            </div>
        </Tooltip>
    ),
};
export const Right: Story = {
    args: {
        direction: "right",
        description: "Tooltip on right",
        theme: "dark",
        className: "flex justify-center",
    },
    render: props => (
        <Tooltip {...props}>
            {" "}
            <h2>Tooltip on right </h2>
        </Tooltip>
    ),
};
export const TopWithoutTitle: Story = {
    args: {
        direction: "top",
        description: "The users wants to find a specific page or site.",
        theme: "dark",
        className: "flex justify-center mt-[5rem] ",
    },
    render: props => (
        <Tooltip {...props}>
            {" "}
            <h2>Tooltip on top </h2>
        </Tooltip>
    ),
};
export const TopWithTitle: Story = {
    args: {
        direction: "top",
        title: "Navigational",
        description: "The users wants to find a specific page or site.",
        theme: "light",
        className: "flex justify-center mt-[5rem] ",
    },
    render: props => (
        <Tooltip {...props}>
            {" "}
            <h2>Tooltip on top </h2>
        </Tooltip>
    ),
};
export const Bottom: Story = {
    args: {
        direction: "bottom",
        description: "Tooltip on bottom",
        theme: "dark",
        className: "flex justify-center ",
    },
    render: props => (
        <Tooltip {...props}>
            {" "}
            <h2>Tooltip </h2>
        </Tooltip>
    ),
};
