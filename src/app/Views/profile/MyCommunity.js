import styled from "styled-components";
import CircleIcon from '@mui/icons-material/Circle';

export default function MyCommunity() {
  const communityData = [
    {
      icon: "/assets/images/sam.png",
      name: "SAM",
    },
    {
      icon: "/assets/images/tylor.png",
      name: "ROBOX",
    },
    {
      icon: "/assets/images/robox.png",
      name: "TYLOR",
    },
    {
      icon: "/assets/images/phoebe.png",
      name: "PHOEBE",
    },
    // Add more community data objects as needed
  ];
  const communitycarddata = [
    {
      icon: "/assets/images/cabin.png",
      name: "CABIN DAO",
    },
    {
      icon: "/assets/images/city.png",
      name: "CITY DAO",
    },
    {
      icon: "/assets/images/decent.png",
      name: "Decentraland",
    },
    {
      icon: "/assets/images/gitcoin.png",
      name: "Gitcoin",
    },
    // Add more community data objects as needed
  ];

  return (
    <Container>
      <GroupContainer>
        <FieldLabel>Requested Data</FieldLabel>
        <ImagesRow>
          {communityData.map((community, index) => (
            <CommunityItem key={index}>
              <CommunityIcon src={community.icon} alt={`Community ${index + 1}`} />
              <CommunityName>{community.name}</CommunityName>
              <CreateProfileButton>Follow</CreateProfileButton>
            </CommunityItem>
          ))}
        </ImagesRow>
      </GroupContainer>
      <Community>
        <CommunityCard>
          {communitycarddata.map((community, index) => (
            <CommunityCardItem key={index}>
              <CommunityCardIcon src={community.icon} alt={`Community ${index + 1}`} />
              <CommunityCardName>{community.name}</CommunityCardName>
              <ViewProfileButton>follow</ViewProfileButton>
              <TextFieldLabel>Joined on: Sept 2020</TextFieldLabel>
              <TextFieldLabel>Followers: 15k</TextFieldLabel>
              <ProfileButton>View Profile</ProfileButton>
            </CommunityCardItem>
          ))}
        </CommunityCard>
      </Community>

    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

const ImagesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1rem;
  width: 90%;
`;

const CommunityItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const CommunityIcon = styled.img`
  width: 50px; /* Set your desired width */
  height: 50px; /* Set your desired height */
  object-fit: cover; /* Or any other object-fit value as per your requirements */
  border-radius: 8px;
  /* Add any other styling as per your requirements */
`;

const CommunityName = styled.span`
  color: ${({ theme }) => (theme.currentTheme === "dark" ? theme.accentBgColor900 : theme.infoBgColor900)};
  font-family: var(--primaryfont);
  font-weight: 400;
`;

const FieldLabel = styled.label`
  color: ${({ theme }) => (theme.currentTheme === "dark" ? theme.accentBgColor900 : theme.infoBgColor900)};
  font-family: var(--primaryfont);
  font-weight: 400;
`;
const TextFieldLabel = styled.label`
  color: ${({ theme }) => (theme.currentTheme === "dark" ? theme.infoBgColor : theme.infoBgColor)};
  font-family: var(--primaryfont);
  font-weight: 400;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.currentTheme === "dark" ? theme.infoBgColor600 : theme.mainBgColor};
  border: 2px solid ${({ theme }) => (theme.currentTheme === "dark" ? theme.infoBgColor600 : theme.mainBgColor)};
`;

const Community = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 600px;
  align-items: center;
  gap: 2rem;
  margin-top: 1.5rem;
  padding: 1rem;
`;

const CommunityCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  gap: 1rem;
  width: 85%;
`;

const CommunityCardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? `linear-gradient(180deg, transparent 20%, ${theme.infoBgColor600} 20%)`
      : `linear-gradient(180deg, transparent 20%, ${theme.mainBgColor} 20%)`};
  border-radius: 8px;
`;

const CommunityCardIcon = styled.img`
  width: 85px; /* Set your desired width */
  height: 90px; /* Set your desired height */
  object-fit: cover; /* Or any other object-fit value as per your requirements */
  border-radius: 8px;
  /* Add any other styling as per your requirements */
`;

const CommunityCardName = styled.span`
  color: ${({ theme }) => (theme.currentTheme === "dark" ? theme.accentBgColor900 : theme.infoBgColor900)};
  font-family: var(--primaryfont);
  font-weight: 400;
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
  width: 100%;
  text-align: center;
  height: 30px;
  font-family: var(--primaryfont);
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
  border: 1px solid
    ${({ theme }) =>
    theme.currentTheme === "light" ? theme.infoBgColor900 : "transparent"};
  width: 12rem;
  font-weight: 400;
  height: 30px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor900
      : theme.accentBgColor900};
`;
const ViewProfileButton = styled.button`
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.mainBgColor
      : theme.accentBgColor900};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--primaryfont);
  border-radius: 8px;
  border: 1px solid
    ${({ theme }) =>
    theme.currentTheme === "light" ? theme.infoBgColor900 : "transparent"};
  width: 8rem;
  font-weight: 400;
  height: 30px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor900
      : theme.mainBgColor};
`;