import { useEffect, useReducer } from "react";
import "./backing.scss";

const briefConclusion = [
    "React-is-a-JavaScript-library-for-building-user-interface-",
    "React-is-focused-on-the-concept-of-reusable-components-",
    "React-uses-a-virtual-DOM-to-improve-performance-",
];

const Backing = () => {
    useEffect(() => {
        const rings = [".ring_1", ".ring_2", ".ring_3"].map((className) =>
            document.querySelectorAll(className)
        );

        const polarToCartesian = (r, theta, phi) => {
            const x = r * Math.sin(theta) * Math.cos(phi);
            const cameraAngle = Math.cos(theta) * 60;
            const y = -r * Math.sin(theta) * Math.sin(phi) + cameraAngle;
            const z = r * Math.cos(theta);

            const rotationY = theta;
            const rotationZ = -Math.cos(theta) * phi;
            const rotationX = Math.sin(theta) * phi;

            const degY = (rotationY * 180) / Math.PI;
            const degZ = (rotationZ * 180) / Math.PI;
            const degX = (rotationX * 180) / Math.PI;

            const blur = -Math.cos(theta) * Math.PI;
            const zIndex = blur >= 0 ? -1 : 1;

            return `transform: perspective(500px) translate3d(${x}px, ${y}px, ${z}px) rotateY(${degY}deg) rotateZ(${degZ}deg)  rotateX(${degX}deg); filter: blur(${blur}px); z-index: ${zIndex};`;
        };

        let velocity = 0;

        const animation = () => {
            rings.forEach((ring, index) => {
                ring.forEach((char, i, arr) => {
                    const degree360 = Math.PI * 2;
                    const oneDivision = degree360 / arr.length;
                    const r = 300;
                    const phi =
                        index === 0
                            ? 0
                            : index === 1
                            ? Math.PI / 4
                            : Math.PI / -4;

                    const idx = i + 1 + velocity;
                    const theta = oneDivision * idx;
                    char.style = polarToCartesian(r, theta, phi);
                });
            });
            velocity += 0.01;
            requestAnimationFrame(animation);
        };
        animation();
    }, []);
    return (
        <div className="backing">
            <span className="core"></span>
            {briefConclusion.map((sentence, idx) => {
                // console.log(sentence.length);
                const ring = `ring ring_${idx + 1}`;

                return sentence.split("").map((char, i) => (
                    <span className={ring} key={ring + i}>
                        {char}
                    </span>
                ));
            })}
        </div>
    );
};

export default Backing;
