import styled from "styled-components";

interface Props {
  flexWrap?: boolean;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  // 996px
  alignItemsLg?: string;
  justifyContentLg?: string;
  flexDirectionLg?: string;
  //  768px
  alignItemsMd?: string;
  justifyContentMd?: string;
  flexDirectionMd?: string;
  // 567px
  alignItemsSm?: string;
  justifyContentSm?: string;
  flexDirectionSm?: string;
  // Child Flex
  itemsFlex?: number;
  itemsFlexLg?: number;
  itemsFlexMd?: number;
  itemsFlexSm?: number;
}

const Flex = styled.div<Props>`
  /* width: 100%; */
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap && "wrap"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};

  > *, > div {
    flex: ${({ itemsFlex }) => itemsFlex};
  }

  ${({ theme }) => theme.breakpoint.down("lg")} {
    flex-direction: ${({ flexDirectionLg }) => flexDirectionLg};
    justify-content: ${({ justifyContentLg }) => justifyContentLg};
    align-items: ${({ alignItemsLg }) => alignItemsLg};
    > * {
      flex: ${({ itemsFlexLg }) => itemsFlexLg};
    }
  }

  ${({ theme }) => theme.breakpoint.down("md")} {
    flex-direction: ${({ flexDirectionMd }) => flexDirectionMd};
    justify-content: ${({ justifyContentMd }) => justifyContentMd};
    align-items: ${({ alignItemsMd }) => alignItemsMd};
    > * {
      flex: ${({ itemsFlexMd }) => itemsFlexMd};
    }
  }

  ${({ theme }) => theme.breakpoint.down("sm")} {
    flex-direction: ${({ flexDirectionSm }) => flexDirectionSm};
    justify-content: ${({ justifyContentSm }) => justifyContentSm};
    align-items: ${({ alignItemsSm }) => alignItemsSm};
    > * {
      flex: ${({ itemsFlexSm }) => itemsFlexSm};
    }
  }
`;

export default Flex;
