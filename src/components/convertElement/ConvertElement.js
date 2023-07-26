import Code from "../code/Code";

const ConvertElement = ({ key, value }) => {
    if (key === "h1") return <h1>{value}</h1>;

    if (key === "h2") return <h2>{value}</h2>;

    if (key === "h3") return <h3>{value}</h3>;

    if (key === "h4") return <h4>{value}</h4>;

    if (key === "h5") return <h5>{value}</h5>;

    if (key === "h6") return <h6>{value}</h6>;

    if (key.includes("p")) return <p>{value}</p>;

    if (key === "code") {
        const { lang, sourceCode } = value;

        return <Code lang={lang} sourceCode={sourceCode} />;
    }

    if (key.includes("li")) {
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
