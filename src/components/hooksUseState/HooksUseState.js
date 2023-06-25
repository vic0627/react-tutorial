import { useState } from "react";

const HooksUseState = () => {
    const [name, setName] = useState("Victor");

    return (
        <>
            <h1>{name}</h1>
            <input type="text" onInput={(e) => setName(e.target.value)}></input>
        </>
    );
};

export default HooksUseState;
