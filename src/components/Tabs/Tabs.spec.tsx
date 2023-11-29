import * as React from "react";

import { render, screen } from "@testing-library/react";
import { Tabs } from "./Tabs";

test("group-button component is rendering properly", () => {
    const TITLE_1 = "TITLE_1";
    const TITLE_2 = "TITLE_2";

    const { container } = render(
        <Tabs>
            <Tabs.Tab title={TITLE_1}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when
            </Tabs.Tab>
            <Tabs.Tab title={TITLE_2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when
            </Tabs.Tab>
        </Tabs>,
    );

    expect(screen.getByText(TITLE_1)).not.toBeNull();
    expect(screen.getByText(TITLE_2)).not.toBeNull();

    expect(container).toMatchSnapshot();
});
