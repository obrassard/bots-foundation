import { AbstractBot } from './bots/AbstractBot';
import { GreetingHandlers } from './handlers/library/GreetingHandler';

export class TestBot extends AbstractBot {
    
    protected registerHandlers(): void {
        this.register(new GreetingHandlers("Test"));
    }
}