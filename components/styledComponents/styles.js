import styled from "styled-components";

export const Sample = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  border: 1px solid ${({ theme }) => theme.text};
  box-shadow: 2px 2px;
  border-radius: 4px;
  padding: 3px;
`;

export const DateSpan = styled.span`
  color: ${({ theme }) => theme.date};
  font-family: "Montserrat", sans-serif;
  margin-top: 3px;
`;

// Todo : Add font to title and slug
export const Title = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 0.75em;
  &:hover {
    color: ${({ theme }) => theme.hover};
    margin-left: 3px;
    text-decoration: underline;
  }
`;

export const PostDetailTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-weight: 900;
  padding-top: 1rem !important;
  margin-bottom: 15px;
  text-rendering: optimizeLegibility;
  font-size: 2rem;
  line-height: 1.1;
  text-align: center;
`;

export const Summary = styled.p`
  color: ${({ theme }) => theme.summary};
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

export const SocialLink = styled.a.attrs({ target: "blank" })`
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`;

export const HorizontalLine = styled.hr`
  background-color: #ececec;
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

export const Border = styled.div`
  border: 1px solid ${({ theme }) => theme.hover};
  border-radius: 4px;
`;
export const Bio = styled.div`
  color: ${({ theme }) => theme.text};
  text-rendering: optimizeLegibility;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
`;
