// Template-method pattern and hooks with defaults.
class Report {
  render() { return [this.head(), ...this.rows().map((r) => this.row(r)), this.foot()].filter((x) => x !== null).join("\n"); }
  head() { return "== report =="; }
  row(r) { return String(r); }
  foot() { return null; }
  rows() { throw new Error("rows required"); }
}
class Sales extends Report { rows() { return [10, 20]; } row(r) { return "$" + r; } foot() { return "total $" + this.rows().reduce((a, b) => a + b); } }
class Bare extends Report { rows() { return ["x"]; } head() { return null; } }
console.log(new Sales().render()); console.log(new Bare().render());
try { new Report().render(); } catch (e) { console.log(e.message); }
