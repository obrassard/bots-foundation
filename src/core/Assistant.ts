import { AbstractBot } from './bots/AbstractBot';
import { GreetingHandlers } from './handlers/library/GreetingHandler';
import { DateHandler } from './handlers/library/DateHandler';

export class Assistant extends AbstractBot {
    
    protected registerHandlers(): void {
        this.register(new GreetingHandlers("Assistant"));
        this.register(new DateHandler());
    }
}