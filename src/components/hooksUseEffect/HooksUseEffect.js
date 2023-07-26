import { useEffect, useState } from "react";

const HooksUseEffect = () => {
    const [showPop, setShowPop] = useState(false);
    const [count, setCount] = useState(null);

    useEffect(() => {
        setShowPop(true);
        if (count === null) {
            setCount(0);
            setShowPop(false);
        }
    }, [count]);

    return (
        <>
            <h3
                onMouseOver={() => setCount(count + 1)}
                onMouseLeave={() => setShowPop(false)}
            >
                side effect has been called in {count} times!
            </h3>
            {showPop && <p>Hover {count} times~</p>}
        </>
    );
};

export default HooksUseEffect;
