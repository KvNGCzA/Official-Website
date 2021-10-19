import React from "react";
import styled from "styled-components";

interface Props {
  showSun?: boolean;
  showMint?: boolean;
  moveMint?: string;
  moveSun?: string;
  moveMintUp?: string;
  moveSunUp?: string;
  moveMintDown?: string;
  moveSunDown?: string;
  sunBlur?: string;
  sunWidth?: string;
  mintBlur?: string;
  mintWidth?: string;

  children?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal;
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  min-height: max-content;
`;

const WrapperOverlay = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
  background: linear-gradient(0deg, #181a1c18, #181a1c11);;
`;

const Sun = styled.div<{ blur?: string; width?: string; left?: string; up?: string; down?: string }>`
  position: absolute;
  z-index: 1;
  left: ${({ left }) => left || "-85px"};
  height: ${({ width }) => width || "175px"};
  width: ${({ width }) => width || "175px"};
  filter: blur(${({ blur }) => blur || "109.032px"});
  border-radius: 50%;
  opacity: 0.9;
  background-color: #e9a003;
  top: ${({ up }) => up};
  bottom: ${({ down }) => down};
`;

const Mint = styled.div<{ blur?: string; width?: string; right?: string; up?: string; down?: string }>`
  position: absolute;
  z-index: 1;
  right: ${({ right }) => right || "-85px"};
  height: ${({ width }) => width || "175px"};
  width: ${({ width }) => width || "175px"};
  filter: blur(${({ blur }) => blur || "109.032px"});
  border-radius: 50%;
  background-color: #37f5fe;
  opacity: 0.9;
  top: ${({ up }) => up};
  bottom: ${({ down }) => down};
`;

export const EllipseBg = (props: Props) => {
  const {
    moveMint,
    moveSun,
    moveMintUp,
    moveSunUp,
    moveMintDown,
    moveSunDown,
    sunBlur,
    sunWidth,
    mintBlur,
    mintWidth,
  } = props;

  return (
    <Wrapper>
      <WrapperOverlay>{props.children}</WrapperOverlay>
      {props.showSun && <Sun blur={sunBlur} width={sunWidth} up={moveSunUp} down={moveSunDown} left={moveSun} />}
      {props.showMint && (
        <Mint blur={mintBlur} width={mintWidth} up={moveMintUp} down={moveMintDown} right={moveMint} />
      )}
    </Wrapper>
  );
};
