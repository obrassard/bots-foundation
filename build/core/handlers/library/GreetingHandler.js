"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommandHandler_1 = require("../AbstractCommandHandler");
class GreetingHandlers extends AbstractCommandHandler_1.AbstractCommandHandler {
    constructor(name) {
        super();
        this.name = name;
    }
    isTriggered(trigger) {
        const command = this.sanitizeString(trigger);
        return command.includes("hey") || command.includes("hi") || command.includes("hello");
    }
    execute(args) {
        return {
            result: `Hi there, I'm ${this.name}! Nice to meet you!`
        };
    }
}
exports.GreetingHandlers = GreetingHandlers;
//# sourceMappingURL=GreetingHandler.js.map