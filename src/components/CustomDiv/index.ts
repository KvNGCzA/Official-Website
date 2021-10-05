import styled from "styled-components";
import { CommonDefs } from "../commonDefinitions";

interface DivProps {
  position?: "absolute" | "fixed" | "static" | "relative";
  width?: string;
  height?: string;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  transform?: string;
  border?: string;
  borderImage?: string;
  displayAs?: string;
  flexDirection?: "row" | "column";
  alignItems?: string;
  padding?: string;
  backgroundColor?: string;
  margin?: string;
  borderRadius?: string;
  boxSizing?: string;
  textAlign?: string;
}

const CustomDiv = styled("div")<DivProps & CommonDefs>`
  position: ${props => props.position};
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => (!!props.left ? props.left + "%" : undefined)};
  right: ${props => (!!props.right ? props.right + "%" : undefined)};
  bottom: ${props => (!!props.bottom ? props.bottom + "%" : undefined)};
  top: ${props => (!!props.top ? props.top + "%" : undefined)};
  transform: ${props => props.transform};
  border: ${props => props.border};
  border-image: ${props => props.borderImage};
  display: ${props => props.displayAs};
  flex-direction: ${props => props.flexDirection};
  background-color: ${props => props.backgroundColor};
  align-items: ${props => props.alignItems};
  margin: ${props => props.margin};
  border-radius: ${props => props.borderRadius};
  box-sizing: ${props => props.boxSizing};
  text-align: ${props => props.textAlign};
  ${props =>
    !!props.wideScreensDefinitions &&
    props.wideScreensDefinitions.length > 0 &&
    props.wideScreensDefinitions.map(def => {
      return `@media screen and (min-width: ${def.screenSize + "px"}) ${def.definition}`;
    })};
`;

export default CustomDiv;
