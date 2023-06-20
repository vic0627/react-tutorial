import React from "react";

const { useState } = React;

const TestApi = () => {
    const [name, setName] = useState("");

    const log = (e) => {
        console.log(e);
    };

    const fetchAPI = async () => {
        const res = await fetch("http://localhost:3100/user", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({ name }),
        });
        log(res);
    };

    return (
        <>
            <h1>{name}</h1>
            <input
                type="text"
                onInput={({ target }) => setName(target.value)}
            ></input>
            <button onClick={fetchAPI}>click</button>
        </>
    );
};
export default TestApi;
