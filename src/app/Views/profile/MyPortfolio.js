import styled from "styled-components";

export default function MyPortfolio() {
  const communityData = [
    {
      icon: "/assets/icons/chart.png"
    },
    {
      icon: "/assets/icons/checkbox.png"
    }
    // Add more community data objects as needed
  ];
  return (<Container>
    <Topdiv>
      <LeftText>
        <HeadFieldLabel>83,376.00 USD</HeadFieldLabel>
        <FieldLabel>BALANCE</FieldLabel>
      </LeftText>
      <RightText>
        <FieldLabel>140</FieldLabel>
        <FieldLabel>+5% 24H</FieldLabel>
      </RightText>
    </Topdiv>
    <TextFieldLabel>Portfolio HISTORY</TextFieldLabel>

    <GroupContainer>
      <LeftText>

        <ChartFieldLabel>Portfolio HISTORY</ChartFieldLabel>
        <FieldLabel>BALANCE</FieldLabel>
      </LeftText>
      <Topdiv>
        <TextFieldContainer>
          <CommunityIcon src={communityData[0].icon} alt="NFT" />
        </TextFieldContainer>
        <InfoButtondiv>
          <ContainerRightText>
            <SmallTextField>RANK</SmallTextField>
            <SmallTextField>TOKEN</SmallTextField>
            <SmallTextField>USD value / percentage</SmallTextField>
            <SmallTextField>token balance</SmallTextField>
          </ContainerRightText>
          <Profilebutton>
            <ProfileButton>AUM:$15B</ProfileButton>
            <CancelProfileButton>learn more</CancelProfileButton>
          </Profilebutton>
        </InfoButtondiv>

      </Topdiv>


    </GroupContainer>
    <GroupContainer>
      <LeftText>
        <ChartFieldLabel>Portfolio HISTORY</ChartFieldLabel>
        <FieldLabel>BALANCE</FieldLabel>
      </LeftText>
      <Topdiv>
        <TextFieldContainer>
          <CommunityIcon src={communityData[0].icon} alt="NFT" />
        </TextFieldContainer>
        <InfoButtondiv>
          <ContainerRightText>
            <SmallTextField>RANK</SmallTextField>
            <SmallTextField>TOKEN</SmallTextField>
            <SmallTextField>USD value / percentage</SmallTextField>
            <SmallTextField>token balance</SmallTextField>
          </ContainerRightText>
          <Profilebutton>
            <ProfileButton>AUM:$15B</ProfileButton>
            <CancelProfileButton>learn more</CancelProfileButton>
          </Profilebutton>
        </InfoButtondiv>

      </Topdiv>


    </GroupContainer>
  </Container>);
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

const Topdiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  margin-bottom: 2rem;
`;
const InfoButtondiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: fit-content;
  margin-bottom: 2rem;
`;
const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: fit-content;
`;
const RightText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: fit-content;
  gap: 0.5rem;
  background: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.infoBgColor600
      : theme.infoBgColor900};
  border-radius: 10px;
  padding: 0.5rem;
`;
const ContainerRightText = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: fit-content;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const FieldLabel = styled.label`
color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.accentBgColor900
      : theme.mainBgColor};
font-family: var(--primaryfont);
  font-weight: 400;
`;
const HeadFieldLabel = styled.label`
color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.accentBgColor900
      : theme.infoBgColor900};
font-family: var(--primaryfontBold);
  font-weight: 400;
  font-size: 45px;
`;
const ChartFieldLabel = styled.label`
color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.infoBgColor
      : theme.infoBgColor900};
font-family: var(--primaryfontBold);
  font-weight: 400;
  font-size: 30px;
  width: 100%;
`;

const CommunityIcon = styled.img`
  width: 100%; /* Set your desired width */
  height: 100%; /* Set your desired height */
  object-fit: cover; /* Or any other object-fit value as per your requirements */
  border-radius: 8px;
  /* Add any other styling as per your requirements */
`;

const TextFieldLabel = styled.label`
  color: ${({ theme }) => (theme.currentTheme === "dark" ? theme.infoBgColor : theme.infoBgColor)};
  font-family: var(--primaryfont);
  font-weight: 400;
  width: 100%;
`;

const SmallTextField = styled.label`
  color: ${({ theme }) => (theme.currentTheme === "dark" ? theme.infoBgColor : theme.infoBgColor)};
  font-family: var(--primaryfont);
  font-weight: 400;
  width: 100%;
  font-size: 9px;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height:250px;
  gap: 2rem;
  margin-top: 1.5rem;
  padding: 1rem;
  border: 2px solid ${({ theme }) =>
    theme.currentTheme === "dark" ? theme.infoBgColor600 : theme.mainBgColor};
`;

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  width: 40%;
  height: 60%
  padding-top: 1rem;
`;

const ProfileButton = styled.button`
background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.mainBgColor
      : theme.accentBgColor500};
display: flex;
align-items: center;
justify-content: center;
font-family: var(--primaryfont);
border-radius: 8px;
font-size: 12px;
border: 1px solid
${({ theme }) =>
    theme.currentTheme === "light" ? theme.infoBgColor900 : "transparent"};
width: 10rem;
font-weight: 400;
height: 30px;
color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor900
      : theme.accentBgColor900};
`;
const CancelProfileButton = styled.button`
background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.mainBgColor
      : theme.infoBgColor600};
display: flex;
align-items: center;
justify-content: center;
font-family: var(--primaryfont);
border-radius: 8px;
font-size: 12px;
border: 1px solid
${({ theme }) =>
    theme.currentTheme === "light" ? theme.infoBgColor900 : "transparent"};
    width: 10rem;
    font-weight: 400;
    height: 30px;
color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor900
      : theme.infoBgColor};
`;

const Profilebutton = styled.section`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  width: 50%;
  margin-top: 2rem;
`;