// Grouping words into anagram classes.
const words = ["listen", "silent", "enlist", "google", "gogole", "cat", "act", "tac", "dog"];
const groups = {};
for (const w of words) {
  const key = [...w].sort().join("");
  (groups[key] ||= []).push(w);
}
console.log(groups);
console.log(Object.values(groups).filter((g) => g.length > 1).map((g) => g.join("/")));
const isAnagram = (a, b) => [...a].sort().join() === [...b].sort().join();
console.log(isAnagram("night", "thing"), isAnagram("abc", "abd"));
