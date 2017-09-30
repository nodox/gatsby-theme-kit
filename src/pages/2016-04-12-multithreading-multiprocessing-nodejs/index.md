---
path: "/multithreading-multiprocessing-nodejs"
date: "2016-04-12"
title: "Multithreading and Multiprocessing in NodeJS"
tags: ["nodejs"]
---

I recently had an interviewer ask me about multithreading in NodeJS. I claimed to be proficient in NodeJS but the interviewer, as well as myself, quickly recognized there were a few fundamentals concepts I had not taken the time to research. After the interview I decided to read up on the NodeJS event loop and multithreading.

A Node.js application runs on a single thread. In this thread an event loop listens for events and then triggers the events associated callback function upon detection. By this simple illustration we can already see that Node.js does not support multithreading because each application is run on a single thread. Once again if an interviewer asks if Node.js supports multithreading you can confidently say no.

Although multithreading is not supported there is a way to harness the power of a multicore system by using processes. Node.js has a module called cluster designed to support a multiprocessing alternative. Let’s view some code from the Node.js docs.

```
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
}
```

The cluster module allows you to spawn multiple child processes that can share a common port. In this example the worker processes are listening for an http connection on port 8000. With the child processes in place the system can handle greater loads. Hooray!

We’ve managed to successfully implement a multicore Node.js application however with every design decision there are trade-offs to evaluate. In this case our trade-offs are associated with the concepts of multithreading and multiprocessing. Threads share the same memory space and creating new threads do not take up much of the system resources. Processes run in separate memory allocations with a complete copy of the program increasing the memory overhead of the application. In situations where memory might be scarce, Node.js might be the least effective tool for application code.

If I explained these concepts to my interviewer I would have surely impressed him. No harm done though. In the end the experience gave me an opportunity to learn something new.
