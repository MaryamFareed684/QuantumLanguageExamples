// A small Markdown to HTML converter.
function md(s) {
  const inline = (t) => t.replace(/&/g, "&amp;").replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>").replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  const o = []; let list = false;
  for (const l of s.split("\n")) { const h = /^(#{1,6}) (.*)/.exec(l); const b = /^- (.*)/.exec(l); if (list && !b) { o.push("</ul>"); list = false; } if (h) o.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`); else if (b) { if (!list) { o.push("<ul>"); list = true; } o.push(`<li>${inline(b[1])}</li>`); } else if (l.trim()) o.push(`<p>${inline(l)}</p>`); }
  if (list) o.push("</ul>"); return o.join("\n");
}
console.log(md("# Title\nSome **bold** and *it* and `code` & [link](http://x).\n\n- one\n- two *x*\n\n## Sub\nend"));
