import { ICommandHandler } from "../handlers/ICommandHandler";
import { IResult } from '../handlers/IResult';

export interface IBot {
    register(handler: ICommandHandler): void;
    request(command: string, args?: any ): IResult | null;
}