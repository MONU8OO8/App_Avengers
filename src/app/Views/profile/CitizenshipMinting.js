import styled from "styled-components";
const communityData = [
  {
    icon: "/assets/images/NFT.png"
  },
  {
    icon: "/assets/icons/checkbox.png"
  }
];

const WishListData = [
  {
    name: "AIRDROP"
  },
  {
    name: "DISCORD ACCESS"
  },
  {
    name: "MOBILE PASSPORT"
  },
  {
    name: "VOTING POWER"
  }
];

export default function CitizenshipMinting() {
  return (
    <Container>
      <TextFieldContainer>
        <CommunityIcon src={communityData[0].icon} alt="NFT" />
      </TextFieldContainer>
      <TextFieldContainer>
        <FieldLabel>A citizenship means certain privileges like:</FieldLabel>
        <TextFieldLabel>150 waitlisted</TextFieldLabel>
        <WishlistContainer>
          {WishListData.map((community, index) => (
            <WishListItem key={index}>
              <TextFieldLabel>{community.name}</TextFieldLabel>
              <CheckBoxIcon src={communityData[1].icon} alt="icon" />
            </WishListItem>
          ))}
        </WishlistContainer>
        <ButtonField>

        <ProfileButton>View Profile</ProfileButton>
        </ButtonField>
      </TextFieldContainer>

    </Container>);
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 500px !important;
  // height: fit-content;
  align-items: center;
  justify-content: center;
`;

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  width: 50%;
  height: 60%
  padding-top: 1rem;
`;
const WishlistContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  width: 100%;
  height: 60%
`;

const CommunityIcon = styled.img`
  width: 255px; /* Set your desired width */
  height: 318px; /* Set your desired height */
  object-fit: cover; /* Or any other object-fit value as per your requirements */
  border-radius: 8px;
  
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
  gap: 1rem;
  width: 100%;
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

const WishListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
  width: 80%;
`;

const CheckBoxIcon = styled.img`
  width: 20px;  
  height: 20px; 
  object-fit: cover;  
  border-radius: 8px;
`;
const ButtonField = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
justify-content: center;
width: 100%;
margin-top: 2rem;
`;