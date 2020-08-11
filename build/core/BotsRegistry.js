"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BotsRegistry {
    constructor() {
        this.bots = new Map();
    }
    static getInstance() {
        if (this.instance == null) {
            this.instance = new BotsRegistry();
        }
        return this.instance;
    }
    static getDefault() {
        const instance = this.getInstance();
        return instance.bots.get('default');
    }
    static getById(id) {
        const instance = this.getInstance();
        return instance.bots.get(id);
    }
    static register(bot, id, def = false) {
        console.log(`Registered bot ${id}`);
        const instance = this.getInstance();
        if (id == 'default') {
            throw new Error('\'default\' is a reserved ID');
        }
        if (instance.bots.has(id)) {
            throw new Error('this ID is already in use');
        }
        instance.bots.set(id, bot);
        if (def) {
            instance.bots.set('default', bot);
        }
    }
}
exports.BotsRegistry = BotsRegistry;
//# sourceMappingURL=BotsRegistry.js.map