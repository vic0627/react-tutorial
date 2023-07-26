import Prism from "prismjs";
import { useEffect } from "react";

const Code = ({ lang = "js", sourceCode = "" }) => {
    const language = `language-${lang}`;

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre className={language}>
            <code>{sourceCode}</code>
        </pre>
    );
};

export default Code;
