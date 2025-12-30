---
title: Books Read in 2026
date created: 2025-11-29T14:38:59-07:00
date modified: 2025-12-05T21:15:19-07:00
aliases:
  - 52 Books in 2026
---
# Books Read in 2026

## Goal

Read 52 Books in 2026

## Resources

- Storygraph 2026 Book Challenge

## Finished Books

## Currently Reading

1. [[Saved in Time]] #📚/status/currently-reading #media-type/family #priority/1
2. [[Wanderlust - A History of Walking]] #📚/status/currently-reading #media-type/print #priority/3
3. [[Quiet]] #📚/status/currently-reading #media-type/audio #priority/5
4. [[Middlemarch]] #📚/status/currently-reading #media-type/print #priority/3
5. [[Good Inside]] #📚/status/currently-reading #media-type/print #priority/3
6. [[Thinking in Systems - A Primer]] #📚/status/currently-reading #media-type/print #priority/3
7. [[Meditations]] #📚/status/currently-reading #media-type/print #priority/3
8. [[Engineering in Plain Sight]] #📚/status/currently-reading #media-type/print #priority/3
9. #🗓️/2024/08/08 [[Feminist City]] #📚/status/to-read #media-type/print #priority/1
10. [[Nathaniel's Nutmeg]] #📚/status/paused #media-type/print #priority/1

## Strategy

```dataviewjs
/***** CONFIG *****/
const WIP = { print: 2, audio: 2, family: 2 };
const NEXT_LIMIT = 5; // cap for Next queue
const LATER_LIMIT = 50; // display cap for Later

/***** helpers (ES5 + FP-leaning) *****/
const lower = s => String(s || "").toLowerCase();
const trim = s => String(s || "").replace(/^[ \t\r]+|[ \t\r]+$/g, "");
const startsWith = (s, pre) =>
  String(s).slice(0, String(pre || "").length) === String(pre || "");
const isDigit = ch => !!(ch && ch.length === 1 && ch >= "0" && ch <= "9");
const stripCodeFences = txt => {
  const lines = String(txt || "").split("\n");
  return lines
    .reduce(
      ([inCode, out], ln) => {
        const t = ln || "";
        if (startsWith(t, "```")) {
          return [!inCode, inCode ? out : out.concat([""])];
        }
        return inCode ? [inCode, out] : [inCode, out.concat([ln])];
      },
      [false, []]
    )[1]
    .join("\n");
};
const stripListMarker = s => {
  let t = s || "";
  let j = 0;
  while (j < t.length && isDigit(t[j])) j++;
  t = j > 0 && t[j] === "." && t[j + 1] === " " ? t.slice(j + 2) : t;
  t = startsWith(t, "- ") ? t.slice(2) : t;
  t = startsWith(t, "* ") ? t.slice(2) : t;
  return t;
};
const findTag = (tokens, prefix) =>
  (tokens.find(t => startsWith(t, prefix)) || "").slice(prefix.length);

const inlineField = (line, key) => {
  const lineStr = String(line || "");
  const i = lineStr.indexOf(key + "::");
  if (i === -1) return "";
  const tail = lineStr.slice(i + key.length + 2);
  const m = tail.match(/^\s*([^\s\t\r\n]+)/);
  return trim(m ? m[1] : "");
};

const extractTitle = body => {
  const bodyStr = String(body || "");
  const a = bodyStr.indexOf("[[");
  if (a >= 0) {
    const b = bodyStr.indexOf("]]", a + 2);
    if (b > a) {
      const content = bodyStr.slice(a + 2, b);
      const pipe = content.indexOf("|");
      return trim(pipe >= 0 ? content.slice(0, pipe) : content);
    }
  }
  const lb = lower(bodyStr);
  const cut = [bodyStr.indexOf(" #"), lb.indexOf(" by ")]
    .filter(i => i >= 0)
    .concat([bodyStr.length])
    .reduce((m, i) => Math.min(m, i), bodyStr.length);
  return trim(bodyStr.slice(0, cut));
};

const looksLikeBookLine = s => {
  const body = stripListMarker(trim(s || ""));
  return (
    !!body &&
    ((body.indexOf("[[") !== -1 && body.indexOf("]]") !== -1) ||
      body.indexOf(" #") !== -1 ||
      lower(body).indexOf(" by ") !== -1 ||
      body.indexOf("::") !== -1) // Support inline fields
  );
};

const statusFrom = line =>
  lower(inlineField(line, "status")) ||
  lower(findTag(String(line || "").split(" "), "#📚/status/")) ||
  "to-read";

const mediaFrom = line =>
  lower(inlineField(line, "media-type")) ||
  lower(inlineField(line, "slot")) ||
  lower(findTag(String(line || "").split(" "), "#media-type/")) ||
  lower(findTag(String(line || "").split(" "), "#slot/")) ||
  "print";

const scoreFrom = line => {
  const tagVal = findTag(String(line || "").split(" "), "#priority/");
  const n = tagVal ? +tagVal : +(inlineField(line, "priority") || NaN);
  return isNaN(n) ? 1 : Math.max(1, Math.min(5, Math.floor(n)));
};

const takeTop = (arr, n) => arr.slice(0, Math.max(0, n));
const sortByScoreDesc = arr => arr.slice().sort((a, b) => b.score - a.score);
const uniqByTitle = arr => {
  const seen = new Set();
  return arr.filter(x => !seen.has(x.title) && seen.add(x.title));
};

const linkOrText = title => {
  try {
    const p = dv.page(title);
    return p ? dv.fileLink(title) : title;
  } catch {
    return title;
  }
};

const renderTable = (cols, rows) =>
  rows.length ? dv.table(cols, rows) : dv.paragraph("_(none)_");

// Extracted common book processing logic
const processBooks = (dv, path, txt) => {
  const src = stripCodeFences(txt);
  const lines = src.split("\n");
  let section = "";

  const books = lines.reduce((acc, s) => {
    if (startsWith(s, "## ")) {
      section = trim(s.slice(3));
      return acc;
    }
    if (!looksLikeBookLine(s)) return acc;
    const body = stripListMarker(trim(s));
    const title = extractTitle(body);
    if (!title) return acc;

    const status = statusFrom(s);
    const media = mediaFrom(s);
    const score = scoreFrom(s);

    return acc.concat([{ title, status, media, score, section, note: path }]);
  }, []);

  dv.paragraph("Parsed books: " + books.length + " from " + path);

  /***** NOW (WIP): currently-reading, sorted by score desc per media type *****/
  const now = books.filter(b => b.status === "currently-reading");
  dv.header(2, "Currently Reading");
  ["print", "audio", "family"].forEach(mt => {
    const cap = WIP[mt] || 0;
    const rows = takeTop(
      sortByScoreDesc(now.filter(b => b.media === mt)),
      cap
    ).map(b => [linkOrText(b.title), String(b.score), b.media, b.section]);
    dv.header(3, mt + " — " + rows.length + "/" + cap);
    renderTable(["Book", "Priority", "Media Type", "Section"], rows);
  });

  /***** NEXT: up-next first (sorted), then top to-read (sorted) until NEXT_LIMIT *****/
  const upnext = sortByScoreDesc(books.filter(b => b.status === "up-next"));
  const toread = sortByScoreDesc(books.filter(b => b.status === "to-read"));
  const next = takeTop(
    upnext.concat(toread.filter(b => !upnext.some(u => u.title === b.title))),
    NEXT_LIMIT
  );
  dv.header(2, "Next (" + next.length + "/" + NEXT_LIMIT + ")");
  renderTable(
    ["Book", "Priority", "Media Type", "Section/Note"],
    next.map(b => [
      linkOrText(b.title),
      String(b.score),
      b.media,
      b.section || b.note,
    ])
  );

  /***** LATER: remaining to-read not in Next (sorted), limited *****/
  const nextTitles = next.map(b => b.title);
  const later = takeTop(
    sortByScoreDesc(
      uniqByTitle(toread.filter(b => nextTitles.indexOf(b.title) === -1))
    ),
    LATER_LIMIT
  );
  dv.header(2, "Later (" + later.length + " shown)");
  renderTable(
    ["Book", "Priority", "Media Type", "Section/Note"],
    later.map(b => [linkOrText(b.title), String(b.score), b.media, b.section])
  );
};

/***** Main script execution - assumes Obsidian DataView context *****/
// Main execution function that can be tested
const runMainExecution = dvObj => {
  if (typeof dvObj !== "undefined" && dvObj && dvObj.current) {
    const path = dvObj.current().file.path;
    dvObj.io
      .load(path)
      .then(txt => processBooks(dvObj, path, txt))
      .catch(err =>
        dvObj.paragraph("Load error: " + ((err && err.message) || err))
      );
  }
};

// Only execute if we're in Obsidian (dv is available)
if (typeof dv !== "undefined" && dv?.current) runMainExecution(dv);

/***** For testing only - executeScript function that uses provided dv *****/
const executeScript = dvObj => {
  if (!dvObj) return;
  const path = dvObj.current().file.path;
  return dvObj.io
    .load(path)
    .then(txt => processBooks(dvObj, path, txt))
    .catch(err =>
      dvObj.paragraph("Load error: " + ((err && err.message) || err))
    );
};

// Export functions for testing (CommonJS compatible)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    // Configuration
    WIP,
    NEXT_LIMIT,
    LATER_LIMIT,

    // Helper functions
    lower,
    trim,
    startsWith,
    isDigit,
    stripCodeFences,
    stripListMarker,
    findTag,
    inlineField,
    extractTitle,
    looksLikeBookLine,
    statusFrom,
    mediaFrom,
    scoreFrom,
    takeTop,
    sortByScoreDesc,
    uniqByTitle,

    // Main execution functions
    executeScript,
    processBooks,
    linkOrText,
    renderTable,
    runMainExecution,
  };
}
```

## Up Next

1. [[Good Anger]] #📚/status/paused #media-type/print #priorityity/3
2. [[Meditations for Mortals]] #📚/status/paused #media-type/print #priority/1
3. [[Orientalism]] #📚/status/paused #media-type/print #priority/1
4. [[TypeScript#Programming TypeScript Book|Programming TypeScript]] #📚/status/paused #media-type/print #priority/1
5. [[Practical SQL]] #📚/status/paused #media-type/print #priority/1
6. [[Ender's Game]] #📚/status/paused #media-type/print #priority/1
7. [[Slow Birding]] #📚/status/paused #media-type/print #priorityity/3
8. [[Strong Towns]] #📚/status/paused #media-type/print #priority/1
9. [[The Greatest Adventure - Basic Research That Shapes Our Lives]] #📚/status/paused #media-type/print #priority/1
10. [[How to Know a Person]] #📚/status/paused #media-type/print #priority/1
11. [[There Are Places in the World Where Rules Are Less Important Than Kindness]] #📚/status/paused #media-type/print #priority/1
12. [[Relativity - The Special and General Theory]] #📚/status/paused #media-type/print #priority/1
13. [[My Wilderness - East to Katahdin]] #📚/status/paused #media-type/print #priority/1
14. Exclusion and the Chinese American Story #📚/status/paused #media-type/print #priority/1
15. Have Space Suit—Will Travel #📚/status/paused #media-type/family #priority/1
16. [[The Go Programming Language]] #📚/status/paused #media-type/print #priority/1
17. #🗓️/2023/10/10 [[Factfulness]] by [[Hans Rosling]] #📚/status/to-read #media-type/print #priority/1
18. #🗓️/2025/01/26 [[Connections]] by James Burke #📚/status/to-read #media-type/print #priority/1
19. How Big Things Get Done #📚/status/to-read #media-type/print #priority/1
20. Raising Emotionally Strong Boys by David Thomas #📚/status/to-read #media-type/print #priority/1 #people/family/andrea-sooter
 21. Raising Cain: Protecting the Emotional Life of Boys #📚/status/to-read #media-type/print #priority/1
	- Examines the emotional challenges boys face and provides insights to help them express their feelings and navigate emotional struggles.
 22. The Whole-Brain Child #📚/status/to-read #media-type/print #priority/1
	 - Offers practical strategies for nurturing emotional and intellectual growth in children by integrating neuroscience insights.
	 - #🗓️/2025/08/27 Also recommended by #people/friends/ajay-david
 23. Boy Talk: How You Can Help Your Son Express His Emotions #📚/status/to-read #media-type/print #priority/1
	- Focuses on helping boys develop emotional vocabulary and the skills to communicate effectively.
 24. Untangled: Guiding Teenage Girls Through the Seven Transitions into Adulthood #📚/status/to-read #media-type/print #priority/1
	- While focused on girls, Damour’s approach can apply to boys as well, especially regarding emotional growth and healthy relationships.
 25. How to Raise a Boy: The Power of Connection to Build Good Men #📚/status/to-read #media-type/print #priority/1
	- Explores the importance of strong relationships and emotional connectedness in raising boys who are empathetic and self-aware.
26. Ecstasies by Carlos Ginsburg #📚/status/to-read #media-type/print #priority/1
27. The Triumph of the Moon by Ronald Hutton #📚/status/to-read #media-type/print #priority/1
28. #🗓️/2024/09/26 The Greenway Imperative #📚/status/to-read #media-type/print #priority/1
	- Book by the keynote speaker at FC Trails Summit
29. Cycling The Great Divide #📚/status/to-read #media-type/print #priority/1
30. Raising Children Who Think for Themselves #📚/status/to-read #media-type/print #priority/1
31. #🗓️/2025/06/26 [The Joy Luck Club](https://app.thestorygraph.com/books/52320baa-8e13-4e76-b9cf-4d7de50ac94c) recommended by #people/friends/clarissa-lee #📚/status/to-read #media-type/print #priority/1
32. #🗓️/2025/01/26 [[War and Peace]] #📚/status/to-read #media-type/print #priority/1
	- [[Darien Mitchell-Tontar]] mentioned he planned to read it as it is Eric North's top recommendation. High praise in [[Darien Mitchell-Tontar|Darien]]'s opinion given Eric has a Linguistics degree
33. #🗓️/2025/02/04 Built - The Hidden Stories Behind Our Structures by Roma Agrawal #📚/status/to-read #media-type/print #priority/1
34. #🗓️/2025/02/14 Good Energy—The Surprising Connection Between Metabolism and Limitless Health By Casey Means
	- She was interviewed on Bill Maher
35. #🗓️/2025/03/11 [[Time's Echo]] #📚/status/to-read #media-type/print #priority/1
36. #🗓️/2025/03/11 [[The Year of Less]] #📚/status/to-read #media-type/print #priority/1
37. #🗓️/2025/02/11 In Patagonia by Bruce Chatwin #📚/status/to-read #media-type/print #priority/1
38. #🗓️/2025/02/11 Book of the Ages by Jane Franklin (Ben Franklin's sister) #📚/status/to-read #media-type/print #priority/1
39. #🗓️/2025/01/31 Power Metal: The Race for the Resources That Will Shape the Future by Vince Beiser #📚/status/to-read #media-type/print #priority/1
	- [Interview on the Daily Show](https://www.youtube.com/watch?v=pWR1ywEoQkM)
40. #🗓️/2025/01/26 [How Infrastructure Works](https://www.penguinrandomhouse.com/books/612711/how-infrastructure-works-by-deb-chachra/?ref=sentiers.media) ([View Highlight](https://read.readwise.io/read/01jfwfcxjg23xgeesq1hh0cfce)) by Deb Chachra #📚/status/to-read #media-type/print #priority/1
	- Recommended by #people/authors/patrick-tanguay
41. #🗓️/2024/12/20 7 Pillars by Lawrence of Arabia #📚/status/to-read #media-type/print #priority/1
42. #🗓️/2024/10/27 Salt, A world history #📚/status/to-read #media-type/print #priority/1
	- Recommended by Noreen, on Amtrak Train
	- Michelle strongly recommends against reading this book
43. #🗓️/2024/08/31 In Search of Lost Time* by **Marcel Proust** #📚/status/to-read #media-type/print #priority/1
	- Proust’s monumental work is a deep exploration of memory, time, and society. It’s often regarded as one of the greatest literary achievements of the 20th century.
44. #🗓️/2024/08/31 Madame Bovary by **Gustave Flaubert** #📚/status/to-read #media-type/print #priority/1
	- This novel is a classic in realism, depicting the life of Emma Bovary and her romantic and existential struggles. It’s known for its stylistic perfection and critique of bourgeois society.
45. #🗓️/2024/08/31 The Trial by **Franz Kafka** #📚/status/to-read #media-type/print #priority/1
	- *The Trial* is one of Kafka’s most famous works, capturing the sense of alienation and absurdity as the protagonist, Josef K., navigates a nightmarish legal system. It’s a quintessential example of Kafka’s exploration of bureaucratic oppression.
46. #🗓️/2024/08/31 To the Lighthouse by **Virginia Woolf** #📚/status/to-read #media-type/print #priority/1
	- This novel is a key work of modernist literature, known for its stream-of-consciousness technique and its deep exploration of the interior lives of its characters. It reflects on themes of time, memory, and the nature of artistic creation.
47. #🗓️/2024/08/31 Faust by **Johann Wolfgang von Goethe** #📚/status/to-read #media-type/print #priority/1
	- Goethe’s *Faust* is a tragic play that is often considered one of the greatest works of German literature. It explores themes of ambition, desire, and the limits of human knowledge through the story of Faust’s pact with Mephistopheles.
48. #🗓️/2024/08/08 Inclusive Transportation by [Veronica Davis](https://app.thestorygraph.com/authors/9e5aeca2-b42f-4128-9897-051b92a67723) #📚/status/to-read #media-type/print #priority/1
49. #🗓️/2024/07/22 The Open-Air Life #📚/status/to-read #media-type/print #priority/1
50. The Scientists by John Gribbin #📚/status/to-read #media-type/print #priority/1
51. The Invention of Nature by Andrea Wulf #📚/status/to-read #media-type/print #priority/1
52. #🗓️/2024/07/22 [Dark Matter](https://www.goodreads.com/book/show/27833670-dark-matter) #📚/status/to-read #media-type/print #priority/1 #twilio/people/kat-chaires
53. #🗓️/2024/06/17 Amusing Ourselves to Death by Neil Postman #📚/status/to-read #media-type/print #priority/1
54. #🗓️/2025/01/16 Nexus by Yuval Noah Harari #📚/status/to-read #media-type/print #priority/1
	- [Interview on the Daily Show](https://www.youtube.com/watch?v=euBAVec2RhE)
55. #🗓️/2021/09/05 Willpower
56. American Nations by Colin Woodard #📚/status/to-read #media-type/print #priority/1 #people/friends/kolt-kane
57. Pull Request Best Practices #📚/status/to-read #media-type/print #priority/1
58. Entangled Life by Merlin Sheldrake #📚/status/to-read #media-type/print #priority/1
	- Book about Fungi.
	- #📚/library/in-calibre
59. You're Not Listening: What You're Missing and Why It Matters #📚/status/to-read #media-type/print #priority/1
	- Recommended by #people/friends/kolt-kane while discussing [[How to Know a Person]]
60. Constructive living by David Reynolds #📚/status/to-read #media-type/print #priority/1
	- Recommended by #people/friends/kolt-kane
		- *"It's kind of an introduction into two Japanese concepts/therapy techniques (morita therapy and bailan) that focus on productive action as therapy vs western ideas about talking about your feelings or uncovering some repressed feelings etc. it's very refreshing. I feel like I had let go of a great deal of skepticism on the subject over the years. It's nice to recover a healthy amount"*
61. Midlife by Kieran Setiya #📚/status/to-read #media-type/print #priority/1
	- In [[Four Thousand Weeks]], he mentions how he was moving towards 40 and feeling an emptiness. I've felt certain feelings in this area and would like to dig in more #📚/status/to-read #media-type/print #priority/1
62. Guns, Germs, and Steel mentioned in [[Lies My Teacher Told Me]] #📚/status/to-read #media-type/print #priority/1
63. The Rational Optimist by Matt Ridley #🗓️/2023/10/10 #📚/status/to-read #media-type/print #priority/1
	- [JL Collins Blog Post](https://jlcollinsnh.com/2023/10/08/32-things-to-know-about-following-the-simple-path-to-wealth)
64. The Organized Mind by Daniel Levitin #🗓️/2023/10/10 #people/authors/daniel-levitin #📚/status/to-read #media-type/print #priority/1
65. Sapiens #📚/status/to-read #media-type/audio #priority/1
66. [Work the System](https://www.audible.com/pd/Work-the-System-Fourth-Edition-Audiobook/1626348731?qid=1641474676&sr=1-1&ref=a_search_c3_lProduct_1_1&pf_rd_p=83218cca-c308-412f-bfcf-90198b687a2f&pf_rd_r=DFC16BSR39KF10V01QZB) #📚/status/to-read #media-type/audio #priority/1
67. #🗓️/2022/12/04 [How the Future Works](https://www.audible.com/pd/How-the-Future-Works-Audiobook/B0B194MG6W?ref_pageloadid=not_applicable&ref=a_account_p_c1_order_detail_pdp&pf_rd_p=be5880e8-6386-440e-a7af-e00fdf352b08&pf_rd_r=8NT10FX80FWNKSZ8DAWH&pageLoadId=KIPtnfsF01FDtpra&ref_plink=not_applicable&creativeId=9653015a-0975-4d29-a2f4-52c96d320026) #📚/status/to-read #media-type/audio #priority/1
68. #🗓️/2022/12/04 The Power of Full Engagement #📚/status/to-read #media-type/audio #priority/1
69. Millennium: From Religion to Revolution: How Civilisation Has Changed Over a Thousand Years,
	- Ian Mortimer argues that before the invention of the mirror, the concept of individual identity that we have today didn’t exist. “The development of glass mirrors marks a crucial shift, for they allowed people to see themselves properly for the first time, with all their unique expressions and characteristics
	- [We were never supposed to see our faces this much](https://www.dazeddigital.com/beauty/article/60860/1/we-were-never-supposed-to-see-our-faces-this-much-social-media-zoom?utm_source=pocket_mylist)
70. #🗓️/2021/06/23[[Burning the Books]] #📚/status/to-read #media-type/print #priority/1
	- mentioned by [[Ajay David]] as a book he was reading
71. [Deep Work](https://app.thestorygraph.com/books/021987b7-8555-4413-bee0-c073d94b3fe3)
72. [[Essentialism]] #📚/status/to-read #media-type/print #priority/1
73. #🗓️/2023/02/22 How to Read a Book #📚/status/to-read #media-type/print #priority/1
74. Mastering Regular Expressions
75. [[The Travels of Ibn Battuta]] #📚/status/to-read #media-type/print #priority/1
76. [[This Chair Rocks]] #📚/status/to-read #media-type/print #priority/1
77. [[Embracing Uncertainty]] #📚/status/to-read #media-type/print #priority/1
	- In [[Four Thousand Weeks]], #people/authors/oliver-burkeman quotes a section from this book recommending how could approach life. #📚/status/to-read #media-type/print #priority/1
78. #🗓️/2023/12/03 The Anatomy of Peace by The Arbinger Institute #people/authors/the-arbinger-institute #📚/status/to-read #media-type/print #priority/1 #people/family/andrea-sooter
	- [[Andrea]] mentioned it. She stated it aligns with Good Inside
79. #🗓️/2023/12/28 How Data Happened: A History from the *Age of Reason* → *Age of Algorithms* mentioned in [How Data Happened](https://www.thenation.com/article/society/how-data-happened/)
80. #🗓️/2023/10/02 [Talent is Overrated](https://jamesclear.com/book/talent-is-overrated) #📚/status/to-read #media-type/print #priority/1
	- Mentioned in the post [[Deliberate Practice#Beginners Guide to Deliberate Practice]]
81. #🗓️/2024/05/31 The Autobiography of Benjamin Franklin #📚/status/to-read #media-type/print #priority/1
82. #🗓️/2024/09/01 The Sound and the Fury by [[William Faulkner]] #📚/status/to-read #media-type/print #priority/1
	- #source/ai/chatGPT stated this was the best option if reading just one from him
83. [***Brave New Words*, by Sal Khan**](https://gatesventures.lt.emlnk1.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZnYXRlc25vdC5lcyUyRjRic2R2a3U=&sig=Bm5UqCjfKAvB9mw78ZmWRJRVDBqqGnCZkikoiWgzH9UJ&iat=1716312916&a=%7C%7C478455497%7C%7C&account=gatesventures%2Eactivehosted%2Ecom&email=Cued67bl86iNx8S44UmtqPTiaisqFui4wzaNpIQ05F8%3D&s=8bc5a10022929e280f7135a173d176a8&i=62A67A1A534). #📚/status/to-read #media-type/print #priority/1
	- Recommended by #people/authors/bill-gates
	- Sal—the founder of [Khan Academy](https://gatesventures.lt.emlnk1.com/Prod/link-tracker?redirectUrl=aHR0cHMlM0ElMkYlMkZiLWdhdC5lcyUyRjRkUVVlTDY=&sig=F2B8WUFHcmSxwDSLCU8AnTw9NDeMYDr9tZ1nan9vgUvR&iat=1716312916&a=%7C%7C478455497%7C%7C&account=gatesventures%2Eactivehosted%2Ecom&email=Cued67bl86iNx8S44UmtqPTiaisqFui4wzaNpIQ05F8%3D&s=8bc5a10022929e280f7135a173d176a8&i=62A67A1A535)—has been a pioneer in the field of education technology since long before the rise of artificial intelligence. So the vision he lays out in *Brave New Words* for how AI will improve education is well grounded. Sal argues that AI will radically improve the outcomes of students and the experiences of teachers, and help make sure everyone has access to a world-class education. He’s well aware that innovation has had only a marginal impact in the classroom so far but makes a compelling case that AI will be different. No one has sharper insights into the future of education than Sal does, and I can't recommend *Brave New Words* enough. ([View Highlight](https://read.readwise.io/read/01hyk02g5gc7s1g0ar3wv669ct))
84. [*Originals: How Non-Conformists Move the World*](https://www.amazon.com/Originals-How-Non-Conformists-Move-World/dp/0525429565/ref=asc_df_0525429565/?tag=hyprod-20&linkCode=df0&hvadid=312045580796&hvpos=1o1&hvnetw=g&hvrand=10829746946233883632&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&h) by Adam Grant #📚/status/to-read #media-type/print #priority/1
	- [Mentioned Here](https://read.readwise.io/read/01hzm35vtym7y9zah43ap8sthk)
85. #🗓️/2024/12/10 [Story of Your Life](https://en.wikipedia.org/wiki/Story_of_Your_Life?ref=blog.codinghorror.com) novella it was based on for so much additional nuance.
	- Ready to read in Readwise Reader
	- Recommended by #people/authors/jeff-atwood [in this post](https://read.readwise.io/read/01jerdf0jkj1tbcammdwkkjeh3) #📚/status/to-read #media-type/print #priority/1
	- The movie [Arrival](https://en.wikipedia.org/wiki/Arrival_(film)?ref=blog.codinghorror.com) is based on this book
86. In [a post from Helen Russell](https://mshelenrussell.substack.com/p/a-very-bookish-week-science-quizzes), she mentions:
	- This time, we discussed Elif Shafak’s *[There Are Rivers in the Sky](https://uk.bookshop.org/p/books/there-are-rivers-in-the-sky-elif-shafak/7364268?aid=6421&ean=9780241435014&)* - a tsunami of a novel that explores the fluidity of time, memory, and water. Beginning in ancient Mesopotamia, it follows a raindrop’s journey through centuries, from the hair of King Ashurbanipal to Victorian London, where it lands on the tongue of Arthur Smyth, an impoverished child who later becomes a renowned Assyriologist. Arthur is based on a real life Victorian, George Smith - a self-taught scholar who discovered and translated the *Epic of Gilgamesh* from cuneiform tablets in the 19th century. Like Arthur in the novel, Smith rose from humble beginnings to become a key figure in the study of ancient Mesopotamian history. The novel fictionalises his journey, along with a young Yazidi girl and a hydrologist who investigates water’s memory.
	- It’s a book that had me turning down corners, scribbling notes (always a good sign) and seeking out a stack of other books that relate to the big umbrella-problems of morality, ecology and belonging. ([View Highlight](https://read.readwise.io/read/01jpctg8q1g4jk90h4mkt5cba6))
87. An Enquiry Concerning Human Understanding
	- Shared in the Weekly Wise Reads Post, was shared.
	- Part of the *Great Books of the Western World* series from Encyclopædia Britannica
	- Landmark work in philosophy.
	- David Hume examines how we form beliefs through habit, experience, and custom—placing human psychology, not reason, at the center of knowledge. The result is a foundational text in both empiricism and skepticism. ([View Highlight](https://read.readwise.io/read/01jr6d1n2rshngyd9vqfj5t2tf))
	- I have this as ePub in Reader
88. Trillons
	- Book recommendation In a post, [Summer Reading](https://jlcollinsnh.com/2024/09/02/kibanda-repairs-summer-reading/) by #people/authors/jl-collins #📚/status/to-read #media-type/print #priority/1
	- This is best described as the biography of the index fund. Compelling reading if you are a huge fan of these things and how they’ve vastly improved the investment world for us individual investors. But even if your interest is mild, Robin Wigglesworth does such a brilliant job, you’ll likely find it a compelling read. ([View Highlight](https://read.readwise.io/read/01j79bfzvpv76fe4yzkk950z7t))
89. The Silk Roads
	- Book recommendation In a post, [Summer Reading](https://jlcollinsnh.com/2024/09/02/kibanda-repairs-summer-reading/) by #people/authors/jl-collins #📚/status/to-read #media-type/print #priority/1
	- *A new history of the world*
	- My only complaint is that I wish there were more and better maps. This book deals with parts of the world that are unfamiliar, at least to me. This is part of the appeal. But maps would help me get my bearings more easily.
	- Embarrassing admission: While I’ve heard the term “Asia Minor” for decades, it was only in the reading of this book I realized I really had no idea where this was. I do now. ([View Highlight](https://read.readwise.io/read/01j79bgv0641wh8pvgnct0t91h))
90. [*Memories, Dreams, Reflections*](https://en.wikipedia.org/wiki/Memories,_Dreams,_Reflections) - Carl Jung's autobiography ([View Highlight](https://read.readwise.io/read/01j54j19xcx1f7f8q8wmr13j89))
	- Mentioned [in a post](https://ckarchive.com/b/p9ueh9h37n9d6sm6ggw6kam7l9033) by Oliver Burkeman #📚/status/to-read #media-type/print #priority/1
91. *The Coming Wave*, by Mustafa Suleyman. ([View Highlight](https://read.readwise.io/read/01jf3ft3e5amc6v6dvrnm7z2b0)) #📚/status/to-read #media-type/print #priority/1
	- In [Holiday Books 2024](https://www.gatesnotes.com/Holiday-Books-2024), Bill Gate's recommended as one of 3 books that focus on understanding the world during times of change
92. #🗓️/2025/06/06 Bowling Alone #📚/status/to-read #media-type/print #priority/1
93. #🗓️/2023/08/25 [How to Write Short: Word Craft for Fast Times](https://app.thestorygraph.com/books/aec595ae-1cdd-4614-b7eb-c5aec67716ba)
	- Recommended by #people/authors/richard-reeves (author of "Of Boys & Men")

```query
(tag:#books/status/to-read OR tag:#add-book-to-read) file:-"24 Books in 2025"
```
