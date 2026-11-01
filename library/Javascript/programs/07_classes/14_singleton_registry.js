// Singletons and registries using statics.
class Config {
  static #inst;
  static get() { return (Config.#inst ??= new Config()); }
  values = {};
  set(k, v) { this.values[k] = v; return this; }
}
Config.get().set("a", 1);
console.log(Config.get().values, Config.get() === Config.get());
class Plugin { static all = new Map(); static register(C) { Plugin.all.set(C.id, C); return C; } }
class A extends Plugin { static id = "a"; run() { return "ran a"; } }
class B extends Plugin { static id = "b"; run() { return "ran b"; } }
[A, B].forEach(Plugin.register);
console.log([...Plugin.all.keys()], new (Plugin.all.get("b"))().run());
