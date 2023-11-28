import * as React from "react";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tooltip } from "./Tooltips";

test("Tooltip component should rendering properly.", async () => {
    const tooltipchild = <h2>Tootip Child</h2>;
    render(
        <Tooltip title="We use cookies" description="The users wants to find a specific page or site." direction="top">
            {tooltipchild}
        </Tooltip>,
    );
});
