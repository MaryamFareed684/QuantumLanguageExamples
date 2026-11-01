// Comb, cocktail-shaker and gnome sorts.
function comb(a) { let g = a.length, s = false; while (g > 1 || !s) { g = Math.max(1, Math.floor(g / 1.3)); s = true; for (let i = 0; i + g < a.length; i++) if (a[i] > a[i + g]) { [a[i], a[i + g]] = [a[i + g], a[i]]; s = false; } } return a; }
function cocktail(a) { let l = 0, h = a.length - 1; while (l < h) { for (let i = l; i < h; i++) if (a[i] > a[i + 1]) [a[i], a[i + 1]] = [a[i + 1], a[i]]; h--; for (let i = h; i > l; i--) if (a[i - 1] > a[i]) [a[i - 1], a[i]] = [a[i], a[i - 1]]; l++; } return a; }
function gnome(a) { let i = 0; while (i < a.length) { if (!i || a[i - 1] <= a[i]) i++; else { [a[i - 1], a[i]] = [a[i], a[i - 1]]; i--; } } return a; }
const d = () => [5, 1, 4, 2, 8, 0, 2]; console.log(comb(d()), cocktail(d()), gnome(d()));
