import * as React from "react";

import { sizePropType } from "./ButtonGroup";

interface SizeContextType {
    value: sizePropType;
}

export const SizeContext = React.createContext<SizeContextType>({ value: "Large" });
