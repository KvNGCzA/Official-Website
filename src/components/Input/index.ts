import styled from "styled-components";
import { CommonDefs } from "../commonDefinitions";

interface InputProps {
  position?: "absolute" | "static" | "relative" | "fixed";
  width: number;
  height: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  color?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderImage?: string;
  borderRadius?: string;
  backgroundColor?: string;
  background?: string;
  fontSize?: number;
  boxSizing?: string;
}

const Input = styled("input")<InputProps & CommonDefs>`
  outline: none;
  position: ${props => props.position};
  width: ${props => props.width + "%"};
  height: ${props => props.height + "px"};
  left: ${props => props.left + "%"};
  right: ${props => props.right + "%"};
  top: ${props => props.top + "%"};
  bottom: ${props => props.bottom + "%"};
  color: ${props => props.color};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  border: ${props => props.border};
  border-image: ${props => props.borderImage};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backgroundColor};
  background: ${props => props.background};
  font-size: ${props => props.fontSize};
  box-sizing: ${props => props.boxSizing};

  ${props =>
    !!props.wideScreensDefinitions &&
    props.wideScreensDefinitions.length > 0 &&
    props.wideScreensDefinitions.map(def => {
      return `@media screen and (min-width: ${def.screenSize + "px"}) ${def.definition}`;
    })};

  ${props =>
    !!props.mouseEvents &&
    props.mouseEvents.length > 0 &&
    props.mouseEvents.map(e => {
      return `&:${e.name} ${e.definition}`;
    })};
`;

export default Input;
