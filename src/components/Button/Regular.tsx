import styled from "styled-components";

interface Props {
  stretch?: boolean;
  fullWidth?: boolean;
  color?: string;
  background?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
}

const RegularButton = styled.button<Props>`
  height: ${({ stretch }) => stretch && "100%"};
  background: ${({ background }) => background || "#fcd98d"};
  border-radius: 4px;
  border: 2px solid ${({ background }) => background || "#fcd98d"};
  font-size: 18px;
  font-family: "Gilroy";
  font-weight: 800;
  margin-left: ${({ ml }) => ml};
  margin-bottom: ${({ mb }) => mb};
  margin-right: ${({ mr }) => mr};
  margin-top: ${({ mt }) => mt};
  min-width: ${({ fullWidth }) => (fullWidth ? "100%" : "240px")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color || "#151515"};
  padding: 15px 20px;
  ${({ theme }) => theme.breakpoint.down("lg")} {
    font-size: 16px;
    min-width: ${({ fullWidth }) => (fullWidth ? "100%" : "200px")};
  }

  ${({ theme }) => theme.breakpoint.down("sm")} {
    font-size: 14px;
    min-width: ${({ fullWidth }) => (fullWidth ? "100%" : "180px")};
  }
`;

export default RegularButton;
