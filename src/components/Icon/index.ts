import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CommonDefs } from "../commonDefinitions";

interface IconProps {
  width: number;
  height: number;
  color: string;
  position?: "absolute" | "relative" | "fixed" | "static";
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  padding?: string;
}

const Icon = styled(FontAwesomeIcon)<IconProps & CommonDefs>`
  width: ${props => props.width + "px"};
  height: ${props => props.height + "px"};
  color: ${props => props.color};
  position: ${props => props.position};
  top: ${props => props.top};
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  padding: ${props => props.padding};

  ${props =>
    !!props.wideScreensDefinitions &&
    props.wideScreensDefinitions.length > 0 &&
    props.wideScreensDefinitions.map(def => {
      return `@media screen and (min-width: ${def.screenSize + "px"}) ${def.definition}`;
    })};
`;

export default Icon;
