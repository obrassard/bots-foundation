import { ICommandHandler } from './ICommandHandler';
import { IResult } from './IResult';

export abstract class AbstractCommandHandler implements ICommandHandler {
    private next : ICommandHandler | null;
    
    public constructor() {
        this.next = null;
    }

    public handle(command: string, args?: any): IResult | null{
        if (this.isTriggered(command)) {
            return this.execute(args);
        } else if (this.hasNext()) {
            return this.next!.handle(command,args);
        }
        return null;
    }
    
    public setNext(next: ICommandHandler): void {
        this.next = next;
    }
    
    public abstract isTriggered(trigger: string): boolean;
    public abstract execute(args?: any): IResult;

    protected sanitizeString(entry: string): string {
        return entry.toLowerCase().trim();
    }
 
    private hasNext(): boolean {
        return this.next != null;
    }
}