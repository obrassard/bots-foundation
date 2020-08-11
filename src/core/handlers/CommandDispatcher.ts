import { ICommandHandler } from './ICommandHandler';
import { AbstractCommandHandler } from './AbstractCommandHandler';
import { IResult } from './IResult';

export class CommandDispatcher {
    private handlerChain : ICommandHandler;

    public constructor() {
        this.handlerChain = new EndCommandHandler();
    }

    public dispatch(trigger: string, args?: any): IResult | null {
        return this.handlerChain.handle(trigger, args);
    }

    public registerHandler(handler: ICommandHandler): void {
        handler.setNext(this.handlerChain);
        this.handlerChain = handler;
    }
}

class EndCommandHandler extends AbstractCommandHandler {
    
    public isTriggered(trigger: string): boolean {
        return true;
    }
    
    public execute(args?: any): IResult {
        return {
            result : "I'm sorry, I can't help you with that for now."
        }
    }
}