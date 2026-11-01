// Reducers and Redux-like stores from pure functions.
const reducer = (s = { todos: [], next: 1 }, a) => { switch (a.type) { case "add": return { ...s, todos: [...s.todos, { id: s.next, t: a.t, done: false }], next: s.next + 1 }; case "toggle": return { ...s, todos: s.todos.map((x) => (x.id === a.id ? { ...x, done: !x.done } : x)) }; case "rm": return { ...s, todos: s.todos.filter((x) => x.id !== a.id) }; default: return s; } };
const store = (r) => { let s = r(undefined, { type: "@init" }); const subs = []; return { get: () => s, dispatch: (a) => { s = r(s, a); subs.forEach((f) => f(s)); return a; }, sub: (f) => subs.push(f) }; };
const st = store(reducer); let n = 0; st.sub(() => n++);
st.dispatch({ type: "add", t: "a" }); st.dispatch({ type: "add", t: "b" }); st.dispatch({ type: "toggle", id: 1 }); st.dispatch({ type: "rm", id: 2 }); st.dispatch({ type: "zzz" }); console.log(st.get(), n);
const hist = [{ type: "add", t: "x" }, { type: "toggle", id: 1 }].reduce((h, a) => [...h, reducer(h.at(-1), a)], [reducer(undefined, {})]); console.log(hist.map((s) => s.todos.length), hist[1] !== hist[2], hist);
