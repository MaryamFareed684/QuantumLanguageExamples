// A widget tree with bubbling events through parents.
class Widget {
  children = []; parent = null;
  constructor(id) { this.id = id; }
  add(c) { c.parent = this; this.children.push(c); return this; }
  fire(ev, path = []) { path.push(this.id); return this.parent ? this.parent.fire(ev, path) : `${ev}: ${path.join(" > ")}`; }
  walk(f, d = 0) { f(this, d); this.children.forEach((c) => c.walk(f, d + 1)); }
}
class Button extends Widget { click() { return this.fire("click"); } }
const b = new Button("ok");
new Widget("root").add(new Widget("panel").add(b).add(new Button("no")));
console.log(b.click());
b.parent.parent.walk((w, d) => console.log(" ".repeat(d * 2) + w.constructor.name + ":" + w.id));
