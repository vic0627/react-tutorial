import { Fragment, useEffect, useState } from "react";
import ConvertElement from "../../../components/convertElement/ConvertElement.js";

const textPackage = {
    en: {
        usestate: () =>
            import("../../../assets/template/en/hooks/en_hooksUseState"),
    },
    "zh-TW": {
        usestate: () =>
            import("../../../assets/template/zh-TW/hooks/zh_tw_hooksUseState"),
    },
};

const HooksCommon = ({ lang = "en", hookName }) => {
    const [onload, setOnload] = useState(false);

    const [article, setArticle] = useState([]);

    let renderObject = textPackage[lang][hookName];

    useEffect(() => {
        if (!renderObject) return;

        const render = async () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            renderObject = await renderObject();

            renderObject = await renderObject.default;

            setArticle(renderObject);

            setOnload(true);
        };

        render();
    }, [lang, hookName]);

    if (!renderObject) return <p>comming soon...</p>;

    if (!onload) return <p>loading...</p>;

    return (
        <>
            {article.map((section) =>
                Object.entries(section).map(([key, value]) => (
                    <Fragment key={value}>
                        <ConvertElement attr={key} value={value} />
                    </Fragment>
                ))
            )}
        </>
    );
};

export default HooksCommon;
