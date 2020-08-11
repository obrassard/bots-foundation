"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommandHandler_1 = require("./AbstractCommandHandler");
class CommandDispatcher {
    constructor() {
        this.handlerChain = new EndCommandHandler();
    }
    dispatch(trigger, args) {
        return this.handlerChain.handle(trigger, args);
    }
    registerHandler(handler) {
        handler.setNext(this.handlerChain);
        this.handlerChain = handler;
    }
}
exports.CommandDispatcher = CommandDispatcher;
class EndCommandHandler extends AbstractCommandHandler_1.AbstractCommandHandler {
    isTriggered(trigger) {
        return true;
    }
    execute(args) {
        return {
            result: "I'm sorry, I can't help you with that for now."
        };
    }
}
//# sourceMappingURL=CommandDispatcher.js.map