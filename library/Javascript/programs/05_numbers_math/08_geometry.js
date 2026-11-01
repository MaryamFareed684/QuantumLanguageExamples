// Areas, distances, polygons and circle math.
const area = { circle: (r) => Math.PI * r * r, rect: (w, h) => w * h, tri: (a, b, c) => { const s = (a + b + c) / 2; return Math.sqrt(s * (s - a) * (s - b) * (s - c)); } };
console.log(area.circle(1.5), area.rect(2, 3.5), area.tri(3, 4, 5));
const dist = ([x1, y1], [x2, y2]) => Math.hypot(x2 - x1, y2 - y1);
const poly = [[0, 0], [4, 0], [4, 3], [0, 3]];
const shoelace = (p) => Math.abs(p.reduce((s, [x, y], i) => { const [u, v] = p[(i + 1) % p.length]; return s + x * v - u * y; }, 0)) / 2;
const perim = (p) => p.reduce((s, q, i) => s + dist(q, p[(i + 1) % p.length]), 0);
console.log(dist([0, 0], [1, 1]), shoelace(poly), perim(poly));
const deg = (r) => (r * 180) / Math.PI, rad = (d) => (d * Math.PI) / 180;
console.log(deg(Math.PI), rad(180), Math.sin(rad(30)), Math.cos(rad(60)), Math.tan(rad(45)));
