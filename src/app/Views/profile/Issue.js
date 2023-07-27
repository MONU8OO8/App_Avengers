import styled from "styled-components";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

export default function Issue() {
  return (
    <Container>
      <GroupContainer>
        <ImageUploadContainer>
          <UploadIcon fontSize='large' />
          <UploadText>Add logo</UploadText>
        </ImageUploadContainer>
        <TextFieldContainer>
          <FieldLabel>Public Name</FieldLabel>
          <TextField type='text' placeholder="Your Organisation's Name" />
        </TextFieldContainer>
      </GroupContainer>
      <TextFieldContainer>
        <FieldLabel>Public Description (optional)</FieldLabel>
        <DescriptionField
          type='text'
          placeholder='This text will be inserted in the code of every credential you issue. It can be a description of your organisation, address, contact information, etc.'
        />
      </TextFieldContainer>
      <GroupContainer>
        <TextFieldContainer>
          <FieldLabel>DiD Type</FieldLabel>
          <Dropdown type='text' placeholder='Dock' />
        </TextFieldContainer>
        <CreateProfileButton>Create Issuer Profile</CreateProfileButton>
      </GroupContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const GroupContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  align-items: center;
  margin-top: 1.5rem;
`;

const ImageUploadContainer = styled.section`
  padding: 0.25rem;
  width: 7rem;
  height: 6.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.currentTheme === "dark" ? theme.infoBgColor700 : theme.mainBgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

const UploadIcon = styled(AddPhotoAlternateOutlinedIcon)`
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.infoBgColor
      : theme.globalColors.greyColor};
`;

const UploadText = styled.p`
  margin: 0;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.infoBgColor
      : theme.globalColors.greyColor};
  font-family: var(--primaryfont);
  font-size: 10px;
  letter-spacing: 1.5px;
`;

const TextFieldContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  width: 100%;
`;

const FieldLabel = styled.label`
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.accentBgColor900
      : theme.infoBgColor900};
  font-family: var(--primaryfont);
`;

const TextField = styled.input`
  background-color: ${({ theme }) =>
    theme.currentTheme === "dark" ? theme.infoBgColor600 : theme.mainBgColor};
  padding: 0 12px;
  width: 100%;
  height: 40px;
  border-radius: 12px;
  font-family: var(--secondaryfont);
`;

const DescriptionField = styled.textarea`
  background-color: ${({ theme }) =>
    theme.currentTheme === "dark" ? theme.infoBgColor600 : theme.mainBgColor};
  padding: 4px 12px;
  width: 100%;
  height: 40px;
  border-radius: 12px;
  font-family: var(--secondaryfont);
  resize: none;
  height: 5rem;
`;

const Dropdown = styled(TextField)`
  width: 50%;
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
