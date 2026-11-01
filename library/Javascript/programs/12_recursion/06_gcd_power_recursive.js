// gcd, fast power, digit sums and reverses.
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const pow = (b, e) => (e === 0 ? 1 : e % 2 ? b * pow(b, e - 1) : pow(b * b, e / 2));
const digits = (n) => (n < 10 ? n : (n % 10) + digits(Math.floor(n / 10)));
const rev = (s) => (s ? rev(s.slice(1)) + s[0] : "");
const bin = (n) => (n < 2 ? String(n) : bin(n >> 1) + (n & 1));
console.log(gcd(1071, 462), pow(2, 30), pow(3, 13), digits(987654321), rev("recursion"), bin(37));
