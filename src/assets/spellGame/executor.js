import { Executor, Action } from "./interface";

class BasicAttackExecutor extends Executor {
    static _id = "ex-atk-001";
    static phrase = "突擊";
    static sideEffect = [];
    static input = 1;
    static output = 1;
    static action = Action.attack;
}

class BasicDefenceExecutor extends Executor {
    static _id = "ex-def-001";
    static phrase = "守護";
    static sideEffect = [];
    static input = 1;
    static output = 1;
    static action = Action.defence;
}

Object.freeze(BasicAttackExecutor);
Object.freeze(BasicDefenceExecutor);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    BasicAttackExecutor,
    BasicDefenceExecutor,
};
