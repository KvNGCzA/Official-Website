import React, { ReactElement } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import Flex from "./Flex";
import Spacing from "./Spacing";
import Text from "./Typography";

interface Props {}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  ${({ theme }) => theme.breakpoint.down("md")} {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

function Footer(props: Props): ReactElement {
  return (
    <Spacing paddingHorizontal="20px" paddingTop="80px" paddingBottom="50px" background="#151515">
      <Flex itemsFlex={0.7} itemsFlexSm={1}>
        <Grid>
          <Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Play n’Earn
          </Text>
          <Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Private Access Pad
          </Text>
          <Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Instant Watch
          </Text>
          <Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Staking
          </Text>
          <Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Team
          </Text>
          {/* <Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Contact Us
          </Text> */}
        </Grid>
      </Flex>

      <Spacing fullWidth marginTop="40px" marginTopSm="10px">
        <Flex flexDirectionSm="column" alignItems="flex-start">
          <Text
            color="rgba(255, 255, 255, 0.69);"
            textAlign="center"
            textAlignSm="left"
            fontSize={16}
            fontFamily="Euclid Circular A"
          >
            Terms of Use
          </Text>
          <Spacing marginHorizontal="20px" marginVerticalSm="5px" />
          <Text
            color="rgba(255, 255, 255, 0.69);"
            textAlign="center"
            textAlignSm="left"
            fontSize={16}
            fontFamily="Euclid Circular A"
          >
            Privacy Policy
          </Text>
        </Flex>
      </Spacing>
    </Spacing>
  );
}

export default withRouter(Footer);
