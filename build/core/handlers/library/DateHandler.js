"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractCommandHandler_1 = require("../AbstractCommandHandler");
class DateHandler extends AbstractCommandHandler_1.AbstractCommandHandler {
    isTriggered(trigger) {
        const command = this.sanitizeString(trigger);
        return command.includes("time") ||
            command.includes("date") ||
            command.includes("today") ||
            command.includes("hour");
    }
    execute(args) {
        let date = new Date();
        const dateString = date.toLocaleDateString("en-US");
        const hourString = date.toLocaleTimeString();
        return {
            result: `Today is ${dateString} and it's ${hourString}`
        };
    }
}
exports.DateHandler = DateHandler;
//# sourceMappingURL=DateHandler.js.map