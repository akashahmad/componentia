import * as React from "react";

import { render, screen } from "@testing-library/react";
import { Alert } from "./Alert";

test("Alert component is rendering properly", () => {
    const ALERT_TITLE = "TITLE";

    const { container } = render(
        <Alert title={ALERT_TITLE}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when
        </Alert>,
    );

    expect(screen.getByText(ALERT_TITLE)).not.toBeNull();

    expect(container).toMatchSnapshot();
});
