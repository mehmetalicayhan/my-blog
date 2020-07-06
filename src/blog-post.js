import { categories } from "./categories";

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

export const getPosts = () => {
  return [
    // {
    //   title: "Loading...",
    //   slug: "cokyakinda",
    //   summary: "Quis do nostrud non aliqua non. Lorem do ipsum excepteur et ipsum ut cillum amet aliqua exercitation non reprehenderit. Occaecat cillum reprehenderit in anim Lorem mollit qui ex ut. Nulla dolor proident et in non ullamco eiusmod eiusmod esse amet mollit excepteur. Mollit adipisicing cillum pariatur adipisicing enim dolore mollit aliquip pariatur fugiat laboris excepteur et. Eiusmod do exercitation cillum enim fugiat sint.",
    //   details: require("./posts/test.md").default,
    //   readTime: readingTime(require("./posts/test.md").default),
    //   date: "8 Şubat 2020",
    //   category: categories[7]
    // },
    // {
    //   title: "Deneme...",
    //   slug: "deneme",
    //   summary: "Incididunt irure aliqua consequat nulla non eiusmod nostrud esse laborum. Consequat dolor tempor ex excepteur cillum ex elit quis ea enim incididunt enim do. Eu non labore adipisicing sint aliquip amet qui aliquip esse irure cupidatat adipisicing. Eiusmod cillum enim esse proident Lorem minim quis laborum consequat aute dolore incididunt elit. Ex nulla et ea commodo fugiat adipisicing eu amet eiusmod aliqua. Est est proident nulla cupidatat aute excepteur excepteur mollit fugiat sint proident consequat deserunt. Velit elit duis velit tempor amet nulla.",
    //   details: require("./posts/deneme.md").default,
    //   readTime: readingTime(require("./posts/deneme.md").default),
    //   date: "8 Şubat 2020",
    //   category: categories[1]
    // },
    // {
    //   title: "github...",
    //   slug: "github",
    //   summary:
    //     "Veniam consectetur qui cillum esse pariatur veniam excepteur est. Sit esse ex amet non laboris dolore aliquip sunt aute. Laboris occaecat occaecat laboris nostrud Lorem eu voluptate eiusmod adipisicing. Esse est cillum enim ullamco incididunt sint aliquip est consectetur nostrud ullamco. Esse id eiusmod enim consequat exercitation eu incididunt tempor cillum et pariatur ipsum qui minim. Velit aute in nulla sit laboris labore magna voluptate sint magna.",
    //   details: require("./posts/git.md").default,
    //   readTime: readingTime(require("./posts/git.md").default),
    //   date: "8 Şubat 2020",
    //   category: categories[1]
    // }
  ];
};
