import styled from "styled-components";

interface textTypes {
  fontSize?: number;
  lineHeight?: string;
  textAlign?: "center" | "left" | "right";
  textAlignMd?: "center" | "left" | "right";
  fontWeight?: number;
  fontFamily?: "Gilroy" | "Euclid Circular A" | "SF Pro Display" | "Inter";
  color?: string;
  transform?: "uppercase" | "lowercase" | "capitalize";
  decoration?: string;
  display?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
}

const Text = styled.p<textTypes>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "18px")};
  line-height: ${({ fontSize }) => (fontSize ? fontSize + 10 + "px" : "27px")};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  font-family: ${({ fontFamily }) => fontFamily || "Gilroy"};
  color: ${({ color }) => color || "#CACACA"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  margin-left: ${({ ml }) => ml};
  margin-bottom: ${({ mb }) => mb};
  margin-right: ${({ mr }) => mr};
  margin-top: ${({ mt }) => mt};
  text-transform: ${({ transform }) => transform};
  text-decoration: ${({ decoration }) => decoration};
  display: ${({ display }) => display};
  ${({ theme }) => theme.breakpoint.down("lg")} {
    font-size: ${({ fontSize }) => (fontSize ? fontSize - 2 + "px" : "16px")};
    line-height: ${({ fontSize }) => (fontSize ? fontSize + 8 + "px" : "25px")};
  }

  ${({ theme }) => theme.breakpoint.down("md")} {
    text-align: ${({ textAlignMd }) => textAlignMd};
  }

  ${({ theme }) => theme.breakpoint.down("sm")} {
    font-size: ${({ fontSize }) => (fontSize ? fontSize - 4 + "px" : "14px")};
    line-height: ${({ fontSize }) => (fontSize ? fontSize + 6 + "px" : "23px")};
  }
`;

export default Text;

// const TextStyle = styled("p")(() => ({
//     fontSize: fontSize || 14;

//
//   }));

//   export default function Text({ fontSize, align, fontWeight, fontFamily, color, children, ...rest }) {
//     return (
//       <TextStyle fontSize={fontSize} align={align} fontWeight={fontWeight} fontFamily={fontFamily} color={color} {...rest}>
//         {children}
//       </TextStyle>
//     );
//   }
