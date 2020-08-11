import { AbstractCommandHandler } from '../AbstractCommandHandler';
import { IResult } from '../IResult';

export class GreetingHandlers extends AbstractCommandHandler {

    private name: string;

    public constructor(name: string) {
        super();
        this.name = name;
    }
        
    public isTriggered(trigger: string): boolean {
        const command = this.sanitizeString(trigger);
        return command.includes("hey") || command.includes("hi") || command.includes("hello");
    }
    
    public execute(args: any): IResult {
        return {
            result : `Hi there, I'm ${this.name}! Nice to meet you!`
        }
    }
}