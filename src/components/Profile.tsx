import React, { ReactElement } from "react";
import styled from "styled-components";
import { LinkedInIcon } from "../assets/Icons";
import Flex from "./Flex";
import Spacing from "./Spacing";
import Text from "./Typography";

interface Props {
  name: string;
  position: string;
  linkedIn: string;
  avatar: string;
}

const Wrapper = styled.div`
  width: 85%;
  margin: auto;
`;

const Avatar = styled.img`
  border-radius: 20px;
  width: 100%;
`;

function Profile({ name, position, linkedIn, avatar }: Props): ReactElement {
  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Spacing marginTop="32px">
        <Flex justifyContent="space-between">
          <div>
            <Text fontSize={24} fontWeight={500} color="#FFFFFF">
              {name}
            </Text>
            <Text color=" rgba(255, 255, 255, 0.6);">{position}</Text>
          </div>

          <Spacing marginLeft="15px">
            <a href={linkedIn} target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </Spacing>
        </Flex>
      </Spacing>
    </Wrapper>
  );
}

export default Profile;
