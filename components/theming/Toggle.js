import React from "react";
import { FaSun, FaMoon, FaHome } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";

const Span = styled.span`
  color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div>
      <button className="btn rounded" onClick={e => toggleTheme()}>
        {theme === "light" ? (
          <span className={"text-dark"}>
            <FaMoon />
          </span>
        ) : (
          <span className={"text-light"}>
            <FaSun />
          </span>
        )}
      </button>
      <button className="btn rounded">
        <Link href="/">
          <a>
            <Span>
              <FaHome size={20} />
            </Span>
          </a>
        </Link>
      </button>
    </div>
  );
};

// My Toggle Theme System
// https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
export default Toggle;
