import styled from "styled-components";

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
  backgroundColor: string;
  color: string;
  transform?: string;
}

const Button = styled("button")<ButtonProps>`
  position: ${props => props.position || "relative"};
  width: ${props => (!!props.width ? props.width + "px" : "150px")};
  height: ${props => (!!props.height ? props.height + "px" : "40px")};
  left: ${props => (!!props.left ? props.left + "px" : undefined)};
  right: ${props => (!!props.right ? props.right + "px" : undefined)};
  top: ${props => (!!props.top ? props.top + "px" : undefined)};
  bottom: ${props => (!!props.bottom ? props.bottom + "px" : undefined)};
  border: ${props => props.border || "none"};
  box-sizing: ${props => props.boxSizing || undefined};
  background-color: ${props => props.backgroundColor || "black"};
  color: ${props => props.color || "#fff"};
  box-shadow: ${props => props.boxShadow || undefined};
  cursor: pointer;
  transform: ${props => props.transform || undefined};
`;

export default Button;
