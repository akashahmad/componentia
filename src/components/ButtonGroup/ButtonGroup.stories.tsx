import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup";

const meta: Meta<typeof Button> = {
    component: ButtonGroup,
    tags: ["autodocs"],
};

export default meta;
type GroupStory = StoryObj<typeof Button>;

export const Group: GroupStory = {
    args: {
        size: "Large",
    },
    argTypes: {},
    render: props => {
        const [active, setActive] = React.useState(0);

        return (
            <ButtonGroup {...props}>
                <ButtonGroup.Child onClick={() => setActive(0)} active={active === 0}>
                    About
                </ButtonGroup.Child>
                <ButtonGroup.Child onClick={() => setActive(1)} active={active === 1}>
                    Profile
                </ButtonGroup.Child>
                <ButtonGroup.Child onClick={() => setActive(2)} active={active === 2}>
                    Services
                </ButtonGroup.Child>
            </ButtonGroup>
        );
    },
};
