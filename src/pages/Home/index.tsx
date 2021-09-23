import React from "react";
import { CustomDiv, Text, Button, Image } from "../../components";
import image1 from "../../assets/img/frame_2.png";

const Home = () => (
  <div>
    <Text
      position="absolute"
      color="#fff"
      left={8.53}
      top={3.00293519982}
      width={82.9333333333}
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
      width={77.7866666667}
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
      width="64.4693333333%"
      height="133.74px"
      left={18.9333333333}
      top={8.09708737864}
      position="absolute"
    >
      <Button
        position="absolute"
        border="none"
        width={100}
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
        width={100}
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
    <CustomDiv
      position="absolute"
      width="82.5733333333%"
      height="227.48px"
      left={8.53333333333}
      top={12.0268683676}
      backgroundColor="#151515"
    >
      <Image src={image1} width="100%" height="100%" alt="Image1" position="absolute" top={0} left={0} />
    </CustomDiv>
    <CustomDiv
      position="absolute"
      width="100%"
      height="706px"
      left={0}
      right={0}
      top={18.3111311809}
      backgroundColor="#181a1c"
      margin="16px 0px"
    >
      <Text
        position="absolute"
        color="#fff"
        left={8.53333333333}
        top={4.45325779037}
        width={82.9333333333}
        lineHeight={30}
        fontSize={24}
        height={30}
        fontWeight="bold"
      >
        Powered by Deftify
      </Text>
      <Text
        position="absolute"
        color="#cacaca"
        left={8.53333333333}
        top={9.83569405099}
        width={82.9333333333}
        lineHeight={23}
        fontSize={16}
        height={115}
        fontWeight="500"
      >
        Focused on building a DeFi and NFT market data aggregator for better cryptocurrency market insights for traders,
        investors, companies and crypto enthusiasts in general.
      </Text>
      <CustomDiv
        position="absolute"
        width="83.2%"
        height="442px"
        left={8.53333333333}
        top={30.8781869688}
        border="1px solid"
        borderImage="linear-gradient(#fff, #7986cb, #9fa8da, #13b5ec, #5c6bc0, #8247e5, #c2cbff, #c2f0ff, #e84142, #efe6ff, #ffe6e6, #ffeec2) 0.5"
      >
        <Text
          position="absolute"
          color="#fff"
          left={10.9134615385}
          top={9.77564102564}
          width={78.2211538462}
          lineHeight={24}
          fontSize={18}
          height={48}
          fontWeight="500"
        >
          Deftify Platform supports all EVM compatible Blockchains
        </Text>
        <CustomDiv
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          position="absolute"
          width="57.0512820513%"
          height="289.73px"
          left={10.9134615385}
          top={24.7963800905}
        >
          <CustomDiv
            display="flex"
            flexDirection="row"
            alignItems="center"
            position="static"
            width="100%"
            height="24px"
            margin="6.7304041694% 0px"
          >
            <Text
              position="static"
              color="#fff"
              width={79.8882681564}
              height={17}
              lineHeight={17}
              fontSize={14}
              fontWeight="600"
            >
              Binance Smartchain
            </Text>
          </CustomDiv>
          <CustomDiv
            display="flex"
            flexDirection="row"
            alignItems="center"
            position="static"
            width="100%"
            height="24px"
            margin="6.7304041694% 0px"
          >
            <Text
              position="static"
              color="#fff"
              width={79.8882681564}
              height={17}
              lineHeight={17}
              fontSize={14}
              fontWeight="600"
            >
              Avalanche
            </Text>
          </CustomDiv>
          <CustomDiv
            display="flex"
            flexDirection="row"
            alignItems="center"
            position="static"
            width="100%"
            height="24px"
            margin="6.7304041694% 0px"
          >
            <Text
              position="static"
              color="#fff"
              width={79.8882681564}
              height={17}
              lineHeight={17}
              fontSize={14}
              fontWeight="600"
            >
              Ethereum
            </Text>
          </CustomDiv>
          <CustomDiv
            display="flex"
            flexDirection="row"
            alignItems="center"
            position="static"
            width="100%"
            height="24px"
            margin="6.7304041694% 0px"
          >
            <Text
              position="static"
              color="#fff"
              width={79.8882681564}
              height={17}
              lineHeight={17}
              fontSize={14}
              fontWeight="600"
            >
              Polygon
            </Text>
          </CustomDiv>
          <CustomDiv
            display="flex"
            flexDirection="row"
            alignItems="center"
            position="static"
            width="100%"
            height="24px"
            margin="6.7304041694% 0px"
          >
            <Text
              position="static"
              color="#fff"
              width={79.8882681564}
              height={17}
              lineHeight={17}
              fontSize={14}
              fontWeight="600"
            >
              Fantom
            </Text>
          </CustomDiv>
        </CustomDiv>
      </CustomDiv>
    </CustomDiv>
    <CustomDiv position="absolute" width="100%" top={34.6127794084} left={0} height="873px">
      <Text
        position="absolute"
        color="#fff"
        width={91.4666666667}
        height={30}
        lineHeight={30}
        fontSize={22}
        fontWeight="bold"
        left={8.53333333333}
        top={2.99541809851}
      >
        Private Access Pad (PAP)
      </Text>
      <Text
        position="absolute"
        color="#cacaca"
        width={82.9333333333}
        height={30}
        lineHeight={23}
        fontSize={16}
        fontWeight="500"
        left={8.53333333333}
        top={7.34822451317}
      >
        Deftify PAP focuses on incubating and privately raising capital for early stage blockchain startups off Africa,
        allowing stage startup founders to access a variety of resources.
      </Text>
      <Button
        position="absolute"
        border="none"
        width={57.9706666667}
        height={53.87}
        top={23.4054982818}
        left={8.53333333333}
        backgroundColor="#fcd98d"
        color="#151515"
      >
        Launch App
      </Button>
      <CustomDiv
        position="absolute"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        width="81.3333333333%"
        top={34.2920962199}
        left={8.53333333333}
        height="243.78px"
      >
        <CustomDiv position="absolute" backgroundColor="#181a1c" left={0} top={0} width="100%" height="77px">
          <Text
            color="#cacaca"
            position="absolute"
            fontWeight="500"
            width={83.3049180328}
            height={54}
            fontSize={12}
            lineHeight={18}
            left={11.8229508197}
            top={13.8181818182}
          >
            Only users who stake certain amount of Deftify tokens will have access to participate into Deftify's private
            funding deals.
          </Text>
        </CustomDiv>
        <CustomDiv
          position="absolute"
          backgroundColor="#181a1c"
          left={0}
          top={34.2070719501}
          width="100%"
          height="77px"
        >
          <Text
            color="#cacaca"
            position="absolute"
            fontWeight="500"
            width={83.3049180328}
            height={54}
            fontSize={12}
            lineHeight={18}
            left={11.8229508197}
            top={13.8181818182}
          >
            Only whitelisted and Deftify token stakers will have access to contribute to project oboarded on PAP.
          </Text>
        </CustomDiv>
        <CustomDiv
          position="absolute"
          backgroundColor="#181a1c"
          left={0}
          top={68.4141439002}
          width="100%"
          height="77px"
        >
          <Text
            color="#cacaca"
            position="absolute"
            fontWeight="500"
            width={83.3049180328}
            height={54}
            fontSize={12}
            lineHeight={18}
            left={11.8229508197}
            top={13.8181818182}
          >
            Only users who stake certain amount of Deftify tokens will have access to participate into Deftify's private
            funding deals.
          </Text>
        </CustomDiv>
      </CustomDiv>
    </CustomDiv>
  </div>
);

export default Home;
