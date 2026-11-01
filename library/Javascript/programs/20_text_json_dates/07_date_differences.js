// Age, durations and business days.
const D = (s) => new Date(s + "T00:00:00Z"), days = (a, b) => (D(b) - D(a)) / 864e5;
console.log(days("2024-01-01", "2024-12-31"), days("2023-03-01", "2023-02-01"), days("2000-02-28", "2000-03-01"));
const age = (b, n) => { const x = D(b), y = D(n); let a = y.getUTCFullYear() - x.getUTCFullYear(); if (y.getUTCMonth() < x.getUTCMonth() || (y.getUTCMonth() === x.getUTCMonth() && y.getUTCDate() < x.getUTCDate())) a--; return a; }; console.log(age("1990-06-15", "2024-06-14"), age("1990-06-15", "2024-06-15"));
const biz = (a, b) => { let c = 0; for (let t = D(a); t <= D(b); t = new Date(+t + 864e5)) if (t.getUTCDay() % 6) c++; return c; }; console.log(biz("2024-03-01", "2024-03-31"));
const fmt = (ms) => { const s = ms / 1000 | 0; return `${s / 86400 | 0}d ${(s % 86400) / 3600 | 0}h ${(s % 3600) / 60 | 0}m ${s % 60}s`; }; console.log(fmt(D("2024-03-01") - D("2024-02-28") + 3723000));
const wk = (s) => { const t = D(s), d = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() + 4 - d); const y = Date.UTC(t.getUTCFullYear(), 0, 1); return [t.getUTCFullYear(), Math.ceil(((t - y) / 864e5 + 1) / 7)]; }; console.log(wk("2024-01-01"), wk("2021-01-03"), wk("2020-12-31"));
