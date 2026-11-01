// Run-length encoding and decoding.
function encode(s) {
  let out = "", i = 0;
  while (i < s.length) {
    let j = i;
    while (j < s.length && s[j] === s[i]) j++;
    out += (j - i > 1 ? j - i : "") + s[i];
    i = j;
  }
  return out;
}
const decode = (s) => s.replace(/(\d+)(.)/g, (_, n, c) => c.repeat(Number(n)));
for (const s of ["aaabbbccd", "abcd", "zzzzzzzzzzzz", ""]) {
  const e = encode(s);
  console.log(JSON.stringify(s), JSON.stringify(e), decode(e) === s);
}
