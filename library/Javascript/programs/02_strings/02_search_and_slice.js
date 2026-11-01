// indexOf, includes, startsWith, slice, substring and at.
const text = "the quick brown fox jumps over the lazy dog";
console.log(text.indexOf("the"), text.lastIndexOf("the"), text.indexOf("the", 1), text.indexOf("cat"));
console.log(text.includes("fox"), text.startsWith("the"), text.endsWith("dog"), text.startsWith("quick", 4));
console.log(text.slice(4, 9), text.slice(-3), text.slice(-8, -4), text.slice(40), text.slice(5, 2));
console.log(text.substring(4, 9), text.substring(9, 4), text.substring(-3, 2), text.substr(4, 5));
console.log(text.charAt(4), text[4], text.at(-1), text.charCodeAt(0), text.codePointAt(1), text[99], text.charAt(99) === "");
console.log(text.length, text.split(" ").length, text.split("").length);
