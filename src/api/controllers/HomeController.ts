import { controller, httpGet, request, response, requestParam, httpPost } from "inversify-express-utils";
import { Request, Response } from "express";
import { BotsRegistry } from '../../core/BotsRegistry';
import { IBot } from '../../core/bots/IBot';

@controller("/")
export class AppController {

    @httpGet('/')
    public async queryDefault(@request() req: Request, @response() res: Response) {
        let bot = BotsRegistry.getDefault();
        if (bot == undefined) {
            res.status(500);
            return {error: `No default bot was registered.`};
        }

        let query = req.query.query;
        if (query == null) {
            res.status(400);
            return {error: "Please provide a query."}
        }
        
        return this.parseRequest(res,bot,query);
    }

    @httpGet(':id')
    public async queryById(@requestParam("id") id: string, @request() req: Request, @response() res: Response) {
        let bot = BotsRegistry.getById(id);

        if (bot == undefined) {
            res.status(404);
            return {error: `No bot with the id '${id}' was found.`};
        }

        let query = req.query.query;
        if (query == null) {
            res.status(400);
            return {error: "Please provide a query."}
        }

        return this.parseRequest(res,bot,query);
    }

    @httpPost('/')
    public async postQuery(@request() req: Request, @response() res: Response) {

        const query = req.body.query;
        if (query == null) {
            res.status(400);
            return {error: "Please provide a query."}
        }

        const id = req.body.id;
        let bot;
        if (id == null) {
            bot = BotsRegistry.getDefault();
            if (bot == undefined) {
                res.status(500);
                return {error: `No default bot was registered.`};
            }
        } else {
            bot = BotsRegistry.getById(id);
            if (bot == undefined) {
                res.status(404);
                return {error: `No bot with the id '${id}' was found.`};
            }
        }

        const args = req.body.args;
        return this.parseRequest(res,bot,query, args);
    }

    private parseRequest(res: Response, bot: IBot, query: string, args?: any) {
        let result = bot.request(query, args);
        if (result == null) {
            res.status(400);
            return {error: "This request was left unhandled."}
        }
        return result;
    }
}
