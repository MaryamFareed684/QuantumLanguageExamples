// Static methods, fields, blocks and inherited statics.
class Temp {
  static unit = "C";
  static #made = 0;
  static { Temp.boot = "ran static block"; }
  constructor(v) { this.v = v; Temp.#made++; }
  static of(v) { return new this(v); }
  static get made() { return Temp.#made; }
}
class Fancy extends Temp { static unit = "F"; }
console.log(Temp.unit, Fancy.unit, Temp.boot, Fancy.boot, Temp.of(1), Fancy.of(2), Temp.made);
console.log(Object.getPrototypeOf(Fancy) === Temp, Object.keys(Temp), Object.getOwnPropertyNames(Temp).sort(), new Temp(1).unit);
