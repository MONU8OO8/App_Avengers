import styled from "styled-components";

export default function Reputation() {
  return (<Container>
    <GroupContainer>
     <Reputationbox>
      <ChartFieldLabel>15</ChartFieldLabel>
      <FieldLabel>Reputation score</FieldLabel>
     </Reputationbox>
    <CreateProfileButton>BOOST MY REPUTATION</CreateProfileButton>
    </GroupContainer>
  </Container>);
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  gap: 2rem;
  margin-top: 1.5rem;
  padding: 1rem;
`;

const Reputationbox=styled.div`
width: 250px;
height: 250px;
border-radius: 50%;
background-color: ${({ theme }) =>
theme.currentTheme === "dark"
  ? theme.accentBgColor700
  : theme.mainBgColor};
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const FieldLabel = styled.label`
color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.accentBgColor900
      : theme.mainBgColor};
font-family: var(--primaryfont);
  font-weight: 400;
  font-size: 24px;
  width: 50%;
`;

const ChartFieldLabel = styled.label`
color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.accentBgColor900
      : theme.mainBgColor};
font-family: var(--primaryfontBold);
  font-weight: 400;
  font-size: 95px;
`;

const CreateProfileButton = styled.button`
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.mainBgColor
      : theme.accentBgColorGradient600};

  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "light" ? theme.infoBgColor900 : "transparent"};
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor900
      : theme.accentBgColor900};
  padding: 5px 1rem;
  border-radius: 5px;
  width: 50%;
  text-align: center;
  height: 45px;
  font-family: var(--primaryfont);
`;