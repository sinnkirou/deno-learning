const worker = new Worker(new URL("worker_sub.ts", import.meta.url).href, {
    type: "module",
});

worker.onmessage = (e: MessageEvent) => {
    console.log(`Main: Received msg from sub worker - ${e.data}`);
};
worker.postMessage("Hello sub");
