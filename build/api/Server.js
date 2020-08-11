"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_config_1 = require("./inversify.config");
const bodyParser = __importStar(require("body-parser"));
class Server {
    run() {
        const server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.container);
        server.setConfig((app) => {
            app.use(bodyParser.urlencoded({
                extended: true,
            }));
            app.use(bodyParser.json());
        });
        this.registerBots();
        const PORT = process.env.PORT || 3000;
        const app = server.build();
        app.listen(PORT);
        console.log(`Server listening on port ${PORT}`);
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map