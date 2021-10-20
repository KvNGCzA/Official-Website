import React from "react";
import { PlayIcon } from "../../assets/Icons";
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

interface Props {}

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
            Deftity is a market data aggregator, P2E game, incubator/launchpad and index fund all in one, <br />{" "}
            connected and powered by our DFTY token.
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
            Focused on building a DeFi and NFT market data aggregator for better cryptocurrency market insights for
            traders, investors, companies and crypto enthusiasts in general.
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
        <Flex
          itemsFlex={0.45}
          alignItems="flex-start"
          itemsFlexLg={1}
          justifyContent="space-between"
          flexDirectionLg="column"
        >
          <div>
            <Text color="#fff" fontSize={36} fontWeight={800}>
              Private Access Pad (PAP)
            </Text>

            <Text fontWeight={500}>
              Deftify’s PAP focuses on incubating early-stage blockchain startups from emerging economies, as well as
              raising private capital for promising projects. Through PAP we aim to build a better tomorrow.
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
        </Flex>
      </Spacing>

      <Spacing
        fullWidth
        paddingHorizontal="60px"
        paddingHorizontalSm="20px"
        paddingTop="80px"
        paddingBottom="50px"
        background="#181A1C"
      >
        <Flex
          alignItems="flex-start"
          itemsFlex={0.45}
          itemsFlexLg={1}
          justifyContent="space-between"
          flexDirectionLg="column"
        >
          <div>
            <Text color="#fff" fontSize={36} fontWeight={800}>
              Instant Watch
            </Text>

            <Text fontWeight={500}>
              We believe that essential data should be free, so we’re giving it to the world with our market data
              aggregator, Instant Watch. Instant Watch gives users access to key crypto metrics, including information
              on DeFi, NFTs and other market segments.
            </Text>

            <Spacing marginVertical="21px">
              <RegularButton>Coming Soon</RegularButton>
            </Spacing>

            <CustomList
              data={[
                "User-friendly crypto market data aggregator with an additional focus on DeFi and NFTs.",
                "Free to use, with premium features available to those who stake a certain amount of DFTY.",
                "Instant Watch will also host Deftify Indexes, weighted index funds that track the performance of baskets of crypto assets from across the market",
              ]}
            />
          </div>

          <Spacing fullWidthLg marginTopLg="40px">
            <ImageBorder>
              <img src="./images/instant-watch.svg" alt="" />
            </ImageBorder>
          </Spacing>
        </Flex>
      </Spacing>

      {/* <Spacing
        fullWidth
        paddingHorizontal="60px"
        paddingHorizontalSm="20px"
        paddingTop="80px"
        paddingBottom="50px"
        background="#181A1C"
      >
        <Flex itemsFlex={0.45} itemsFlexMd={1} justifyContent="space-between" flexDirectionMd="column">
          <div>
            <Text color="#fff" fontSize={36} fontWeight={800}>
              Deftify Indexes
            </Text>

            <Text fontWeight={500}>
              Deftify Indexes are weighted index funds that track the performance of baskets of crypto assets from
              across the market. Our first index will be the first in the market to focus on DeFi on Avalanche.
            </Text>

            <Spacing marginVertical="21px">
              <RegularButton background="#232323" color="#FFf">
                Coming Soon
              </RegularButton>
            </Spacing>

            <CustomList
              data={[
                "Diversify your holdings by purchasing a single asset backed by a basket of leading tokens.",
                "Index funds move less than individual assets, making them attractive strategies in highly volatile markets.",
                "Where most index funds focus on Ethereum, Deftify Indexes will support assets from multiple emerging blockchains.",
              ]}
            />
          </div>

          <div>
            <ImageBorder>
              <img src="./images/deftify-indexes.svg" alt="" />
            </ImageBorder>
          </div>
        </Flex>
      </Spacing> */}

      <Spacing
        fullWidth
        paddingHorizontal="60px"
        paddingHorizontalSm="20px"
        paddingTop="80px"
        paddingBottom="50px"
        background="#151515"
      >
        <Flex
          alignItems="flex-start"
          itemsFlex={0.45}
          itemsFlexMd={1}
          justifyContent="space-between"
          flexDirectionLg="column"
        >
          <div>
            <Text color="#fff" fontSize={36} fontWeight={800}>
              Play 'n Earn
            </Text>

            <Text fontWeight={500}>
              Play ‘n’ Earn is an exciting new way to challenge friends and foes online in an easy-to-understand,
              difficult-to-master battle arena that requires you to outsmart the opponent player and predict their
              moves. Users who stake DFTY will be able to mint a unique NFT hero to help them win tokens and glory in
              the battle arena.
            </Text>

            <Spacing marginTop="21px" />
            {/* 
            <CustomList
              data={[
                "Free for players who stake DFTY in-game. The more a player stakes, the better the fighter they can create.",
                "Accrue points that can be used to buy in-game items or exchanged for DFTY.",
                "All fighters in the game will be tied to NFTs that can be auctioned off within the P2P in-game trading network.",
              ]}
            /> */}

            <RegularButton mt="21px" background="#232323" color="#FFf">
              Coming Soon
            </RegularButton>
          </div>

          <Spacing fullWidthLg marginTopLg="40px">
            <ImageBorder>
              <img src="./images/playearn.png" alt="" />
            </ImageBorder>
          </Spacing>
        </Flex>
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
