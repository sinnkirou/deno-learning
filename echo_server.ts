const listener = Deno.listen({ port: 8080 });

console.log("listening on 0.0.0.0:8080");
for await (const conn of listener) {
  Deno.copy(conn, conn);
}


/*
for await...of 语句会在异步或者同步可迭代对象上创建一个迭代循环，包括 String，Array，Array-like 对象（比如 arguments 或者 NodeList)，TypedArray，Map， Set 和自定义的异步或者同步可迭代对象。
*/