import React from "react";
import { faCheckCircle, faBars, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { CustomDiv, Text, Button, Image, Icon, Input, Anchor } from "../../components";
import logo from "../../assets/img/logo.svg";
import image1 from "../../assets/img/frame_2.svg";
import binanceImg from "../../assets/img/binance_1.svg";
import avalancheImg from "../../assets/img/avalanche.svg";
import ethereumImg from "../../assets/img/ethereum.svg";
import polygonImg from "../../assets/img/polygon.svg";
import fantomImg from "../../assets/img/fantom.svg";
import papImg from "../../assets/img/frame_30.svg";
import instantWatchImg from "../../assets/img/instant_watch.svg";
import treeImg from "../../assets/img/tree.svg";

const Home = () => (
  <div>
    <div>
      <CustomDiv
        position="absolute"
        left={8.53333333333}
        top={1.03289029061}
        width="10.1333333333%"
        height="32px"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
          width: 4.86111111111%;
          height: 38px;
          left: 1.875%;
          top: 0.74850299401%;
        }`
          }
        ]}
      >
        <Image src={logo} width="100%" height="100%" position="static" alt="Logo" />
      </CustomDiv>
      <CustomDiv
        displayAs="none"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          position: absolute;
          top: 1%;
          left: 17.5902777778%;
          right: 17.5902777778%;
          min-width: 64.8194444444%;
          height: 24px;
          & * {
            margin: 0 3.1935483871%;
          }
        }`
          }
        ]}
      >
        <Anchor
          widthAs={11.8709677419}
          color="#fff"
          height={24}
          fontSize={13}
          lineHeight={24}
          href="#instantwatch"
          fontWeight="600"
          textAlign="center"
        >
          Instant Watch
        </Anchor>
        <Anchor
          widthAs={11.8709677419}
          color="#fff"
          height={24}
          fontSize={13}
          lineHeight={24}
          href="#playnearn"
          fontWeight="600"
          textAlign="center"
        >
          Play 'n' Earn
        </Anchor>
        <Anchor
          widthAs={11.8709677419}
          color="#fff"
          height={24}
          fontSize={13}
          lineHeight={24}
          href="#privateaccess"
          fontWeight="600"
          textAlign="center"
        >
          Private Access Pad
        </Anchor>
        <Anchor
          widthAs={11.8709677419}
          color="#fff"
          height={24}
          fontSize={13}
          lineHeight={24}
          href="#"
          fontWeight="600"
          textAlign="center"
        >
          Staking
        </Anchor>
        <Anchor
          widthAs={11.8709677419}
          color="#fff"
          height={24}
          fontSize={13}
          lineHeight={24}
          href="#about"
          fontWeight="600"
          textAlign="center"
        >
          About
        </Anchor>
        <Anchor
          widthAs={11.8709677419}
          color="#fff"
          height={24}
          fontSize={13}
          lineHeight={24}
          href="#contact"
          fontWeight="600"
          textAlign="center"
        >
          Contact Us
        </Anchor>
      </CustomDiv>
      <Button
        position="absolute"
        border="none"
        color="#fff"
        backgroundColor="transparent"
        width={6.4}
        height={24}
        left={85.0666666667}
        top={1.03289029061}
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `
            {
              display: none;
            }
          `
          }
        ]}
      >
        <Icon icon={faBars} width={24} height={24} position="static" color="#fff" />
      </Button>
    </div>
    <Text
      position="absolute"
      color="#fff"
      left={8.53}
      top={3.00293519982}
      width={82.9333333333}
      lineHeight={30}
      fontSize={20}
      height={60}
      textAlign="center"
      fontWeight="800"
      wideScreensDefinitions={[
        {
          screenSize: 768,
          definition: `{
            position: absolute;
            top: 4.65739948674%;
            left: 8.5277777778%;
            width: 82.9444444444%;
            right: 8.5277777778%;
            font-size: 28px;
            line-height: 60px;
            text-align: center;
          }`
        }
      ]}
    >
      Multi-Purpose DeFi and NFT ecosystem
    </Text>
    <section id="about">
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
        Deftity is a market data aggregator, P2E game, incubator/launchpad and index fund all in one, connected and
        powered by our DFTY token.
      </Text>
    </section>
    <CustomDiv
      displayAs="flex"
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
        borderRadius="4px"
        top={0}
        left={0}
        backgroundColor="#fcd98d"
        color="#151515"
        fontWeight="800"
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
        borderRadius="4px"
        borderImage="linear-gradient(#d1fdff, #fddb92) 1"
        textAlign="center"
        fontWeight="800"
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
        <Icon icon={faPlayCircle} width={13} height={13} color="#fff" padding="1px" />
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
      width="100vw"
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
            left: 8.1909722222%;
            right: 8.1909722222%;
            width: 83.6180555556%;
            height: 59px;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
          }`
          }
        ]}
      >
        Powered by blockchain
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
            left: 25.7461805556%;
            right: 25.7461805556%;
            width: 48.5076388889%;
            height: 50px;
            font-size: 18px;
            line-height: 26px;
            text-align: center;
          }`
          }
        ]}
      >
        Focused on building a DeFi and NFT market data aggregator, which offers intricate insights to individual, as
        well as corporate traders, and crypto enthusiasts in general.
      </Text>
      <CustomDiv
        position="absolute"
        width="83.2%"
        height="442px"
        borderRadius="4px"
        left={8.53333333333}
        top={30.8781869688}
        border="1px solid"
        borderImage="linear-gradient(#fddb92, #d1fdff) 1"
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
        <CustomDiv
          displayAs="flex"
          flexDirection="column"
          alignItems="flex-start"
          position="absolute"
          width="57.0512820513%"
          height="289.73px"
          left={10.9134615385}
          top={16.7963800905}
          wideScreensDefinitions={[
            {
              screenSize: 768,
              definition: `{
            flex-direction: row;
            padding: 0px;
            width: 86.438020429%;
            height: 54.73px;
            left: 8.15347222222%;
            top: 0.7671397895%;
          }`
            }
          ]}
        >
          <CustomDiv
            displayAs="flex"
            flexDirection="row"
            alignItems="center"
            position="static"
            width="100%"
            height="30px"
            margin="6.7304041694% 0px"
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
            align-items: center;
            width: 20.5813462013%;
            height: 37.73px;
            left: 0;
            top: 0;
            flex-direction: column;
            & * {
              margin: 1.7294019239% 0;
            }
          }`
              }
            ]}
          >
            <CustomDiv
              position="static"
              width="30px"
              height="30px"
              backgroundColor="#ffeec2"
              margin="0px 8px"
              borderRadius="50%"
              textAlign="center"
              wideScreensDefinitions={[
                {
                  screenSize: 768,
                  definition: `{
                  width: ${30 + 0.5 * 30}px;
                  height: ${30 + 0.5 * 30}px;
                }`
                }
              ]}
            >
              <Image
                position="static"
                src={avalancheImg}
                width="90%"
                height="27px"
                alt="Avalanche"
                wideScreensDefinitions={[
                  {
                    screenSize: 768,
                    definition: `{
                  height: 40.5px;
                }`
                  }
                ]}
              />
            </CustomDiv>
            <Text
              position="static"
              color="#fff"
              width={78.1082681564}
              height={17}
              lineHeight={17}
              fontSize={14}
              fontWeight="600"
              wideScreensDefinitions={[
                {
                  screenSize: 768,
                  definition: `{
                  text-align: center;
                }`
                }
              ]}
            >
              Avalanche
            </Text>
          </CustomDiv>
          <CustomDiv
            displayAs="flex"
            flexDirection="row"
            alignItems="center"
            position="static"
            width="100%"
            height="30px"
            margin="6.7304041694% 0px"
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
            align-items: center;
            width: 20.5813462013%;
            height: 37.73px;
            left: 0;
            top: 0;
            flex-direction: column;
            text-align: center;
            & * {
              margin: 2.7294019239% 0;
            }
          }`
              }
            ]}
          >
            <CustomDiv
              position="static"
              width="30px"
              height="30px"
              backgroundColor="#ffe6e6"
              margin="0px 8px"
              borderRadius="50%"
              textAlign="center"
              wideScreensDefinitions={[
                {
                  screenSize: 768,
                  definition: `{
                  width: ${30 + 0.5 * 30}px;
                  height: ${30 + 0.5 * 30}px;
                }`
                }
              ]}
            >
              <Image
                position="static"
                src={polygonImg}
                width="90%"
                height="27px"
                alt="Polygon"
                wideScreensDefinitions={[
                  {
                    screenSize: 768,
                    definition: `{
                  height: 40.5px;
                }`
                  }
                ]}
              />
            </CustomDiv>
            <Text
              position="static"
              color="#fff"
              width={78.1082681564}
              height={17}
              lineHeight={17}
              fontSize={14}
              fontWeight="600"
              wideScreensDefinitions={[
                {
                  screenSize: 768,
                  definition: `{
                  text-align: center;
                }`
                }
              ]}
            >
              Polygon
            </Text>
          </CustomDiv>
          <CustomDiv
            displayAs="flex"
            flexDirection="row"
            alignItems="center"
            position="static"
            width="100%"
            height="30px"
            margin="6.7304041694% 0px"
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
            align-items: center;
            width: 20.5813462013%;
            height: 37.73px;
            left: 0;
            top: 0;
            flex-direction: column;
            & * {
              margin: 2.7294019239% 0;
            }
          }`
              }
            ]}
          >
            <CustomDiv
              position="static"
              width="30px"
              height="30px"
              backgroundColor="#c2cbff"
              margin="0px 8px"
              borderRadius="50%"
              textAlign="center"
              wideScreensDefinitions={[
                {
                  screenSize: 768,
                  definition: `{
                  width: ${30 + 0.5 * 30}px;
                  height: ${30 + 0.5 * 30}px;
                }`
                }
              ]}
            >
              <Image
                position="static"
                src={binanceImg}
                width="90%"
                height="27px"
                alt="Binance"
                wideScreensDefinitions={[
                  {
                    screenSize: 768,
                    definition: `{
                  height: 40.5px;
                }`
                  }
                ]}
              />
            </CustomDiv>
            <Text
              position="static"
              color="#fff"
              width={78.1082681564}
              height={17}
              lineHeight={17}
              fontSize={14}
              fontWeight="600"
              wideScreensDefinitions={[
                {
                  screenSize: 768,
                  definition: `{
                  text-align: center;
                }`
                }
              ]}
            >
              Binance Smartchain
            </Text>
          </CustomDiv>
          <CustomDiv
            displayAs="flex"
            flexDirection="row"
            alignItems="center"
            position="static"
            width="100%"
            height="30px"
            margin="6.7304041694% 0px"
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
            align-items: center;
            width: 20.5813462013%;
            height: 37.73px;
            left: 0;
            top: 0;
            flex-direction: column;
            & * {
              margin: 2.7294019239% 0;
            }
          }`
              }
            ]}
          >
            <CustomDiv
              position="static"
              width="30px"
              height="30px"
              backgroundColor="#efe6ff"
              margin="0px 8px"
              borderRadius="50%"
              textAlign="center"
              wideScreensDefinitions={[
                {
                  screenSize: 768,
                  definition: `{
                  width: ${30 + 0.5 * 30}px;
                  height: ${30 + 0.5 * 30}px;
                }`
                }
              ]}
            >
              <Image
                position="static"
                src={fantomImg}
                width="90%"
                height="27px"
                alt="Fantom"
                wideScreensDefinitions={[
                  {
                    screenSize: 768,
                    definition: `{
                  height: 40.5px;
                }`
                  }
                ]}
              />
            </CustomDiv>
            <Text
              position="static"
              color="#fff"
              width={78.1082681564}
              height={17}
              lineHeight={17}
              fontSize={14}
              fontWeight="600"
              wideScreensDefinitions={[
                {
                  screenSize: 768,
                  definition: `{
                  text-align: center;
                }`
                }
              ]}
            >
              Fantom
            </Text>
          </CustomDiv>
          <CustomDiv
            displayAs="flex"
            flexDirection="row"
            alignItems="center"
            position="static"
            width="100%"
            height="30px"
            margin="6.7304041694% 0px"
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
            align-items: center;
            width: 20.5813462013%;
            height: 37.73px;
            left: 0;
            top: 0;
            flex-direction: column;
            & * {
              margin: 2.7294019239% 0;
            }
          }`
              }
            ]}
          >
            <CustomDiv
              position="static"
              width="30px"
              height="30px"
              backgroundColor="#c2f0ff"
              margin="0px 8px"
              borderRadius="50%"
              textAlign="center"
              wideScreensDefinitions={[
                {
                  screenSize: 768,
                  definition: `{
                  width: ${30 + 0.5 * 30}px;
                  height: ${30 + 0.5 * 30}px;
                }`
                }
              ]}
            >
              <Image
                position="static"
                src={ethereumImg}
                width="90%"
                height="27px"
                alt="Ethereum"
                wideScreensDefinitions={[
                  {
                    screenSize: 768,
                    definition: `{
                  height: 40.5px;
                }`
                  }
                ]}
              />
            </CustomDiv>
            <Text
              position="static"
              color="#fff"
              width={78.1082681564}
              height={17}
              lineHeight={17}
              fontSize={14}
              fontWeight="600"
              wideScreensDefinitions={[
                {
                  screenSize: 768,
                  definition: `{
                  text-align: center;
                }`
                }
              ]}
            >
              Ethereum
            </Text>
          </CustomDiv>
        </CustomDiv>
        <Text
          position="absolute"
          color="#fff"
          left={10.9134615385}
          top={6.77564102564}
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
            top: 80.0959513958%;
            left: 8.9043856845%;
            width: 82.191228631%;
            right: 8.9043856845%;
            height: 22px;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            font-weight: bold;
          }`
            }
          ]}
        >
          Deftify will support all EVM compatible Blockchains
        </Text>
      </CustomDiv>
    </CustomDiv>
    <CustomDiv
      position="absolute"
      width="100%"
      top={34.6127794084}
      left={0}
      height="873px"
      wideScreensDefinitions={[
        {
          screenSize: 768,
          definition: `{
            position: absolute;
            width: 100%;
            height: 701px;
            left: 0;
            top: 37.8314798973%;
          }`
        }
      ]}
    >
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
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            position: absolute;
            top: 11.4921540656%;
            left: 4.44444444444%;
            font-size: 36px;
            line-height: 45px;
            height: 45px;
          }`
          }
        ]}
      >
        Private Access Pad (PAP)
      </Text>
      <section id="privateaccess">
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
          wideScreensDefinitions={[
            {
              screenSize: 768,
              definition: `{
            top: 19.0527817404%;
            left: 4.44444444444%;
            width: 44.1416666667%;
          }`
            }
          ]}
        >
          Deftify’s PAP focuses on incubating early-stage blockchain startups from emerging economies, as well as
          raising private capital for promising projects. Through PAP we aim to build a better tomorrow.
        </Text>
      </section>
      <Button
        position="absolute"
        border="none"
        width={57.9706666667}
        height={53.87}
        top={23.4054982818}
        left={8.53333333333}
        backgroundColor="#fcd98d"
        color="#151515"
        borderRadius="4px"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            top: 33.6034236805%;
            height: 54.28px;
            left: 4.44444444444%;
            width: 15.0965277778%;
          }`
          }
        ]}
      >
        Coming Soon
      </Button>
      <CustomDiv
        position="absolute"
        displayAs="flex"
        flexDirection="column"
        alignItems="flex-start"
        width="81.3333333333%"
        top={34.2920962199}
        left={8.53333333333}
        height="243.78px"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            left: 4.44444444444%;
            top: 43.2387843705%;
            width: 46.4583333333%;
            height: 310px;
          }`
          }
        ]}
      >
        <CustomDiv
          position="absolute"
          backgroundColor="#181a1c"
          left={0}
          top={0}
          width="100%"
          height="77px"
          wideScreensDefinitions={[
            {
              screenSize: 768,
              definition: `{
              height: 94px;
            }`
            }
          ]}
        >
          <Icon
            icon={faCheckCircle}
            width={15.98}
            height={15.98}
            left="3.89180327869%"
            top="34.8181818182%"
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
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
                width: 83.2047832586%;
                font-size: 18px;
                line-height: 27px;
              }`
              }
            ]}
          >
            Incubates promising crypto startups from around the world, with a focus on Africa, and connects projects
            with an experienced network of entrepreneurs and experts.
          </Text>
        </CustomDiv>
        <CustomDiv
          position="absolute"
          backgroundColor="#181a1c"
          left={0}
          top={34.2070719501}
          width="100%"
          height="77px"
          wideScreensDefinitions={[
            {
              screenSize: 768,
              definition: `{
              height: 94px;
            }`
            }
          ]}
        >
          <Icon
            icon={faCheckCircle}
            width={15.98}
            height={15.98}
            left="3.89180327869%"
            top="34.8181818182%"
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
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
                width: 83.2047832586%;
                font-size: 18px;
                line-height: 27px;
              }`
              }
            ]}
          >
            Raises early-stage capital for these projects by allowing Deftify token holders to invest in them before the
            public.
          </Text>
        </CustomDiv>
        <CustomDiv
          position="absolute"
          backgroundColor="#181a1c"
          left={0}
          top={68.2070719501}
          width="100%"
          height="77px"
          wideScreensDefinitions={[
            {
              screenSize: 768,
              definition: `{
              height: 94px;
            }`
            }
          ]}
        >
          <Icon
            icon={faCheckCircle}
            width={15.98}
            height={15.98}
            left="3.89180327869%"
            top="34.8181818182%"
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
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
                width: 83.2047832586%;
                font-size: 18px;
                line-height: 27px;
              }`
              }
            ]}
          >
            Early-stage investment opportunities are available to users who undergo KYC and stake a certain amount of
            DFTY on the platform.
          </Text>
        </CustomDiv>
      </CustomDiv>
      <CustomDiv
        position="absolute"
        width="83.2453333333%"
        height="265.96px"
        border="none"
        borderRadius="2.2539px"
        top={65.4066437572}
        left={8.53333333333}
        boxSizing="border-box"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            left: 57.0833333333%;
            top: 15.1212553495%;
            height: 472px;
            width: 38.4722222222%;
          }`
          }
        ]}
      >
        <Image
          width="100%"
          height="100%"
          left={8.66666666667}
          top={13.3290720409}
          src={papImg}
          alt="Private Access Pad"
        />
      </CustomDiv>
    </CustomDiv>
    <CustomDiv
      position="absolute"
      width="100%"
      top={54.5618382519}
      left={0}
      height="869px"
      backgroundColor="#181a1c"
      wideScreensDefinitions={[
        {
          screenSize: 768,
          definition: `{
            position: absolute;
            width: 100%;
            height: 691px;
            left: 0;
            top: 52.8229255774%;
          }`
        }
      ]}
    >
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
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            position: absolute;
            top: 11.505065123%;
            left: 4.44444444444%;
            font-size: 36px;
            line-height: 45px;
            height: 45px;
            width: 95.5555555556%;
          }`
          }
        ]}
      >
        Instant Watch
      </Text>
      <section id="instantwatch">
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
          wideScreensDefinitions={[
            {
              screenSize: 768,
              definition: `
          {
            top: 19.1751085384%;
            left: 4.44444444444%;
            width: 44.1416666667%;
          }
          `
            }
          ]}
        >
          We believe that essential data should be free, so we’re giving it to the world with our market data
          aggregator, Instant Watch. Instant Watch gives users access to key crypto metrics, including information on
          DeFi, NFTs and other market segments.
        </Text>
      </section>
      <Button
        position="absolute"
        border="none"
        width={57.9706666667}
        height={53.87}
        top={25.4054982818}
        left={8.53333333333}
        backgroundColor="#fcd98d"
        color="#151515"
        borderRadius="4px"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            left: 4.44444444444%;
            top: 34.0549927641%;
            width: 15.0965277778%;
            height: 54.28px;
          }`
          }
        ]}
      >
        Coming Soon
      </Button>
      <CustomDiv
        position="absolute"
        displayAs="flex"
        flexDirection="column"
        alignItems="flex-start"
        width="81.3333333333%"
        top={34.2920962199}
        left={8.53333333333}
        height="243.78px"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            left: 4.44444444444%;
            top: 43.2387843705%;
            width: 46.4583333333%;
            height: 310px;
          }`
          }
        ]}
      >
        <CustomDiv
          position="absolute"
          backgroundColor="#181a1c"
          left={0}
          top={0}
          width="100%"
          height="77px"
          border="2px solid #232323"
          wideScreensDefinitions={[
            {
              screenSize: 768,
              definition: `{
              height: 94px;
            }`
            }
          ]}
        >
          <Icon
            icon={faCheckCircle}
            width={15.98}
            height={15.98}
            left="3.89180327869%"
            top="34.8181818182%"
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
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
                width: 83.2047832586%;
                font-size: 18px;
                line-height: 27px;
              }`
              }
            ]}
          >
            User-friendly crypto market data aggregator with an additional focus on DeFi and NFTs.
          </Text>
        </CustomDiv>
        <CustomDiv
          position="absolute"
          backgroundColor="#181a1c"
          left={0}
          top={34.2070719501}
          width="100%"
          height="77px"
          border="2px solid #232323"
          wideScreensDefinitions={[
            {
              screenSize: 768,
              definition: `{
              height: 94px;
            }`
            }
          ]}
        >
          <Icon
            icon={faCheckCircle}
            width={15.98}
            height={15.98}
            left="3.89180327869%"
            top="34.8181818182%"
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
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
                width: 83.2047832586%;
                font-size: 18px;
                line-height: 27px;
              }`
              }
            ]}
          >
            Free to use, with premium features available to those who stake a certain amount of DFTY.
          </Text>
        </CustomDiv>
        <CustomDiv
          position="absolute"
          backgroundColor="#181a1c"
          left={0}
          top={68.2070719501}
          width="100%"
          height="77px"
          border="2px solid #232323"
          wideScreensDefinitions={[
            {
              screenSize: 768,
              definition: `{
              height: 94px;
            }`
            }
          ]}
        >
          <Icon
            icon={faCheckCircle}
            width={15.98}
            height={15.98}
            left="3.89180327869%"
            top="34.8181818182%"
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
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
                width: 83.2047832586%;
                font-size: 18px;
                line-height: 27px;
              }`
              }
            ]}
          >
            Provides crucial information through an intuitive interface, helping newer participants and crypto veterans
            alike stay on top of their positions.
          </Text>
        </CustomDiv>
      </CustomDiv>
      <CustomDiv
        position="absolute"
        width="83.2453333333%"
        height="265.96px"
        border="none"
        borderRadius="2.2539px"
        top={65.4066437572}
        left={8.53333333333}
        boxSizing="border-box"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            left: 57.0833333333%;
            top: 11.5774240232%;
            height: 472px;
            width: 38.4722222222%;
          }`
          }
        ]}
      >
        <Image width="100%" height="100%" src={instantWatchImg} alt="Instant Watch" />
      </CustomDiv>
    </CustomDiv>
    <CustomDiv
      position="absolute"
      width="100%"
      top={74.4987609822}
      left={0}
      height="869px"
      wideScreensDefinitions={[
        {
          screenSize: 768,
          definition: `{
            position: absolute;
            width: 100%;
            height: 632px;
            left: 0;
            top: 67.6005132592%;
          }`
        }
      ]}
    >
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
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            position: absolute;
            top: 23.7911392405%;
            left: 4.44444444444%;
            font-size: 36px;
            line-height: 45px;
          }`
          }
        ]}
      >
        Play 'n' Earn
      </Text>
      <section id="playnearn">
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
          wideScreensDefinitions={[
            {
              screenSize: 768,
              definition: `{
            position: absolute;
            top: 34.2341772152%;
            left: 4.44444444444%;
            font-size: 18px;
            line-height: 27px;
            width: 38.5715277778%;
            height: 162px;
          }`
            }
          ]}
        >
          Play ‘n’ Earn is an exciting new way to challenge friends and foes online in an easy-to-understand,
          difficult-to-master battle arena that requires you to outsmart the opponent player and predict their moves.
          Users who stake DFTY will be able to mint a unique NFT hero to help them win tokens and glory in the battle
          arena.
        </Text>
      </section>
      <Button
        position="absolute"
        border="none"
        width={57.9706666667}
        height={53.87}
        top={34.4384349827}
        left={8.53333333333}
        background="linear-gradient(0deg, #232323, #232323)"
        color="#fff"
        borderRadius="4px"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            top: 66.1898734177%;
            height: 54.28px;
            left: 4.44444444444%;
            width: 15.0965277778%;
          }`
          }
        ]}
      >
        Coming Soon
      </Button>
      <CustomDiv
        position="absolute"
        width="83.2453333333%"
        height="265.72px"
        border="3.94433px solid #232323"
        borderRadius="2.2539px"
        top={43.9597238205}
        left={8.53333333333}
        boxSizing="border-box"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            left: 57.0833333333%;
            top: 10.4430379747%;
            height: 472px;
            width: 38.4722222222%;
          }`
          }
        ]}
      >
        <Image position="static" width="100%" height="100%" src={treeImg} alt="Tree" />
      </CustomDiv>
    </CustomDiv>
    <CustomDiv
      position="absolute"
      width="100%"
      height="405px"
      left={0}
      top={90.8763234963}
      backgroundColor="#181a1c"
      wideScreensDefinitions={[
        {
          screenSize: 768,
          definition: `{
        width: 100%;
        height: 633px;
        top: 81.1163387511%;
        left: 0;
        background: linear-gradient(0deg, #181A1C, #181A1C);
      }`
        }
      ]}
    >
      <Text
        position="absolute"
        width={90.1333333333}
        height={30}
        fontWeight="800"
        fontSize={24}
        lineHeight={30}
        color="#fff"
        top={12.8395061728}
        left={9.86666666667}
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            left: 29.1319444444%;
            top: 12.9541864139%;
            font-size: 48px;
            line-height: 60px;
          }`
          }
        ]}
      >
        Get in touch with the team
      </Text>
      <section id="contact">
        <form>
          <CustomDiv
            position="absolute"
            displayAs="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="82.1333333333%"
            height="72.89px"
            left={8.53333333333}
            top={25.4518518519}
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
              width: 38.8888888889%;
              height: 97px;
              left: 30.5777777778%;
            }`
              }
            ]}
          >
            <Text
              position="absolute"
              width={25.974025974}
              height={17}
              fontWeight="normal"
              fontSize={12}
              lineHeight={17}
              color="#fff5f5"
              top={0}
              left={0}
            >
              Email Address
            </Text>
            <Input
              type="email"
              padding="2px 1.5px"
              color="#fff"
              width={100}
              height={46}
              placeholder="Enter Email Address"
              background="linear-gradient(0deg, #232323, #232323)"
              position="absolute"
              left={0}
              top={36.8363287145}
              borderRadius="2.22143px"
              border="1px solid transparent"
              mouseEvents={[
                {
                  name: "focus",
                  definition: `
              {
                border-image: linear-gradient(#fddb92, #d1fdff) 1;
              }
              `
                }
              ]}
            />
          </CustomDiv>
          <CustomDiv
            position="absolute"
            displayAs="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="82.1333333333%"
            height="72.89px"
            left={8.53333333333}
            top={49.3728395062}
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
              width: 38.8888888889%;
              height: 97px;
              left: 30.5777777778%;
            }`
              }
            ]}
          >
            <Text
              position="absolute"
              width={30.974025974}
              height={17}
              fontWeight="normal"
              fontSize={12}
              lineHeight={17}
              color="#fff5f5"
              top={0}
              left={0}
            >
              Company Name
            </Text>
            <Input
              type="text"
              padding="2px 1.5px"
              color="#fff"
              width={100}
              height={46}
              placeholder="Enter Company Name"
              background="linear-gradient(0deg, #232323, #232323)"
              position="absolute"
              left={0}
              top={36.8363287145}
              borderRadius="2.22143px"
              border="1px solid transparent"
              mouseEvents={[
                {
                  name: "focus",
                  definition: `
              {
                border-image: linear-gradient(#fddb92, #d1fdff) 1;
              }
              `
                }
              ]}
            />
          </CustomDiv>
          <CustomDiv
            position="absolute"
            displayAs="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="82.1333333333%"
            height="72.89px"
            left={8.53333333333}
            top={73.049382716}
            wideScreensDefinitions={[
              {
                screenSize: 768,
                definition: `{
              width: 38.8888888889%;
              height: 97px;
              left: 30.5777777778%;
            }`
              }
            ]}
          >
            <Button
              position="absolute"
              border="none"
              width={100}
              height={53.87}
              borderRadius="4px"
              top={0}
              left={0}
              backgroundColor="#fcd98d"
              color="#000"
            >
              Submit
            </Button>
          </CustomDiv>
        </form>
      </section>
    </CustomDiv>
    <CustomDiv
      displayAs="flex"
      flexDirection="column"
      alignItems="flex-start"
      position="absolute"
      width="27.7333333333%"
      height="246px"
      top={100.720883082}
      left={8.53333333333}
      wideScreensDefinitions={[
        {
          screenSize: 768,
          definition: `{
          flex-direction: row;
          left: 23.0902777778%;
          right: 23.0902777778%;
          min-width: 53.8194444444%;
          top: 96.7065868263%;
          height: 24px;
          align-items: flex-start;
          & * {
            margin: 0 4.1935483871%;
          }
        }`
        }
      ]}
    >
      <Anchor
        color="#fff"
        widthAs={11.8709677419}
        height={21}
        fontSize={13}
        lineHeight={21}
        href="#playnearn"
        fontWeight="600"
        top={0}
        left={0}
        textAlign="justify"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            text-align: center;
          }`
          }
        ]}
      >
        Play'N Earn
      </Anchor>
      <Anchor
        color="#fff"
        widthAs={11.8709677419}
        height={21}
        fontSize={13}
        lineHeight={21}
        href="#privateaccess"
        fontWeight="600"
        left={0}
        top={18.2926829268}
        textAlign="justify"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            text-align: center;
          }`
          }
        ]}
      >
        Private Arena
      </Anchor>
      <Anchor
        color="#fff"
        widthAs={11.8709677419}
        height={21}
        fontSize={13}
        lineHeight={21}
        href="#instantwatch"
        fontWeight="600"
        left={0}
        top={36.5853658537}
        textAlign="justify"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            text-align: center;
          }`
          }
        ]}
      >
        Instant Watch
      </Anchor>
      <Anchor
        color="#fff"
        widthAs={11.8709677419}
        height={21}
        fontSize={13}
        lineHeight={21}
        href="#"
        fontWeight="600"
        left={0}
        top={54.8780487805}
        textAlign="justify"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            text-align: center;
          }`
          }
        ]}
      >
        Staking
      </Anchor>
      <Anchor
        color="#fff"
        widthAs={11.8709677419}
        height={21}
        fontSize={13}
        lineHeight={21}
        href="#about"
        fontWeight="600"
        left={0}
        top={73.1707317073}
        textAlign="justify"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            text-align: center;
          }`
          }
        ]}
      >
        About
      </Anchor>
      <Anchor
        color="#fff"
        widthAs={11.8709677419}
        height={21}
        fontSize={13}
        lineHeight={21}
        href="#contact"
        fontWeight="600"
        left={0}
        top={91.4634146341}
        textAlign="justify"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            text-align: center;
          }`
          }
        ]}
      >
        Contact Us
      </Anchor>
    </CustomDiv>
    <CustomDiv
      displayAs="flex"
      flexDirection="column"
      alignItems="flex-start"
      position="absolute"
      width="27.7333333333%"
      height="246px"
      top={106.848389277}
      left={8.53333333333}
      wideScreensDefinitions={[
        {
          screenSize: 768,
          definition: `{
          flex-direction: row;
          left: 41.5972222222%;
          min-width: 16.8055555556%;
          height: 20px;
          right: 41.5972222222%;
          top: 97.8614200171%;
          align-items: flex-start;
          & * {
            margin: 0 4.1935483871%;
          }
        }`
        }
      ]}
    >
      <Anchor
        color="#fff"
        widthAs={11.8709677419}
        height={21}
        fontSize={13}
        lineHeight={21}
        href="#"
        top={0}
        left={0}
        textAlign="justify"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            text-align: center;
          }`
          }
        ]}
      >
        Terms of Use
      </Anchor>
      <Anchor
        color="#fff"
        widthAs={11.8709677419}
        height={21}
        fontSize={13}
        lineHeight={21}
        href="#"
        left={0}
        top={18.2926829268}
        textAlign="justify"
        wideScreensDefinitions={[
          {
            screenSize: 768,
            definition: `{
            text-align: center;
          }`
          }
        ]}
      >
        Privacy Policy
      </Anchor>
    </CustomDiv>
  </div>
);

export default Home;
