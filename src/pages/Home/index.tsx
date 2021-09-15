import React from "react";
import { Button } from "../../components";

const Home = () => (
  <div>
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
  </div>
);

export default Home;
