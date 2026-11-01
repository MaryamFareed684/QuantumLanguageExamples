// Binary tree height, sum, mirror and paths.
const T = (v, l = null, r = null) => ({ v, l, r });
const t = T(1, T(2, T(4), T(5, T(8))), T(3, null, T(6)));
const h = (n) => (n ? 1 + Math.max(h(n.l), h(n.r)) : 0), sum = (n) => (n ? n.v + sum(n.l) + sum(n.r) : 0), count = (n) => (n ? 1 + count(n.l) + count(n.r) : 0);
const mirror = (n) => n && T(n.v, mirror(n.r), mirror(n.l));
const paths = (n, p = []) => !n ? [] : !n.l && !n.r ? [[...p, n.v]] : [...paths(n.l, [...p, n.v]), ...paths(n.r, [...p, n.v])];
const inorder = (n) => (n ? [...inorder(n.l), n.v, ...inorder(n.r)] : []);
console.log(h(t), sum(t), count(t), inorder(t), inorder(mirror(t)), paths(t));
console.log(t);
console.log(JSON.stringify(mirror(T(1, T(2)))));
