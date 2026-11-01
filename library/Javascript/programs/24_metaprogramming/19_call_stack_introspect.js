// Stack inspection, caller names and prepareStackTrace.
const names = () => { const o = Error.prepareStackTrace; Error.prepareStackTrace = (_, s) => s; const st = new Error().stack; Error.prepareStackTrace = o; return st.map((c) => c.getFunctionName()).filter(Boolean); };
function alpha() { return beta(); } function beta() { return names(); } console.log(alpha().slice(0, 3));
const where = () => new Error().stack.split("\n")[2].trim().split(" ")[1]; function caller() { return where(); } console.log(caller());
class Q { m() { return where(); } static s() { return where(); } } console.log(new Q().m(), Q.s(), (() => where())(), [1].map(() => where())[0]);
const lim = Error.stackTraceLimit; Error.stackTraceLimit = 1; console.log(new Error("x").stack.split("\n").length); Error.stackTraceLimit = 0; console.log(new Error("x").stack.split("\n").length); Error.stackTraceLimit = lim;
console.log(typeof module.paths, module.id, require.main === module, typeof require.resolve, typeof module.exports, Object.keys(exports).length, __filename.endsWith(".js"), process.argv.length, typeof process.env, typeof process.pid, process.platform.length > 0, typeof process.memoryUsage, process.version.startsWith("v"), process.exitCode);
