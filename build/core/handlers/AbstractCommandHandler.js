"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractCommandHandler {
    constructor() {
        this.next = null;
    }
    handle(command, args) {
        if (this.isTriggered(command)) {
            return this.execute(args);
        }
        else if (this.hasNext()) {
            return this.next.handle(command, args);
        }
        return null;
    }
    setNext(next) {
        this.next = next;
    }
    sanitizeString(entry) {
        return entry.toLowerCase().trim();
    }
    hasNext() {
        return this.next != null;
    }
}
exports.AbstractCommandHandler = AbstractCommandHandler;
//# sourceMappingURL=AbstractCommandHandler.js.map