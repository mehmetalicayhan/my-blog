import React from "react";
import ReactMarkdown from "react-markdown";
import { PostDetailTitle, DateSpan, ReadTime } from "./styledComponents/styles";
import { FaBook } from "react-icons/fa";
import styled from "styled-components";
import CodeBlock from "./theming/syntaxHighliter";

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
        <div style={{ maxWidth: "650px" }}>
          <ReactMarkdown
            escapeHtml={false}
            source={post.details}
            renderers={{ code: CodeBlock }}
          />
        </div>
      </div>
    </Container>
  );
};

export default PostDetail;
