import * as React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Button } from "./Button";

test("button component is rendering properly, and its props are working properly.", async () => {
    const BUTTON_TEXT = "BUTTON_TEXT";
    const DISABLED_TEXT = "DISABLED_TEXT";

    const callback = jest.fn();

    render(<Button onClick={callback}>{BUTTON_TEXT}</Button>);
    expect(screen.getByRole("button")).toHaveTextContent(BUTTON_TEXT);

    const buttonElement = screen.getByText(BUTTON_TEXT);
    await userEvent.click(buttonElement);
    expect(callback).toHaveBeenCalled();

    render(<Button disabled={true}>{DISABLED_TEXT}</Button>);
    const disabledButton = screen.getByText(DISABLED_TEXT);
    expect(disabledButton).toHaveAttribute("disabled");
});
