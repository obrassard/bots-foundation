"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CommandDispatcher_1 = require("../handlers/CommandDispatcher");
class AbstractBot {
    constructor() {
        this.dispatcher = new CommandDispatcher_1.CommandDispatcher();
        this.registerHandlers();
    }
    register(handler) {
        this.dispatcher.registerHandler(handler);
    }
    request(command, args) {
        return this.dispatcher.dispatch(command, args);
    }
}
exports.AbstractBot = AbstractBot;
//# sourceMappingURL=AbstractBot.js.map