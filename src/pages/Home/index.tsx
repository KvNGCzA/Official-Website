import React from "react";
import styled from "styled-components";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { CustomDiv, Text, Button, Image, Icon } from "../../components";
import image1 from "../../assets/img/frame_2.svg";
import binanceImg from "../../assets/img/binance_1.svg";
import avalancheImg from "../../assets/img/avalanche.svg";
import ethereumImg from "../../assets/img/ethereum.svg";
import polygonImg from "../../assets/img/polygon.svg";
import fantomImg from "../../assets/img/fantom.svg";

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
      wideScreensDefinitions={[
        {
          screenSize: 768,
          definition: `{
            position: absolute;
            top: 4.65739948674%;
            left: 21.5625%;
            width: 78.4375%;
            height: 60px;
            font-size: 48px;
            line-height: 60px;
            text-align: left;
          }`
        }
      ]}
    >
      Decentralised DeFi and NFT platform
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
      wideScreensDefinitions={[
        {
          screenSize: 768,
          definition: `{
            position: absolute;
            top: 6.26133447391%;
            left: 21.5625%;
            width: 56.875%;
            height: 52px;
            font-size: 18px;
            line-height: 26px;
          }`
        }
      ]}
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
      wideScreensDefinitions={[
        {
          screenSize: 768,
          definition: `{
            flex-direction: row;
            align-items: flex-start;
            padding: 0px;
            width: 37.6756944444%;
            height: 53.87px;
            left: 31.1680555556%;
            top: 8.11633875107%;
          }`
        }
      ]}
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
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            width: 44.5615910641%;
            height: 53.87px;
            left: 0;
            top: 0;
          }`
          }
        ]}
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
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            width: 44.5615910641%;
            height: 53.87px;
            left: 55.4365657199%;
            top: 0;
          }`
          }
        ]}
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
      wideScreensDefinitions={[
        {
          screenSize: 768,
          definition: `{
            width: 67.7777777778%;
            height: 717px;
            left: 16.1111111111%;
            top: 11.5483319076%;
          }`
        }
      ]}
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
      wideScreensDefinitions={[
        {
          screenSize: 768,
          definition: `{
            width: 100%;
            height: 516px;
            left: 0;
            top: 26.7964071856%;
            right: 0;
          }`
        }
      ]}
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
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            position: absolute;
            top: 14.6996124031%;
            left: 35.3819444444%;
            width: 64.6180555556%;
            height: 59px;
            font-size: 48px;
            line-height: 59px;
          }`
          }
        ]}
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
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            position: absolute;
            top: 29.234496124%;
            left: 24.2458333333%;
            width: 51.5076388889%;
            height: 52px;
            font-size: 18px;
            line-height: 26px;
            text-align: center;
          }`
          }
        ]}
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
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            width: 91.2375%;
            height: 190.93px;
            left: 4.38125%;
            top: 48.8720930233%;
          }`
          }
        ]}
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
          fontWeight="700"
          wideScreensDefinitions={[
            {
              screenSize: 768,
              definition: `{
            position: absolute;
            top: 21.7671397895%;
            left: 31.808771369%;
            width: 68.191228631%;
            height: 22px;
            font-size: 18px;
            line-height: 22px;
            text-align: left;
            font-weight: bold;
          }`
            }
          ]}
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
          wideScreensDefinitions={[
            {
              screenSize: 768,
              definition: `{
            flex-direction: row;
            padding: 0px;
            width: 91.2375%;
            height: 190.93px;
            left: 4.38125%;
            top: 48.8720930233%;
          }`
            }
          ]}
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
            <CustomDiv
              position="static"
              width="15.27px"
              height="15.27px"
              backgroundColor="#ffeec2"
              margin="0px 8px"
              borderRadius="50%"
            >
              <Image position="static" src={binanceImg} width="100%" height="100%" alt="Binance" />
            </CustomDiv>
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
            <CustomDiv
              position="static"
              width="15.27px"
              height="15.27px"
              backgroundColor="#ffe6e6"
              margin="0px 8px"
              borderRadius="50%"
            >
              <Image position="static" src={avalancheImg} width="100%" height="100%" alt="Avalanche" />
            </CustomDiv>
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
            <CustomDiv
              position="static"
              width="15.27px"
              height="15.27px"
              backgroundColor="#c2cbff"
              margin="0px 8px"
              borderRadius="50%"
            >
              <Image position="static" src={ethereumImg} width="100%" height="100%" alt="Ethereum" />
            </CustomDiv>
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
            <CustomDiv
              position="static"
              width="15.27px"
              height="15.27px"
              backgroundColor="#efe6ff"
              margin="0px 8px"
              borderRadius="50%"
            >
              <Image position="static" src={polygonImg} width="100%" height="100%" alt="Polygon" />
            </CustomDiv>
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
            <CustomDiv
              position="static"
              width="15.27px"
              height="15.27px"
              backgroundColor="#c2f0ff"
              margin="0px 8px"
              borderRadius="50%"
            >
              <Image position="static" src={fantomImg} width="100%" height="100%" alt="Fantom" />
            </CustomDiv>
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
          <Icon
            icon={faCheck}
            width={15.98}
            height={15.98}
            left="3.89180327869%"
            top="13.8181818182%"
            position="absolute"
            color="#fff"
          />
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
          <Icon
            icon={faCheck}
            width={15.98}
            height={15.98}
            left="3.89180327869%"
            top="13.8181818182%"
            position="absolute"
            color="#fff"
          />
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
          <Icon
            icon={faCheck}
            width={15.98}
            height={15.98}
            left="3.89180327869%"
            top="13.8181818182%"
            position="absolute"
            color="#fff"
          />
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
