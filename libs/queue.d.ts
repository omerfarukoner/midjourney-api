declare class ConcurrentQueue {
    private limit;
    constructor(concurrency: number);
    addTask<T>(task: () => Promise<T>): Promise<T>;
}
export declare function CreateQueue(concurrency: number): ConcurrentQueue;
export {};
