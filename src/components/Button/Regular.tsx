import styled from 'styled-components';

interface Props {
  background?: string;
  color?: string;
  fontFamily?: string;
  fontWeight?: number;
  fullWidth?: boolean;
  marginBottomSm?: string;
  marginHorizontalSm?: string;
  marginRightSm?: string;
  marginVerticalSm?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  stretch?: boolean;
}

const RegularButton = styled.button<Props>`
  height: ${({stretch}) => stretch && '100%'};
  background: ${({background}) => background || '#FCD98D'};
  border-radius: 4px;
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
  border: 2px solid ${({background}) => background || '#FCD98D'};
  font-size: 18px;
  font-family: ${({fontFamily}) => fontFamily ?? 'Space Grotesk'};
  font-weight: ${({fontWeight}) => fontWeight ?? 500};
  margin-left: ${({ml}) => ml};
  margin-bottom: ${({mb}) => mb};
  margin-right: ${({mr}) => mr};
  margin-top: ${({mt}) => mt};
  min-width: ${({fullWidth}) => (fullWidth ? '100%' : '240px')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({color}) => color || '#151515'};
  padding: 15px 20px;
  opacity: ${({disabled}) => disabled ? 0.2 : 1};

  ${({theme}) => theme.breakpoint.down('lg')} {
    font-size: 16px;
    min-width: ${({fullWidth}) => (fullWidth ? '100%' : '200px')};
  }

  ${({theme}) => theme.breakpoint.down('sm')} {
    font-size: 14px;
    min-width: ${({fullWidth}) => (fullWidth ? '100%' : '180px')};
    margin-bottom: ${({marginBottomSm, marginVerticalSm}) => marginVerticalSm || marginBottomSm};
    margin-right: ${({marginRightSm, marginHorizontalSm}) => marginHorizontalSm || marginRightSm};
  }
`;

export default RegularButton;
