import styled from "styled-components";

interface DivProps {
  position: "absolute" | "fixed" | "static" | "relative";
  width: number;
  height: number;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  transform?: string;
  border?: string;
  borderImage?: string;
}

const CustomDiv = styled("div")<DivProps>`
  position: ${props => props.position};
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => (!!props.left ? props.left + "px" : undefined)};
  right: ${props => (!!props.right ? props.right + "px" : undefined)};
  bottom: ${props => (!!props.bottom ? props.bottom + "px" : undefined)};
  top: ${props => (!!props.top ? props.top + "px" : undefined)};
  transform: ${props => props.transform || undefined};
  border: ${props => props.border || undefined};
  border-image: ${props => props.borderImage || undefined};
`;

export default CustomDiv;
