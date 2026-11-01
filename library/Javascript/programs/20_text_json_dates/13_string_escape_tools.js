// HTML, regex and shell escaping, and slug generation.
const html = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const un = (s) => s.replace(/&(amp|lt|gt|quot|#39);/g, (_, e) => ({ amp: "&", lt: "<", gt: ">", quot: '"', "#39": "'" }[e]));
const rx = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), sh = (s) => `'${s.replace(/'/g, `'\\''`)}'`, slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
console.log(html(`<a href="x">Tom & 'Jerry'</a>`), un(html("<&>")), rx("a.b*c[d]"), new RegExp(rx("1+1")).test("1+1=2"), sh("it's"), slug("  Crème Brûlée à la Carte! "));
console.log(JSON.stringify("tab\t nl\n q\" bs\\ uni  ctl\u0001"), escape("a b+é"), unescape("%41%u0042"), encodeURIComponent("é/?&=+ "), encodeURI("é/?&=+ "), decodeURI("%41%2F"));
