import * as React from "react";

import { render } from "@testing-library/react";
import { Tag } from "./Tag";

test("Tag component is rendering properly", async () => {
    const { container } = render(<Tag />);

    expect(container).toMatchSnapshot();
});
