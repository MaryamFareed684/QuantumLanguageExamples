// instanceof with prototypes that change, and cross checks.
function F() {}
const f = new F();
console.log(f instanceof F);
F.prototype = {};
console.log(f instanceof F, new F() instanceof F, f.constructor === F, new F().constructor === Object);
class A {} const B = A.bind(null);
console.log(new A() instanceof B, new B() instanceof A, B.name, B.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(new (class extends A {})())) === A.prototype);
console.log(typeof null, typeof [], typeof class {}, typeof Symbol(), typeof 1n, typeof undefined, typeof function* () {}, typeof async function () {});
