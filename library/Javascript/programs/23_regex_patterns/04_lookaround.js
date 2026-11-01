// Lookahead and lookbehind assertions.
console.log("price 100 USD 200 EUR".match(/\d+(?= USD)/)[0], "price 100 USD 200 EUR".match(/\d+(?! USD)\b/g), "$10 €20 £30".match(/(?<=€)\d+/)[0], "$10 €20 £30".match(/(?<!\$)\b\d+/g));
const strong = (p) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/.test(p); console.log(["Abcdef1!", "abcdef1!", "Ab1!", "ABCDEFG1"].map(strong));
console.log("1234567".replace(/\B(?=(\d{3})+$)/g, ","), "1234567.891".replace(/(?<!\.\d*)\B(?=(\d{3})+(?!\d))/g, ","), "camelCaseString".split(/(?=[A-Z])/), "a1b2".split(/(?<=\d)/), "foo.bar.baz".match(/[^.]+$/)[0], "aXbXc".replace(/X(?=b)/, "-"));
