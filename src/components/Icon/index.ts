import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CommonDefs } from "../commonDefinitions";

interface IconProps {
  width: number;
  height: number;
  color: string;
  position: "absolute" | "relative" | "fixed" | "static";
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

const Icon = styled(FontAwesomeIcon)<IconProps & CommonDefs>`
  width: ${props => props.width + "px"};
  height: ${props => props.height + "px"};
  color: ${props => props.color};
  position: ${props => props.position};
  top: ${props => props.top || undefined};
  left: ${props => props.left || undefined};
  bottom: ${props => props.bottom || undefined};
  right: ${props => props.right || undefined};

  ${props =>
    !!props.mobileScreensDefinitions &&
    props.mobileScreensDefinitions.length > 0 &&
    props.mobileScreensDefinitions.map(def => {
      return `@media screen and (max-width: ${def.screenSize + "px"}) ${def.definition}`;
    })}
`;

export default Icon;
