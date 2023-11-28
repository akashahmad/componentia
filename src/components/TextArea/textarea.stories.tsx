import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./textarea";

const meta: Meta<typeof TextArea> = {
    title: "Components/TextArea",
    component: TextArea,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextArea>;
export const Default: Story = {
    args: {
        label: "TextArea",
        variant: "Default",
        helperText: "This is Helper Text",
        palceholder: "A Form Field",
        size: "Small",
        name: "defaultform",
        value: "",
        onChange: value => console.log(value), // Add this line to handle the change event
    },
    argTypes: {
        label: {
            defaultValue: { summary: "undefined" },
        },
        size: {
            defaultValue: { summary: '"Small"' },
        },
        variant: {
            defaultValue: { summary: '"Default"' },
        },
        helperText: {
            defaultValue: { summary: "" },
        },
        palceholder: {
            defaultValue: { summary: "" },
        },

        name: {
            defaultValue: { summary: "" },
        },
        value: {
            defaultValue: { summary: "undefined" },
        },
        onChange: {
            table: {
                type: { summary: "(event) => void" },
                defaultValue: { summary: "undefined" },
            },
        },
    },
    render: props => <TextArea {...props} />,
};

export const Required: Story = {
    render: () => (
        <TextArea
            label="TextArea"
            variant="Default"
            helperText="This is Helper Text"
            palceholder="Type Your Text"
            size="Medium"
            required={true}
            name="Default"
        />
    ),
};

export const ReadOnly: Story = {
    render: () => (
        <TextArea
            label="TextArea"
            variant="Default"
            helperText="This is Helper Text"
            palceholder="Type Your Text"
            size="Medium"
            readOnly={true}
            name="Default"
        />
    ),
};
