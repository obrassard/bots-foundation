"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./api/Server");
const BotsRegistry_1 = require("./core/BotsRegistry");
const Assistant_1 = require("./core/Assistant");
const TestBot_1 = require("./core/TestBot");
class TestServer extends Server_1.Server {
    registerBots() {
        BotsRegistry_1.BotsRegistry.register(new Assistant_1.Assistant(), 'assistant', true);
        BotsRegistry_1.BotsRegistry.register(new TestBot_1.TestBot(), 'test');
    }
}
exports.TestServer = TestServer;
new TestServer().run();
//# sourceMappingURL=AppServer.js.map