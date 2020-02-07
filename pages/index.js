import React from "react";
import Info from "../components/Info";
import fetch from "isomorphic-unfetch";
import Post from "../components/Post";

const Home = ({ posts }) => (
  <div className="container">
    <div className="row">
      <div className="col-3 mr-3">
        <Info />
      </div>
      <div className="col border-left">
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
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
