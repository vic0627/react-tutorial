import { Action, Element } from "./interface";

export class Aqua extends Element {
    static _id = "el-aqua";

    vs(element) {
        const { _id } = element;

        if (this.action === Action.attack) {
            if (_id === Aqua._id) return 1;
            if (_id === Pyro._id) return 1.25;
            if (_id === Nature._id) return 0.75;
            if (_id === Chaos._id) return 1.3;
        }

        if (this.action === Action.defence) {
            if (_id === Aqua._id) return 1;
            if (_id === Pyro._id) return 1.25;
            if (_id === Nature._id) return 0.75;
            if (_id === Chaos._id) return 0.8;
        }
    }
}

export class Pyro extends Element {
    static _id = "el-pyro";

    vs(element) {
        const { _id } = element;

        if (this.action === Action.attack) {
            if (_id === Aqua._id) return 0.75;
            if (_id === Pyro._id) return 1;
            if (_id === Nature._id) return 1.25;
            if (_id === Chaos._id) return 1.3;
        }

        if (this.action === Action.defence) {
            if (_id === Aqua._id) return 0.75;
            if (_id === Pyro._id) return 1;
            if (_id === Nature._id) return 1.25;
            if (_id === Chaos._id) return 0.8;
        }
    }
}

export class Nature extends Element {
    static _id = "el-nature";

    vs(element) {
        const { _id } = element;

        if (this.action === Action.attack) {
            if (_id === Aqua._id) return 1.25;
            if (_id === Pyro._id) return 0.75;
            if (_id === Nature._id) return 1;
            if (_id === Chaos._id) return 1.3;
        }

        if (this.action === Action.defence) {
            if (_id === Aqua._id) return 1.25;
            if (_id === Pyro._id) return 0.75;
            if (_id === Nature._id) return 1;
            if (_id === Chaos._id) return 0.8;
        }
    }
}

export class Chaos extends Element {
    static _id = "el-chaos";

    vs(element) {
        const { _id } = element;

        if (this.action === Action.attack) {
            if (_id === Aqua._id) return 1.3;
            if (_id === Pyro._id) return 1.3;
            if (_id === Nature._id) return 1.3;
            if (_id === Chaos._id) return 1.5;
        }

        if (this.action === Action.defence) {
            if (_id === Aqua._id) return 0.7;
            if (_id === Pyro._id) return 0.7;
            if (_id === Nature._id) return 0.7;
            if (_id === Chaos._id) return 0.5;
        }
    }
}
