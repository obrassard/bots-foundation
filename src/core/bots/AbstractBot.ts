import { CommandDispatcher } from '../handlers/CommandDispatcher';
import { ICommandHandler } from '../handlers/ICommandHandler';
import { IBot } from './IBot';
import { IResult } from '../handlers/IResult';

export abstract class AbstractBot implements IBot{
    private dispatcher: CommandDispatcher;

    constructor() {
        this.dispatcher = new CommandDispatcher();
        this.registerHandlers();
    }

    public register(handler: ICommandHandler): void {
        this.dispatcher.registerHandler(handler)
    }

    public request(command: string, args?: any): IResult | null {
       return this.dispatcher.dispatch(command, args);
    }

    protected abstract registerHandlers(): void;
}