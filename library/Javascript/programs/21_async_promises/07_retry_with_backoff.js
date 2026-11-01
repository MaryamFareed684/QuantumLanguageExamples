// Async retries, timeouts and backoff delays.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let calls = 0; const flaky = async () => { if (++calls < 3) throw new Error("fail " + calls); return "ok " + calls; };
async function retry(f, n, d = 1) { for (let i = 0; ; i++) { try { return await f(); } catch (e) { console.log("retry", i, e.message, d); if (i + 1 >= n) throw e; await sleep(d); d *= 2; } } }
const timeout = (p, ms) => Promise.race([p, new Promise((_, j) => setTimeout(() => j(new Error("timeout")), ms))]);
(async () => { console.log(await retry(flaky, 5)); calls = -9; await retry(flaky, 2).catch((e) => console.log("gave up", e.message)); console.log(await timeout(sleep(1).then(() => "fast"), 50)); await timeout(sleep(50), 1).catch((e) => console.log(e.message)); })();
