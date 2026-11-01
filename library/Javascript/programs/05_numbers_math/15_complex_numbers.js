// Complex arithmetic and a tiny Mandelbrot plot.
const c = (re, im = 0) => ({ re, im });
const add = (a, b) => c(a.re + b.re, a.im + b.im), mul = (a, b) => c(a.re * b.re - a.im * b.im, a.re * b.im + a.im * b.re);
const show = (z) => `${z.re}${z.im < 0 ? "-" : "+"}${Math.abs(z.im)}i`;
console.log(show(add(c(1, 2), c(3, -5))), show(mul(c(1, 2), c(3, 4))), Math.hypot(3, 4));
for (let y = -1; y <= 1.01; y += 0.25) {
  let line = "";
  for (let x = -2; x <= 0.5; x += 0.0625) {
    let z = c(0), n = 0;
    while (n < 30 && z.re * z.re + z.im * z.im < 4) { z = add(mul(z, z), c(x, y)); n++; }
    line += n === 30 ? "#" : n > 5 ? "+" : ".";
  }
  console.log(line);
}
