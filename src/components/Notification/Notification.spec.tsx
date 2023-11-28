import * as React from "react";

import { render, screen } from "@testing-library/react";
import { Notification } from "./Notification";

test("Notification component is rendering properly", () => {
    const ALERT_TITLE = "TITLE";

    const { container } = render(
        <Notification
            title={ALERT_TITLE}
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when"
        />,
    );

    expect(screen.getByText(ALERT_TITLE)).not.toBeNull();

    expect(container).toMatchSnapshot();
});
