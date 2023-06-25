import "./HooksUseTransition.css";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import AboutTab from "./AboutTab";
import PostTab from "./PostTab";

const HooksUseTransition = () => {
    const [isPending, startTransition] = useTransition();

    const [tab, setTab] = useState("About");

    const tabNames = ["About", "Post"];

    const selectTab = (nextTab) => {
        startTransition(() => {
            setTab(nextTab);
        });
    };

    return (
        <div className="use_transition">
            <div className="use_transition_buttons">
                {tabNames.map((tabName) => {
                    return (
                        <TabButton
                            isActive={tab === tabName}
                            onClick={() => selectTab(tabName)}
                        >
                            {tabName}
                        </TabButton>
                    );
                })}
            </div>
            <div className="use_transition_tabs">
                {tab === tabNames[0] && <AboutTab />}
                {tab === tabNames[1] && <PostTab />}
            </div>
        </div>
    );
};

export default HooksUseTransition;
