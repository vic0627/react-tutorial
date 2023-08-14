import VicText from "../../components/common/vicText/VicText";

const Home = () => {
    const handler = (e) => {
        console.log(e);
    };
    return (
        <>
            <h1>home page</h1>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem </p>
            <VicText label="Enter Text" />
        </>
    );
};

export default Home;
