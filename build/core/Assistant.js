"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractBot_1 = require("./bots/AbstractBot");
const GreetingHandler_1 = require("./handlers/library/GreetingHandler");
const DateHandler_1 = require("./handlers/library/DateHandler");
class Assistant extends AbstractBot_1.AbstractBot {
    registerHandlers() {
        this.register(new GreetingHandler_1.GreetingHandlers("Assistant"));
        this.register(new DateHandler_1.DateHandler());
    }
}
exports.Assistant = Assistant;
//# sourceMappingURL=Assistant.js.map