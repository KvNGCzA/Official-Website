import React from "react";
import styled from "styled-components";
import { Button, Image, Text, CustomDiv } from "../../components";
import imgUrl from "../../assets/img/image_8.png";

const ColumnFlex = styled(CustomDiv)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const Home = () => (
  <div>
    <Image
      position="absolute"
      src={imgUrl}
      width={1230}
      height={922}
      left={1}
      top={1}
      alt="Image_8"
    />
    <Button
      position="absolute"
      width={178}
      height={49}
      left={1}
      top={97}
      border="1px solid #5ffcf9"
      boxSizing="border-box"
      backgroundColor="transparent"
      color="#fff"
      transform="matrix(1, 0, -0.4, 1, -20, 0)"
    >
      Play n'Earn
    </Button>
    <Button
      position="absolute"
      width={178}
      height={49}
      left={1}
      top={163}
      border="1px solid #5ffcf9"
      boxSizing="border-box"
      backgroundColor="transparent"
      color="#fff"
      transform="matrix(1, 0, -0.4, 1, -20, 0)"
    >
      Private Arena
    </Button>
    <Button
      position="absolute"
      width={178}
      height={49}
      left={1}
      top={229}
      border="1px solid #5ffcf9"
      boxSizing="border-box"
      backgroundColor="transparent"
      color="#fff"
      transform="matrix(1, 0, -0.4, 1, -20, 0)"
    >
      Instant Watch
    </Button>
    <Button
      position="absolute"
      width={178}
      height={49}
      right={1}
      top={97}
      border="1px solid #5ffcf9"
      boxSizing="border-box"
      backgroundColor="transparent"
      color="#fff"
      transform="matrix(1, 0, 0.4, 1, 20, 0)"
    >
      About
    </Button>
    <Button
      position="absolute"
      width={178}
      height={49}
      right={1}
      top={163}
      border="1px solid #5ffcf9"
      boxSizing="border-box"
      backgroundColor="transparent"
      color="#fff"
      transform="matrix(1, 0, 0.4, 1, 20, 0)"
    >
      Staking
    </Button>
    <Button
      position="absolute"
      width={178}
      height={49}
      right={1}
      top={229}
      border="1px solid #5ffcf9"
      boxSizing="border-box"
      backgroundColor="transparent"
      color="#fff"
      transform="matrix(1, 0, 0.4, 1, 20, 0)"
    >
      Contact
    </Button>
    <Text
      position="absolute"
      width={149}
      height={43}
      left={74}
      top={778}
      color="#fff"
      fontSize={36}
      lineHeight={43}
    >
      ABOUT
    </Text>
    <Text
      position="absolute"
      width={451}
      height={373}
      left={74}
      top={847}
      color="#fff"
      fontSize={18}
      lineHeight={26}
    >
      Deftify is a Decentralised DeFi and NFT platform that focuses on private
      funding, mentorship of African focused Blockchain projects and founders
      with the aim of attracting all forms of social, financial and technical
      value to the continent of Africa. The platform also focused on building a
      DeFi and NFT market data aggregator for better cryptocurrency market
      insights for traders, investors, companies and crypto enthusiasts in
      general. Deftify is also positioning itself in the play-to-earn gaming
      model leveraging a multichain model built on Solana, Avalanche, and Fantom
      Blockchains.
    </Text>
    <ColumnFlex
      position="absolute"
      width={335}
      height={825}
      border="5px solid"
      borderImage="linear-gradient(#5ffcf9, #412047) 1"
      right={1}
      top={778}
      transform="matrix(2, 0, 0.4, 2, 0, 0)"
    >
      <Text
        position="relative"
        margin="43px 89px 0 85px"
        fontWeight="bold"
        width={124}
        height={70}
        color="#ea05b8"
        lineHeight={70}
        fontSize={48}
      >
        2021
      </Text>
      <Text
        position="relative"
        margin="8px 68px 0px 64px"
        fontWeight="normal"
        color="#fff"
        width={166}
        height={69}
        fontSize={18}
        lineHeight={26}
      >
        Birth of the project
      </Text>
    </ColumnFlex>
  </div>
);

export default Home;
