import React, { ReactElement } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import Flex from "./Flex";
import Spacing from "./Spacing";
import Text from "./Typography";

interface Props {}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 30px;
  ${({ theme }) => theme.breakpoint.down("lg")} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${({ theme }) => theme.breakpoint.down("sm")} {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

function Footer(props: Props): ReactElement {
  return (
    <Spacing paddingHorizontal="20px" paddingTop="80px" paddingBottom="50px" background="#151515">
      <Flex itemsFlex={0.7}>
        <Grid>
          <Text fontWeight={800} textAlign="center" color="#fff">
            Play n’Earn
          </Text>
          <Text fontWeight={800} textAlign="center" color="#fff">
            Private Arena
          </Text>
          <Text fontWeight={800} textAlign="center" color="#fff">
            Instant Watch
          </Text>
          <Text fontWeight={800} textAlign="center" color="#fff">
            Staking
          </Text>
          <Text fontWeight={800} textAlign="center" color="#fff">
            About
          </Text>
          <Text fontWeight={800} textAlign="center" color="#fff">
            Contact Us
          </Text>
        </Grid>
      </Flex>

      <Spacing fullWidth marginTop="40px">
        <Flex>
          <Text color="rgba(255, 255, 255, 0.69);" textAlign="center" fontSize={16} fontFamily="Euclid Circular A">
            Terms of Use
          </Text>
          <Spacing marginHorizontal="20px" />
          <Text color="rgba(255, 255, 255, 0.69);" textAlign="center" fontSize={16} fontFamily="Euclid Circular A">
            Privacy Policy
          </Text>
        </Flex>
      </Spacing>
    </Spacing>
  );
}

export default withRouter(Footer);
