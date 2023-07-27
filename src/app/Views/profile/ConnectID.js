import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import ImageView from "@/app/Components/Image";

export default function ConnectID() {
  const networkList = [
    {
      title: "Worldcoin Id",
      icon: "/assets/images/worldcoin.png",
      url: "https://www.google.com",
    },
    {
      title: "Polygon Id",
      icon: "/assets/images/polygon.png",
      url: "https://www.google.com",
    },
    {
      title: "Worldcoin id",
      icon: "/assets/images/worldcoin.png",
      url: "https://www.google.com",
    },
  ];

  return (
    <Container>
      <MainContent>
        <SearchBase>
          <SearchIcon />
          <SearchInput type='text' placeholder='Search something...' />
        </SearchBase>
        {networkList && networkList.length
          ? networkList.map(({ title, icon, url }, i) => {
              return (
                <NetworkContainer key={i}>
                  <NetworkTitleContainer>
                    <NetworkIcon
                      src={icon}
                      title={title}
                      alt={title}
                      width={200}
                      height={200}
                    />
                    <NetworkTitle>{title}</NetworkTitle>
                  </NetworkTitleContainer>
                  <ConnectButton target='_blank' href={url} rel='noreferrer'>
                    <ConnectIcon />
                    Connect
                  </ConnectButton>
                </NetworkContainer>
              );
            })
          : null}

        <MoreButton>Learn More</MoreButton>
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

const NetworkContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "dark" ? "transparent" : theme.infoBgColor900};
  border-radius: 4px;
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.accentBgColorGradient900
      : theme.infoBgColor700};
`;

const NetworkIcon = styled(ImageView)`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
  border-radius: 50%;
`;

const NetworkTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  gap: 1rem;
`;

const NetworkTitle = styled.h1`
  font-weight: 500;
  font-family: var(--primaryfont);
  font-size: 20px;
  color: ${({ theme }) => theme.infoBgColor};
  letter-spacing: 1.5px;
  margin: 0;
`;

const ConnectButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--primaryfontLight);
  color: ${({ theme }) => theme.infoBgColor};
  font-weight: 600;
  letter-spacing: 1.5px;
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.globalColors.greyColor
        : theme.infoBgColor};
  background-color: ${(props) => props.theme.primaryBgColor600};
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  width: 8rem;
`;

const ConnectIcon = styled(PowerOutlinedIcon)`
  color: ${({ theme }) => theme.infoBgColor};
`;

const MoreButton = styled.button`
  text-decoration: underline;
  margin: 1rem auto;
  font-size: 1.2rem;
  font-family: var(--primaryfont);
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.greyColor
      : theme.accentBgColor900};
`;
