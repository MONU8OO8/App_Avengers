import styled from "styled-components";
import ImageView from "./Image";
import { useState } from "react";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { useSelector } from "react-redux";
import { uiState } from "../Redux/uiSlice";
import { useRouter } from "next/navigation";

const communityIconDark = "/assets/icons/community.png";
const eventsIconDark = "/assets/icons/events.png";
const credentialsIconDark = "/assets/icons/credentials.png";
const conversationIconDark = "/assets/icons/conversation.png";
const moreinfoDark = "/assets/icons/moreinfo.png";

const communityIconLight1 = "/assets/icons/communityLight1.png";
const eventsIconLight1 = "/assets/icons/events.png";
const credentialsIconLight1 = "/assets/icons/credentialsLight1.png";
const conversationIconLight1 = "/assets/icons/conversationLight1.png";
const moreinfoLight1 = "/assets/icons/moreinfoLight1.png";

const communityIconLight2 = "/assets/icons/communityLight2.png";
const eventsIconLight2 = "/assets/icons/events.png";
const credentialsIconLight2 = "/assets/icons/credentialsLight2.png";
const conversationIconLight2 = "/assets/icons/conversationLight2.png";

const profileImg = "/assets/images/profilepic.png";
const cicle = "/assets/images/circle.png";

export default function Sidebar() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useSelector(uiState);

  const primaryMenuList = [
    {
      title: "Credentials",
      icon:
        theme === "dark"
          ? credentialsIconDark
          : !sidebarOpen
          ? credentialsIconLight1
          : credentialsIconLight2,
    },
    {
      title: "My Communities",
      icon:
        theme === "dark"
          ? communityIconDark
          : !sidebarOpen
          ? communityIconLight1
          : communityIconLight2,
    },
    {
      title: "Conversation",
      icon:
        theme === "dark"
          ? conversationIconDark
          : sidebarOpen
          ? conversationIconLight1
          : conversationIconLight2,
    },
    {
      title: "Events",
      icon:
        theme === "dark"
          ? eventsIconDark
          : !sidebarOpen
          ? eventsIconLight1
          : eventsIconLight2,
    },
    {
      title: "",
      icon: theme === "dark" ? moreinfoDark : moreinfoLight1,
    },
  ];

  const secondaryMenuList = [
    {
      title: "Support",
    },
    {
      title: "Settings And Privacy",
    },
    {
      title: "Account Center",
    },
    {
      title: "Signout",
    },
  ];

  return (
    <NavOverlay sidebaropen={sidebarOpen.toString()}>
      <Nav sidebaropen={sidebarOpen.toString()} className='sidebar'>
        <MenuList
          sidebaropen={sidebarOpen.toString()}
          onClick={() => setSidebarOpen(true)}
        >
          <ProfileWrapper
            sidebaropen={sidebarOpen.toString()}
            onClick={() => {
              sidebarOpen && router.push("/profile");
            }}
          >
            <ProfileImg
              sidebaropen={sidebarOpen.toString()}
              src={profileImg}
              alt='profile'
              width={200}
              height={200}
            />
          </ProfileWrapper>

          <ProfileInfo sidebaropen={sidebarOpen.toString()}>
            <Username>JohnDoe.si</Username>
            <InfoWrapper>
              <Info>12k Followers</Info>
              <Info>7k Following</Info>
            </InfoWrapper>
          </ProfileInfo>

          <Divider sidebaropen={sidebarOpen.toString()} />
          {primaryMenuList.map(({ title, icon }, i) => {
            if (!sidebarOpen && !title) {
              return (
                <Menu key={i}>
                  <Icon
                    src={icon}
                    alt={title}
                    title={title}
                    width={200}
                    height={200}
                  />
                </Menu>
              );
            } else if (title) {
              return (
                <Menu key={i}>
                  <Icon
                    src={icon}
                    alt={title}
                    title={title}
                    width={200}
                    height={200}
                  />
                  <PrimaryLink>{title}</PrimaryLink>
                </Menu>
              );
            }
            return null;
          })}
          <Divider sidebaropen={sidebarOpen.toString()} />

          {secondaryMenuList.map(({ title }, i) => {
            return (
              <SecondaryMenu sidebaropen={sidebarOpen.toString()} key={i}>
                <PrimaryLink>{title}</PrimaryLink>
              </SecondaryMenu>
            );
          })}
        </MenuList>
      </Nav>
      <CloseButton
        onClick={() => setSidebarOpen(false)}
        sidebaropen={sidebarOpen.toString()}
      >
        <BackIcon />
      </CloseButton>
    </NavOverlay>
  );
}

const NavOverlay = styled.nav`
  position: ${(props) => (props.sidebaropen === "true" ? "fixed" : "relative")};
  width: ${(props) => props.sidebaropen === "true" && "100%"};
  height: ${(props) => props.sidebaropen === "true" && "100%"};
  top: 0;
  left: 0;
  background-color: ${(props) => props.sidebaropen === "true" && "#000000b2"};
  transition: all ease-in-out 0.5s;
  z-index: ${(props) => props.sidebaropen === "true" && 16};
  display: flex;

  cursor: default;
`;

const Nav = styled.div`
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  /* width: 100%; */
  /* width: 5%; */
  overflow: hidden;
  background: ${(props) =>
    props.sidebaropen === "true"
      ? props.theme.darkMode.bgGradient
      : props.theme.bgGradient};
  z-index: ${(props) => (props.sidebaropen === "true" ? 5 : 3)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 0.5s ease-in-out;
`;

const Menu = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 1rem;
  font-family: var(--primaryfontLight);
  color: ${(props) => props.theme.accentBgColor900};
  font-size: 16px;
  letter-spacing: 1.5px;
  overflow: hidden;

  &:hover span {
    text-shadow: ${({ theme }) =>
      `0 0 5px ${theme.accentBgColor900}, 0 0 5px ${theme.accentBgColor900}, 0 0 ${theme.accentBgColor900}`};
  }
`;

const SecondaryMenu = styled(Menu)`
  display: ${(props) => (props.sidebaropen === "true" ? "block" : "none")};
  font-size: 15px;
  transform: scale(1);
  width: 100%;

  &:hover span {
    transition: 0.5s transform ease-in-out;
    transform: scale(1.2) translateX(20px);
    text-shadow: ${(props) =>
      `0 0 5px ${props.theme.accentBgColor900}, 0 0 20px ${props.theme.accentBgColor900}, 0 0 ${props.theme.accentBgColor900}`};
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  padding: 0 2rem;
  max-width: ${(props) => (props.sidebaropen === "true" ? "18rem" : "2rem")};
  transition: max-width ease-in-out 0.5s;

  &:hover span {
    display: block;
  }
`;

const Icon = styled(ImageView)`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
`;

const CloseButton = styled.button`
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor
      : theme.accentBgColor600};
  height: 3rem;
  width: 3rem;
  display: ${(props) => (props.sidebaropen === "true" ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: relative;
  top: 12%;
  left: 22.7%;
  z-index: 10;
  border-top-right-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
`;

const BackIcon = styled(ArrowBackIosOutlinedIcon)`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.mainBgColor
      : theme.accentBgColor800};
`;

const PrimaryLink = styled.span``;

const Divider = styled.section`
  background-color: #464849;
  height: 1px;
  width: 100%;
  display: ${(props) => (props.sidebaropen === "true" ? "block" : "none")};
`;

const ProfileImg = styled(ImageView)`
  width: ${(props) => (props.sidebaropen === "true" ? "7rem" : "2.5rem")};
  height: ${(props) => (props.sidebaropen === "true" ? "7rem" : "2.5rem")};
  border-radius: 50%;
  margin: auto;
  transition: 0.5s all ease-in-out;
`;

const ProfileWrapper = styled.div`
  background-image: url(${cicle});
  width: ${(props) => (props.sidebaropen === "true" ? "7.25rem" : "2.6rem")};
  height: ${(props) => (props.sidebaropen === "true" ? "7.25rem" : "2.625rem")};
  border-radius: 50%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s all ease-in-out;
  cursor: pointer;
`;

const ProfileInfo = styled.section`
  display: ${(props) => (props.sidebaropen === "true" ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
`;

const Username = styled.p`
  margin: 0;
  font-family: var(--primaryfontBold);
  font-size: 20px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.accentBgColor900
      : theme.accentBgColor800};
`;

const InfoWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Info = styled.p`
  margin: 0;
  font-family: var(--primaryfontLight);
  color: ${(props) => props.theme.accentBgColor900};
  opacity: 0.5;
  letter-spacing: 1px;
  font-size: 14px;
`;
