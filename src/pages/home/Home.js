import VicText from "../../components/common/vicText/VicText";

const Home = () => {
    const handler = (e) => {
        console.log(e);
    };

    const rule = /^(?=.*[A-Z])(?!.*\s)[A-Za-z0-9]{8,16}$/;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validator = (val, resolve) => {
        if (val.includes("fuck")) resolve(false);
        else resolve(true);
    };

    return (
        <>
            <h1>home page</h1>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem </p>
            <VicText
                label='Enter Email'
                rule={emailRegex}
            />
            <VicText
                label='Enter Password'
                type='password'
                showPassword={true}
                rule={rule}
            />
            <VicText
                label='Enter No F Words'
                rule={validator}
            />
        </>
    );
};

export default Home;
