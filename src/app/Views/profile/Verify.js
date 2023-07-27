import styled from "styled-components";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

export default function Verify() {
  const textFieldContainers = [
    {
      label: "Public Name",
      placeholder: "Your Organisation's Name",
    },
    {
      label: "Public Name",
      placeholder: "Your Organisation's Name",
    },
  ];
  
  return (
    <Container>
      {textFieldContainers.map((field, index) => (
        <TextFieldContainer key={index}>
          <FieldLabel>{field.label}</FieldLabel>
          <TextField type="text" placeholder={field.placeholder} />
        </TextFieldContainer>
      ))}
      <GroupContainer>
        <FieldLabel>Public Name</FieldLabel>
        <TextFieldsContainer>
          <DropdownField>
            <FieldLabel>Requested Data</FieldLabel>
            <Dropdown type='text' placeholder='Type or select an Template Attribute' />
            <FieldLabel>Credential Issuer DID Must Equal (optional)</FieldLabel>
            <TextField type='text' placeholder="did.dock:5HGjfP342ZXmtHREWj3ZisqmY2ypgJvxwx4BNq6sZCFs6dZB" />
            <FieldLabel>Credential Name Must Equal (optional)</FieldLabel>
            <Dropdown type='text' placeholder='Type or select an Existing name' />
            <FieldLabel>Credential Type Must Contain (optional)</FieldLabel>
            <Dropdown type='text' placeholder='Type or select an Credential Type' />
          </DropdownField>
        </TextFieldsContainer>

      </GroupContainer>
      <Profilebutton>
      <CancelProfileButton>CANCEL</CancelProfileButton>
      <CreateProfileButton>Create Verification Template</CreateProfileButton>
      </Profilebutton>
      

    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 620px;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const TextFieldContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  width: 100%;
`;
const TextFieldsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  border: 2px solid ${({ theme }) =>
  theme.currentTheme === "dark" ? theme.infoBgColor600 : theme.mainBgColor};
  border-radius: 10px;
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
const DropdownField = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 80%;
`;
const Dropdown = styled(TextField)`
  width: 70%;
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
const CancelProfileButton = styled.button`
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.mainBgColor
      : theme.infoBgColor600};

  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor900
      : theme.infoBgColor};
  padding: 5px 1rem;
  border-radius: 5px;
  width: 30%;
  text-align: center;
  height: 45px;
  font-family: var(--primaryfont);
`;

const Profilebutton = styled.section`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
`;
