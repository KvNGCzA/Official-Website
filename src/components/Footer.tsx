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
    <Spacing paddingHorizontal="20px" paddingTop="50px" paddingBottom="40px" background="#151515">
      <Flex itemsFlex={0.7} itemsFlexSm={1}>
        <Grid>
        <a href ="https://twitter.com/Deftify_"><Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Twitter
          </Text></a>
          <a href ="https://t.me/deftify"><Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Telegram
          </Text></a>
          <a href ="https://medium.com/@deftify"><Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Medium
          </Text></a>
          <a href ="https://www.reddit.com/r/Deftify/"><Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Reddit
          </Text></a>
          <a href ="https://www.linkedin.com/company/deftify/"><Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            LinkedIn
          </Text></a>
          <a href ="https://www.linkedin.com/company/deftify/"><Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Discord
          </Text></a>
          {/* <Text fontWeight={800} textAlign="center" textAlignSm="left" color="#fff">
            Contact Us
          </Text> */}
        </Grid>
      </Flex>

      <Spacing fullWidth marginTop="40px" marginTopSm="10px">
        <Flex flexDirectionSm="column" alignItems="flex-start">
          <a href ="https://t.me/deftify" target="_blank" rel="noreferrer"><img src="./images/telegram-24.png" alt="Telegram" /></a>
          <Spacing marginHorizontal="20px" marginVerticalSm="5px" />
          <a href ="https://t.me/deftify" target="_blank" rel="noreferrer"><img src="./images/telegram-24.png" alt="Telegram" /></a>
          <Spacing marginHorizontal="20px" marginVerticalSm="5px" />
          <a href ="https://t.me/deftify" target="_blank" rel="noreferrer"><img src="./images/telegram-24.png" alt="Telegram" /></a>
          <Spacing marginHorizontal="20px" marginVerticalSm="5px" />
          <a href ="https://t.me/deftify" target="_blank" rel="noreferrer"><img src="./images/telegram-24.png" alt="Telegram" /></a>
          <Spacing marginHorizontal="20px" marginVerticalSm="5px" />
          <a href ="https://t.me/deftify" target="_blank" rel="noreferrer"><img src="./images/telegram-24.png" alt="Telegram" /></a>
          <Spacing marginHorizontal="20px" marginVerticalSm="5px" />
          <a href ="https://t.me/deftify" target="_blank" rel="noreferrer"><img src="./images/telegram-24.png" alt="Telegram" /></a>
          <Spacing marginHorizontal="20px" marginVerticalSm="5px" />
          <a href ="https://t.me/deftify" target="_blank" rel="noreferrer"><img src="./images/telegram-24.png" alt="Telegram" /></a>
          <Spacing marginHorizontal="20px" marginVerticalSm="5px" />
          <a href ="https://t.me/deftify" target="_blank" rel="noreferrer"><img src="./images/telegram-24.png" alt="Telegram" /></a>
        </Flex>
      </Spacing>

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
