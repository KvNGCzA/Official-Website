import styled from 'styled-components';

interface props {
  background?: string;
  display?: 'none' | 'initial' | 'flex' | 'grid' | 'block' | 'inline-block';
  fullWidth?: boolean;
  fullWidthLg?: boolean;
  fullWidthMd?: boolean;
  fullWidthSm?: boolean;
  margin?: string;
  marginBottom?: string;
  marginBottomLg?: string;
  marginBottomMd?: string;
  marginBottomSm?: string;
  marginHorizontal?: string;
  marginHorizontalLg?: string;
  marginHorizontalMd?: string;
  marginHorizontalSm?: string;
  marginLeft?: string;
  marginLeftLg?: string;
  marginLeftMd?: string;
  marginLeftSm?: string;
  marginLg?: string;
  marginMd?: string;
  marginRight?: string;
  marginRightLg?: string;
  marginRightMd?: string;
  marginRightSm?: string;
  marginSm?: string;
  marginTop?: string;
  marginTopLg?: string;
  marginTopMd?: string;
  marginTopSm?: string;
  marginVertical?: string;
  marginVerticalLg?: string;
  marginVerticalMd?: string;
  marginVerticalSm?: string;
  padding?: string;
  paddingBottom?: string;
  paddingBottomLg?: string;
  paddingBottomMd?: string;
  paddingBottomSm?: string;
  paddingHorizontal?: string;
  paddingHorizontalLg?: string;
  paddingHorizontalMd?: string;
  paddingHorizontalSm?: string;
  paddingLeft?: string;
  paddingLeftLg?: string;
  paddingLeftMd?: string;
  paddingLeftSm?: string;
  paddingLg?: string;
  paddingMd?: string;
  paddingRight?: string;
  paddingRightLg?: string;
  paddingRightMd?: string;
  paddingRightSm?: string;
  paddingSm?: string;
  paddingTop?: string;
  paddingTopLg?: string;
  paddingTopMd?: string;
  paddingTopSm?: string;
  paddingVertical?: string;
  paddingVerticalLg?: string;
  paddingVerticalMd?: string;
  paddingVerticalSm?: string;
}

const Spacing = styled.div<props>`
  display: ${({display}) => display};
  width: ${({fullWidth}) => (fullWidth ? '100%' : 'unset')};
  background: ${({background}) => background};
  position: relative;
  z-index: 4;
  padding: ${({padding}) => padding};
  padding-top: ${({paddingTop, paddingVertical}) => paddingVertical || paddingTop};
  padding-bottom: ${({paddingBottom, paddingVertical}) => paddingVertical || paddingBottom};
  padding-right: ${({paddingRight, paddingHorizontal}) => paddingHorizontal || paddingRight};
  padding-left: ${({paddingLeft, paddingHorizontal}) => paddingHorizontal || paddingLeft};
  margin: ${({margin}) => margin};
  margin-top: ${({marginTop, marginVertical}) => marginVertical || marginTop};
  margin-bottom: ${({marginBottom, marginVertical}) => marginVertical || marginBottom};
  margin-right: ${({marginRight, marginHorizontal}) => marginHorizontal || marginRight};
  margin-left: ${({marginLeft, marginHorizontal}) => marginHorizontal || marginLeft};

  ${({theme}) => theme.breakpoint.down('lg')} {
    width: ${({fullWidthLg}) => (fullWidthLg ? '100%' : 'unset')};
    padding: ${({paddingLg}) => paddingLg};
    padding-top: ${({paddingTopLg, paddingVerticalLg}) => paddingVerticalLg || paddingTopLg};
    padding-bottom: ${({paddingBottomLg, paddingVerticalLg}) => paddingVerticalLg || paddingBottomLg};
    padding-right: ${({paddingRightLg, paddingHorizontalLg}) => paddingHorizontalLg || paddingRightLg};
    padding-left: ${({paddingLeftLg, paddingHorizontalLg}) => paddingHorizontalLg || paddingLeftLg};
    margin: ${({marginLg}) => marginLg};
    margin-top: ${({marginTopLg, marginVerticalLg}) => marginVerticalLg || marginTopLg};
    margin-bottom: ${({marginBottomLg, marginVerticalLg}) => marginVerticalLg || marginBottomLg};
    margin-right: ${({marginRightLg, marginHorizontalLg}) => marginHorizontalLg || marginRightLg};
    margin-left: ${({marginLeftLg, marginHorizontalLg}) => marginHorizontalLg || marginLeftLg};
  }

  ${({theme}) => theme.breakpoint.down('md')} {
    width: ${({fullWidthMd}) => (fullWidthMd ? '100%' : 'unset')};
    padding: ${({paddingMd}) => paddingMd};
    padding-top: ${({paddingTopMd, paddingVerticalMd}) => paddingVerticalMd || paddingTopMd};
    padding-bottom: ${({paddingBottomMd, paddingVerticalMd}) => paddingVerticalMd || paddingBottomMd};
    padding-right: ${({paddingRightMd, paddingHorizontalMd}) => paddingHorizontalMd || paddingRightMd};
    padding-left: ${({paddingLeftMd, paddingHorizontalMd}) => paddingHorizontalMd || paddingLeftMd};
    margin: ${({marginMd}) => marginMd};
    margin-top: ${({marginTopMd, marginVerticalMd}) => marginVerticalMd || marginTopMd};
    margin-bottom: ${({marginBottomMd, marginVerticalMd}) => marginVerticalMd || marginBottomMd};
    margin-right: ${({marginRightMd, marginHorizontalMd}) => marginHorizontalMd || marginRightMd};
    margin-left: ${({marginLeftMd, marginHorizontalMd}) => marginHorizontalMd || marginLeftMd};
  }

  ${({theme}) => theme.breakpoint.down('sm')} {
    width: ${({fullWidthSm}) => (fullWidthSm ? '100%' : 'unset')};
    padding: ${({paddingSm}) => paddingSm};
    padding-top: ${({paddingTopSm, paddingVerticalSm}) => paddingVerticalSm || paddingTopSm};
    padding-bottom: ${({paddingBottomSm, paddingVerticalSm}) => paddingVerticalSm || paddingBottomSm};
    padding-right: ${({paddingRightSm, paddingHorizontalSm}) => paddingHorizontalSm || paddingRightSm};
    padding-left: ${({paddingLeftSm, paddingHorizontalSm}) => paddingHorizontalSm || paddingLeftSm};
    margin: ${({marginSm}) => marginSm};
    margin-top: ${({marginTopSm, marginVerticalSm}) => marginVerticalSm || marginTopSm};
    margin-bottom: ${({marginBottomSm, marginVerticalSm}) => marginVerticalSm || marginBottomSm};
    margin-right: ${({marginRightSm, marginHorizontalSm}) => marginHorizontalSm || marginRightSm};
    margin-left: ${({marginLeftSm, marginHorizontalSm}) => marginHorizontalSm || marginLeftSm};
  }
`;

export default Spacing;
