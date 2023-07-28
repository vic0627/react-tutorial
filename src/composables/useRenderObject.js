import { useState, useEffect } from "react";

const useRenderObject = ({ lang, hookName, loadingObject }) => {
    const [onload, setOnload] = useState(false);

    const [article, setArticle] = useState([]);

    let renderObject = loadingObject;

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

    return {
        onload,
        article,
    };
};

export default useRenderObject;
