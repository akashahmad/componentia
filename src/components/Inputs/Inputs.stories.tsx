import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { InfoSuccess, Iconeye, InfoError, InfoNormal } from "../icons/InputIcons";
import { FormInput } from "./Inputs";
const meta: Meta<typeof FormInput> = {
    title: "Components/Forms Inputs",
    component: FormInput,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormInput>;
export const Default: Story = {
    args: {
        label: "Form Field",
        variant: "Default",
        helperText: "This is Helper Text",
        palceholder: "A Form Field",
        type: "text",
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
        type: {
            defaultValue: { summary: '"text"' },
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
        icon: {
            table: {
                type: { summary: "React.FC<{}>" },
                defaultValue: { summary: "undefined" },
            },
        },
    },
    render: props => <FormInput {...props} />,
};

export const InputWithIcon: Story = {
    args: {
        label: "Form Field 01",
        variant: "Default",
        helperText: "This is Helper Text",
        palceholder: "Type Your Password",
        size: "Small",
        type: "password",
        icon: Iconeye,
        name: "pass",
    },
    render: props => <FormInput {...props} />,
};
export const SuccessInputWithIcon: Story = {
    render: () => (
        <FormInput
            label="Form Field 01"
            variant="Success"
            helperText="This is Helper Text"
            palceholder="Type Your Text"
            size="Medium"
            type="text"
            icon={InfoSuccess}
            name="success"
        />
    ),
};
export const ErrorInputWithIcon: Story = {
    render: () => (
        <FormInput
            label="Form Field 2"
            variant="Error"
            helperText="This is Helper Text"
            palceholder="Type Your Text"
            size="Medium"
            type="text"
            icon={InfoError}
            name="error"
        />
    ),
};
export const NormalInputWithIcon: Story = {
    render: () => (
        <FormInput
            label="Form Field 3"
            variant="Default"
            helperText="This is Helper Text"
            palceholder="Type Your Text"
            size="Medium"
            type="text"
            icon={InfoNormal}
            name="Default"
        />
    ),
};

export const Required: Story = {
    render: () => (
        <FormInput
            label="Form Field 3"
            variant="Default"
            helperText="This is Helper Text"
            palceholder="Type Your Text"
            size="Medium"
            type="text"
            required={true}
            name="Default"
        />
    ),
};

export const ReadOnly: Story = {
    render: () => (
        <FormInput
            label="Form Field 3"
            variant="Default"
            helperText="This is Helper Text"
            palceholder="Type Your Text"
            size="Medium"
            type="text"
            readOnly={true}
            name="Default"
        />
    ),
};
