import { AbstractCommandHandler } from '../AbstractCommandHandler';
import { IResult } from '../IResult';

export class DateHandler extends AbstractCommandHandler {
    
    public isTriggered(trigger: string): boolean {
        const command: string = this.sanitizeString(trigger);
        return command.includes("time") ||
           command.includes("date") ||
           command.includes("today") ||
           command.includes("hour");
    }

    public execute(args: any): IResult {
        let date: Date = new Date();
        const dateString = date.toLocaleDateString("en-US");
        const hourString = date.toLocaleTimeString();
        return {
            result: `Today is ${dateString} and it's ${hourString}`
        }
    }
}