import ImageView from "@/app/Components/Image";
import styled from "styled-components";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useSelector } from "react-redux";
import { uiState } from "@/app/Redux/uiSlice";
import { useState } from "react";
import { UpdateProfilePopup } from "./UpdateProfilePopup";

const profileImg = "/assets/images/profilepic.png";
const cicle = "/assets/images/circle.png";
const twitterLight = "/assets/icons/twitter-white.png";
const twitterDark = "/assets/icons/twitter-black.png";
const githubLight = "/assets/icons/github-white.png";
const githubDark = "/assets/icons/github-black.png";
const discordlight = "/assets/icons/discord-white.png";
const discordDark = "/assets/icons/discord-black.png";
const telegramLight = "/assets/icons/telegram-white.png";
const telegramDark = "/assets/icons/telegram-black.png";

const profile = {
  title: "JohnDoe.si",
  date: "January, 2023",
  location: "Mumbai, India",
  followers: "12k",
  following: "7k",
  description: "Embracing the decentralized revolution",
};

export default function ProfileDisplay() {
  const { theme } = useSelector(uiState);
  const [showUpdateProfile, setShowUpdateprofile] = useState(false);
  const socialLinks = [
    {
      title: "Telegram",
      icon: theme === "dark" ? telegramDark : telegramLight,
      url: "https://www.google.com",
    },
    {
      title: "Twitter",
      icon: theme === "dark" ? twitterDark : twitterLight,
      url: "https://www.google.com",
    },
    {
      title: "Github",
      icon: theme === "dark" ? githubDark : githubLight,
      url: "https://www.google.com",
    },
    {
      title: "Discord",
      icon: theme === "dark" ? discordDark : discordlight,
      url: "https://www.google.com",
    },
  ];

  const linkedAccounts = [
    {
      title: "worldcoin id",
      icon: "/assets/images/worldcoin.png",
    },
    {
      title: "Spruce",
      icon: "/assets/images/spruce.png",
    },
    {
      title: "Krebbit",
      icon: "/assets/images/krebbit.png",
    },
  ];

  const tags = ["Art", "Events", "Developers"];

  return (
    <DisplayWrapper>
      <ProfileWrapper>
        <ProfileImageWrapper>
          <ProfileImg src={profileImg} alt='profile' width={200} height={200} />
        </ProfileImageWrapper>
        <ScoreWrapper>
          <ScoreValue>1.5</ScoreValue>
          <Scoretext>Reputation Score</Scoretext>
        </ScoreWrapper>
      </ProfileWrapper>

      <ProfileInfoWrapper>
        <ProfileInfoContainer>
          <ProfileTitle>{profile.title}</ProfileTitle>
          <ProfileDetailWrapper>
            <ProfileDetailWrapper>
              <CalenderIcon />
              <ProfileInfo>Joined on {profile.date}</ProfileInfo>
            </ProfileDetailWrapper>
            <ProfileDetailWrapper>
              <LocationIcon />
              <ProfileInfo>{profile.location}</ProfileInfo>
            </ProfileDetailWrapper>
          </ProfileDetailWrapper>

          <ProfileDetailWrapper>
            <ProfileDescription1>
              {profile.followers} Followers
            </ProfileDescription1>
            <ProfileDescription2>
              {profile.following} Following
            </ProfileDescription2>
          </ProfileDetailWrapper>
          <ProfileDescription2>{profile.description}</ProfileDescription2>
        </ProfileInfoContainer>

        <ProfileInfoContainer>
          <EditProfileBtn onClick={() => setShowUpdateprofile(true)}>
            Edit Profile
          </EditProfileBtn>
          <SocialLinkContainer>
            {socialLinks && socialLinks.length
              ? socialLinks.map(({ title, url, icon }, i) => (
                  <SocialLinkWrapper
                    key={i}
                    href={url}
                    target='_blank'
                    rel='noreferer'
                  >
                    <SocialIcon
                      src={icon}
                      title={title}
                      alt={title}
                      width={200}
                      height={200}
                    />
                  </SocialLinkWrapper>
                ))
              : null}
          </SocialLinkContainer>
        </ProfileInfoContainer>
      </ProfileInfoWrapper>

      <OtherInfoWrapper>
        <OtherInfoTitle>Tags</OtherInfoTitle>
        <TagList>
          {tags && tags.length
            ? tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)
            : null}
        </TagList>
      </OtherInfoWrapper>

      <OtherInfoWrapper>
        <OtherInfoTitle>Linked ID</OtherInfoTitle>
        <LinkedImgContainer>
          {linkedAccounts && linkedAccounts.length
            ? linkedAccounts.map(({ title, icon }, i) => (
                <LinkedImg
                  key={i}
                  alt={title}
                  src={icon}
                  title={title}
                  width={200}
                  height={200}
                />
              ))
            : null}
        </LinkedImgContainer>
      </OtherInfoWrapper>
      {showUpdateProfile ? (
        <UpdateProfilePopup setShowUpdateprofile={setShowUpdateprofile} />
      ) : null}
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  border-radius: 12px;
  gap: 1rem;
  background: ${({ theme }) =>
    theme.currentTheme === "dark" ? theme.bgGradient : theme.mainBgColor};
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme == "dark"
        ? theme.infoBgColor800
        : theme.infoBgColor900};
`;

const ProfileWrapper = styled.section`
  width: 100%;
  height: 10rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme.darkMode.primaryBgColor800};
  position: relative;
`;

const ProfileImg = styled(ImageView)`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: auto;
  transition: 0.5s all ease-in-out;
`;

const ProfileImageWrapper = styled.div`
  background-image: url(${cicle});
  width: 10.25rem;
  height: 10.25rem;
  border-radius: 50%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s all ease-in-out;
  cursor: pointer;
  position: absolute;
  left: 2%;
  bottom: -32%;
`;

const ScoreWrapper = styled.section`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.darkMode.accentBgColor900
      : theme.lightMode.infoBgColor900};
  position: absolute;
  right: 8%;
  bottom: -32%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ScoreValue = styled.p`
  font-size: 2.25rem;
  margin: 0;
  color: ${(props) => props.theme.mainBgColor};
  font-family: var(--primaryfontBold);
`;

const Scoretext = styled.p`
  font-size: 9px;
  margin: 0;
  color: ${(props) => props.theme.mainBgColor};
  font-family: var(--primaryfont);
  font-weight: 600;
  line-height: 1rem;
  text-align: center;
  letter-spacing: 1.5px;
`;

const ProfileInfoWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 96%;
  padding: 0 2%;
  margin-top: 4rem;
`;

const ProfileInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 0.5rem;
  width: 50%;
`;

const ProfileTitle = styled.p`
  font-weight: 600;
  font-family: var(--primaryfontBold);
  font-size: 26px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor
      : theme.accentBgColor800};
  letter-spacing: 1.5px;
  margin: 0;
`;

const ProfileInfo = styled.p`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor
      : theme.accentBgColor800};
  letter-spacing: 1.5px;
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  font-family: var(--secondaryfont);
`;

const ProfileDetailWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CalenderIcon = styled(CalendarTodayOutlinedIcon)`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor
      : theme.accentBgColor800};
`;

const LocationIcon = styled(LocationOnOutlinedIcon)`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor
      : theme.accentBgColor800};
`;

const ProfileDescription1 = styled.p`
  font-weight: lighter;
  font-family: var(--secondaryfont);
  color: ${(props) => props.theme.infoBgColor900};
  font-size: 15px;
  margin: 0;
`;

const ProfileDescription2 = styled(ProfileDescription1)`
  font-size: 15px;
`;

const EditProfileBtn = styled.button`
  color: ${({ theme }) =>
    theme.currentTheme === "light" ? theme.infoBgColor900 : theme.infoBgColor};
  background: ${(props) => props.theme.accentBgColorGradient800};
  margin-left: auto;
  border: ${(props) =>
    props.theme.currentTheme === "light" &&
    `2px solid ${props.theme.infoBgColor900}`};
  font-size: 18px;
  padding: 8px 12px;
  width: 12rem;
  height: 30px;
  text-align: center;
  border-radius: 8px;
  font-family: var(--primaryfontBold);
  letter-spacing: 1px;
  box-shadow: ${(props) =>
    props.theme.currentTheme === "dark" &&
    `-1.17520010471344px 1.17520010471344px 1.17520010471344px 0px
      rgba(255, 255, 255, 0.4) inset,
    1.17520010471344px -1.17520010471344px 1.17520010471344px 0px rgba(
        0,
        112,
        126,
        0.4
      ) inset`};
`;

const SocialLinkContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 1rem 0 auto;
`;

const SocialLinkWrapper = styled.a`
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

const OtherInfoWrapper = styled.section`
  display: flex;
  align-items: center;
  column-gap: 5%;
  row-gap: 1rem;
  padding: 0 2%;
`;

const OtherInfoTitle = styled.p`
  font-weight: lighter;
  font-family: var(--secondaryfont);
  color: ${(props) => props.theme.infoBgColor900};
  font-size: 18px;
  margin: 0;
  width: 6rem;
`;

const LinkedImgContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LinkedImg = styled(ImageView)`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
`;

const TagList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const Tag = styled.button`
  min-width: 4rem;
  height: 20px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.globalColors.greyColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  font-family: var(--secondaryfont);
  font-size: 14px;

  font-weight: 400;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.infoBgColor900
      : theme.darkMode.mainBgColor};
  background: ${(props) => props.theme.accentBgColorGradient700};
  transition: all 0.25s ease-in-out;
`;
