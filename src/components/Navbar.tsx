import {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import {LogoIcon} from '../assets/Icons';
import routes from '../routes';

const Wrapper = styled.nav`
  display: flex;
  padding: 30px 50px;
  justify-content: space-between;
  align-items: center;

  ${({theme}) => theme.breakpoint.down('xl')} {
    padding: 30px;
  }
`;

const NavLink = styled(Link)`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 130.8%;
  text-align: center;
  color: #ffffff;
  margin-right: 48px;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }

  ${({theme}) => theme.breakpoint.down('xl')} {
    font-size: 16px;
    margin-right: 48px;
  }

  ${({theme}) => theme.breakpoint.down('lg')} {
    margin-right: 0;
    margin-top: 35px;
    text-align: left;
  }
`;

const MenuBar = styled.button<{ open: boolean }>`
  ${({theme}) => theme.breakpoint.up('lg')} {
    display: none;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: transparent;
  border: 0;

  > span {
    position: ${({open}) => open && 'absolute'};
    display: block;
    height: 4px;
    width: 35px;
    margin-bottom: 4px;
    background: ${({open}) => (open ? '#FCD98D' : '#FFFFFF')};
    border-radius: 6px;
    min-width: max-content;

    &:last-child {
      display: ${({open}) => open && 'none'};
      margin-bottom: 0px;
    }

    &:first-child {
      transform: ${({open}) => open && 'rotate(140deg)'};
      margin-bottom: ${({open}) => open && 0};
    }

    &:nth-child(2) {
      transform: ${({open}) => open && 'rotate(-140deg)'};
      margin-bottom: ${({open}) => open && 0};
    }
  }
`;

const Logo = styled.div`
  margin-right: 20px;
`;

const NavLinkWrapper = styled.div<{ open: boolean }>`
  display: flex;

  ${({theme}) => theme.breakpoint.down('lg')} {
    position: fixed;
    flex-direction: column;
    top: 0;
    left: ${({open}) => (open ? 0 : '-300px')};
    bottom: 0;
    z-index: 3000;
    background: #181a1ccc;
    width: 240px;
    padding: 40px 20px 40px 40px;
  }
`;

const Navbar = (props: any) => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<Wrapper>
			<Logo>
				<LogoIcon />
			</Logo>
			<div>
				<MenuBar open={open} onClick={() => setOpen((prev) => !prev)}>
					<span></span>
					<span></span>
					<span></span>
				</MenuBar>

				<NavLinkWrapper open={open} style={{display: 'flex'}}>
					{routes.map((route, index) => (
						<NavLink key={index.toString()} to={route.path}>
							{route.name}
						</NavLink>
					))}
				</NavLinkWrapper>
			</div>
		</Wrapper>
	);
};

export default withRouter(Navbar);
