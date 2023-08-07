export class Spell {
    static _id;
    static phrase;
    static explaination;
    static sideEffect;
    static input;
    static output;
}

export class EnchantCore extends Spell {
    static element;
    static tension;
}

export class Modifier extends Spell {
    static resilience;
}

export class Booster extends Modifier {
    static boost;
}

export class Compressor extends Modifier {
    static ratio;
}

export class Iterator extends Modifier {
    /**
     * 減益倍率
     */
    static deration;

    /**
     * 指迴圈次數上限
     */
    static involution;
}

export class Executor extends Spell {
    static action;
}

export class Action {
    static attack = "act-atk";
    static defence = "act-def";
}

export class Element {
    static _id;

    constructor(action) {
        this.action = action;
    }

    vs(element) {
        if (element) return 0;
    }
}
