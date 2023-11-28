import * as React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextArea } from "./textarea";

test("Input component should rendering properly.", async () => {
    render(<TextArea name="textarea" palceholder="Input placeholder" />);
});

test("renders label and placeholder correctly", () => {
    render(<TextArea name="textarea" label="Test Label" palceholder="Test Placeholder" />);
    const ElemgetByLabelText = screen.getByText(/Test Label/i);
    const ElemgetByPlaceholderText = screen.getByPlaceholderText(/Test Placeholder/i);

    expect(ElemgetByLabelText).toBeInTheDocument();
    expect(ElemgetByPlaceholderText).toBeInTheDocument();
});
