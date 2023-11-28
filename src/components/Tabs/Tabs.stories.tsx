import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "../Tabs/Tabs";

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    args: {},
    argTypes: {
        children: {
            control: { type: undefined },
            description: "``Tabs.Tab``",
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "undefined" },
            },
        },
        titleRenderer: {
            control: false,
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "DefaultRenderer" },
            },
        },
    },
    render: props => (
        <Tabs {...props}>
            <Tabs.Tab title="Profile">Tab One Content</Tabs.Tab>
            <Tabs.Tab title="Password">Tab Two Content</Tabs.Tab>
            <Tabs.Tab title="Team">Tab Three Content</Tabs.Tab>
            <Tabs.Tab title="Notification">Tab Four Content</Tabs.Tab>
            <Tabs.Tab title="Integrations">Tab Five Content</Tabs.Tab>
            <Tabs.Tab title="Licences">Tab Six Content</Tabs.Tab>
        </Tabs>
    ),
};
