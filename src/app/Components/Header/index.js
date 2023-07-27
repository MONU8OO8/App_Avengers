import styled from "styled-components";
import ImageView from "../Image";
import Profile from "./Profile";
import LiveFeed from "./LiveFeed";
import { ThemeSwitch } from "../ThemeSwitch";
import { useSelector } from "react-redux";
import { uiState } from "@/app/Redux/uiSlice";
import Link from "next/link";

const navAssets = {
  homeDark: "/assets/icons/home.png",
  homeLight: "/assets/icons/homeLight.png",
  notificationDark: "/assets/icons/notification.png",
  leaderboardDark: "/assets/icons/leaderboard.png",
  profilePic: "/assets/images/profilepic.png",
  notificationLight: "/assets/icons/notificationLight.png",
  leaderboardLight: "/assets/icons/leaderboardLight.png",
};

export default function Header() {
  const { theme } = useSelector(uiState);

  const menu = [
    {
      title: "Home",
      icon: theme === "dark" ? navAssets.homeDark : navAssets.homeLight,
    },
    {
      title: "Notification",
      icon:
        theme === "dark"
          ? navAssets.notificationDark
          : navAssets.notificationLight,
    },
    {
      title: "Leaderboard",
      icon:
        theme === "dark"
          ? navAssets.leaderboardDark
          : navAssets.leaderboardLight,
    },
  ];

  const MenuList = () =>
    menu.map(({ title, icon }, i) => (
      <MenuButton key={i} title={title}>
        <StyledImage src={icon} alt={title} width={200} height={200} />
      </MenuButton>
    ));

  return (
    <NavBar>
      <Title href='/'>Illuminated</Title>
      <InfoWrapper>
        <ButtonWrapper>{MenuList()}</ButtonWrapper>
        <LiveFeed />
        <WalletButton>Connect Wallet</WalletButton>
        <Profile />
        <ThemeSwitch />
      </InfoWrapper>
    </NavBar>
  );
}

const NavBar = styled.nav`
  background-color: ${(props) => props.theme.darkMode.primaryBgColor800};
  width: 98%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1%;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
`;

const Title = styled(Link)`
  font-family: var(--primaryfont);
  color: ${(props) => props.theme.lightMode.mainBgColor};
  font-weight: 500;
  letter-spacing: 1.5px;
`;

const InfoWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 1%;
`;

const ButtonWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const WalletButton = styled.button`
  color: ${(props) => props.theme.darkMode.accentBgColor700};
  font-family: var(--primaryfontBold);
  border: 1px solid ${(props) => props.theme.darkMode.accentBgColor700};
  padding: 0.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme.darkMode.accentBgColorGradient800};
`;

const StyledImage = styled(ImageView)`
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const MenuButton = styled.button`
  height: 30px;
`;
