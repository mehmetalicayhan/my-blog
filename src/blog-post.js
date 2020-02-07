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
  { name: "C Programlama Dili", color: "red" },
  { name: "Linux", color: "green" },
  { name: "HTML", color: "#fddb3a" },
  { name: "CSS", color: "gray" },
  { name: "C++", color: "orange" },
  { name: "Python", color: "purple" }
];

export const getPosts = () => {
  return [
    {
      title: "C dili ile hello World nasıl yazılır?",
      slug: "helloC",
      summary:
        "Laborum sint nisi ullamco commodo cupidatat ex incididunt cupidatat est quis enim mollit nostrud proident.Deserunt amet anim et tempor cupidatat tempor nulla do ullamco reprehenderit exercitation sunt consectetur et. Deserunt consequat consequat exercitation qui nostrud Lorem cillum incididunt do. Ut commodo aliquip eu excepteur commodo do incididunt sit laborum consequat reprehenderit.",
      details: require("./posts/test.md").default,
      readTime: readingTime(require("./posts/test.md").default),
      date: "5 Aralık 2019",
      category: categories[0]
    },
    {
      title: "Merhaba HTML",
      slug: "helloHTML",
      summary:
        "Labore ad non nisi cillum nisi excepteur voluptate culpa anim velit. Veniam ad sunt ea exercitation est sint. Non velit nostrud ex id duis magna dolore mollit do laboris do et aliqua. Esse Lorem ea duis exercitation ipsum exercitation. Adipisicing fugiat ex fugiat ex veniam minim veniam laboris enim nostrud cillum labore magna.",
      details: require("./posts/deneme.md").default,
      readTime: readingTime(require("./posts/deneme.md").default),
      date: "7 Şubat 2020",
      category: categories[2]
    }
  ];
};
