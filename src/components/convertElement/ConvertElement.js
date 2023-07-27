import Code from "../code/Code";

const ConvertElement = ({ attr, value }) => {
    if (attr.includes("h1")) return <h1>{value}</h1>;

    if (attr.includes("h2")) return <h2>{value}</h2>;

    if (attr.includes("h3")) return <h3>{value}</h3>;

    if (attr.includes("h4")) return <h4>{value}</h4>;

    if (attr.includes("h5")) return <h5>{value}</h5>;

    if (attr.includes("h6")) return <h6>{value}</h6>;

    if (attr.includes("p")) return <p>{value}</p>;

    if (attr === "code") {
        const { lang, sourceCode } = value;

        return <Code lang={lang} sourceCode={sourceCode} />;
    }

    if (attr.includes("li")) {
        return (
            <ul>
                {value.map((li) => {
                    return <li key={li}>{li}</li>;
                })}
            </ul>
        );
    }
};

export default ConvertElement;
