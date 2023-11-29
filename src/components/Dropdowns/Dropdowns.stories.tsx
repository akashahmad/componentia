import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdowns";

const options = [
    {
        label: "Option1",
        value: "option1",
    },
    {
        label: "Option2",
        value: "option2",
    },
    {
        label: "Option3",
        value: "option3",
    },
    {
        label: "Option4",
        value: "option4",
    },
    {
        label: "Option5",
        value: "option5",
    },
    {
        label: "Option6",
        value: "option6",
    },
    {
        label: "Option7",
        value: "option7",
    },
];
const onChange = (data: { label: string; value: string }) => {
    console.log(data);
};
const meta: Meta<typeof Dropdown> = {
    title: "Components/Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
    parameters: {
        docs: {
            story: {
                height: "400px",
            },
        },
        backgrounds: {
            default: "white",
            values: [
                {
                    name: "white",
                    value: "#FFFFFF",
                },
                {
                    name: "grey",
                    value: "#E5E5E5",
                },
                {
                    name: "primary",
                    value: "#009AEE",
                },
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        variant: "Medium",
        options: options,
        readOnly: false,
        value: options[2].value,
        onChange: onChange,
        label: "Dropdown",
    },
    argTypes: {
        options: { control: false },
        variant: {
            value: { summary: '"Medium"' },
        },
        value: {
            value: { summary: "undefined" },
        },
        readOnly: {
            control: { type: "boolean" },
            value: { summary: "true" },
        },
        onChange: {
            value: { summary: "undefined" },
        },
    },
    render: props => <Dropdown {...props} />,
};
export const WithoutValue: Story = {
    args: {
        variant: "Medium",
        options: options,
        readOnly: false,
        onChange: onChange,
        label: "Dropdown",
    },

    render: props => <Dropdown {...props} />,
};
