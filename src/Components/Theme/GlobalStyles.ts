import { createGlobalStyle } from "styled-components"
import { ThemeType } from "./Themes";


export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
body {
  background: ${({ theme }) => theme?.body};
  color: ${({ theme }) => theme?.text};
  background-color: ${({ theme }) => theme?.backgroundColor};
  font-family: "Inconsolata", sans-serif;
  transition: all 1s linear;
}
nav {
  background-color: ${({ theme }) => theme?.backgroundColor};
  border-bottom: 1px solid ${({ theme }) => theme?.headerBorder};
}
`

