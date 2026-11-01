// Layered configuration: defaults, overrides and validation.
const defaults = { host: "localhost", port: 80, tls: { on: false, ca: null }, retries: 3 };
function config(user = {}) {
  const c = { ...defaults, ...user, tls: { ...defaults.tls, ...user.tls } };
  const problems = [];
  if (typeof c.port !== "number" || c.port < 1) problems.push(`bad port ${c.port}`);
  if (c.tls.on && !c.tls.ca) problems.push("tls needs ca");
  return { c, problems };
}
console.log(config());
console.log(config({ port: "x", tls: { on: true } }));
console.log(config({ host: "h", tls: { on: true, ca: "pem" } }).c);
