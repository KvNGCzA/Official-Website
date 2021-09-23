import styled from "styled-components";
import { CommonDefs } from "../commonDefinitions";

interface TextProps {
  position: "absolute" | "static" | "relative" | "fixed";
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  fontSize?: number;
  fontStyle?: "italic" | "number";
  fontWeight?: string;
  fontFamily?: string;
  lineHeight?: number;
  color: string;
  margin?: string;
  textAlign?: "center" | "left" | "right";
}

const Text = styled("span")<TextProps & CommonDefs>`
  position: ${props => props.position};
  width: ${props => (!!props.width ? props.width + "%" : "14px")};
  height: ${props => (!!props.height ? props.height + "px" : "14px")};
  left: ${props => (!!props.left ? props.left + "%" : undefined)};
  top: ${props => (!!props.top ? props.top + "%" : undefined)};
  right: ${props => (!!props.right ? props.right + "%" : undefined)};
  bottom: ${props => (!!props.bottom ? props.bottom + "%" : undefined)};
  font-size: ${props => (!!props.fontSize ? props.fontSize + "px" : undefined)};
  font-style: ${props => props.fontStyle || "normal"};
  font-weight: ${props => props.fontWeight || "normal"};
  font-family: ${props => props.fontFamily || "sans-serif"};
  line-height: ${props => (!!props.lineHeight ? props.lineHeight + "px" : "43px")};
  color: ${props => props.color};
  margin: ${props => props.margin || undefined};
  text-align: ${props => props.textAlign || "left"};
  transform: ${props => props.transform || undefined};
  ${props =>
    !!props.wideScreensDefinitions &&
    props.wideScreensDefinitions.length > 0 &&
    props.wideScreensDefinitions.map(def => {
      return `@media screen and (min-width: ${def.screenSize + "px"}) ${def.definition}`;
    })};
`;

export default Text;
