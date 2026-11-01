// Pig Latin, vowel removal and syllable-like counting.
const pig = (w) => {
  const m = w.match(/^[^aeiou]+/);
  return m ? w.slice(m[0].length) + m[0] + "ay" : w + "way";
};
console.log("the quick brown fox ate apples".split(" ").map(pig).join(" "));
console.log("programming language".replace(/[aeiou]/g, ""));
const syll = (w) => (w.match(/[aeiouy]+/g) || []).length;
for (const w of ["hello", "beautiful", "sky", "rhythm", "queue"]) console.log(w, syll(w));
