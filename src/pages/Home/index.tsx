import React from "react";
import { PlayIcon, PlayNEarnIcon } from "../../assets/Icons";
import OutlinedButton from "../../components/Button/Outlined";
import RegularButton from "../../components/Button/Regular";
import { EllipseBg } from "../../components/EllipseBg";
import Flex from "../../components/Flex";
import Spacing from "../../components/Spacing";
import Text from "../../components/Typography";
import { HomeChainLabels } from "./ChainLabel";
import { ClipText, ColoredBorders, DashboardWrapper, HideDown, ImageBorder } from "../../components/JSS";
import CustomList from "../../components/CustomList";
import TextField from "../../components/TextField";

import styled from "styled-components";

interface Props {}

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  ${({ theme }) => theme.breakpoint.down("xl")} {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;

export const Home = (props: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const [companyName, setCompanyName] = React.useState<string>("");

  return (
    <div>
      <EllipseBg showSun moveSunUp="unset" moveSunDown="109px" showMint moveMintUp="0px">
        <Spacing margin="auto" paddingSm="20px" padding="60px">
          <Text fontWeight={800} fontSize={48} color="#fff" textAlign="center">
            Multipurpose DeFi and NFT ecosystem
          </Text>

          <Text fontWeight={500} textAlign="center">
            Deftity is a market data aggregator, P2E game, incubator, launchpad, and index fund all in one same
            ecosystem
          </Text>

          <Spacing fullWidth marginTop="50px">
            <Flex flexDirectionSm="column">
              <Spacing marginRight="40px" marginRightSm="0px" marginBottomSm="20px">
                <RegularButton stretch>Get Early Access</RegularButton>
              </Spacing>
              <OutlinedButton>
                <PlayIcon style={{ marginRight: 10 }} />
                Watch Demo
              </OutlinedButton>
            </Flex>

            <HideDown hideMd>
              <Spacing fullWidth marginTop="20px">
                <Flex>
                  <OutlinedButton>Whitepaper</OutlinedButton>
                </Flex>
              </Spacing>
            </HideDown>
          </Spacing>
        </Spacing>

        <DashboardWrapper>
          <div>
            <img src="./images/dashboard.svg" alt="" />
          </div>
        </DashboardWrapper>
      </EllipseBg>

      <Spacing
        fullWidth
        background="#181A1C"
        paddingVertical="75px"
        paddingHorizontal="60px"
        paddingHorizontalMd="20px"
      >
        <Flex>
          <Text textAlign="center" display="inline" fontSize={48} fontWeight={800}>
            Powered by{" "}
            <ClipText display="inline-block" fontSize={48} fontWeight={800}>
              Blockchain
            </ClipText>
          </Text>
        </Flex>

        <Flex itemsFlex={0.6} itemsFlexMd={0.9}>
          <Text mt="16px" textAlign="center">
            In Deftify, there are multiple platforms utilizing one same token (DFTY). Private access launchpad, project
            incubator, advanced data aggregation tools, tradable index funds, and P2E game are all part of the same
            Deftify ecosystem. With DFTY being needed for each platform in Deftify, the token utility will increase over
            time
          </Text>
        </Flex>

        <ColoredBorders>
          <Flex itemsFlex={0.7} itemsFlexMd={1}>
            <Flex justifyContent="space-between" alignItemsMd="flex-start" flexDirectionMd="column">
              <HomeChainLabels />
            </Flex>
          </Flex>
          <Spacing marginBottomMd="30px">
            <Text mt="10px" fontWeight={700} color="#fff" textAlign="center">
              Deftify will support all EVM-compatible Blockchains
            </Text>
          </Spacing>
        </ColoredBorders>
      </Spacing>

      <Spacing
        fullWidth
        paddingHorizontal="60px"
        paddingHorizontalSm="20px"
        paddingTop="80px"
        paddingBottom="50px"
        background="#181A1C"
      >
        <FeaturesGrid>
          <div>
            <Text color="#fff" fontSize={36} fontWeight={800}>
              Private Access Pad (PAP)
            </Text>

            <Text fontWeight={500}>
              Deftify’s first platform is called Private Access Pad (PAP). It focuses on incubating early-stage
              blockchain startups from emerging economies, as well as raising private capital for promising projects.
              Through PAP we aim to build a better tomorrow.
            </Text>

            <Spacing marginVertical="21px">
              <RegularButton>Coming Soon</RegularButton>
            </Spacing>

            <CustomList
              data={[
                "Incubates promising crypto startups from around the world, with a focus on Africa, and connects projects with an experienced network of entrepreneurs and experts.",
                "Raises early-stage capital for these projects by allowing Deftify token holders to invest in them before the public.",
                "Early-stage investment opportunities are available to users who undergo KYC and stake a certain amount of DFTY on the platform.",
              ]}
            />
          </div>

          <Spacing fullWidthLg marginTopLg="40px">
            <ImageBorder>
              <img src="./images/pap.svg" alt="" />
            </ImageBorder>
          </Spacing>
        </FeaturesGrid>
      </Spacing>

      <Spacing
        fullWidth
        paddingHorizontal="60px"
        paddingHorizontalSm="20px"
        paddingTop="80px"
        paddingBottom="50px"
        background="#181A1C"
      >
        <FeaturesGrid>
          <div>
            <Text color="#fff" fontSize={36} fontWeight={800}>
              Instant Watch
            </Text>

            <Text fontWeight={500}>
              The second platform inside Deftify ecosystem is called Instant Watch. We believe that essential data
              should be free, so we’re giving it to the world with our market data aggregator. Instant Watch gives users
              access to key crypto metrics on DeFi projects and NFTs. Once available, multi-chain Deftify Indexes will
              be hosted on Instant Watch as well.
            </Text>

            <CustomList
              data={[
                "User-friendly crypto market data aggregator with interactive and advanced charting tools. Instant Watch is free to use, with premium features available to those who stake DFTY",
                "Provides crucial information on DeFi and NFTs through an intuitive interface, such as TVL or APY comparisons among DeFi projects and important market details on different NFT ecosystems.",
                "Instant Watch will host Deftify Indexes, weighted index funds supported by different baskets of crypto assets in multiple chains and will not be limited to popular blockchains",
              ]}
            />
          </div>

          <Spacing fullWidthLg marginTopLg="40px">
            <ImageBorder>
              <img src="./images/instant-watch.svg" alt="" />
            </ImageBorder>
          </Spacing>
        </FeaturesGrid>
      </Spacing>

      <Spacing
        fullWidth
        paddingHorizontal="60px"
        paddingHorizontalSm="20px"
        paddingTop="80px"
        paddingBottom="50px"
        background="#151515"
      >
        <FeaturesGrid>
          <div>
            <Text color="#fff" fontSize={36} fontWeight={800}>
              Play 'n Earn
            </Text>

            <Text fontWeight={500}>
              Deftify’s third platform is called Play ‘n’ Earn. It is an exciting new way to challenge friends and foes
              online in an easy-to-understand, difficult-to-master battle arena that requires you to outsmart the
              opponent player and predict their moves.
            </Text>

            <Spacing marginVertical="21px">
              <RegularButton>Coming Soon</RegularButton>
            </Spacing>

            <CustomList
              data={[
                "In our Play ‘n’ Earn arena, players will pit their NFT fighters not only against other players (PVP), but also against AI (PVE)",
                "It is free-to-play for all players who stake DFTY in the game. The more a player stakes, the better the fighter they can create. The fighter NFTs can be auctioned off within the P2P in-game trading.",
                "Staking DFTY tokens through Play ‘n’ Earn game is similar to our regular staking model as users will be able redeem their game tokens for DFTY, while also earning in-game credits.",
              ]}
            />
          </div>

          <Spacing fullWidthLg marginTopLg="40px">
            <ImageBorder>
              <PlayNEarnIcon />
            </ImageBorder>
          </Spacing>
        </FeaturesGrid>
      </Spacing>

      <EllipseBg showSun moveSunUp="unset" moveSunDown="109px" showMint moveMintUp="0px">
        <Spacing paddingTop="70px" paddingBottom="80px" paddingHorizontal="20px">
          <Flex itemsFlex={0.45} itemsFlexMd={1}>
            <form>
              <Text fontWeight={800} fontSize={48} mb="60px" color="#fff" textAlign="center">
                Get in touch with the Team
              </Text>

              <TextField
                type="email"
                onChange={({ target: { value } }) => setEmail(value)}
                value={email}
                label="Email Address"
              />

              <TextField
                value={companyName}
                onChange={({ target: { value } }) => setCompanyName(value)}
                label="Company Name"
              />

              <RegularButton fullWidth>Submit</RegularButton>
            </form>
          </Flex>
        </Spacing>
      </EllipseBg>
    </div>
  );
};
