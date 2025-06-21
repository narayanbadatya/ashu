import React from "react";
import styled from "styled-components";

const GlowButton = ({ onClick, children, type = "button" }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --btn-color: rgb(100, 61, 136);

  border: 2px solid var(--glow-color);
  padding: 0.75em 2em;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.75em;
  outline: none;
  cursor: pointer;
  color: var(--glow-color);
  background-color: var(--btn-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  box-shadow:
    0 0 0.5em 0.1em var(--glow-color),
    0 0 2em 0.5em var(--glow-spread-color),
    inset 0 0 0.5em 0.1em var(--glow-color);
  transition: all 0.3s ease;

  &:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow:
      0 0 0.3em 0.1em var(--glow-color),
      0 0 1.2em 0.6em var(--glow-spread-color),
      inset 0 0 0.5em 0.1em var(--glow-color);
  }

  &:focus-visible {
    outline: 2px dashed var(--glow-color);
    outline-offset: 4px;
  }
`;

export default GlowButton;
