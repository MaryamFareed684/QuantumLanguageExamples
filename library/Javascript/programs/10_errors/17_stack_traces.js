// What stack traces contain and captureStackTrace.
function a() { return new Error("trace"); }
function b() { return a(); }
const lines = b().stack.split("\n");
console.log(lines[0], lines[1].trim().split(" ")[1], lines[2].trim().split(" ")[1], lines.length > 3);
class E extends Error { constructor(m) { super(m); Error.captureStackTrace?.(this, E); this.name = "E"; } }
console.log(new E("m").stack.split("\n")[0], typeof Error.captureStackTrace, typeof Error.stackTraceLimit);
const o = {}; Error.captureStackTrace(o); console.log(typeof o.stack, o.stack.split("\n")[0]);
