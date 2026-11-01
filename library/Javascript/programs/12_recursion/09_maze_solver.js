// Solving a text maze by backtracking.
const maze = ["#########", "#S  #   #", "# # # # #", "# #   # #", "# ##### #", "#      E#", "#########"].map((r) => [...r]);
function solve(r, c) {
  if (maze[r][c] === "E") return true;
  if (maze[r][c] !== " " && maze[r][c] !== "S") return false;
  if (maze[r][c] === " ") maze[r][c] = ".";
  const here = maze[r][c];
  if (here === "S") maze[r][c] = "s";
  for (const [dr, dc] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) if (solve(r + dr, c + dc)) return true;
  if (maze[r][c] === ".") maze[r][c] = "x";
  return false;
}
console.log(solve(1, 1));
console.log(maze.map((r) => r.join("")).join("\n"));
