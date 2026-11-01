// Every loop form: for, while, do-while, for-in, for-of, labels.
for (let i = 0; i < 3; i++) console.log("for", i);
let w = 3;
while (w > 0) console.log("while", w--);
let d = 0;
do console.log("do", d); while (++d < 2);
for (const k in { a: 1, b: 2 }) console.log("in", k);
for (const i in ["x", "y"]) console.log("array in", i, typeof i);
for (const ch of "hey") console.log("of", ch);
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 2) continue outer;
    if (i === 2) break outer;
    console.log("label", i, j);
  }
}
