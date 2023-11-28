import * as React from "react";

import { render } from "@testing-library/react";
import { ConfirmationModal } from "./ConfirmationModal";

test("ConfirmationModal component is rendering properly", async () => {
    const TEXT = "TEXT";

    const { container } = render(<ConfirmationModal title={TEXT} />);

    expect(container).toMatchSnapshot();
});
