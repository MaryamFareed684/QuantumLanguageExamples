// How this is decided: method, detached, call, apply, bind, arrow.
const o = {
  n: "obj",
  regular() { return this?.n; },
  arrow: () => typeof this,
  nested() { return [1].map(() => this.n)[0]; },
  old() { return [1].map(function () { return this === undefined ? "undef" : typeof this; })[0]; },
};
console.log(o.regular(), o.arrow(), o.nested(), o.old());
const d = o.regular;
console.log(d.call({ n: "called" }), d.apply({ n: "applied" }, []), d.bind({ n: "bound" })(), d.bind({ n: "b1" }).bind({ n: "b2" })());
function strict() { "use strict"; return this; }
console.log(strict(), strict.call(5), typeof (function () { return this; }).call(5));
const add = function (a, b) { return this.base + a + b; };
console.log(add.call({ base: 1 }, 2, 3), add.apply({ base: 1 }, [2, 3]), add.bind({ base: 1 }, 2)(3), add.bind({}, 1).length, add.bind({}).name);
