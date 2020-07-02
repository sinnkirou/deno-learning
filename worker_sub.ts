self.onmessage = (e: MessageEvent) => {
    console.log(`Sub: Received from main worker - ${e.data}`);
    self.postMessage("Hello main");
};
