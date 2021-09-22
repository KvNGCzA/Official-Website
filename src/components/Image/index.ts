import styled from "styled-components";
import { CommonDefs } from "../commonDefinitions";

interface ImageProps {
  position: "absolute" | "relative" | "fixed" | "static";
  width: number;
  height: number;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

const Image = styled("img")<ImageProps & CommonDefs>`
  position: ${props => props.position};
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => (!!props.left ? props.left + "px" : undefined)};
  right: ${props => (!!props.right ? props.right + "px" : undefined)};
  top: ${props => (!!props.top ? props.top + "px" : undefined)};
  bottom: ${props => (!!props.bottom ? props.bottom + "px" : undefined)};
`;

export default Image;
