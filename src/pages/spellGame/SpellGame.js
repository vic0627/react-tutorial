import enchantCore from "../../assets/spellGame/enchantCore";
import modifier from "../../assets/spellGame/modifier";
import executor from "../../assets/spellGame/executor";

const spell = [
    enchantCore.AquaBasicCore,
    modifier.BasicIterator,
    [modifier.BasicBooster, modifier.BasicIterator],
    [modifier.BasicBooster, [modifier.BasicBooster, modifier.BasicBooster]],
    modifier.BasicCompressor,
    executor.BasicAttackExecutor,
];

const calResilience = (steps, deep = false) => {
    let totalResilience = 0;
    const cacheMultiResilience = [];

    for (const step of steps) {
        let tempResilience;

        if (Array.isArray(step)) tempResilience = calResilience(step, true);

        const { resilience } = step;

        if (resilience)
            deep
                ? cacheMultiResilience.push(resilience)
                : (totalResilience += resilience);
        else if (tempResilience)
            deep
                ? cacheMultiResilience.push(tempResilience)
                : (totalResilience += tempResilience);
    }

    if (cacheMultiResilience.length)
        totalResilience =
            cacheMultiResilience.reduce((acc, cur) => acc * cur, 1) /
            cacheMultiResilience.reduce((acc, cur) => acc + cur, 0);

    console.log(totalResilience, deep);

    return totalResilience;
};

calResilience(spell);

const SpellGame = () => {
    return <div></div>;
};

export default SpellGame;
