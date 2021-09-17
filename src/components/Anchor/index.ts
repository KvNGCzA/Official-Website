import styled from "styled-components";
import { CommonDefs } from "../commonDefinitions";

interface AnchorProps {
  position: "absolute" | "relative" | "fixed" | "static";
  color: string;
  fontSize?: number;
  fontStyle?: "italic" | "normal";
  fontWeight?: "bold" | "bolder" | "normal";
  textDecoration?: string;
  textAlign?: "left" | "center" | "right";
  lineHeight?: number;
  width: number;
  height: number;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

const Anchor = styled("a")<AnchorProps & CommonDefs>`
  position ${props => props.position};
  color: ${props => props.color};
  font-size: ${props => (!!props.fontSize ? props.fontSize + "px" : "12px")};
  font-style: ${props => props.fontStyle || "normal"};
  font-weight: ${props => props.fontWeight || "normal"};
  text-decoration: ${props => props.textDecoration || "none"};
  text-align: ${props => props.textAlign || "center"};
  line-height: ${props => (!!props.lineHeight ? props.lineHeight + "px" : "12px")};
  width: ${props => props.width + "px"};
  height: ${props => props.height + "px"};
  top: ${props => (!!props.top ? props.top + "px" : undefined)};
  left: ${props => (!!props.left ? props.left + "px" : undefined)};
  right: ${props => (!!props.right ? props.right + "px" : undefined)};
  bottom: ${props => (!!props.bottom ? props.bottom + "px" : undefined)};

  ${props =>
    !!props.mobileScreensDefinitions &&
    props.mobileScreensDefinitions.length > 0 &&
    props.mobileScreensDefinitions.map(def => {
      return `@media screen and (max-width: ${def.screenSize + "px"}) ${def.definition}`;
    })}
`;

export default Anchor;
