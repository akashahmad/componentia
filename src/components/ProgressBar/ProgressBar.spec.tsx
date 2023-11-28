import * as React from "react";

import { render } from "@testing-library/react";
import { ProgressBar } from "./ProgressBar";

test("ProgressBar component is rendering properly", async () => {
    const { container } = render(<ProgressBar />);

    expect(container).toMatchSnapshot();
});
