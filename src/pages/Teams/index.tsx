import React, { ReactElement } from "react";
import styled from "styled-components";
import RegularButton from "../../components/Button/Regular";
import Flex from "../../components/Flex";
import Profile from "../../components/Profile";
import Spacing from "../../components/Spacing";
import TextField from "../../components/TextField";
import Text from "../../components/Typography";

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
        <Flex itemsFlex={0.6} itemsFlexLg={1}>
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
            name="Ruddy Setiadi Gunawan"
            position="Chief Operating Officer & Co-founder"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/2.png"
          />
          <Profile
            name="Neil Mani"
            position="Chief Design Officer"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/3.png"
          />
          <Profile
            name="Andrew Fennell"
            position="Chief Business Development Officer"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/4.png"
          />

          <Profile
            name="Henry Onyebuchi"
            position="Chief Technical Officer"
            github="https://www.github.com"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/5.png"
          />
          <Profile
            name="Kingsley Victor"
            position="Technical Lead"
            github="https://www.github.com"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/6.png"
          />
        </ProfileGrid>

        <Spacing marginTop="88px">
          <Flex flexDirectionMd="column-reverse" justifyContent="space-between" alignItems="stretch">
            <Flex flex={0.3} flexLg={0.45} flexSm={1}>
              <Spacing fullWidth marginTopMd="50px">
                <Profile
                  name="Jay Wang"
                  position="Business Development Manager"
                  linkedIn="https://www.linkedin.com/feed/"
                  avatar="./images/profile/avatar.png"
                />
              </Spacing>
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
            name="Obasi Francis Ifegwu"
            position="Strategic Advisor"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/7.png"
          />
          <Profile
            name="Micky Irons"
            position="Marketing Advisor"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/8.png"
          />
          <Profile
            name="CryptoEdit"
            position="Research & Content Lead"
            linkedIn="https://www.linkedin.com/feed/"
            avatar="./images/profile/9.png"
          />
        </ProfileGrid>
      </Spacing>
      <Flex
              itemsFlex={0.85}
              itemsFlexLg={1}
              justifyContent="flex-start"
              background="#181A1C"
              style={{ borderRadius: 20 }}
              flex={0.6}
              flexLg={0.45}
              flexSm={1}
            >
              <form>
                <Spacing
                  fullWidth
                  paddingTop="68px"
                  paddingBottom="79px"
                  paddingHorizontal="55px"
                  paddingHorizontalLg="35px"
                >
                  <Text fontWeight={700} fontSize={36} mb="48px" color="#fff">
                    Contact the Team
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
    </div>
  );
}

export default Teams;
