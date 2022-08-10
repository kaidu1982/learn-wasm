const js = import("./node_modules/@hakjin.kim/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});