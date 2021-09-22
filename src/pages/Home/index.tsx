import React from "react";
import { CustomDiv, Text, Button } from "../../components";

const Home = () => (
  <div>
    <Text
      position="absolute"
      color="#fff"
      left={8.53}
      top={3.00293519982}
      width={311}
      lineHeight={30}
      fontSize={24}
      height={60}
      textAlign="center"
      fontWeight="800"
    >
      Decentralised DeFi & NFT platform
    </Text>
    <Text
      position="absolute"
      color="#cacaca"
      left={11.1066666667}
      top={4.8026642583}
      width={291.7}
      lineHeight={23}
      fontSize={16}
      height={115}
      textAlign="center"
      fontWeight="500"
    >
      Deftify is a multipurpose DeFi and NFT platform that focuses on several product areas such as private funding,
      incubation, gaming and market data aggregator.
    </Text>
    <CustomDiv
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="241.76px"
      height="133.74px"
      left={18.9333333333}
      top={8.09708737864}
      position="absolute"
    >
      <Button
        position="absolute"
        border="none"
        width={241.76}
        height={53.87}
        top={0}
        left={0}
        backgroundColor="#fcd98d"
        color="#151515"
      >
        Get Early Access
      </Button>
      <Button
        position="absolute"
        border="1px solid"
        width={241.76}
        height={53.87}
        top={59.7203529236}
        left={0}
        backgroundColor="transparent"
        color="#fff"
        borderImage="linear-gradient(#d1fdff, #fddb92) 1"
      >
        Watch Demo
      </Button>
    </CustomDiv>
  </div>
);

export default Home;
