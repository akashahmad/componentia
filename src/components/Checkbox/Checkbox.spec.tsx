import * as React from "react";

import { render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Checkbox component is rendering properly", async () => {
    const TEXT = "TEXT";

    const { container } = render(<Checkbox value={TEXT} onChange={() => {}} checked label={TEXT} />);

    expect(await screen.getByText(TEXT)).not.toBeNull();
    expect(container).toMatchSnapshot();
});
