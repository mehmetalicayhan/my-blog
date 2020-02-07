import styled from "styled-components";

export const Sample = styled.span`
  margin-left: 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`;

export const DateSpan = styled.span`
  color: ${({ theme }) => theme.date};
  font-family: "Montserrat", sans-serif;
`;

// Todo : Add font to title and slug
export const Title = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size:1.5rem;
  margin-top: 10px;

  &:hover {
    color:${({ theme }) => theme.hover};
    text-decoration: underline;
  }
`;

export const PostDetailTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-weight: 900;
  padding-top: 1rem !important;
  font-family: Montserrat, sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 2rem;
  line-height: 1.1;
  text-align: center;
`;

export const Summary = styled.p`
  color: ${({ theme }) => theme.summary};
  font-weight: bold;
  margin-top: 10px;
`;

export const ReadLink = styled.a`
  color: #5b5656;
  font-weight: bold;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.hover};
    text-decoration: underline;
  }
`;

export const SocialLink = styled.a`
  color:inherit;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`;
export const ReadTime = styled.span`
  color: ${({ theme }) => theme.date};
  font-weight: bold;
  text-decoration: none;
  float: right;
`;

export const ResponsiveImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  border-radius: 50%;
`;
