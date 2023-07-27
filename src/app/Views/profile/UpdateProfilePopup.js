import styled from "styled-components";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ImageView from "@/app/Components/Image";
import { CloseOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { uiState } from "@/app/Redux/uiSlice";

const profileImg = "/assets/images/profilepic.png";
const twitterLight = "/assets/icons/twitter-white.png";
const twitterDark = "/assets/icons/twitter-black.png";
const locationLight = "/assets/icons/location-white.png";
const locationDark = "/assets/icons/location-black.png";

export function UpdateProfilePopup({ setShowUpdateprofile }) {
  const tagList = Array(4).fill("Tags");
  const { theme } = useSelector(uiState);
  const socialIcon = theme === "light" ? twitterLight : twitterDark;
  const locationIcon = theme === "light" ? locationLight : locationDark;

  return (
    <PopupOverlay>
      <PopupContainer>
        <PopupInnerContainer>
          <ContainerRow1>
            <ProfileContainer>
              <BackButton onClick={() => setShowUpdateprofile(false)}>
                <ArrowIcon />
              </BackButton>
              <ProfileImgContainer>
                <ProfileImg
                  src={profileImg}
                  alt='profile pic'
                  width={200}
                  height={200}
                />

                <ChangeAvatarBtn>Change Avatar</ChangeAvatarBtn>
              </ProfileImgContainer>
            </ProfileContainer>
            <TagsContainer>
              <TagField
                type='text'
                autoFocus={true}
                placeholder='Type to add manual tags'
              />
              <TagList>
                {tagList && tagList.length
                  ? tagList.map((item, i) => (
                      <Tag key={i}>
                        {item} <CloseIcon fontSize='small' />{" "}
                      </Tag>
                    ))
                  : null}
              </TagList>
            </TagsContainer>
          </ContainerRow1>

          <DescriptionContainer>
            <DescriptionTitleContainer>
              <DescriptionTitle>Edit Description</DescriptionTitle>
            </DescriptionTitleContainer>
            <DescriptionField placeholder='Description' />

            <OtherInfoContainer>
              <SocialLinkWrapper>
                <SocialIcon
                  src={socialIcon}
                  alt='twitter'
                  width={200}
                  height={200}
                />
              </SocialLinkWrapper>
              <OtherInfoField type='text' placeholder='url' />
            </OtherInfoContainer>

            <OtherInfoContainer>
              <SocialLinkWrapper>
                <SocialIcon
                  src={locationIcon}
                  alt='twitter'
                  width={200}
                  height={200}
                />
              </SocialLinkWrapper>
              <OtherInfoField type='text' placeholder='Address' />
            </OtherInfoContainer>
          </DescriptionContainer>

          <SaveButton> Save And Exit</SaveButton>
        </PopupInnerContainer>
      </PopupContainer>
    </PopupOverlay>
  );
}

const PopupOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000b2;
  z-index: 16;
  cursor: default;
`;

const PopupContainer = styled.div`
  width: 75%;
  height: 83%;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.mainBgColor
      : theme.primaryBgColor700};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: absolute;

  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  transition: 1s ease-in-out;
`;

const PopupInnerContainer = styled.div`
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme == "dark"
        ? theme.infoBgColor800
        : theme.infoBgColor900};
  width: 97%;
  height: 100%;
  border-radius: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.primaryBgColor600};
`;

const ContainerRow1 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.accentBgColor500
      : theme.infoBgColor900};
  /* padding: 0.25rem; */
  border-radius: 3px;
  width: 2.5rem;
  height: 2rem;
  /* margin: 1rem 0 0 1rem; */
`;

const ArrowIcon = styled(ArrowBackOutlinedIcon)`
  color: ${({ theme }) =>
    theme.currentTheme === "dark" ? theme.accentBgColor800 : theme.mainBgColor};
`;

const ProfileImgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 20%;
`;

const ProfileImg = styled(ImageView)`
  width: 4.5rem;
  height: 4.5rem;
  object-fit: contain;
  border-radius: 50%;
`;

const ChangeAvatarBtn = styled.button`
  text-align: center;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  background-color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.accentBgColor800
      : theme.infoBgColor900};
  font-family: var(--primaryfontLight);
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.mainBgColor};
`;

const TagsContainer = styled.section`
  border: 1px solid ${(props) => props.theme.darkMode.infoBgColor800};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 43%;
  margin: 1% 0 0 0;
  min-height: 7rem;
  border-radius: 1rem;
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.accentBgColorGradient700
      : theme.primaryBgColor700};
  padding: 1rem;
`;

const TagField = styled.input`
  width: 94%;
  height: 40px;
  font-family: var(--primaryfont);
  padding: 0 12px;
  color: ${({ theme }) => theme.infoBgColor};
  border-radius: 14px;
  background-color: ${({ theme }) => theme.mainBgColor};
  border: 1px solid ${(props) => props.theme.darkMode.infoBgColor800};
`;

const TagList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Tag = styled.button`
  min-width: 4rem;
  height: 20px;
  border-radius: 20px;
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "dark"
        ? "transparent"
        : theme.globalColors.greyColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  font-family: var(--secondaryfont);
  font-size: 14px;

  gap: 0.5rem;
  font-weight: 400;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.infoBgColor900
      : theme.darkMode.mainBgColor};
  background: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.accentBgColor800
      : theme.accentBgColorGradient700};
  transition: all 0.25s ease-in-out;
`;

const CloseIcon = styled(CloseOutlined)`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.infoBgColor900
      : theme.darkMode.mainBgColor};
`;

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
`;

const DescriptionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.darkMode.infoBgColor900};
`;

const DescriptionTitle = styled.h4`
  font-family: var(--primaryfontLight);
  font-weight: 400;
  letter-spacing: 1.5px;
  margin: 0;
  padding-bottom: 0.5rem;
  color: ${({ theme }) =>
    theme.currentTheme === "dark" ? theme.infoBgColor : theme.infoBgColor900};
`;

const DescriptionField = styled.textarea`
  width: 96.5%;
  resize: none;
  height: 5rem;
  font-family: var(--primaryfont);
  padding: 0 12px;
  color: ${({ theme }) => theme.infoBgColor};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.mainBgColor};
  border: 1px solid ${(props) => props.theme.darkMode.infoBgColor800};
  padding: 1rem;
`;

const OtherInfoContainer = styled.section`
  width: 100%;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OtherInfoField = styled(TagField)`
  border-radius: 8px;
`;

const SocialLinkWrapper = styled.section`
  background-color: ${({ theme }) => theme.darkMode.infoBgColor900};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIcon = styled(ImageView)`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;

const SaveButton = styled.button`
  width: 8rem;
  display: block;
  height: 30px;
  border-radius: 5px;
  padding: 5px 12px;
  font-size: 14px;
  text-align: center;
  font-family: var(--primaryfont);
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.infoBgColor900
        : "transparent"};
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.mainBgColor
      : theme.darkMode.accentBgColor500};
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.darkMode.accentBgColor800
      : theme.lightMode.infoBgColor900};
  letter-spacing: 1px;
  margin: 2rem auto 0 auto;
`;
