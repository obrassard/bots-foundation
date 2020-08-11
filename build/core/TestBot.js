"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractBot_1 = require("./bots/AbstractBot");
const GreetingHandler_1 = require("./handlers/library/GreetingHandler");
class TestBot extends AbstractBot_1.AbstractBot {
    registerHandlers() {
        this.register(new GreetingHandler_1.GreetingHandlers("Test"));
    }
}
exports.TestBot = TestBot;
//# sourceMappingURL=TestBot.js.map