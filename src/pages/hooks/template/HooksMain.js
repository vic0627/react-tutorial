import { Fragment } from "react";
import ConvertElement from "../../../components/convertElement/ConvertElement.js";
import useRenderObject from "../../../composables/useRenderObject.js";
import { useParams } from "react-router-dom";

const textPackage = {
    en: () => import("../../../assets/template/en/hooks/en_hooksMain.js"),
    "zh-TW": () =>
        import("../../../assets/template/zh-TW/hooks/zh_tw_hooksMain.js"),
};

const HooksMain = () => {
    const { lang } = useParams();

    const loadingObject = textPackage[lang];

    const { onload, article } = useRenderObject({ lang, loadingObject });

    if (!loadingObject) return <p>comming soon...</p>;

    if (!onload) return <p>loading...</p>;

    return (
        <>
            {article.map((section) => {
                return Object.entries(section).map(([key, value]) => (
                    <Fragment key={value}>
                        <ConvertElement
                            attr={key}
                            value={value}
                        />
                    </Fragment>
                ));
            })}
        </>
    );
};

export default HooksMain;
