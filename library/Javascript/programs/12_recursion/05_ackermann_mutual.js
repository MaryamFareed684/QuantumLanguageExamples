// Ackermann, mutual recursion and Hofstadter sequences.
const A = (m, n) => (m === 0 ? n + 1 : n === 0 ? A(m - 1, 1) : A(m - 1, A(m, n - 1)));
console.log(A(1, 2), A(2, 3), A(3, 3));
const isEven = (n) => (n === 0 ? true : isOdd(n - 1)), isOdd = (n) => (n === 0 ? false : isEven(n - 1));
console.log(isEven(10), isOdd(7), isEven(7));
const F = (n) => (n === 0 ? 1 : n - M(F(n - 1))), M = (n) => (n === 0 ? 0 : n - F(M(n - 1)));
console.log([...Array(12).keys()].map(F), [...Array(12).keys()].map(M));
