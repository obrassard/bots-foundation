import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./inversify.config";
import * as bodyParser from 'body-parser';

export abstract class Server {
    public run() {
        const server = new InversifyExpressServer(container);

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

    protected abstract registerBots(): void;
}
