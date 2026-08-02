const fs = require("node:fs");
const vm = require("node:vm");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const js = fs.readFileSync("app.js", "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(html.includes('dir="rtl"'), "HTML shell must be RTL");
assert(html.includes('class="app-shell"'), "Missing app shell");
assert(html.includes('class="sidebar"'), "Missing sidebar");
assert(html.includes('class="topbar"'), "Missing topbar");
["dashboard", "units", "termsView", "practice", "coverage"].forEach((id) => {
  assert(html.includes(`id="${id}"`), `Missing view ${id}`);
  assert(html.includes(`data-view="${id}"`), `Missing nav button for ${id}`);
});

assert(css.includes("@media (max-width: 720px)"), "Missing mobile CSS");
assert(css.includes("overflow-x: hidden"), "Missing horizontal overflow guard");
assert(css.includes(".sidebar") && css.includes("position: static"), "Missing mobile sidebar behavior");
assert(css.includes(".answers") && css.includes("grid-template-columns: 1fr"), "Missing mobile answers layout");

const sandbox = {
  document: {
    querySelectorAll: () => [],
    getElementById: () => ({
      innerHTML: "",
      textContent: "",
      style: {},
      addEventListener: () => {},
    }),
  },
  window: {},
};
vm.createContext(sandbox);
vm.runInContext(js, sandbox);

const { topics, terms, questions, materials } = sandbox.window.__practiceSiteData;
assert(topics.length === 9, `Expected 9 topics, got ${topics.length}`);
assert(terms.length >= 36, `Expected at least 36 terms, got ${terms.length}`);
assert(questions.length === 36, `Expected 36 questions, got ${questions.length}`);
assert(materials.some((item) => item.status.includes("חסר")), "Missing source-material gap");

const distribution = questions.reduce((counts, question) => {
  counts[question.answer] += 1;
  return counts;
}, [0, 0, 0, 0]);
assert(distribution.every((count) => count === 9), `Answer distribution is uneven: ${distribution.join(",")}`);
assert(!html.includes("Lorem ipsum") && !js.includes("TODO starter"), "Starter placeholder content found");

console.log("Practice site checks passed");
