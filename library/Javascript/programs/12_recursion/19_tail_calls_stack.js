// Deep recursion limits and converting to a loop.
const sumRec = (n) => (n === 0 ? 0 : n + sumRec(n - 1));
console.log(sumRec(8000));
const sumIter = (n) => { let s = 0; while (n) s += n--; return s; }; console.log(sumIter(1000000));
const stackSum = (n) => { const st = [n]; let s = 0; while (st.length) { const x = st.pop(); if (x) { s += x; st.push(x - 1); } } return s; }; console.log(stackSum(100000));
const fibIter = (n) => { let [a, b] = [0, 1]; while (n--) [a, b] = [b, a + b]; return a; }; const fibRec = (n) => (n < 2 ? n : fibRec(n - 1) + fibRec(n - 2)); console.log(fibIter(30), fibRec(25));
