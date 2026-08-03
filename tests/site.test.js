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
assert(topics.length === 5, `Expected 5 topics, got ${topics.length}`);
assert(topics.map((topic) => topic.title).join("|").includes("עבודת צוות") && topics.map((topic) => topic.title).join("|").includes("שכנוע"), "Main topics do not match the requested course structure");
assert(terms.length >= 80, `Expected at least 80 terms, got ${terms.length}`);
assert(questions.length === 130, `Expected 130 questions, got ${questions.length}`);
assert(questions.filter((question) => question.exam).length === 18, "Exam sample question set is incomplete");
assert(!js.includes("בהקשר המתואר בשאלה ובמסגרת התקשורת הבין אישית"), "Artificial answer padding must not return");
const questionsByTopic = questions.reduce((counts, question) => {
  counts[question.topic] = (counts[question.topic] || 0) + 1;
  return counts;
}, {});
assert(topics.every((topic) => questionsByTopic[topic.id] >= 12), "Every topic needs at least 12 practice questions");
assert(materials.length === 35, `Expected 35 source files, got ${materials.length}`);
assert(materials.filter((item) => item.href.endsWith(".m4a")).length === 18, "Audio source collection is incomplete");
assert(materials.some((item) => item.href.endsWith("audio_transcripts__all.txt")), "Audio transcript source is missing");
assert(materials.every((item) => item.href && item.href.startsWith("materials/")), "Every material needs a local source link");

const distribution = questions.reduce((counts, question) => {
  counts[question.answer] += 1;
  return counts;
}, [0, 0, 0, 0]);
assert(Math.max(...distribution) - Math.min(...distribution) <= 1, `Answer distribution is uneven: ${distribution.join(",")}`);
assert(html.includes("enhanced-content.js"), "Enhanced course material script is not loaded");
assert(html.includes('class="course-video"') && html.includes('id="courseIntroVideo"') && html.includes('src="materials/כשירות_תקשורתית__ארגז_הכלים.mp4"'), "Main course video is missing");
assert(html.includes('class="ai-welcome-video"') && html.includes('id="welcomeVideo"') && html.includes('src="materials/videos/סרטון הסבר.mp4"') && html.includes("autoplay muted") && html.includes("playsinline"), "Side explainer video must autoplay safely on mobile");
assert(!html.includes("loop"), "Welcome video must play once per page entry");
assert(html.includes('id="searchStatus"') && html.includes('id="searchResults"') && js.includes("function searchMatches") && js.includes("function openSearchResult"), "Global search must show matching content");
assert(enhanced.includes("מודל טאקמן") && enhanced.includes("עקרונות צ'יאלדיני"), "Enhanced course concepts missing");
assert(enhanced.includes("שיעור הכנה למבחן.pptx") && enhanced.includes("examQuestionSeeds"), "Exam preparation material is not wired into the site");
assert(js.includes("שאלות דוגמה למבחן") && js.includes("openExamPractice"), "Exam practice entry point is missing");
assert(js.includes("const topicSourceLinks") && js.includes("target=\"_blank\"") && js.includes("topicSourceLinks[topic.id]"), "Topic cards must open original source files");
assert(js.includes(".topic-card .source-btn, .term-card .source-btn") && enhanced.includes("data-topic-source=\"${term.tag}\""), "All source buttons must use the in-app source viewer");
assert(html.includes("הורדת הקובץ המקורי"), "Original file link must be clearly labeled as download");
assert(!html.includes("Lorem ipsum") && !js.includes("TODO starter"), "Starter placeholder content found");

console.log("Practice site checks passed");
