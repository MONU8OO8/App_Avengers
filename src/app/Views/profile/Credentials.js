import styled from "styled-components";
import CircleIcon from '@mui/icons-material/Circle';

export default function Credentials() {
  const imageUrls = [
    "/assets/icons/Ellipse.png",
    "/assets/icons/Ellipse.png",
    "/assets/icons/Ellipse.png",
    "/assets/icons/Ellipse.png",
    "/assets/icons/Ellipse.png",
  ];

  return (
    <Container>
      <Profilebutton>
        <ProfileButton>BADGES</ProfileButton>
        <CancelProfileButton>verifiable credentials</CancelProfileButton>
      </Profilebutton>
      <GroupContainer>
        <FieldLabel>Requested Data</FieldLabel>
        <ImagesRow>
          {imageUrls.map((imageUrl, index) => (
            <Image key={index} src={imageUrl} alt={`Image ${index + 1}`} />
          ))}
        </ImagesRow>
        <TextFieldContainer >
          <BadgeIcon />
          <FieldLabel>HB/S2 (Here Before Season 2)</FieldLabel>
        </TextFieldContainer>
        <TextContainer>
          <FieldLabel>View More</FieldLabel>
        </TextContainer>

      </GroupContainer>
      <GroupContainer>
        <FieldLabel>endorsement badges</FieldLabel>
        <ImagesRow>
          {imageUrls.map((imageUrl, index) => (
            <Image key={index} src={imageUrl} alt={`Image ${index + 1}`} />
          ))}
        </ImagesRow>
        <TextFieldContainer >
          <BadgeIcon />
          <FieldLabel>HB/S2 (Here Before Season 2)</FieldLabel>
        </TextFieldContainer>
        <TextContainer>
          <FieldLabel>View More</FieldLabel>
        </TextContainer>

      </GroupContainer>
    </Container>

  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 2rem;
`;

const ImagesRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0 1rem;
`;

const Image = styled.img`
  width: 85px; /* Set your desired width */
  height: 85px; /* Set your desired height */
  object-fit: cover; /* Or any other object-fit value as per your requirements */
  border-radius: 8px;
  /* Add any other styling as per your requirements */
`;

const BadgeIcon = styled(CircleIcon)`
  color: ${(props) => props.theme.darkMode.accentBgColor900};
  width: 100.695px !important;
  height: 100.695px !important;
`;

const TextFieldContainer = styled.section`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.mainBgColor
      : theme.infoBgColor600};
`;

const FieldLabel = styled.label`
color: ${({ theme }) =>
theme.currentTheme === "dark"
  ? theme.accentBgColor900
  : theme.infoBgColor900};
font-family: var(--primaryfont);
  font-weight: 400;
`;

const TextContainer=styled.label`
display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
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
const CancelProfileButton = styled.button`
background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.mainBgColor
      : theme.infoBgColor600};
display: flex;
align-items: center;
justify-content: center;
font-family: var(--primaryfontBold);
border-radius: 8px;
border: 1px solid
${({ theme }) =>
    theme.currentTheme === "light" ? theme.infoBgColor900 : "transparent"};
width: 50%;
font-weight: 800;
height: 45px;
color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor900
      : theme.infoBgColor};
`;


const Profilebutton = styled.section`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350px;
  gap: 2rem;
  margin-top: 1.5rem;
  padding: 1rem;
  border: 2px solid ${({ theme }) =>
    theme.currentTheme === "dark" ? theme.infoBgColor600 : theme.mainBgColor};
`;