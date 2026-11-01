// Caesar cipher with any shift, and ROT13.
function caesar(text, shift) {
  return text.replace(/[a-z]/gi, (c) => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + shift + 26 * 10) % 26) + base);
  });
}
const msg = "Attack at Dawn, 5 AM!";
const enc = caesar(msg, 3);
console.log(enc, "|", caesar(enc, -3));
console.log(caesar("Hello", 13), caesar(caesar("Hello", 13), 13));
for (let s = 1; s <= 3; s++) console.log(s, caesar("xyz", s));
