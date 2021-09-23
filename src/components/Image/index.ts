import styled from "styled-components";
import { CommonDefs } from "../commonDefinitions";

interface ImageProps {
  position: "absolute" | "relative" | "fixed" | "static";
  width: string;
  height: string;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

const Image = styled("img")<ImageProps & CommonDefs>`
  position: ${props => props.position};
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => (!!props.left ? props.left + "%" : undefined)};
  right: ${props => (!!props.right ? props.right + "%" : undefined)};
  top: ${props => (!!props.top ? props.top + "%" : undefined)};
  bottom: ${props => (!!props.bottom ? props.bottom + "%" : undefined)};
  ${props =>
    !!props.wideScreensDefinitions &&
    props.wideScreensDefinitions.length > 0 &&
    props.wideScreensDefinitions.map(def => {
      return `@media screen and (min-width: ${def.screenSize + "px"}) ${def.definition}`;
    })};
`;

export default Image;
