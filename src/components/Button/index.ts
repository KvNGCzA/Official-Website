import styled from "styled-components";
import { CommonDefs } from "../commonDefinitions";

interface ButtonProps {
  position: "absolute" | "relative" | "fixed" | "static";
  width: number;
  height: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  border: string;
  boxSizing?: string;
  boxShadow?: string;
  backgroundColor?: string;
  color: string;
  borderImage?: string;
  borderRadius?: string;
  background?: string;
  textAlign?: string;
  fontWeight?: string;
}

const Button = styled("button")<ButtonProps & CommonDefs>`
  position: ${props => props.position || "relative"};
  width: ${props => (!!props.width ? props.width + "%" : "150px")};
  height: ${props => (!!props.height ? props.height + "px" : "40px")};
  left: ${props => (!!props.left ? props.left + "%" : undefined)};
  right: ${props => (!!props.right ? props.right + "%" : undefined)};
  top: ${props => (!!props.top ? props.top + "%" : undefined)};
  bottom: ${props => (!!props.bottom ? props.bottom + "%" : undefined)};
  border: ${props => props.border || "none"};
  box-sizing: ${props => props.boxSizing || undefined};
  background-color: ${props => props.backgroundColor || "black"};
  color: ${props => props.color || "#fff"};
  box-shadow: ${props => props.boxShadow || undefined};
  cursor: pointer;
  border-image: ${props => props.borderImage};
  border-radius: ${props => props.borderRadius};
  transform: ${props => props.transform || undefined};
  transition: transform 1s ease-in-out;
  background: ${props => props.background};
  text-align: ${props => props.textAlign};
  font-weight: ${props => props.fontWeight || "bold"};
  ${props =>
    !!props.mouseEvents &&
    props.mouseEvents.length > 0 &&
    props.mouseEvents.map(e => {
      return `&:${e.name} ${e.definition}`;
    })};
  ${props =>
    !!props.wideScreensDefinitions &&
    props.wideScreensDefinitions.length > 0 &&
    props.wideScreensDefinitions.map(def => {
      return `@media screen and (min-width: ${def.screenSize + "px"}) ${def.definition}`;
    })};
`;

export default Button;
