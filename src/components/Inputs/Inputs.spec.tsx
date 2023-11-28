import * as React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormInput } from "./Inputs";

test("Input component should rendering properly.", async () => {
    render(<FormInput name="formfiled" palceholder="Input placeholder" type="text" />);
});

test("renders label and placeholder correctly", () => {
    render(<FormInput name="formfiled" label="Test Label" palceholder="Test Placeholder" type="text" />);
    const ElemgetByLabelText = screen.getByText(/Test Label/i);
    const ElemgetByPlaceholderText = screen.getByPlaceholderText(/Test Placeholder/i);

    expect(ElemgetByLabelText).toBeInTheDocument();
    expect(ElemgetByPlaceholderText).toBeInTheDocument();
});
