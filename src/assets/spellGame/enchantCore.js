import { EnchantCore } from "./interface";
import { Aqua, Pyro, Nature, Chaos } from "./element";

class AquaBasicCore extends EnchantCore {
    static _id = "core-aqua-001";
    static phrase = "水阿!";
    static sideEffect = [];
    static input = 0;
    static output = 1;
    static element = Aqua;
    static tension = 10;
}

class PyroBasicCore extends EnchantCore {
    static _id = "core-pyro-001";
    static phrase = "火阿!";
    static sideEffect = [];
    static input = 0;
    static output = 1;
    static element = Pyro;
    static tension = 10;
}

class NatureBasicCore extends EnchantCore {
    static _id = "core-nature-001";
    static phrase = "大自然阿!";
    static sideEffect = [];
    static input = 0;
    static output = 1;
    static element = Nature;
    static tension = 10;
}

class ChaosBasicCore extends EnchantCore {
    static _id = "core-chaos-001";
    static phrase = "渾沌阿!";
    static sideEffect = [];
    static input = 0;
    static output = 1;
    static element = Chaos;
    static tension = 10;
}

Object.freeze(AquaBasicCore);
Object.freeze(PyroBasicCore);
Object.freeze(NatureBasicCore);
Object.freeze(ChaosBasicCore);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    AquaBasicCore,
    PyroBasicCore,
    NatureBasicCore,
    ChaosBasicCore,
};
