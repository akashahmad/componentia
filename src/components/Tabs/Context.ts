import * as React from "react";

const initialValues: ValueTypes = {
    titles: [],
    activeIndex: 0,
    setTitles: () => {},
    setActiveIndex: () => {},
};

export const TabContext = React.createContext(initialValues);

interface ValueTypes {
    titles: string[];
    activeIndex: number;
    setTitles: React.Dispatch<React.SetStateAction<string[]>>;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}
