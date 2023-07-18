"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQueue = void 0;
const tslib_1 = require("tslib");
const p_queue_1 = tslib_1.__importDefault(require("p-queue"));
class ConcurrentQueue {
    limit;
    constructor(concurrency) {
        this.limit = new p_queue_1.default({ concurrency });
    }
    async addTask(task) {
        return await this.limit.add(async () => {
            const result = await task();
            return result;
        });
    }
}
function CreateQueue(concurrency) {
    return new ConcurrentQueue(concurrency);
}
exports.CreateQueue = CreateQueue;
//# sourceMappingURL=queue.js.map