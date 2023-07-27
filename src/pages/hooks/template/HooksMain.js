import { Fragment } from "react";
import en_hooksMain from "../../../assets/template/en/hooks/en_hooksMain.js";
import ConvertElement from "../../../components/convertElement/ConvertElement.js";

const HooksMain = () => {
    return (
        <>
            {en_hooksMain.map((section) => {
                return Object.entries(section).map(([key, value]) => (
                    <Fragment key={value}>
                        <ConvertElement attr={key} value={value} />
                    </Fragment>
                ));
            })}
        </>
    );
};

export default HooksMain;
