import { IResult } from "./IResult";

export interface ICommandHandler {
    handle(command: string, args?: any): IResult | null;
    execute(args?: any): IResult;
    setNext(next: ICommandHandler): void;
    isTriggered(trigger: string): boolean;
}