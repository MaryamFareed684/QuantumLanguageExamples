// A traffic-light state machine as a class.
class Machine {
  static table = { red: { go: "green" }, green: { slow: "yellow" }, yellow: { stop: "red" } };
  state = "red"; history = [];
  fire(ev) {
    const next = Machine.table[this.state][ev];
    if (!next) throw new Error(`no ${ev} from ${this.state}`);
    this.history.push(`${this.state}->${next}`);
    this.state = next;
    return this;
  }
}
const m = new Machine().fire("go").fire("slow");
console.log(m.state, m.history);
try { m.fire("go"); } catch (e) { console.log(e.message); }
console.log(m);
