import { LoadingHandler, MJMessage, MJConfig, MJConfigParam } from "./interfaces";
export declare class MidjourneyMessage {
    private magApiQueue;
    config: MJConfig;
    constructor(defaults: MJConfigParam);
    protected log(...args: any[]): void;
    FilterMessages(timestamp: number, prompt: string, loading?: LoadingHandler): Promise<MJMessage | null>;
    protected content2progress(content: string): string;
    UriToHash(uri: string): string;
    WaitMessage(prompt: string, loading?: LoadingHandler, timestamp?: number): Promise<MJMessage | null>;
    protected safeRetrieveMessages(limit?: number): Promise<any>;
    RetrieveMessages(limit?: number): Promise<any>;
}
