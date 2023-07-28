import { Fragment } from "react";
import useRenderObject from "../../../composables/useRenderObject.js";
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
    const loadingObject = textPackage[lang][hookName];

    const { onload, article } = useRenderObject({
        lang,
        hookName,
        loadingObject,
    });

    if (!loadingObject) return <p>comming soon...</p>;

    if (!onload) return <p>loading...</p>;

    return (
        <>
            {article.map((section) =>
                Object.entries(section).map(([key, value]) => (
                    <Fragment key={value}>
                        <ConvertElement
                            attr={key}
                            value={value}
                        />
                    </Fragment>
                ))
            )}
        </>
    );
};

export default HooksCommon;
