// Node's path and url modules, and hand-written helpers.
const path = require("path");
console.log(path.posix.join("a", "..", "b", "c.txt"), path.posix.basename("/x/y.tar.gz"), path.posix.basename("/x/y.tar.gz", ".gz"), path.posix.extname("/x/y.tar.gz"), path.posix.dirname("/x/y/z"), path.posix.resolve("/a/b", "../c"), path.posix.normalize("/a//b/../c/."), path.posix.isAbsolute("a"), path.posix.relative("/a/b/c", "/a/d"), path.posix.parse("/h/f.txt"), path.posix.format({ dir: "/d", base: "b" }), path.posix.sep);
const u = new URL("https://user:pw@example.com:8443/a/b/?x=1&y=two%20w#frag");
console.log(u.protocol, u.username, u.host, u.hostname, u.port, u.pathname, u.search, u.hash, u.origin, u.searchParams.get("y"), [...u.searchParams.keys()], u.href, String(u));
u.searchParams.append("z", "a b"); u.pathname = "/new"; console.log(u.href, JSON.stringify(u));
try { new URL("not a url"); } catch (e) { console.log(e.name, e.code); }
const os = require("os"); console.log(typeof os.EOL, typeof require("util").inspect, typeof require("events"), require("module").builtinModules.includes("fs"));
