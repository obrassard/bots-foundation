import { Server } from './api/Server';
import { BotsRegistry } from './core/BotsRegistry';
import { Assistant } from './core/Assistant';
import { TestBot } from './core/TestBot';

export class TestServer extends Server{
    protected registerBots(): void {
        BotsRegistry.register(new Assistant(), 'assistant', true);
        BotsRegistry.register(new TestBot(), 'test');
    }
}

new TestServer().run();