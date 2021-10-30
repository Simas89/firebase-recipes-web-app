import styled, { css } from "styled-components";

interface SpacerProps {
  border?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}
export const Spacer = styled.div<SpacerProps>`
  height: ${({ theme }) => theme.spacing(1)};

  ${({ theme }) => theme.breakpoints.up("xs")} {
    ${({ xs }) =>
      xs &&
      css`
        height: ${xs}px;
      `};
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    ${({ sm }) =>
      sm &&
      css`
        height: ${sm}px;
      `};
  }

  ${({ theme }) => theme.breakpoints.up("md")} {
    ${({ md }) =>
      md &&
      css`
        height: ${md}px;
      `};
  }

  ${({ theme }) => theme.breakpoints.up("lg")} {
    ${({ lg }) =>
      lg &&
      css`
        height: ${lg}px;
      `};
  }
  ${({ theme }) => theme.breakpoints.up("xl")} {
    ${({ xl }) =>
      xl &&
      css`
        height: ${xl}px;
      `};
  }

  ${({ border }) =>
    border &&
    css`
      border: 1px solid red;
    `}
`;
