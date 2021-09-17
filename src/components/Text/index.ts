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
  fontWeight?: "bold" | "bolder" | "normal" | number;
  fontFamily?: string;
  lineHeight?: number;
  color: string;
  margin?: string;
  textAlign?: "center" | "left" | "right";
}

const Text = styled("span")<TextProps & CommonDefs>`
  position: ${props => props.position};
  width: ${props => (!!props.width ? props.width + "px" : "14px")};
  height: ${props => (!!props.height ? props.height + "px" : "14px")};
  left: ${props => (!!props.left ? props.left + "px" : undefined)};
  top: ${props => (!!props.top ? props.top + "px" : undefined)};
  right: ${props => (!!props.right ? props.right + "px" : undefined)};
  bottom: ${props => (!!props.bottom ? props.bottom + "px" : undefined)};
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
    !!props.mobileScreensDefinitions &&
    props.mobileScreensDefinitions.length > 0 &&
    props.mobileScreensDefinitions.map(def => {
      return `@media screen and (max-width: ${def.screenSize + "px"}) ${def.definition}`;
    })}
`;

export default Text;
