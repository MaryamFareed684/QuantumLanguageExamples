// Palindrome checks with normalization, and palindromic substrings.
const clean = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
const isPal = (s) => { const c = clean(s); return c === [...c].reverse().join(""); };
for (const s of ["A man, a plan, a canal: Panama", "No lemon, no melon", "Hello", "", "12321"]) {
  console.log(JSON.stringify(s), isPal(s));
}
function longest(s) {
  let best = "";
  for (let c = 0; c < s.length; c++) {
    for (const [l0, r0] of [[c, c], [c, c + 1]]) {
      let l = l0, r = r0;
      while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }
      if (r - l - 1 > best.length) best = s.slice(l + 1, r);
    }
  }
  return best;
}
console.log(longest("forgeeksskeegfor"), longest("babad"), longest("abacdfgdcaba"));
