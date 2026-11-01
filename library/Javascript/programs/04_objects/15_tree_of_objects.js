// Walking a nested file-tree object and summing sizes.
const tree = { name: "root", children: [
  { name: "a.txt", size: 10 },
  { name: "src", children: [{ name: "m.js", size: 120 }, { name: "lib", children: [{ name: "u.js", size: 30 }] }] },
  { name: "empty", children: [] },
] };
const size = (n) => n.size ?? n.children.reduce((s, c) => s + size(c), 0);
function print(n, depth = 0) {
  console.log("  ".repeat(depth) + n.name + (n.children ? "/" : "") + " " + size(n));
  n.children?.forEach((c) => print(c, depth + 1));
}
print(tree);
const paths = (n, pre = "") => n.children ? n.children.flatMap((c) => paths(c, pre + n.name + "/")) : [pre + n.name];
console.log(paths(tree));
console.log(tree);
