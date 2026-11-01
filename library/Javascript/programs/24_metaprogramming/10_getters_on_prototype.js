// Accessors, Object.entries on classes, and enumerate methods.
class V { static #n = 0; #p = 1; pub = 2; get acc() { return this.#p; } set acc(v) { this.#p = v; } m() {} static sm() {} }
const members = (c) => ({ proto: Object.getOwnPropertyNames(c.prototype), stat: Object.getOwnPropertyNames(c).sort(), acc: Object.entries(Object.getOwnPropertyDescriptors(c.prototype)).filter(([, d]) => d.get).map(([k]) => k) }); console.log(members(V), Object.keys(new V()), JSON.stringify(new V()), { ...new V() });
const proto = (o) => (o === null ? [] : [Object.getOwnPropertyNames(o).length, ...proto(Object.getPrototypeOf(o))]); console.log(proto(new V()).length);
console.log(typeof V.prototype.m, Object.getOwnPropertyDescriptor(V.prototype, "m").enumerable, Object.getOwnPropertyDescriptor(V, "prototype").writable, V.prototype.constructor === V, V.hasOwnProperty("sm"), new V().hasOwnProperty("m"), "m" in new V());
