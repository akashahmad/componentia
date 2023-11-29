import * as React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { colors } from "../../utils/colors";

const Color = () => {
    return (
        <div className="flex flex-wrap mb-4 justify-center">
            {Object.keys(colors).map(key => (
                <div
                    key={key}
                    className="flex flex-col items-center w-44 h-48 mb-10 rounded-md mr-3 last:mr-0 shadow-md overflow-hidden"
                >
                    <div style={{ width: "100%", height: "100%", background: (colors as any)[key] }}></div>
                    <div className="p-2 py-4 text-lg font-medium">{key}</div>
                </div>
            ))}
        </div>
    );
};

const meta: Meta<typeof Color> = {
    component: Color,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Color>;

export const All: Story = {
    args: {},
    argTypes: {},
};
