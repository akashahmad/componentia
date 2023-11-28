import * as React from "react";

import { Tab } from "./Tab";
import { DefaultRenderer } from "./TitleRenderers";
import { TabContext } from "./Context";

export function Tabs({ children, titleRenderer: TitleRenderer = DefaultRenderer, className }: TabsProps) {
    const [titles, setTitles] = React.useState<string[]>([]);
    const [activeIndex, setActiveIndex] = React.useState<number>(0);

    return (
        <TabContext.Provider value={{ titles, setTitles, activeIndex, setActiveIndex }}>
            <div className={className}>
                <TitleRenderer titles={titles} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                <div>{children}</div>
            </div>
        </TabContext.Provider>
    );
}

interface TabsProps {
    children: React.ReactNode;
    titleRenderer?: React.FC<RendererProps>;
    className?: string;
}

export interface RendererProps {
    titles: string[];
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

Tabs.Tab = Tab;
export { Tab };
