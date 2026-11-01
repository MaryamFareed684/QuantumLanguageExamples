// Calendar computations: Easter, weekday counts, Julian days.
const easter = (Y) => { const a = Y % 19, b = Math.floor(Y / 100), c = Y % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451); return [Math.floor((h + l - 7 * m + 114) / 31), ((h + l - 7 * m + 114) % 31) + 1]; };
console.log([2000, 2024, 2025, 1961].map(easter));
const jd = (y, m, d) => { const a = Math.floor((14 - m) / 12), Y = y + 4800 - a, M = m + 12 * a - 3; return d + Math.floor((153 * M + 2) / 5) + 365 * Y + Math.floor(Y / 4) - Math.floor(Y / 100) + Math.floor(Y / 400) - 32045; };
console.log(jd(2000, 1, 1), jd(2024, 3, 1) - jd(2024, 2, 1), (jd(2024, 12, 25) - jd(2024, 1, 1)) % 7);
let sundays = 0; for (let y = 1901; y <= 2000; y++) for (let m = 0; m < 12; m++) if (new Date(Date.UTC(y, m, 1)).getUTCDay() === 0) sundays++; console.log(sundays);
