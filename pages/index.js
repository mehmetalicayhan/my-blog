import React from "react";
import Info from "../components/Info";
import fetch from "isomorphic-unfetch";
import Post from "../components/Post";

const Home = ({ posts }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <Info />
      </div>
      <div
        className="d-sm-none d-md-block border-right p-0"
        style={{ maxWidth: "5.3333%" }}
      ></div>
      <div className="col ">
        {posts.map((post, i) => (
          <Post data={post} key={i} />
        ))}
      </div>
    </div>
    <style jsx>{`
      .container {
        margin-top: 50px;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const res = await fetch("https://mehmetalicayhan.com/api/posts");
  // const res = await fetch("http://localhost:3000/api/posts");

  const json = await res.json();
  return { posts: json.posts };
};
  
export default Home;
