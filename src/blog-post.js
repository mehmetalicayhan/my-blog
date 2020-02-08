// Solution for reading time
// https://medium.com/@ole.ersoy/calculating-reading-time-of-markdown-documents-in-javascript-fcc4e252e70b
function readingTime(post) {
  const WORDS_PER_MINUTE = 265;
  let result = {};
  const regex = /\w+/g;

  result.wordCount = (post || "").match(regex).length;

  result.readingTime = Math.ceil(result.wordCount / WORDS_PER_MINUTE);

  return result.readingTime;
}

// Todo : Parse markdown file and find first 10 lines return summary

const categories = [
  { name: "C Programlama Dili", color: "#ff5733" },
  { name: "Linux", color: "#008080" },
  { name: "HTML", color: "#fddb3a" },
  { name: "CSS", color: "#ff00ff" },
  { name: "C++", color: "#808000" },
  { name: "Python", color: "green" },
  { name: "", color: "" }
];

export const getPosts = () => {
  return [
    {
      title: "Loading...",
      slug: "cokyakinda",
      summary: "",
      details: require("./posts/test.md").default,
      readTime: readingTime(require("./posts/test.md").default),
      date: "8 Şubat 2020",
      category: categories[5]
    },
    {
      title: "Deneme...",
      slug: "deneme",
      summary: "Try",
      details: require("./posts/deneme.md").default,
      readTime: readingTime(require("./posts/deneme.md").default),
      date: "8 Şubat 2020",
      category: categories[1]
    }
  ];
};
