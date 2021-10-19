import styled from "styled-components";
import Text from "./Typography";

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
`;

export const ImageBorder = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  background-color: #232323;
  > img {
    width: 100%;
    ${({ theme }) => theme.breakpoint.down("sm")} {
      display: none;
    }
  }
`;
