import * as React from "react";

import { render } from "@testing-library/react";
import { ButtonGroup } from "./ButtonGroup";

test("group-button component is rendering properly", () => {
    const { container } = render(
        <ButtonGroup>
            <ButtonGroup.Child>About</ButtonGroup.Child>
            <ButtonGroup.Child active>Services</ButtonGroup.Child>
        </ButtonGroup>,
    );

    expect(container).toMatchSnapshot();
});
