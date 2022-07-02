<div align="center">
<img src="https://rustwasm.github.io/wasm-pack/public/img/wasm-ferris.png" width="400">
<h1>rust-wasm-vite-template</h1>
<p>it's a rust wasm + vite template.</p>
</div>



## What you need:
- The `wasm-pack` CLI
- `rustc` at least 1.30.0
- `wasm32-unknown-unknown` target
- `Nodejs` (I'm using v18.0.0), I think ^14 will work

## Running:
Starts a Rust dev server, it will rebuild your code everytime you save and output to pkg
```
$ yarn rust:dev
```
Serves your bootstrap and HTML code in `web/`
```
$ yarn web:dev
```
