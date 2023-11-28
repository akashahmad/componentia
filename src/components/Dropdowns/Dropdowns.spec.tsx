import * as React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "./Dropdowns";
const options = [
    { label: "Option1", value: "Option1" },
    { label: "Option2", value: "Option2" },
    { label: "Option3", value: "Option3" },
    { label: "Option4", value: "Option4" },
    { label: "Option5", value: "Option5" },
    { label: "Option6", value: "Option6" },
];

test("Input component should rendering properly.", async () => {
    render(<Dropdown variant="Medium" options={options} readOnly={false} value={options[0]?.value} />);
});
test("Dropdown component renders with initial options", () => {
    render(<Dropdown variant="Medium" options={options} readOnly={false} value={options[0]?.value} />);

    options.forEach(_option => {
        const optionElement = screen.getByText(/option/i);
        expect(optionElement).toBeInTheDocument();
    });
});
