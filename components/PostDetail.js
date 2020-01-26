import React from "react";
import ReactMarkdown from "react-markdown";
import { PostDetailTitle, DateSpan } from "./styledComponents/styles";
import styled from "styled-components";

const Container = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
`;

const PostDetail = ({ post }) => {
  return (
    <Container>
      <DateSpan>{post.date}</DateSpan>
      <PostDetailTitle>{post.title}</PostDetailTitle>
      <div className="p-3">
        <ReactMarkdown source={post.details} />
      </div>
    </Container>
  );
};

export default PostDetail;
