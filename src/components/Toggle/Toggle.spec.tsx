import * as React from "react";

import { render } from "@testing-library/react";
import { Toggle } from "./Toggle";

test("Toggle component is rendering properly", async () => {
    const { container } = render(<Toggle />);

    expect(container).toMatchSnapshot();
});
