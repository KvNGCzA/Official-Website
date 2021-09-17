import React from "react";
import styled, { keyframes } from "styled-components";
import { faTwitter, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Button, Image, Text, CustomDiv, Anchor, Icon } from "../../components";
import imgUrl from "../../assets/img/image_8.png";
import imgUrl2 from "../../assets/img/mask_group.png";
import imgUrl3 from "../../assets/img/mask_group2.png";
import imgUrl4 from "../../assets/img/image_4.png";
import imgUrl5 from "../../assets/img/image_13.png";
import imgUrl6 from "../../assets/img/frame.png";
import imgUrl7 from "../../assets/img/group_14.png";
import imgUrl8 from "../../assets/img/group_3.png";

const kfRotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const kfGlow = keyframes`
  from {
    opacity: 0.7;
  }

  to {
    opacity: 1;
  }
`;

const ColumnFlex = styled(CustomDiv)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const RotatingImage = styled(Image)`
  animation: ${kfRotate} 3s linear infinite;
`;

const GlowingImage = styled(Image)`
  animation: ${kfGlow} 1s ease-in-out infinite;
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
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          width: 432.69px;
          height: 432.69px;
          left: -18px;
        }`
        }
      ]}
    />
    <Image
      position="absolute"
      src={imgUrl8}
      width={44.54}
      height={36}
      left={323}
      top={74}
      alt="Image_8"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          display: none
        }`
        }
      ]}
    />
    <Text
      position="absolute"
      width={123}
      height={25}
      left={377}
      top={83}
      color="#fff"
      fontSize={24}
      lineHeight={29}
      fontWeight="bold"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          display: none
        }`
        }
      ]}
    >
      DEFTIFY
    </Text>
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
      mouseEvents={[{ name: "hover", definition: "{ transform: matrix(1.5, 0, -0.4, 1.5, -20, 0)}" }]}
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          display: none
        }`
        }
      ]}
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
      mouseEvents={[{ name: "hover", definition: "{ transform: matrix(1.5, 0, -0.4, 1.5, -20, 0)}" }]}
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          display: none
        }`
        }
      ]}
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
      mouseEvents={[{ name: "hover", definition: "{ transform: matrix(1.5, 0, -0.4, 1.5, -20, 0)}" }]}
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          display: none
        }`
        }
      ]}
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
      mouseEvents={[{ name: "hover", definition: "{ transform: matrix(1.5, 0, -0.4, 1.5, -20, 0)}" }]}
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          display: none
        }`
        }
      ]}
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
      mouseEvents={[{ name: "hover", definition: "{ transform: matrix(1.5, 0, -0.4, 1.5, -20, 0)}" }]}
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          display: none
        }`
        }
      ]}
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
      mouseEvents={[{ name: "hover", definition: "{ transform: matrix(1.5, 0, -0.4, 1.5, -20, 0)}" }]}
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          display: none
        }`
        }
      ]}
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
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 97px;
          height: 29px;
          left: 36px;
          top: 481px;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 29px;
          color: #fff;
        }`
        }
      ]}
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
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 299px;
          height: 373px;
          left: 36px;
          top: 530px;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 26px;
          color: #fff;
        }`
        }
      ]}
    >
      Deftify is a Decentralised DeFi and NFT platform that focuses on private funding, mentorship of African focused
      Blockchain projects and founders with the aim of attracting all forms of social, financial and technical value to
      the continent of Africa. The platform also focused on building a DeFi and NFT market data aggregator for better
      cryptocurrency market insights for traders, investors, companies and crypto enthusiasts in general. Deftify is
      also positioning itself in the play-to-earn gaming model leveraging a multichain model built on Solana, Avalanche,
      and Fantom Blockchains.
    </Text>
    <RotatingImage
      position="absolute"
      src={imgUrl2}
      width={249}
      height={249}
      left={107}
      top={1328}
      alt="Image_8"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
        position: absolute;
        width: 249px;
        height: 249px;
        left: 60px;
        top: 1036px;
      }`
        }
      ]}
    />
    <Text
      position="absolute"
      width={375}
      height={70}
      left={74}
      top={1595}
      color="#fff"
      fontSize={48}
      lineHeight={70}
      fontWeight="bold"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 188px;
          height: 70px;
          left: 27px;
          top: 1326px;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 70px;
          color: #fff;
        }`
        }
      ]}
    >
      Private Arena
    </Text>
    <Text
      position="absolute"
      width={451}
      height={373}
      left={74}
      top={1683}
      color="#fff"
      fontSize={18}
      lineHeight={26}
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 307px;
          height: 237px;
          left: 27px;
          top: 1391px;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 26px;
          color: #fff;
        }`
        }
      ]}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dumm
    </Text>
    <Anchor
      href="#"
      position="absolute"
      width={117}
      height={70}
      top={1920}
      left={74}
      fontSize={24}
      lineHeight={70}
      fontWeight="bold"
      textAlign="center"
      color="#3cfae3"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 88px;
          height: 70px;
          left: 27px;
          top: 1593px;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 70px;
          color: #3cfae3;
        }`
        }
      ]}
    >
      LAUNCH
    </Anchor>
    <ColumnFlex
      position="absolute"
      width={335}
      height={825}
      border="3px solid"
      borderImage="linear-gradient(#5ffcf9, #412047) 1"
      right={1}
      top={778}
      transform="translateX(8px)"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 348px;
          height: 825px;
          left: 27px;
          top: 1704px;
          transform: translate(3px);
        }`
        }
      ]}
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
        $10m
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
        attracted in private sale
      </Text>
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
        100k+
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
        smart investors and crypto experts
      </Text>
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
        100+
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
        projects with investments
      </Text>
    </ColumnFlex>
    <Image
      position="absolute"
      src={imgUrl3}
      width={248}
      height={248}
      right={159}
      top={1782}
      alt="Image_8"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
        position: absolute;
        width: 248px;
        height: 248px;
        left: 54px;
        top: 2622px;
      }`
        }
      ]}
    />
    <Text
      position="absolute"
      width={376}
      height={70}
      right={80}
      top={2059}
      color="#fff"
      fontSize={48}
      lineHeight={70}
      fontWeight="bold"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 188px;
          height: 70px;
          left: 20px;
          top: 2897px;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 70px;
          color: #fff;
        }`
        }
      ]}
    >
      Instant Watch
    </Text>
    <Text
      position="absolute"
      width={361}
      height={237}
      right={102}
      top={2146}
      color="#fff"
      fontSize={18}
      lineHeight={26}
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 307px;
          height: 237px;
          left: 20px;
          top: 2962px;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 26px;
          color: #fff;
        }`
        }
      ]}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dumm
    </Text>
    <Anchor
      href="#"
      position="absolute"
      width={74}
      height={70}
      top={2383}
      right={390}
      fontSize={24}
      lineHeight={70}
      fontWeight="bold"
      textAlign="center"
      color="#3cfae3"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 88px;
          height: 70px;
          left: 20px;
          top: 3164px;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 70px;
          color: #3cfae3;
        }`
        }
      ]}
    >
      VIEW
    </Anchor>
    <GlowingImage
      position="absolute"
      src={imgUrl4}
      width={437}
      height={328}
      left={358}
      right={357}
      top={2471}
      alt="Image_8"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
        position: absolute;
        width: 248px;
        height: 248px;
        left: 50px;
        top: 3421px;
      }`
        }
      ]}
    />
    <Text
      position="absolute"
      width={305}
      height={70}
      left={434}
      top={2773}
      color="#fff"
      fontSize={48}
      lineHeight={70}
      fontWeight="bold"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 153px;
          height: 70px;
          left: 20px;
          top: 3669px;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 70px;
          color: #fff;
        }`
        }
      ]}
    >
      Play n'Earn
    </Text>
    <Text
      position="absolute"
      width={625}
      height={142}
      left={263}
      right={264}
      top={2861}
      color="#fff"
      fontSize={18}
      lineHeight={26}
      textAlign="center"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 307px;
          height: 237px;
          left: 20px;
          top: 3734px;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 26px;
          color: #fff;
          text-align: left;
        }`
        }
      ]}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
      type specimen book. It has survived not only five centuries,Lorem Ipsum is simply dumm
    </Text>
    <Image
      position="absolute"
      src={imgUrl5}
      width={1064}
      height={665}
      right={56}
      left={32}
      top={3063}
      alt="Image_8"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
        position: absolute;
        width: 335px;
        height: 209.38px;
        left: 12px;
        top: 4052px;
      }`
        }
      ]}
    />
    <Image
      position="absolute"
      src={imgUrl6}
      width={137}
      height={137}
      right={516}
      left={499}
      top={3327}
      alt="Image_8"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
        position: absolute;
        width: 43.13px;
        height: 43.13px;
        left: 159.03px;
        top: 4135.12px;
      }`
        }
      ]}
    />
    <Text
      position="absolute"
      width={142}
      height={26}
      left={496}
      right={514}
      top={3464}
      color="#fff"
      fontSize={18}
      lineHeight={26}
      fontWeight="bold"
      textAlign="center"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 111px;
          height: 26px;
          left: 125px;
          top: 4178px;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 26px;
          color: #fff;
        }`
        }
      ]}
    >
      WATCH DEMO
    </Text>
    <Image
      position="absolute"
      src={imgUrl7}
      width={274.93}
      height={120.37}
      left={129.63}
      top={3888}
      alt="Image_8"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
        position: absolute;
        width: 97.63px;
        height: 42.74px;
        left: 24.78px;
        top: 4384px;
      }`
        }
      ]}
    />
    <Image
      position="absolute"
      src={imgUrl7}
      width={274.93}
      height={120.37}
      left={758.63}
      top={3888}
      alt="Image_8"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
        position: absolute;
        width: 97.63px;
        height: 42.74px;
        left: 238.78px;
        top: 4384px;
      }`
        }
      ]}
    />
    <Text
      position="absolute"
      width={114}
      height={70}
      left={522}
      right={516}
      top={3925}
      color="#3cfae3"
      fontSize={48}
      lineHeight={76}
      fontWeight="bold"
      textAlign="center"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 33px;
          height: 70px;
          left: 166px;
          top: 4375px;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 70px;
          color: #3cfae3;
        }`
        }
      ]}
    >
      FAQ
    </Text>
    <Image
      position="absolute"
      src={imgUrl8}
      width={44.54}
      height={36}
      left={40}
      top={4618}
      bottom={104}
      alt="Image_8"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
        position: absolute;
        width: 30px;
        height: 24.25px;
        left: 18px;
        top: 4620px;
      }`
        }
      ]}
    />
    <Text
      position="absolute"
      width={121}
      height={13}
      left={92}
      top={4627}
      color="#fff"
      fontSize={24}
      lineHeight={29}
      fontWeight="bold"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 121px;
          height: 13px;
          left: 56px;
          top: 4599px;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 70px;
        }`
        }
      ]}
    >
      DEFTIFY
    </Text>
    <Text
      position="absolute"
      width={185}
      height={24}
      left={40}
      top={4676}
      color="#fff"
      fontSize={18}
      lineHeight={70}
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 185px;
          height: 24px;
          left: 14px;
          top: 4626px;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 70px;
          text-align: center;
        }`
        }
      ]}
    >
      Contact@deftify.io
    </Text>
    <Icon
      icon={faTwitter}
      width={23}
      height={23}
      color="#fff"
      position="absolute"
      left="20.92%"
      top="4700px"
      right="77.08%"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 23px;
          height: 23px;
          left: 48%;
          top: 4650px;
          right: 46.67%;
          bottom: 1.12%;
        }`
        }
      ]}
    />
    <Icon
      icon={faTelegram}
      width={23}
      height={23}
      color="#fff"
      position="absolute"
      left="24.05%"
      top="4700px"
      right="73.96%"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 23px;
          height: 23px;
          left: 58.04%;
          top: 4650px;
          right: 36.67%;
          bottom: 1.12%;
        }`
        }
      ]}
    />
    <Icon
      icon={faDiscord}
      width={23}
      height={23}
      color="#fff"
      position="absolute"
      left="27.43%"
      top="4700px"
      right="70.57%"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 23px;
          height: 23px;
          left: 68.88%;
          top: 4650px;
          right: 25.83%;
          bottom: 1.12%;
        }`
        }
      ]}
    />
    <Anchor
      href="#"
      position="absolute"
      width={115}
      height={24}
      top={4676}
      left={695}
      fontSize={18}
      lineHeight={70}
      textAlign="center"
      color="#fff"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 115px;
          height: 24px;
          left: 3px;
          top: 4673px;
          font-size: 14px;
        }`
        }
      ]}
    >
      Whitepaper
    </Anchor>
    <Anchor
      href="#"
      position="absolute"
      width={74}
      height={24}
      top={4676}
      left={836}
      fontSize={18}
      lineHeight={70}
      textAlign="center"
      color="#fff"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 74px;
          height: 24px;
          left: 116px;
          top: 4673px;
          font-size: 14px;
          line-height: 70px;
        }`
        }
      ]}
    >
      Privacy
    </Anchor>
    <Anchor
      href="#"
      position="absolute"
      width={176}
      height={24}
      top={4676}
      left={936}
      fontSize={18}
      lineHeight={70}
      textAlign="center"
      color="#fff"
      mobileScreensDefinitions={[
        {
          screenSize: 360,
          definition: `{
          position: absolute;
          width: 176px;
          height: 24px;
          left: 190px;
          top: 4673px;
          font-size: 14px;
          line-height: 70px;
        }`
        }
      ]}
    >
      Terms & Condition
    </Anchor>
  </div>
);

export default Home;
