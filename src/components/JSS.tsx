import styled from "styled-components";
import Text from "./Typography";

interface hideProps {
  hideXs?: boolean;
  hideLg?: boolean;
  hideMd?: boolean;
  hideSm?: boolean;
  hideXl?: boolean;
}

export const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  > div {
    width: 70%;
    padding: 15px;
    padding-bottom: 0;
    border-radius: 8px;
    background-color: #181a1c;
  }
  > div img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const ClipText = styled(Text)`
  background: -webkit-linear-gradient(#fcd98d 50%, #37f4fe);
  -webkit-background-clip: text;
  text-align: center;
  -webkit-text-fill-color: transparent;
`;

export const ColoredBorders = styled.div`
  border: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(to bottom, #fcd98d9e, #37f4fe83);
  width: 100%;
  padding: 40px;
  padding-bottom: 15px;
  margin-top: 50px;
  ${({ theme }) => theme.breakpoint.down("sm")} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ImageBorder = styled.div`
  width: 100%;
  > img {
    width: 100%;
    border-radius: 8px;
    border: 10px solid #232323;
  }
`;

export const HideDown = styled.div<hideProps>`
  ${({ theme }) => theme.breakpoint.down("xs")} {
    display: ${({ hideXs }) => hideXs && "none"};
  }
  ${({ theme }) => theme.breakpoint.down("sm")} {
    display: ${({ hideSm }) => hideSm && "none"};
  }
  ${({ theme }) => theme.breakpoint.down("md")} {
    display: ${({ hideMd }) => hideMd && "none"};
  }
  ${({ theme }) => theme.breakpoint.down("lg")} {
    display: ${({ hideLg }) => hideLg && "none"};
  }
  ${({ theme }) => theme.breakpoint.down("xl")} {
    display: ${({ hideXl }) => hideXl && "none"};
  }
`;

export const HideUp = styled.div<hideProps>`
  ${({ theme }) => theme.breakpoint.up("xs")} {
    display: ${({ hideXs }) => hideXs && "none"};
  }
  ${({ theme }) => theme.breakpoint.up("sm")} {
    display: ${({ hideSm }) => hideSm && "none"};
  }
  ${({ theme }) => theme.breakpoint.up("md")} {
    display: ${({ hideMd }) => hideMd && "none"};
  }
  ${({ theme }) => theme.breakpoint.up("lg")} {
    display: ${({ hideLg }) => hideLg && "none"};
  }
  ${({ theme }) => theme.breakpoint.up("xl")} {
    display: ${({ hideXl }) => hideXl && "none"};
  }
`;
