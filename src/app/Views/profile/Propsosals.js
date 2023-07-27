import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Proposals() {
  const data = [
    {
      title: "Stargate DAO | $ARB Token allocation",
      endTime: "Ends in 2 weeks",
      urgency: "High",
      yes: "67%",
      no: "33%",
    },
    {
      title: "Aave | Bug Bounties Proposa",
      endTime: "Ended",
      urgency: "Medium",
      yes: "67%",
      no: "33%",
    },
    {
      title: "Decetraland | Road Modernization",
      endTime: "Ends in 2 weeks",
      urgency: "Low",
      yes: "67%",
      no: "33%",
    },
  ];

  return (
    <Container>
      <MainContent>
        <SearchBase>
          <SearchIcon />
          <SearchInput
            type='text'
            autoFocus={true}
            placeholder='Search something...'
          />
        </SearchBase>
        {data && data.length
          ? data.map((obj, i) => {
              return (
                <ContentContainer key={i}>
                  <Title>{obj?.title}</Title>
                  <EndTime>{obj.endTime}</EndTime>
                  <GovernanceContainer>
                    <Governance>Governance</Governance>
                    <UrgencyLevel>
                      <UrgencyLabel>Urgency:</UrgencyLabel>
                      <UrgencyValue value={obj?.urgency}>
                        {obj.urgency}
                      </UrgencyValue>
                    </UrgencyLevel>
                  </GovernanceContainer>
                  <AnalyticsContainer>
                    <Analyticsgroup>
                      <AnalyticsHeading>Sentiment</AnalyticsHeading>
                      <GraphContainer>
                        <GraphYesContainer value={obj?.yes}>
                          Yes {obj?.yes}
                        </GraphYesContainer>
                        <GraphNoContainer value={obj?.no}>
                          No {obj?.no}
                        </GraphNoContainer>
                      </GraphContainer>
                    </Analyticsgroup>
                    <ProfileButton>View Profile</ProfileButton>
                  </AnalyticsContainer>
                </ContentContainer>
              );
            })
          : null}
      </MainContent>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  margin: 1rem 0;
`;

const SearchBase = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.5% 0;
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "dark"
        ? "transpanet"
        : theme.globalColors.greyColor};
  border-radius: 8px;
  position: relative;
  background-color: ${({ theme }) => theme.infoBgColor700};
  z-index: 2;
`;

const SearchIcon = styled(SearchOutlinedIcon)`
  color: ${(props) => props.theme.globalColors.greyColor};
  height: 2rem !important;
`;
const SearchInput = styled.input`
  color: ${(props) => props.theme.globalColors.greyColor};
  width: 85%;
  height: 30px;
  font-family: var(--primaryfont);
  padding: 0 10px;
`;

const ContentContainer = styled.div`
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.primaryBgColor600
      : theme.primaryBgColor500};
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "dark"
        ? "transpanet"
        : theme.globalColors.greyColor};
  width: 90%;
  height: 15rem;
  border-radius: 10px;
  padding: 1.5rem 5%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-weight: 500;
  font-family: var(--primaryfont);
  font-size: 20px;
  color: ${({ theme }) => theme.infoBgColor};
  letter-spacing: 1.5px;
  margin: 0;
`;

const EndTime = styled.p`
  color: ${({ theme }) => theme.globalColors.greyColor};
  font-family: var(--secondaryfont);
  font-weight: 400;
  font-size: 1.5rem;
  margin: 5px 0 0 0;
`;

const GovernanceContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;

const Governance = styled.div`
  background: ${(props) => props.theme.accentBgColorGradient900};
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor900
      : theme.globalColors.greyColor};
  width: 50%;
  height: 30px;
  font-family: var(--secondaryfont);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "dark" ? "transparent" : theme.infoBgColor900};
`;

const UrgencyLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const UrgencyLabel = styled(EndTime)`
  font-size: 16px;
`;

const UrgencyValue = styled(UrgencyLabel)`
  color: ${({ value, theme }) =>
    value === "High"
      ? theme.globalColors.darkRedColor
      : value === "Medium"
      ? theme.globalColors.orangeColor
      : theme.lightMode.infoBgColor900};
`;

const AnalyticsContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Analyticsgroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
`;

const AnalyticsHeading = styled.p`
  color: ${({ theme }) => theme.globalColors.greyColor};
  font-family: var(--secondaryfont);
  font-size: 19px;
  margin: 0;
`;

const GraphContainer = styled.section`
  display: flex;
  align-items: center;
  width: 50%;
`;

const GraphYesContainer = styled.section`
  width: ${({ value }) => value};
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor900
      : theme.accentBgColor900};
  color: ${({ theme }) => theme.mainBgColor};
  height: 30px;
  display: flex;
  z-index: 2;
  position: relative;
  align-items: center;
  border-radius: 5px;
  justify-content: flex-start;
  padding: 4px 8px;
  font-family: var(--secondaryfont);
`;

const GraphNoContainer = styled(GraphYesContainer)`
  justify-content: flex-end;
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.accentBgColor900
      : theme.accentBgColor500};
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.accentBgColor900
      : theme.infoBgColor900};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  z-index: 1;
  left: -4px;
`;

const ProfileButton = styled.button`
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.mainBgColor
      : theme.accentBgColor500};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--primaryfontBold);
  border-radius: 8px;
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "light" ? theme.infoBgColor900 : "transparent"};
  width: 12rem;
  font-weight: 800;
  height: 45px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor900
      : theme.accentBgColor900};
`;
