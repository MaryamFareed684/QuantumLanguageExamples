// Date: construction, getters, UTC methods and arithmetic.
const d = new Date(Date.UTC(2024, 1, 29, 13, 45, 30, 123));
console.log(d.toISOString(), d.getTime(), d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCDay(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());
console.log(JSON.stringify(d), d.toJSON(), d.toUTCString(), new Date(d) - d, +new Date(5), typeof Date.UTC, new Date(NaN).getTime(), String(new Date(NaN)));
console.log(new Date("2024-01-31T00:00:00Z").toISOString(), new Date("2024-01-31T10:00:00+02:00").toISOString(), Date.parse("2000-01-01T00:00:00Z"), Date.parse("garbage"), new Date(2024, 0).getMonth(), Date.UTC(1970, 0, 1), Date.UTC(1970, 0, 2));
const add = (t, n) => new Date(t.getTime() + n * 864e5).toISOString().slice(0, 10); console.log(add(d, 1), add(d, 366), add(d, -60));
const o = new Date(Date.UTC(2024, 0, 31)); o.setUTCDate(32); console.log(o.toISOString()); o.setUTCFullYear(2023, 1, 29); console.log(o.toISOString()); o.setUTCHours(25); console.log(o.toISOString());
console.log(d, [d], { d }, new Date(Date.UTC(1969, 11, 31)).getTime(), new Date(8.64e15).toISOString(), new Date(8.64e15 + 1).getTime());
