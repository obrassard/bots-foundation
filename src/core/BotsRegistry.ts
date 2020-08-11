import { IBot } from './bots/IBot';
import { stdout } from 'process';
export class BotsRegistry {
    private static instance: BotsRegistry;
    private bots : Map<string, IBot>;

    private constructor() {
        this.bots = new Map<string, IBot>();
    }

    private static getInstance(): BotsRegistry {
        if (this.instance == null) {
            this.instance = new BotsRegistry();
        }
        return this.instance;
    }

    public static getDefault(): IBot | undefined {
        const instance = this.getInstance();
        return instance.bots.get('default');
    }

    public static getById(id: string): IBot | undefined {
        const instance = this.getInstance();
        return instance.bots.get(id);
    }

    public static register(bot: IBot, id: string, def: boolean = false): void {
        console.log(`Registered bot ${id}`);
        const instance = this.getInstance();

        if (id == 'default') { throw new Error('\'default\' is a reserved ID')}
        if (instance.bots.has(id)) { throw new Error('this ID is already in use')}
        instance.bots.set(id, bot);

        if (def) {
            instance.bots.set('default', bot);
        }
    }
}