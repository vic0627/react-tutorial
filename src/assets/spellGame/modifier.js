import { Modifier, Booster, Compressor, Iterator } from "./interface";

class BasicBooster extends Booster {
    static _id = "mf-bst-001";
    static phrase = "強化";
    static sideEffect = [];
    static input = 1;
    static output = 1;
    static resilience = 1;
    static boost = 5;
}

class BasicCompressor extends Compressor {
    static _id = "mf-cmp-001";
    static phrase = "壓縮";
    static sideEffect = [];
    static input = 1;
    static output = -1;
    static resilience = 1;
    static ratio = 1.5;
}

class BasicIterator extends Iterator {
    static _id = "mf-itr-001";
    static phrase = "連續";
    static sideEffect = [];
    static input = 1;
    static output = 3;
    static resilience = 2;
    static deration = 0.9;
    static involution = 3;
}

Object.freeze(BasicBooster);
Object.freeze(BasicCompressor);
Object.freeze(BasicIterator);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    BasicBooster,
    BasicCompressor,
    BasicIterator,
};
