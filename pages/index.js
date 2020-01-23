import React from "react";
import Info from "../components/Info";
import Posts from "../components/Posts";
// import styled from "styled-components";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 mr-3">
          <Info />
        </div>
        <div className="col border-left">
          <Posts />
        </div>
      </div>
      <style jsx>{`
        .container {
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
};

export default Home;
