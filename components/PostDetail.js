import React from "react";
import ReactMarkdown from "react-markdown";
import { PostDetailTitle, DateSpan, ReadTime } from "./styledComponents/styles";
import { FaBook } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
`;

const PostDetail = ({ post }) => {
  return (
    <Container>
      <div className="p-3">
        <DateSpan>{post.date}</DateSpan>
        <ReadTime>
          <span className="small">
            {post.readTime} min
            <FaBook className="ml-1" />
          </span>
        </ReadTime>
        <PostDetailTitle>{post.title}</PostDetailTitle>
        <ReactMarkdown source={post.details} />
      </div>
    </Container>
  );
};

export default PostDetail;
