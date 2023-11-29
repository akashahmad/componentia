import * as React from "react";

import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography";

test("Typography component is rendering properly", async () => {
    const INNER_TEXT = "INNER_TEXT_CHANGED";

    render(<Typography>{INNER_TEXT}</Typography>);

    expect(await screen.findByText(INNER_TEXT)).not.toBeNull();
});
