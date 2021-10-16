import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CustomDiv, Button, Image, Icon, Anchor } from "../components";
import logo from "../assets/img/logo.svg";
import { Home, Team } from ".";

const AllRoutes = () => (
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
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <Switch>
          <Route path="/team" component={Team} exact />
        </Switch>
      </Router>
    </div>
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

export default AllRoutes;
