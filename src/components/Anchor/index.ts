import styled from "styled-components";
import { CommonDefs } from "../commonDefinitions";

interface AnchorProps {
  position?: "absolute" | "relative" | "fixed" | "static";
  color: string;
  fontSize?: number;
  fontStyle?: "italic" | "normal";
  fontWeight?: string;
  textDecoration?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  lineHeight?: number;
  widthAs?: number;
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
  min-width: ${props => props.widthAs + "%"};
  height: ${props => props.height + "px"};
  top: ${props => (!!props.top ? props.top + "%" : undefined)};
  left: ${props => (!!props.left ? props.left + "%" : undefined)};
  right: ${props => (!!props.right ? props.right + "%" : undefined)};
  bottom: ${props => (!!props.bottom ? props.bottom + "%" : undefined)};

  ${props =>
    !!props.wideScreensDefinitions &&
    props.wideScreensDefinitions.length > 0 &&
    props.wideScreensDefinitions.map(def => {
      return `@media screen and (min-width: ${def.screenSize + "px"}) ${def.definition}`;
    })};
`;

export default Anchor;
