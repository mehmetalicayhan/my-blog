import { getPosts } from "../../src/blog-post";

const posts = getPosts();

export default async (req, res) => {
  res.json({ posts });
};
