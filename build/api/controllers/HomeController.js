"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_express_utils_1 = require("inversify-express-utils");
const BotsRegistry_1 = require("../../core/BotsRegistry");
let AppController = class AppController {
    queryDefault(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let bot = BotsRegistry_1.BotsRegistry.getDefault();
            if (bot == undefined) {
                res.status(500);
                return { error: `No default bot was registered.` };
            }
            let query = req.query.query;
            if (query == null) {
                res.status(400);
                return { error: "Please provide a query." };
            }
            return this.parseRequest(res, bot, query);
        });
    }
    queryById(id, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let bot = BotsRegistry_1.BotsRegistry.getById(id);
            if (bot == undefined) {
                res.status(404);
                return { error: `No bot with the id ${id} was found.` };
            }
            let query = req.query.query;
            if (query == null) {
                res.status(400);
                return { error: "Please provide a query." };
            }
            return this.parseRequest(res, bot, query);
        });
    }
    postQuery(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = req.body.query;
            if (query == null) {
                res.status(400);
                return { error: "Please provide a query." };
            }
            const id = req.body.id;
            let bot;
            if (id == null) {
                bot = BotsRegistry_1.BotsRegistry.getDefault();
                if (bot == undefined) {
                    res.status(500);
                    return { error: `No default bot was registered.` };
                }
            }
            else {
                bot = BotsRegistry_1.BotsRegistry.getById(id);
                if (bot == undefined) {
                    res.status(404);
                    return { error: `No bot with the id ${id} was found.` };
                }
            }
            const args = req.body.args;
            return this.parseRequest(res, bot, query, args);
        });
    }
    parseRequest(res, bot, query, args) {
        let result = bot.request(query, args);
        if (result == null) {
            res.status(400);
            return { error: "This request was left unhandled." };
        }
        return result;
    }
};
__decorate([
    inversify_express_utils_1.httpGet('/'),
    __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "queryDefault", null);
__decorate([
    inversify_express_utils_1.httpGet(':id'),
    __param(0, inversify_express_utils_1.requestParam("id")), __param(1, inversify_express_utils_1.request()), __param(2, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "queryById", null);
__decorate([
    inversify_express_utils_1.httpPost('/'),
    __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "postQuery", null);
AppController = __decorate([
    inversify_express_utils_1.controller("/")
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=HomeController.js.map