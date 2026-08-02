const fs = require("node:fs");
const vm = require("node:vm");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const js = fs.readFileSync("app.js", "utf8");
const enhanced = fs.readFileSync("enhanced-content.js", "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(html.includes('dir="rtl"'), "HTML shell must be RTL");
assert(html.includes('class="app-shell"'), "Missing app shell");
assert(html.includes('class="sidebar"'), "Missing sidebar");
assert(html.includes('class="topbar"'), "Missing topbar");
assert(html.includes('class="ai-panel"'), "Missing AI panel");
assert(html.includes('class="lesson-workspace"'), "Missing lesson workspace");
assert(html.includes("lucide"), "Lucide icons must be loaded");
["dashboard", "units", "termsView", "practice", "coverage"].forEach((id) => {
  assert(html.includes(`id="${id}"`), `Missing view ${id}`);
  assert(html.includes(`data-view="${id}"`), `Missing nav button for ${id}`);
});

assert(css.includes("@media (max-width: 720px)"), "Missing mobile CSS");
assert(css.includes("#0b0d12") && css.includes("#6c7cff"), "Missing Linear-inspired color palette");
assert(css.includes("overflow-x: hidden"), "Missing horizontal overflow guard");
assert(css.includes(".sidebar.open") && css.includes("transform: translateX(0)"), "Missing mobile sidebar drawer behavior");
assert(css.includes(".answers") && css.includes("grid-template-columns: 1fr"), "Missing mobile answers layout");

const sandbox = {
  document: {
    querySelectorAll: () => [],
    addEventListener: () => {},
    getElementById: () => ({
      innerHTML: "",
      textContent: "",
      style: {},
      addEventListener: () => {},
      toggleAttribute: () => {},
    }),
  },
  window: {},
};
vm.createContext(sandbox);
vm.runInContext(js, sandbox);
vm.runInContext(enhanced, sandbox);

const { topics, terms, questions, materials } = sandbox.window.__practiceSiteData;
assert(topics.length === 9, `Expected 9 topics, got ${topics.length}`);
assert(terms.length >= 70, `Expected at least 70 terms, got ${terms.length}`);
assert(questions.length === 112, `Expected 112 questions, got ${questions.length}`);
const questionsByTopic = questions.reduce((counts, question) => {
  counts[question.topic] = (counts[question.topic] || 0) + 1;
  return counts;
}, {});
assert(topics.every((topic) => questionsByTopic[topic.id] >= 12), "Every topic needs at least 12 practice questions");
assert(materials.length === 15, `Expected 15 source files, got ${materials.length}`);
assert(materials.every((item) => item.href && item.href.startsWith("materials/")), "Every material needs a local source link");

const distribution = questions.reduce((counts, question) => {
  counts[question.answer] += 1;
  return counts;
}, [0, 0, 0, 0]);
assert(Math.max(...distribution) - Math.min(...distribution) <= 1, `Answer distribution is uneven: ${distribution.join(",")}`);
assert(html.includes("enhanced-content.js"), "Enhanced course material script is not loaded");
assert(enhanced.includes("מודל טאקמן") && enhanced.includes("עקרונות צ'יאלדיני"), "Enhanced course concepts missing");
assert(js.includes("const topicSourceLinks") && js.includes("target=\"_blank\"") && js.includes("topicSourceLinks[topic.id]"), "Topic cards must open original source files");
assert(js.includes(".topic-card .source-btn, .term-card .source-btn") && enhanced.includes("data-topic-source=\"${term.tag}\""), "All source buttons must use the in-app source viewer");
assert(html.includes("הורדת הקובץ המקורי"), "Original file link must be clearly labeled as download");
assert(!html.includes("Lorem ipsum") && !js.includes("TODO starter"), "Starter placeholder content found");

console.log("Practice site checks passed");
