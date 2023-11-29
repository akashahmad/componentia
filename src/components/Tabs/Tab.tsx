import * as React from "react";

import { TabContext } from "./Context";

export function Tab({ title, children }: TabProps) {
    const context = React.useContext(TabContext);
    if (!context) throw new Error("Tab must be used inside the Tabs component.");

    React.useEffect(() => {
        if (!context.titles.includes(title)) {
            context.setTitles(prev => [...prev, title]);
        }
    }, [title]);

    const currentIndex = context.titles.findIndex(x => x === title);

    return currentIndex === context.activeIndex && <div>{children}</div>;
}

interface TabProps {
    title: string;
    children: React.ReactNode;
}
