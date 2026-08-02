const topics = [
  {
    id: "effective",
    title: "תקשורת אפקטיבית",
    lesson: "יחידה 1",
    priority: "בסיס חובה",
    focus: ["מודל מוען-מסר-ערוץ-נמען-משוב", "הקשבה פעילה ושאלות הבהרה", "התאמת מסר לקהל ולמטרה"],
    source: "מבוסס על נושאי הקורס שסופקו; אין קובצי מקור זמינים בתיקייה.",
  },
  {
    id: "feedback",
    title: "מתן משוב בונה",
    lesson: "יחידה 2",
    priority: "יישום גבוה",
    focus: ["הפרדה בין התנהגות לאדם", "משוב ספציפי, מאוזן ובר-פעולה", "מודל תיאור-השפעה-בקשה"],
    source: "נדרש קישור למצגות/סיכומי שיעור לאחר העלאתם לריפו.",
  },
  {
    id: "empathy",
    title: "תקשורת אמפתית ותקשורת מקרבת",
    lesson: "יחידה 3",
    priority: "בסיס ליחסים",
    focus: ["זיהוי רגש וצורך", "שיקוף ללא שיפוט", "ניסוח בקשה במקום דרישה"],
    source: "מבוסס על עקרונות אמפתיה ותקשורת מקרבת.",
  },
  {
    id: "conflict",
    title: "ניהול שיחות קשות וקונפליקטים",
    lesson: "יחידה 4",
    priority: "סימולציות",
    focus: ["הורדת הסלמה", "הפרדת עמדות מאינטרסים", "הסכמה על צעדים המשכיים"],
    source: "נדרש עיגון במצגות הקורס כשיצורפו.",
  },
  {
    id: "culture",
    title: "תקשורת עם אנשים מתרבויות שונות",
    lesson: "יחידה 5",
    priority: "רגישות גבוהה",
    focus: ["הקשר גבוה ונמוך", "הימנעות מהכללות", "בדיקת פרשנות מול הצד השני"],
    source: "מבוסס על נושא הקורס; יש להשלים דוגמאות מהחומרים.",
  },
  {
    id: "public",
    title: "עמידה בפני קהל",
    lesson: "יחידה 6",
    priority: "מיומנות ביצוע",
    focus: ["מבנה פתיחה-גוף-סיום", "שפת גוף וקול", "התמודדות עם שאלות"],
    source: "מתאים לתרגול הצגה קצרה וסימולציות.",
  },
  {
    id: "persuasion",
    title: "שכנוע והשפעה",
    lesson: "יחידה 7",
    priority: "יישום מתקדם",
    focus: ["אתוס, פתוס ולוגוס", "התאמת טיעון למניעי הקהל", "שימוש אתי בהשפעה"],
    source: "מבוסס על מסגרת כללית; יש להשלים דוגמאות מהקורס.",
  },
  {
    id: "impression",
    title: "ניהול רושם והתרשמות מאחרים",
    lesson: "יחידה 8",
    priority: "מבחן וראיון",
    focus: ["רושם ראשוני", "ייחוס והטיות תפיסה", "עקביות בין מסרים מילוליים ולא מילוליים"],
    source: "נדרש עיגון בחומרי הקורס לאחר העלאה.",
  },
  {
    id: "interviews",
    title: "ראיונות עבודה אפקטיביים",
    lesson: "יחידה 9",
    priority: "תרגול מסכם",
    focus: ["הכנת סיפורי STAR", "הקשבה לשאלת המראיין", "שאלות למעסיק וסגירה מקצועית"],
    source: "מיועד לתרגול מעשי לקראת סימולציית ראיון.",
  },
];

const topicAliases = {
  effective: "effective",
  feedback: "teamwork",
  empathy: "empathy",
  conflict: "conflict",
  culture: "influence",
  public: "influence",
  persuasion: "influence",
  impression: "influence",
  interviews: "influence",
};

topics.splice(0, topics.length,
  {
    id: "effective",
    title: "תקשורת אפקטיבית",
    lesson: "יחידה 1",
    priority: "מודלים, רעש, ערוצים",
    focus: ["מודלים של תקשורת", "רעש תקשורתי", "ערוצים ומשוב"],
    source: "מודלים, רעש, ערוצים ומשוב בתקשורת בין-אישית.",
  },
  {
    id: "empathy",
    title: "אמפתיה",
    lesson: "יחידה 2",
    priority: "הקשבה, שיקוף, תיקוף",
    focus: ["הקשבה פעילה", "שיקוף", "תיקוף רגשי וצרכים"],
    source: "אמפתיה, שיחה אמפתית ותקשורת מקרבת.",
  },
  {
    id: "conflict",
    title: "קונפליקטים ושיחות קשות",
    lesson: "יחידה 3",
    priority: "סגנונות, שלוש השיחות",
    focus: ["סגנונות קונפליקט", "שלוש השיחות", "הסלמה, אינטרסים ותקשורת מקרבת"],
    source: "קונפליקט, שיחות קשות ושיחת למידה.",
  },
  {
    id: "teamwork",
    title: "עבודת צוות",
    lesson: "יחידה 4",
    priority: "שלבים, תפקידים, משוב",
    focus: ["שלבי התפתחות צוות", "תפקידי תקשורת בצוות", "משוב, סינרגיה וקבלת החלטות"],
    source: "עבודת צוות, מודל טאקמן, תפקידים ומשוב.",
  },
  {
    id: "influence",
    title: "שכנוע, רושם ושפת גוף",
    lesson: "יחידה 5",
    priority: "נתיבים, עקרונות, לא-מילולי",
    focus: ["נתיבי שכנוע ועקרונות השפעה", "רושם וניהול רושם", "שפת גוף ותקשורת לא-מילולית"],
    source: "שכנוע, התרשמות וניהול רושם, שפת גוף וראיונות.",
  },
);
window.__topicAliases = topicAliases;

const terms = [
  ["מסר", "Message", "התוכן שהמוען מעביר, כולל מילים, טון, שפת גוף והקשר.", "effective"],
  ["ערוץ תקשורת", "Channel", "האמצעי שבו המסר עובר: פנים אל פנים, טלפון, מייל, מצגת או שיחה מקוונת.", "effective"],
  ["משוב", "Feedback", "תגובת הנמען שמאפשרת למוען להבין כיצד המסר התקבל.", "effective"],
  ["רעש תקשורתי", "Noise", "כל גורם שמפריע להבנת המסר: רעש פיזי, עומס רגשי, הנחות מוקדמות או ניסוח עמום.", "effective"],
  ["הקשבה פעילה", "Active Listening", "הקשבה הכוללת קשר עין, שאלות הבהרה, שיקוף וסיכום ביניים.", "effective"],
  ["שאלת הבהרה", "Clarifying Question", "שאלה שמטרתה לבדוק הבנה לפני תגובה או החלטה.", "effective"],
  ["משוב בונה", "Constructive Feedback", "משוב שמכוון לשיפור עתידי ומתמקד בהתנהגות ספציפית ולא באופי האדם.", "feedback"],
  ["משוב תיאורי", "Descriptive Feedback", "תיאור עובדתי של מה שנצפה, בלי תיוג או האשמה.", "feedback"],
  ["איזון במשוב", "Balanced Feedback", "שילוב בין הכרה במה שעבד לבין אזור מדויק לשיפור.", "feedback"],
  ["בקשה ברת פעולה", "Actionable Request", "הצעה קונקרטית להתנהגות שניתן לבצע, למדוד ולתרגל.", "feedback"],
  ["תזמון משוב", "Feedback Timing", "בחירת זמן שבו האדם פנוי רגשית וקוגניטיבית לשמוע ולעבד את המשוב.", "feedback"],
  ["אמפתיה", "Empathy", "יכולת להבין את החוויה של אדם אחר ולשדר שהחוויה שלו נשמעת ונלקחת ברצינות.", "empathy"],
  ["שיקוף", "Reflection", "חזרה מדויקת ותמציתית על דברי הזולת כדי לוודא הבנה ולתת תחושת הכרה.", "empathy"],
  ["צורך", "Need", "ערך או מניע בסיסי שמסתתר מאחורי רגש, תלונה או דרישה.", "empathy"],
  ["תצפית ללא שיפוט", "Observation", "תיאור מצב קונקרטי בלי פרשנות מעריכה כגון 'זלזלת' או 'לא אכפת לך'.", "empathy"],
  ["בקשה ולא דרישה", "Request", "ניסוח פעולה רצויה שמאפשר לצד השני בחירה ושיח, במקום כפייה.", "empathy"],
  ["קונפליקט", "Conflict", "התנגשות בין מטרות, צרכים, ערכים או פרשנויות של אנשים או קבוצות.", "conflict"],
  ["הסלמה", "Escalation", "מעבר משיח ענייני להתקפה, הגנה, צעקות, ניתוק או הכללות.", "conflict"],
  ["אינטרס", "Interest", "הצורך העמוק שמאחורי עמדה מוצהרת במשא ומתן או קונפליקט.", "conflict"],
  ["מסגור מחדש", "Reframing", "ניסוח מחדש של הבעיה כך שתאפשר פתרון ולא תעמיק מאבק זהות.", "conflict"],
  ["תרבות הקשר גבוה", "High-context Culture", "תרבות שבה משמעות רבה נמצאת בהקשר, ביחסים, ברמזים ובמה שלא נאמר ישירות.", "culture"],
  ["תרבות הקשר נמוך", "Low-context Culture", "תרבות שבה מצופה מסר מפורש, ישיר ומפורט יותר.", "culture"],
  ["כשירות בין-תרבותית", "Intercultural Competence", "יכולת לתקשר מתוך סקרנות, כבוד ובדיקת הנחות במפגש בין תרבויות.", "culture"],
  ["הכללה תרבותית", "Stereotyping", "ייחוס תכונה לאדם רק בגלל שיוך קבוצתי, בלי בדיקה אישית.", "culture"],
  ["פתיחת מצגת", "Opening", "רגע שבו מציגים את הנושא, הרלוונטיות והציפייה מהקהל.", "public"],
  ["שפת גוף", "Body Language", "מסרים לא מילוליים כמו יציבה, תנועות ידיים, מבט ומרחק.", "public"],
  ["קשר עין", "Eye Contact", "חלוקת מבט שמייצרת נוכחות, אמון ותחושת שיחה עם הקהל.", "public"],
  ["התמודדות עם שאלות", "Q&A Handling", "הקשבה לשאלה, חזרה קצרה עליה, מענה ענייני וחזרה למסר המרכזי.", "public"],
  ["אתוס", "Ethos", "אמינות הדובר בעיני הקהל: מומחיות, יושרה ונוכחות מקצועית.", "persuasion"],
  ["פתוס", "Pathos", "פנייה לרגש, לערכים ולחוויה האנושית של הקהל.", "persuasion"],
  ["לוגוס", "Logos", "שימוש בנתונים, סיבתיות, דוגמאות ומבנה טיעוני ברור.", "persuasion"],
  ["התנגדות", "Objection", "ספק או חסם שהקהל מעלה מול המסר, ההצעה או הדובר.", "persuasion"],
  ["רושם ראשוני", "First Impression", "הערכה מהירה שנוצרת בתחילת מפגש ומשפיעה על פרשנות ההמשך.", "impression"],
  ["אפקט ההילה", "Halo Effect", "נטייה להסיק תכונות חיוביות רבות על בסיס תכונה חיובית אחת.", "impression"],
  ["ייחוס", "Attribution", "הסבר שאנו נותנים להתנהגות של אדם: אופי, מצב, נסיבות או כוונה.", "impression"],
  ["ניהול רושם", "Impression Management", "בחירה מודעת של מסרים מילוליים ולא מילוליים כדי ליצור תפיסה רצויה ואותנטית.", "impression"],
  ["ראיון מובנה", "Structured Interview", "ראיון שבו שאלות וקריטריונים קבועים מראש כדי לשפר הוגנות והשוואה.", "interviews"],
  ["שיטת STAR", "STAR Method", "תיאור סיטואציה, משימה, פעולה ותוצאה כדי לענות על שאלות התנהגותיות.", "interviews"],
  ["שאלה התנהגותית", "Behavioral Question", "שאלה המבקשת דוגמה מהעבר כדי לנבא התנהגות עתידית.", "interviews"],
  ["סגירת ראיון", "Interview Closing", "סיכום התאמה, הבעת עניין ושאלה על המשך התהליך.", "interviews"],
].map(([name, english, text, tag]) => ({
  name,
  english,
  text,
  tag,
  reference: "חומר מקור לא צורף לתיקייה המקומית",
}));

terms.forEach((term) => {
  term.tag = topicAliases[term.tag] || term.tag;
});

const rawQuestions = [
  ["effective", "חבר צוות מסביר משימה ארוכה, ובסוף מתברר שכל אחד הבין אחרת. מה הפעולה האפקטיבית ביותר בזמן אמת?", ["לבקש מכל משתתף לסכם את הצעד הבא במילים שלו", "להניח שההסבר היה ברור כי כולם הנהנו", "לשלוח הודעה קצרה בלי לוודא קבלה", "להמשיך לפגישה הבאה כדי לא לעכב"], 0, "סיכום במילים של הנמען יוצר משוב ומזהה פערי הבנה לפני שהם הופכים לטעות."],
  ["effective", "מתי עדיף לבחור שיחה פנים אל פנים במקום הודעת טקסט?", ["כאשר המסר רגיש, מורכב או דורש קריאת תגובות", "כאשר רוצים להימנע מכל משוב", "כאשר אין חשיבות לטון", "כאשר המטרה היא רק לתעד שעה"], 0, "ערוץ עשיר מתאים למסרים שיש בהם רגש, אי בהירות או סיכון לפרשנות שגויה."],
  ["effective", "איזה ניסוח הוא שאלת הבהרה טובה?", ["כשאמרת 'דחוף', אתה מתכוון להיום עד 17:00?", "למה תמיד אתה מלחיץ?", "ברור שאתה לא מאורגן, נכון?", "אז אין לך מושג מה אתה רוצה?"], 0, "שאלת הבהרה מתמקדת במשמעות מעשית ולא בשיפוט האדם."],
  ["effective", "מהו רעש תקשורתי בדוגמה של פגישה בזום שבה משתתף כועס מפרש כל הערה כביקורת?", ["מצב רגשי שמפריע לפענוח המסר", "בחירה נכונה בערוץ תקשורת", "משוב בונה", "סגירה מוצלחת של שיחה"], 0, "רעש יכול להיות פנימי ורגשי, לא רק צליל חיצוני."],
  ["feedback", "מנהלת רוצה להעיר לעובד שאיחר שלוש פעמים. מהו פתיח בונה?", ["שמתי לב שבשלוש ישיבות השבוע נכנסת אחרי שעת הפתיחה, ואני רוצה לתאם ציפיות להמשך", "אתה לא רציני", "כולם יודעים שאי אפשר לסמוך עליך", "אין לי כוח להסביר שוב"], 0, "משוב בונה מתחיל בתיאור התנהגות מדויק ובהשפעה, לא בתווית אישיותית."],
  ["feedback", "מה חסר במשוב 'המצגת שלך לא טובה'?", ["ספציפיות והצעה לשיפור", "ביקורת חריפה יותר", "השוואה למישהו אחר", "התעלמות מהבעיה"], 0, "בלי דוגמה ופעולה עתידית האדם לא יודע מה לשנות."],
  ["feedback", "עובדת מגיבה בהתגוננות למשוב. מה כדאי לעשות?", ["להאט, לשקף את הקושי ולחזור למטרה המשותפת", "להעלות את הקול כדי להבהיר סמכות", "לסיים מיד בלי סיכום", "להוסיף עוד האשמות"], 0, "שיקוף והחזרת השיחה למטרה מפחיתים איום ומאפשרים הקשבה."],
  ["feedback", "איזה מרכיב הופך משוב לבר-פעולה?", ["בקשה התנהגותית קונקרטית להמשך", "אמירה כללית על אופי", "רמז עקיף בלבד", "עונש ללא הסבר"], 0, "בר-פעולה פירושו שהצד השני יודע איזו התנהגות לנסות בפעם הבאה."],
  ["empathy", "חבר אומר 'אף אחד לא מעריך אותי פה'. מה תגובה אמפתית?", ["נשמע שאתה מרגיש מתוסכל ורוצה שיראו את התרומה שלך", "אתה מגזים", "גם לי קשה, עזוב", "אז פשוט תפסיק להשקיע"], 0, "תגובה אמפתית מזהה רגש וצורך בלי לבטל או לפתור מהר מדי."],
  ["empathy", "במודל תקשורת מקרבת, מה בא לפני בקשה?", ["תצפית, רגש וצורך", "איום, האשמה ודרישה", "בדיחה ואז ניתוק", "השוואה לאנשים אחרים"], 0, "בקשה נשענת על תיאור מצב, רגש וצורך כדי שתהיה מובנת ולא כוחנית."],
  ["empathy", "איזה משפט הוא תצפית ללא שיפוט?", ["בשלוש הפגישות האחרונות דיברת בזמן שהצגתי", "אתה חסר כבוד", "לא אכפת לך מאף אחד", "אתה תמיד משתלט"], 0, "תצפית מתארת מה קרה בפועל ונמנעת מתוויות."],
  ["empathy", "מה ההבדל בין בקשה לדרישה?", ["בקשה מאפשרת דיאלוג וסירוב, דרישה מציבה איום או כפייה", "אין הבדל", "בקשה תמיד מעורפלת", "דרישה תמיד אמפתית יותר"], 0, "תקשורת מקרבת שואפת לבקשות ברורות שאינן מבוססות פחד."],
  ["conflict", "שיחה קשה מתחילה להפוך להאשמות הדדיות. מה כדאי לעשות?", ["לעצור, להגדיר את המטרה המשותפת ולנסח מחדש את הבעיה", "להוכיח מי התחיל", "להוסיף דוגמאות ישנות", "לעזוב בלי לקבוע המשך"], 0, "מסגור מחדש מחזיר את השיחה מוויכוח אישי לפתרון בעיה."],
  ["conflict", "מהי דוגמה להפרדה בין עמדה לאינטרס?", ["העמדה היא 'אני רוצה לעבוד מהבית'; האינטרס הוא ריכוז וזמן נסיעה", "העמדה והאינטרס תמיד זהים", "אינטרס הוא העלבה", "עמדה היא רק שפת גוף"], 0, "הבנת האינטרס מאפשרת פתרונות נוספים מעבר לעמדה המקורית."],
  ["conflict", "איזו תגובה מורידה הסלמה?", ["אני רוצה להבין מה הכי חשוב לך לפני שנציע פתרון", "אתה תמיד עושה דרמה", "אין על מה לדבר", "כולם בצד שלי"], 0, "סקרנות ומיקוד בצרכים מפחיתים איום ומחזירים שליטה."],
  ["conflict", "מה חשוב לסכם בסוף שיחה קשה?", ["הסכמות, אחריות, לוחות זמנים ונקודת בדיקה", "מי ניצח", "רשימת אשמים", "רק תחושה כללית שהכול בסדר"], 0, "סיכום מעשי מונע חזרה לאותו קונפליקט בלי שינוי."],
  ["culture", "אדם מתרבות אחרת עונה בעקיפין לבקשה. מה כדאי לעשות?", ["לבדוק בנימוס את המשמעות ולא להניח חוסר שיתוף פעולה", "להסיק שהוא מסתיר משהו", "להתעלם מההבדל", "לדרוש תשובה בסגנון שלך בלבד"], 0, "במפגש בין-תרבותי בודקים פרשנות לפני שופטים כוונה."],
  ["culture", "מה מאפיין תקשורת בהקשר גבוה?", ["רמזים, יחסים והקשר משפיעים מאוד על משמעות המסר", "כל מידע נאמר תמיד במפורש", "אין משמעות לשפת גוף", "המסר מנותק ממעמד ויחסים"], 0, "בתרבות הקשר גבוה חלק מהמשמעות נמצא במה שסביב המילים."],
  ["culture", "כיצד נמנעים מהכללה תרבותית?", ["שואלים, בודקים ומחזיקים הנחות בזהירות", "מייחסים תכונה קבועה לכל חברי הקבוצה", "מחקים מבטא", "נמנעים מכל שיחה"], 0, "כשירות בין-תרבותית נשענת על סקרנות וכבוד, לא על סטריאוטיפים."],
  ["culture", "עמית מפרש שתיקה כחוסר הסכמה, אך בתרבות אחרת שתיקה יכולה לסמן כבוד. מה נכון לעשות?", ["לשאול איך נכון לו להתייחס לנושא ולתת זמן תגובה", "להכריז שהוא מתנגד", "למלא את השתיקה בהאשמות", "להחליט שאין לו דעה"], 0, "אותה התנהגות יכולה לקבל משמעות שונה בתרבויות שונות."],
  ["public", "מה פתיחה חזקה בהרצאה קצרה צריכה לעשות?", ["להבהיר נושא, רלוונטיות ומפת דרך קצרה", "להתנצל במשך דקה", "להקריא את כל השקף הראשון", "להתחיל בפרטים טכניים בלבד"], 0, "פתיחה טובה נותנת לקהל סיבה להקשיב ומסגרת לציפיות."],
  ["public", "מציג נשאל שאלה שהוא לא יודע. מה תגובה מקצועית?", ["להודות, לציין מה כן ידוע ולהתחייב לבדוק", "להמציא תשובה", "ללעוג לשואל", "להתעלם ולהמשיך"], 0, "אמינות נשמרת כשמכירים במגבלת הידע ולא ממציאים."],
  ["public", "מה שימוש נכון בקשר עין?", ["חלוקת מבט טבעית בין אזורים בקהל", "בהייה באדם אחד בלבד", "הסתכלות רק במסך", "עצימת עיניים כדי להתרכז"], 0, "קשר עין מפוזר יוצר חיבור בלי להלחיץ אדם אחד."],
  ["public", "מה מסייע להפחתת חרדה לפני הצגה?", ["תרגול פתיחה, נשימה ומבנה ברור", "הימנעות מוחלטת מחזרות", "הוספת עוד ועוד שקפים", "דיבור מהר כדי לסיים"], 0, "מוכנות גופנית ותוכניתית מפחיתה עומס בזמן אמת."],
  ["persuasion", "איזה שילוב יוצר טיעון משכנע ואתי?", ["אמינות הדובר, היגיון ברור וחיבור לערכי הקהל", "לחץ חברתי בלבד", "הפחדה בלי נתונים", "הסתרת חסרונות בכוונה"], 0, "שכנוע איכותי משלב אתוס, לוגוס ופתוס בלי מניפולציה פוגענית."],
  ["persuasion", "לקוח מתנגד להצעה בגלל מחיר. מה כדאי לעשות?", ["לברר את מקור ההתנגדות ולחבר ערך לצורך שלו", "להגיד שאין לו תקציב כי הוא לא רציני", "להתעלם ולעבור נושא", "להוריד מחיר מיד בלי להבין"], 0, "התנגדות היא מידע על חסם; קודם מבינים ואז מגיבים."],
  ["persuasion", "מהו שימוש בלוגוס?", ["הצגת נתונים ודוגמה שמחזקת את הטענה", "רק סיפור מרגש", "רק תואר התפקיד של הדובר", "שתיקה מכוונת"], 0, "לוגוס הוא הצד ההגיוני והמבוסס של המסר."],
  ["persuasion", "מה הופך השפעה ללא אתית?", ["ניצול פחדים והסתרת מידע מהותי", "הצגת יתרונות וחסרונות", "התאמת מסר לקהל", "שימוש בדוגמה רלוונטית"], 0, "השפעה אתית משאירה לצד השני יכולת בחירה מושכלת."],
  ["impression", "מועמד נכנס לראיון באיחור ולא מתייחס לכך. איזו השפעה אפשרית?", ["הרושם הראשוני יגרום לפרשנות שלילית גם לתשובות טובות", "אין לרושם ראשוני שום השפעה", "המראיין חייב לשכוח מיד", "זה תמיד יוצר יתרון"], 0, "רושם ראשון משפיע על אופן פירוש מידע שמגיע אחר כך."],
  ["impression", "מהו אפקט ההילה?", ["הסקת תכונות חיוביות רבות בגלל תכונה חיובית בולטת אחת", "בדיקת מידע באופן שיטתי", "התעלמות ממראה חיצוני", "שינוי עמדה אחרי משוב"], 0, "אפקט ההילה הוא הטיית התרשמות נפוצה."],
  ["impression", "איך מנהלים רושם באופן אותנטי?", ["יוצרים התאמה בין מסר, התנהגות, לבוש והכנה", "משחקים דמות שאין לה קשר למציאות", "מבטיחים דברים שלא יודעים לקיים", "מסתירים כל חולשה"], 0, "ניהול רושם טוב אינו זיוף אלא הצגה מודעת ועקבית של התאמה."],
  ["impression", "מהי טעות ייחוס בסיסית?", ["נטייה להסביר התנהגות של אחרים באופי ולשכוח נסיבות", "בדיקה רחבה של הקשר", "שאלה אמפתית", "משוב מאוזן"], 0, "לעיתים אנו מייחסים לאחרים כוונה או אופי במקום לבדוק תנאים ומצב."],
  ["interviews", "בשאלת ראיון 'ספר על קונפליקט בצוות', מה מבנה תשובה מומלץ?", ["STAR: סיטואציה, משימה, פעולה ותוצאה", "רשימת תלונות על הצוות", "תשובה כללית בלי דוגמה", "בדיחה כדי לעבור נושא"], 0, "STAR עוזר לתת תשובה ממוקדת שמדגימה יכולת תקשורתית."],
  ["interviews", "מה כדאי לעשות לפני ראיון עבודה?", ["לחקור את הארגון, להכין דוגמאות ולתרגל תשובות בקול", "להגיע בלי לדעת את התפקיד", "לשנן טקסט קשיח בלבד", "להכין רק שאלות על שכר"], 0, "הכנה מאפשרת תשובות מותאמות ולא רובוטיות."],
  ["interviews", "איך נכון לענות על חולשה מקצועית?", ["לתאר חולשה אמיתית, למידה ופעולה לשיפור", "להגיד שאין חולשות", "להציג תכונה הרסנית בלי תיקון", "להאשים מנהלים קודמים"], 0, "תשובה טובה מציגה מודעות עצמית ואחריות."],
  ["interviews", "מהי סגירה מקצועית של ראיון?", ["להביע עניין, לחבר התאמה ולשאול על המשך התהליך", "לצאת בלי לומר דבר", "לדרוש תשובה במקום", "לשאול רק על חופשות"], 0, "סגירה היא עוד רגע תקשורתי שמחזק רצינות והתאמה."],
];

const casePrompts = [
  "נסחו משוב בונה לעמית שמאחר לפגישות, כך שיכלול תיאור, השפעה ובקשה.",
  "נתחו שיחה קשה שבה שני הצדדים מתבצרים בעמדות. מהם האינטרסים האפשריים?",
  "הכינו פתיחה של דקה להצגה בנושא תקשורת אמפתית בפני כיתה.",
  "כתבו תשובת STAR לשאלה בראיון: ספרו על פעם שבה פתרתם אי-הבנה בצוות.",
  "בחרו קונפליקט בין-תרבותי אפשרי והציעו שלוש שאלות הבהרה מכבדות.",
];

const materials = [
  {
    title: "מצגות, סיכומי שיעור וקבצי מידע כללי",
    status: "חסר כרגע בתיקייה",
    note: "לא נמצאו קבצי PPTX, PDF, DOCX או חומרי מקור בריפו המקומי בזמן הבנייה. לאחר העלאה אפשר להוסיף אותם לתיקיית materials ולעגן כל כרטיסייה לשקף או מסמך.",
    href: "",
  },
  {
    title: "מבנה האתר",
    status: "קיים",
    note: "האתר כולל סקירה, יחידות לימוד, כרטיסיות מושגים, שאלות תרגול וכיסוי חוסרים לפי נושאי הקורס.",
    href: "index.html",
  },
];

let activeView = "dashboard";
let activeTermFilter = "all";
let activeQuestionFilter = "all";
let searchText = "";
const selectedAnswers = new Map();
let revealAll = false;
let selectedTopicId = topics[0].id;
let activeMaterialIndex = 0;
let aiMessages = [
  {
    role: "assistant",
    text: "בחרו פרק או מקור לימוד, ואז אפשר לבקש הסבר, סיכום או שאלת תרגול ממוקדת.",
  },
];

const topicMap = Object.fromEntries(topics.map((topic) => [topic.id, topic]));

function rotateQuestionAnswers(question, index) {
  const [topic, prompt, options, answer, why, exam = false] = question;
  const offset = index % options.length;
  const rotatedOptions = options.map((_, optionIndex) => options[(optionIndex - offset + options.length) % options.length]);
  return {
    id: `q${index + 1}`,
    topic,
    prompt,
    options: rotatedOptions,
    answer: (answer + offset) % options.length,
    why,
    exam,
  };
}

const questions = rawQuestions.map((question, index) => rotateQuestionAnswers([
  topicAliases[question[0]] || question[0],
  question[1],
  question[2],
  question[3],
  question[4],
  question[5],
], index));

function matchesSearch(value) {
  if (!searchText) return true;
  return value.toLowerCase().includes(searchText.toLowerCase());
}

function renderView({ scrollToView = false } = {}) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("active-view", view.id === activeView);
  });
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === activeView);
  });
  if (window.lucide) window.lucide.createIcons();
  if (scrollToView) {
    document.getElementById(activeView)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderStats() {
  const answered = selectedAnswers.size;
  const correct = [...selectedAnswers.entries()].filter(([id, answer]) => questions.find((q) => q.id === id).answer === answer).length;
  const percent = answered ? Math.round((correct / answered) * 100) : 0;
  document.getElementById("statsGrid").innerHTML = [
    ["נושאי לימוד", topics.length],
    ["כרטיסיות מושגים", terms.length],
    ["שאלות תרגול", questions.length],
    ["שאלות פתוחות", casePrompts.length],
  ].map(([label, value]) => `<article class="stat-card"><span>${label}</span><strong>${value}</strong></article>`).join("");
  document.getElementById("score").textContent = `${percent}%`;
  document.getElementById("progress").textContent = `${answered}/${questions.length} שאלות נענו`;
  document.getElementById("progressFill").style.width = `${percent}%`;
  const topProgressLabel = document.getElementById("topProgressLabel");
  const topProgressFill = document.getElementById("topProgressFill");
  if (topProgressLabel) topProgressLabel.textContent = `התקדמות ${percent}%`;
  if (topProgressFill) topProgressFill.style.width = `${percent}%`;
}

function renderPrompts() {
  document.getElementById("casePrompts").innerHTML = casePrompts.map((prompt, index) => (
    `<article class="prompt-card"><h3>תרגיל פתוח ${index + 1}</h3><p>${prompt}</p></article>`
  )).join("");
}

const topicSourceLinks = {
  effective: "materials/summaries/תקשורת אפקטיבית  - סיכום.docx",
  feedback: "materials/summaries/עבודת צוות סיכום.docx",
  empathy: "materials/presentations/אמפתיה.pdf",
  conflict: "materials/summaries/קונפליקט.docx.pdf",
  culture: "materials/summaries/תקשורת בין אישית נוטבוק.docx",
  public: "materials/presentations/שפת גוף.pdf",
  persuasion: "materials/summaries/סיכום שכנוע , התרשמות וניהול רושם ושפת גוף.pdf",
  impression: "materials/presentations/התרשמות וניהול רושם.pdf",
  interviews: "materials/summaries/תקשורת בין אישית נוטבוק.docx",
};

topicSourceLinks.teamwork = topicSourceLinks.feedback;
topicSourceLinks.influence = topicSourceLinks.persuasion;

const topicSourcePreview = {
  effective: { text: "materials/extracted/summaries__תקשורת אפקטיבית  - סיכום.txt", type: "text" },
  feedback: { text: "materials/extracted/summaries__עבודת צוות סיכום.txt", type: "text" },
  empathy: { text: "materials/extracted/presentations__אמפתיה.txt", type: "pdf" },
  conflict: { text: "materials/extracted/summaries__קונפליקט.docx.txt", type: "text" },
  culture: { text: "materials/extracted/summaries__תקשורת בין אישית נוטבוק.txt", type: "text" },
  public: { text: "materials/extracted/presentations__שפת גוף.txt", type: "pdf" },
  persuasion: { text: "materials/extracted/summaries__סיכום שכנוע , התרשמות וניהול רושם ושפת גוף.txt", type: "text" },
  impression: { text: "materials/extracted/presentations__התרשמות וניהול רושם.txt", type: "pdf" },
  interviews: { text: "materials/extracted/summaries__תקשורת בין אישית נוטבוק.txt", type: "text" },
};

topicSourcePreview.teamwork = topicSourcePreview.feedback;
topicSourcePreview.influence = topicSourcePreview.persuasion;

function renderTopics() {
  const filtered = topics.filter((topic) => matchesSearch(`${topic.title} ${topic.lesson} ${topic.focus.join(" ")}`));
  document.getElementById("topicList").innerHTML = filtered.map((topic) => `
    <article class="topic-card">
      <div class="topic-meta">
        <span class="badge">${topic.lesson}</span>
        <span class="badge warn">${topic.priority}</span>
      </div>
      <h3>${topic.title}</h3>
      <ul class="focus-list">${topic.focus.map((item) => `<li>${item}</li>`).join("")}</ul>
      <p class="source-note">${topic.source}</p>
      <div class="source-actions">
        <a class="source-btn" href="${topicSourceLinks[topic.id] || "index.html"}" target="_blank" rel="noopener" onclick="setActiveTopic('${topic.id}')">פתיחת קובץ המקור</a>
      </div>
    </article>
  `).join("") || `<div class="empty-state">לא נמצאו יחידות לפי החיפוש הנוכחי.</div>`;
  return;

  document.getElementById("topicList").innerHTML = filtered.map((topic) => `
    <article class="topic-card">
      <div class="topic-meta">
        <span class="badge">${topic.lesson}</span>
        <span class="badge warn">${topic.priority}</span>
      </div>
      <h3>${topic.title}</h3>
      <ul class="focus-list">${topic.focus.map((item) => `<li>${item}</li>`).join("")}</ul>
      <p class="source-note">${topic.source}</p>
      <div class="source-actions">
        <button class="source-btn" type="button" onclick="setActiveTopic('${topic.id}')">פתיחת פרק במרכז הלמידה</button>
      </div>
    </article>
  `).join("") || `<div class="empty-state">לא נמצאו יחידות לפי החיפוש הנוכחי.</div>`;
}

function renderFilters(targetId, active, onClickName, includeExam = false) {
  const chips = [
    { id: "all", title: "הכול" },
    ...(includeExam ? [{ id: "exam", title: "שאלות דוגמה למבחן" }] : []),
    ...topics.map(({ id, title }) => ({ id, title })),
  ];
  document.getElementById(targetId).innerHTML = chips.map((chip) => `
    <button class="filter-chip ${active === chip.id ? "active" : ""}" type="button" onclick="${onClickName}('${chip.id}')">${chip.title}</button>
  `).join("");
}

function renderTerms() {
  renderFilters("termFilters", activeTermFilter, "setTermFilter");
  const filtered = terms.filter((term) => {
    const inFilter = activeTermFilter === "all" || term.tag === activeTermFilter;
    return inFilter && matchesSearch(`${term.name} ${term.english} ${term.text} ${topicMap[term.tag].title}`);
  });
  document.getElementById("termStack").innerHTML = filtered.map((term) => `
    <article class="term-card">
      <div class="term-meta">
        <span class="badge">${topicMap[term.tag].title}</span>
      </div>
      <h3>${term.name} <span lang="en">(${term.english})</span></h3>
      <p>${term.text}</p>
      <p class="source-note">${term.reference}</p>
      <div class="source-actions">
        <a class="source-btn" aria-disabled="true">שקף רלוונטי לא זמין</a>
        <a class="source-btn" aria-disabled="true">מקור מקורי לא צורף</a>
      </div>
    </article>
  `).join("") || `<div class="empty-state">לא נמצאו כרטיסיות לפי הסינון הנוכחי.</div>`;
}

function renderQuestions() {
  renderFilters("questionFilters", activeQuestionFilter, "setQuestionFilter", true);
  const filtered = questions.filter((question) => {
    const inFilter = activeQuestionFilter === "all"
      || (activeQuestionFilter === "exam" ? question.exam : question.topic === activeQuestionFilter);
    return inFilter && matchesSearch(`${question.prompt} ${question.options.join(" ")} ${topicMap[question.topic].title}`);
  });
  document.getElementById("questionList").innerHTML = filtered.map((question) => {
    const selected = selectedAnswers.get(question.id);
    const revealed = revealAll || selected !== undefined;
    return `
      <article class="question-card ${revealed ? "revealed" : ""}">
        <div class="question-meta">
          <span class="badge">${topicMap[question.topic].title}</span>
          <span class="badge warn">${question.id}</span>
        </div>
        <h3>${question.prompt}</h3>
        <div class="answers">
          ${question.options.map((option, index) => {
            const state = revealed && index === question.answer ? "correct" : revealed && selected === index ? "wrong" : selected === index ? "selected" : "";
            return `<button class="answer-btn ${state}" type="button" onclick="selectAnswer('${question.id}', ${index})">${String.fromCharCode(1488 + index)}. ${option}</button>`;
          }).join("")}
        </div>
        <div class="explanation"><strong>הסבר:</strong> ${question.why}</div>
      </article>
    `;
  }).join("") || `<div class="empty-state">לא נמצאו שאלות לפי הסינון הנוכחי.</div>`;
}

function renderCoverage() {
  document.getElementById("coverageList").innerHTML = materials.map((material) => `
    <article class="source-card">
      <div class="term-meta">
        <span class="badge ${material.href ? "" : "warn"}">${material.status}</span>
      </div>
      <h3>${material.title}</h3>
      <p>${material.note}</p>
      <div class="source-actions">
        ${material.href ? `<a class="source-btn" href="${material.href}">פתיחת מקור</a>` : `<a class="source-btn" aria-disabled="true">אין קובץ לפתיחה</a>`}
      </div>
    </article>
  `).join("");
}

function answeredCountForTopic(topicId) {
  return questions
    .filter((question) => question.topic === topicId)
    .filter((question) => selectedAnswers.has(question.id)).length;
}

function renderChapterNav() {
  const chapterNav = document.getElementById("chapterNav");
  if (!chapterNav) return;
  chapterNav.innerHTML = topics.map((topic, index) => {
    const topicQuestions = questions.filter((question) => question.topic === topic.id);
    const done = topicQuestions.length > 0 && answeredCountForTopic(topic.id) === topicQuestions.length;
    return `
      <button class="chapter-button ${topic.id === selectedTopicId ? "active" : ""} ${done ? "done" : ""}" type="button" onclick="setActiveTopic('${topic.id}')">
        <span class="chapter-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="chapter-title">${topic.title}</span>
        <span class="completion-dot" aria-hidden="true"></span>
      </button>
    `;
  }).join("");
}

function renderStudyLab() {
  const topic = topicMap[selectedTopicId] || topics[0];
  const material = materials[activeMaterialIndex % materials.length] || materials[0];
  const setText = (id, value) => {
    const target = document.getElementById(id);
    if (target) target.textContent = value;
  };
  setText("activeLessonBadge", topic.lesson);
  setText("activeLessonTitle", topic.title);
  setText("lessonDescription", topic.focus.join(" · "));
  setText("materialType", material.status || "מקור לימוד");
  setText("materialTitle", material.title || "חומר הקורס");
  setText("materialNote", material.note || topic.source);
  setText("activeSourceNote", topic.source);
  const focusList = document.getElementById("activeFocusList");
  if (focusList) focusList.innerHTML = topic.focus.map((item) => `<li>${item}</li>`).join("");
  const materialOpenLink = document.getElementById("materialOpenLink");
  if (materialOpenLink) {
    materialOpenLink.href = material.href || "index.html";
    materialOpenLink.toggleAttribute("aria-disabled", !material.href);
  }
}

function createAiResponse(action, freeText = "") {
  const topic = topicMap[selectedTopicId] || topics[0];
  const question = questions.find((item) => item.topic === topic.id);
  const term = terms.find((item) => item.tag === topic.id);
  const material = materials[activeMaterialIndex % materials.length] || materials[0];
  if (action === "summary") {
    return `סיכום קצר לפרק "${topic.title}": ${topic.focus.join("; ")}. מקור מומלץ לפתיחה: ${material.title}.`;
  }
  if (action === "practice" && question) {
    return `שאלת תרגול: ${question.prompt}\nתשובה נכונה: ${question.options[question.answer]}\nהסבר: ${question.why}`;
  }
  if (action === "ask" || freeText) {
    return `שאלה טובה. בפרק "${topic.title}" כדאי להתחיל מהמושג ${term ? `"${term.name}"` : "המרכזי"}, ואז לחבר אותו למקרה ממשי: מה נאמר, מה הובן, ומה הצעד הבא שמקטין אי-הבנה.`;
  }
  return `הסבר לפרק "${topic.title}": המוקד הוא להפוך ידע תקשורתי להתנהגות ניתנת לביצוע. שימו לב במיוחד ל-${topic.focus[0]}, ואז בדקו איך הוא מופיע בשיחה אמיתית.`;
}

function addAiMessage(role, text) {
  aiMessages.push({ role, text });
  renderAiMessages();
}

function renderAiMessages() {
  const target = document.getElementById("aiMessages");
  if (!target) return;
  target.innerHTML = aiMessages.map((message) => (
    `<div class="ai-bubble ${message.role}">${message.text.replace(/\n/g, "<br>")}</div>`
  )).join("");
  target.scrollTop = target.scrollHeight;
}

function renderAll() {
  renderChapterNav();
  renderStudyLab();
  renderStats();
  renderPrompts();
  renderTopics();
  renderTerms();
  renderQuestions();
  renderCoverage();
  renderAiMessages();
  renderView();
}

function setTermFilter(filter) {
  activeTermFilter = filter;
  renderTerms();
}

function setQuestionFilter(filter) {
  activeQuestionFilter = filter;
  renderQuestions();
}

function openExamPractice() {
  activeQuestionFilter = "exam";
  activeView = "practice";
  renderAll();
  document.getElementById("practice")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function selectAnswer(questionId, answer) {
  selectedAnswers.set(questionId, answer);
  renderChapterNav();
  renderStats();
  renderQuestions();
}

function setActiveTopic(topicId) {
  selectedTopicId = topicId;
  activeTermFilter = topicId;
  activeQuestionFilter = topicId;
  activeView = "units";
  renderAll();
  document.getElementById("units")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function moveMaterial(direction) {
  activeMaterialIndex = (activeMaterialIndex + direction + materials.length) % materials.length;
  renderStudyLab();
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  }[character]));
}

function relevantExcerpt(text, topic) {
  const keywords = [...topic.focus, topic.title].filter(Boolean);
  const index = keywords.reduce((found, keyword) => {
    const match = text.indexOf(keyword);
    return found === -1 ? match : match !== -1 && match < found ? match : found;
  }, -1);
  const start = Math.max(0, index === -1 ? 0 : index - 700);
  return text.slice(start, start + 3200);
}

async function openSourceViewer(topicId) {
  const topic = topicMap[topicId] || topics[0];
  const preview = topicSourcePreview[topic.id];
  const viewer = document.getElementById("sourceViewer");
  const body = document.getElementById("sourceViewerBody");
  const focus = document.getElementById("sourceViewerFocus");
  const original = document.getElementById("sourceViewerOriginal");
  const title = document.getElementById("sourceViewerTitle");
  if (!viewer || !body || !focus || !original || !title) return;

  title.textContent = topic.title;
  focus.innerHTML = `<strong>החלקים הרלוונטיים בפרק:</strong><ul class="focus-list">${topic.focus.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  original.href = topicSourceLinks[topic.id] || "index.html";
  body.innerHTML = preview?.type === "pdf"
    ? `<iframe title="${topic.title}" src="${original.href}"></iframe><p class="source-loading">טוען תקציר רלוונטי...</p>`
    : `<p class="source-loading">טוען את החלק הרלוונטי...</p>`;
  if (typeof viewer.showModal === "function" && !viewer.open) viewer.showModal();
  if (window.lucide) window.lucide.createIcons();

  if (!preview?.text) return;
  try {
    const response = await fetch(preview.text);
    if (!response.ok) throw new Error("Source preview unavailable");
    const text = await response.text();
    const excerpt = `<pre class="source-text-preview">${escapeHtml(relevantExcerpt(text, topic))}</pre>`;
    if (preview.type === "pdf") {
      body.insertAdjacentHTML("beforeend", excerpt);
    } else {
      body.innerHTML = excerpt;
    }
  } catch (error) {
    body.insertAdjacentHTML("beforeend", `<p class="empty-state">לא ניתן להציג את התצוגה המקדימה כרגע. ניתן לפתוח את הקובץ המקורי מהכפתור שמתחת.</p>`);
  }
}

document.addEventListener("click", (event) => {
  const sourceLink = event.target.closest?.(".topic-card .source-btn, .term-card .source-btn");
  if (!sourceLink) return;
  event.preventDefault();
  const topicId = sourceLink.dataset.topicSource || sourceLink.closest(".topic-card")?.querySelector(".badge")?.textContent;
  const topic = topicMap[topicId] || topics.find((item) => item.lesson === topicId) || topics.find((item) => topicSourceLinks[item.id] === sourceLink.getAttribute("href"));
  if (topic) {
    setActiveTopic(topic.id);
    openSourceViewer(topic.id);
  }
});

document.getElementById("sourceViewerClose")?.addEventListener("click", () => {
  document.getElementById("sourceViewer")?.close();
});

document.getElementById("sourceViewer")?.addEventListener("click", (event) => {
  if (event.target.id === "sourceViewer") event.currentTarget.close();
});

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    activeView = button.dataset.view;
    renderView({ scrollToView: true });
    document.getElementById("sidebar")?.classList.remove("open");
  });
});

document.getElementById("searchInput").addEventListener("input", (event) => {
  searchText = event.target.value.trim();
  renderTopics();
  renderTerms();
  renderQuestions();
});

document.getElementById("resetPractice").addEventListener("click", () => {
  selectedAnswers.clear();
  revealAll = false;
  renderStats();
  renderQuestions();
});

document.getElementById("revealAll").addEventListener("click", () => {
  revealAll = true;
  renderQuestions();
});

document.getElementById("prevMaterial")?.addEventListener("click", () => moveMaterial(-1));
document.getElementById("nextMaterial")?.addEventListener("click", () => moveMaterial(1));

document.querySelectorAll(".ai-action").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const label = button.textContent.trim();
    document.getElementById("aiPanel")?.classList.add("open");
    addAiMessage("user", label);
    addAiMessage("assistant", createAiResponse(action));
  });
});

document.getElementById("aiForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("aiInput");
  const text = input.value.trim();
  if (!text) return;
  document.getElementById("aiPanel")?.classList.add("open");
  addAiMessage("user", text);
  addAiMessage("assistant", createAiResponse("ask", text));
  input.value = "";
});

document.getElementById("aiPanelToggle")?.addEventListener("click", () => {
  document.getElementById("aiPanel")?.classList.toggle("open");
});

document.getElementById("aiPanelClose")?.addEventListener("click", () => {
  document.getElementById("aiPanel")?.classList.remove("open");
});

document.getElementById("themeToggle")?.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  if (window.lucide) window.lucide.createIcons();
});

document.getElementById("sidebarCollapse")?.addEventListener("click", () => {
  document.getElementById("sidebar")?.classList.toggle("collapsed");
});

document.getElementById("sidebarDrawerToggle")?.addEventListener("click", () => {
  document.getElementById("sidebar")?.classList.toggle("open");
});

window.setTermFilter = setTermFilter;
window.setQuestionFilter = setQuestionFilter;
window.selectAnswer = selectAnswer;
window.setActiveTopic = setActiveTopic;
window.__practiceSiteData = { topics, terms, questions, materials };

renderAll();
