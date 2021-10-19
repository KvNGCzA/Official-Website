import React, { ReactElement } from "react";
import styled from "styled-components";
import RegularButton from "../components/Button/Regular";
import Flex from "../components/Flex";
import Profile from "../components/Profile";
import Spacing from "../components/Spacing";
import TextField from "../components/TextField";
import Text from "../components/Typography";

interface Props {}

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  margin-top: 48px;
  ${({ theme }) => theme.breakpoint.down("lg")} {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  ${({ theme }) => theme.breakpoint.down("sm")} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function Teams(props: Props): ReactElement {
  const [email, setEmail] = React.useState<string>("");
  const [fullName, setFullName] = React.useState<string>("");

  return (
    <div>
      <Spacing paddingTop="120px" paddingBottom="160px" paddingHorizontal="60px" paddingHorizontalSm="20px">
        <Flex itemsFlex={0.55} itemsFlexLg={0.8} itemsFlexSm={1}>
          <div>
            <Text fontWeight={800} fontSize={48} color="#fff" textAlign="center">
              Meet the People Building Deftify
            </Text>

            <Text fontWeight={500} textAlign="center">
              Deftify team members come from diverse backgrounds but all share proven track records in the
              cryptocurrency space.
            </Text>
          </div>
        </Flex>

        <ProfileGrid>
          <Profile
            name="Victoria Haruna"
            position="CEO and Co-Founder"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/1.png"
          />
          <Profile
            name="Jay Wang"
            position="Business Development Manager"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/2.png"
          />
          <Profile
            name="Jay Wang"
            position="Business Development Manager"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/2.png"
          />
          <Profile
            name="Andrew Fennell"
            position="Business Development Manager"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/3.png"
          />
          <Profile
            name="Jay Wang"
            position="Business Development Manager"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/2.png"
          />
          <Profile
            name="Jay Wang"
            position="Business Development Manager"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/2.png"
          />
        </ProfileGrid>

        <Spacing marginTop="88px">
          <Flex justifyContent="space-between" alignItems="stretch">
            <Flex flex={0.3} flexLg={0.45} flexSm={1}>
              <Profile
                name="Jay Wang"
                position="Business Development Manager"
                linkedIn="https://www.linkedin.com/feed/"
                avatar="./images/profile/2.png"
              />
            </Flex>
            <Flex
              itemsFlex={0.75}
              background="#181A1C"
              style={{ borderRadius: 20 }}
              flex={0.6}
              flexLg={0.45}
              flexSm={1}
            >
              <form>
                <Spacing fullWidth paddingTop="68px" paddingBottom="79px">
                  <Text fontWeight={700} fontSize={36} mt="48px">
                    Join the Team
                  </Text>

                  <TextField
                    type="email"
                    onChange={({ target: { value } }) => setEmail(value)}
                    value={email}
                    label="Email Address"
                  />

                  <TextField
                    value={fullName}
                    onChange={({ target: { value } }) => setFullName(value)}
                    label="Full Name"
                  />

                  <RegularButton fullWidth>Contact Us</RegularButton>
                </Spacing>
              </form>
            </Flex>
          </Flex>
        </Spacing>
      </Spacing>

      <Spacing paddingHorizontal="60px" paddingHorizontalSm="20px" marginBottom="120px">
        <Text fontWeight={800} fontSize={48} color="#fff" textAlign="center" mb="48px">
          Partners & Advisors
        </Text>

        <ProfileGrid>
          <Profile
            name="Jay Wang"
            position="Business Development Manager"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/2.png"
          />
          <Profile
            name="Jay Wang"
            position="Business Development Manager"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/2.png"
          />
          <Profile
            name="Jay Wang"
            position="Business Development Manager"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/2.png"
          />
        </ProfileGrid>
      </Spacing>
    </div>
  );
}

export default Teams;
