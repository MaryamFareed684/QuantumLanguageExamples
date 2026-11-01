// Selection sort with a printed trace.
const a = [29, 10, 14, 37, 13];
for (let i = 0; i < a.length - 1; i++) { let m = i; for (let j = i + 1; j < a.length; j++) if (a[j] < a[m]) m = j; [a[i], a[m]] = [a[m], a[i]]; console.log(i, a.join(" ")); }
console.log(a);
