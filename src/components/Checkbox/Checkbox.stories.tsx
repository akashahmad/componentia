import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        label: "Checkbox Text",
    },
    argTypes: {
        label: {
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "undefined" },
            },
        },
        value: {
            table: {
                defaultValue: { summary: '"" ' },
            },
        },
        onChange: {
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
    },
    render: props => {
        return <Checkbox {...props} />;
    },
};

export const ExampleUsage: Story = {
    args: {
        label: "Checkbox Text",
    },
    argTypes: {},
    render: () => {
        const [value, setValue] = React.useState("xyz");

        return (
            <div>
                <Checkbox
                    value={"abc"}
                    onChange={value => setValue(value)}
                    checked={value === "abc"}
                    label="Checkbox Type (value: abc)"
                />
                <Checkbox
                    value={"yz"}
                    onChange={value => setValue(value)}
                    checked={value === "xyz"}
                    label="Checkmark Type (value: xyz)"
                    boxType="checkmark"
                />
                Current Value: {value}
            </div>
        );
    },
};
