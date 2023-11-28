import * as React from "react";

import { render } from "@testing-library/react";
import { Breadcrumbs } from "./Breadcrumbs";

test("Breadcrumbs component is rendering properly", () => {
    const { container } = render(<Breadcrumbs items={[]} currentItemRenderer={() => <p></p>} />);

    expect(container).toMatchSnapshot();
});
