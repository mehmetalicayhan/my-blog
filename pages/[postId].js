import fetch from "isomorphic-unfetch";
import PostDetail from "../components/PostDetail";
const BlogPost = ({ post }) => <PostDetail post={post} />;

BlogPost.getInitialProps = async ({ req, query }) => {
  const res = await fetch(
    `https://mehmetalicayhan.com/api/post/${query.postId}`
  );
  // const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
