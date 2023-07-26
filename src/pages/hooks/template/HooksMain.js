import hooksMain from "../../../assets/template/hooks/hooksMain.js";
import ConvertElement from "../../../components/convertElement/ConvertElement.js";

const HooksMain = () => {
    return (
        <>
            {hooksMain.map((section) => {
                return Object.entries(section).map(([key, value]) =>
                    ConvertElement({ key, value })
                );
            })}
        </>
    );
};

export default HooksMain;
