import styled from "styled-components";

export const Sample = styled.span`
  color: #fddb3a;
  margin-left: 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`;

export const DateSpan = styled.span`
  color: #5b5656;
  font-family: "Montserrat", sans-serif;
`;

// Todo : Add font to title and slug
export const Title = styled.a`
  color: #5b5656;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    color: #3e206d;
    text-decoration: underline;
  }
`;

export const PostDetailTitle = styled.h3`
  color: #5b5656;
  font-weight: 900;
  padding-top: 1rem !important;
  font-family: Montserrat, sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 2rem;
  line-height: 1.1;
  text-align: center;
  &:hover {
    color: #3e206d;
  }
`;

export const Slug = styled.p`
  color: #5b5656;
  font-weight: bold;
  margin-top: 10px;
`;

export const ReadLink = styled.a`
  color: #5b5656;
  font-weight: bold;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    color: #3e206d;
    text-decoration: underline;
  }
`;

export const ReadTime = styled.span`
  color: #5b5656;
  font-weight: bold;
  text-decoration: none;
  float: right;
`;
