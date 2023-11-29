import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Breadcrumbs, BreadcrumbsItem } from "../Breadcrumbs/Breadcrumbs";

import { HomeIcon } from "../icons/HomeIcon";

const meta: Meta<typeof Breadcrumbs> = {
    component: Breadcrumbs,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const items: BreadcrumbsItem[] = [
    {
        path: "#",
        text: "Home",
    },
    {
        path: "##",
        text: "Projects",
    },
    {
        path: "###",
        text: "Marketing",
    },
];

const itemsWithHomeIcon: BreadcrumbsItem[] = [
    {
        path: "#",
        text: "Home",
        icon: props => <HomeIcon width={14} {...props} />,
    },
    {
        path: "##",
        text: "Projects",
    },
    {
        path: "###",
        text: "Marketing",
    },
];

const BreadcrumbsRenderer = ({ path, text }: BreadcrumbsItem) => {
    return <a href={path}>{text}</a>;
};

export const Default: Story = {
    args: {
        currentItemRenderer: BreadcrumbsRenderer,
        items,
    },
    argTypes: {
        currentItemRenderer: {
            table: {
                type: { summary: "React.FC<BreadcrumbsItem>" },
                defaultValue: { summary: "undefined" },
            },
            control: { type: false },
        },
        items: {
            table: {
                type: { summary: "BreadcrumbsItem[]" },
                defaultValue: { summary: "undefined" },
            },
            control: { type: false },
        },
        className: {
            table: {
                type: { summary: "string" },
                defaultValue: { summary: '""' },
            },
            control: { type: "text" },
        },
        linksTextColor: {
            table: {
                type: { summary: 'hex code, e.g "#FFFFFF"' },
            },
        },
        currentLinkTextColor: {
            table: {
                type: { summary: 'hex code, e.g "#A91320"' },
            },
        },
    },
    render: props => <Breadcrumbs {...props} />,
};

export const WithHomeIcon: Story = {
    args: {
        currentItemRenderer: BreadcrumbsRenderer,
        items: itemsWithHomeIcon,
    },
    argTypes: {},
    render: props => <Breadcrumbs {...props} />,
};

export const WithPrimaryBackground: Story = {
    args: {
        currentItemRenderer: BreadcrumbsRenderer,
        items: itemsWithHomeIcon,
        className: "bg-primary",
        linksTextColor: "white",
        currentLinkTextColor: "white",
    },
    argTypes: {},
    render: props => <Breadcrumbs {...props} />,
};

export const WithTertiaryBackground: Story = {
    args: {
        currentItemRenderer: BreadcrumbsRenderer,
        items: itemsWithHomeIcon,
        className: "bg-black",
        linksTextColor: "white",
        currentLinkTextColor: "white",
    },
    argTypes: {},
    render: props => <Breadcrumbs {...props} />,
};
