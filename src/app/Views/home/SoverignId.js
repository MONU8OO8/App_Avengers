import styled from "styled-components";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ImageView from "@/app/Components/Image";
import { useState } from "react";

export default function SoverignId() {
  const [showMore, setShowMore] = useState(false);

  const idList = [
    {
      title: "DISCO",
      icon: "/assets/images/disco.png",
    },
    {
      title: "Polygon id",
      icon: "/assets/images/polygon.png",
    },
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
    {
      title: "Dock",
      icon: "/assets/images/dock.png",
    },
    {
      title: "DISCO",
      icon: "/assets/images/disco.png",
    },
    {
      title: "Polygon id",
      icon: "/assets/images/polygon.png",
    },
    {
      title: "worldcoin id",
      icon: "/assets/images/worldcoin.png",
    },
  ];

  return (
    <SoverignWrapper>
      <TitleContainer>
        <Header>
          <MainTitle>SOVEREIGN IDs</MainTitle>
          <Subtitle>
            Unify Access. Your one stop destination for all Sovereign Identities
          </Subtitle>
        </Header>
        <ArrowButton onClick={() => setShowMore(!showMore)}>
          <ArrowIcon showmore={showMore.toString()} fontSize='large' />
        </ArrowButton>
      </TitleContainer>

      <IdList showmore={showMore.toString()}>
        {idList && idList.length
          ? idList
              .slice(0, !showMore ? 6 : idList.length)
              .map(({ title, icon }, i) => {
                return (
                  <IdContainer key={i}>
                    <IdImage src={icon} alt={title} width={200} height={200} />
                    <IdTitle>{title}</IdTitle>
                    <BuyButton>Buy ID</BuyButton>
                  </IdContainer>
                );
              })
          : null}
      </IdList>
      {!showMore ? (
        <Expand onClick={() => setShowMore(true)}>See More</Expand>
      ) : null}
    </SoverignWrapper>
  );
}

const SoverignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  margin: 2rem 0;
  position: relative;
`;

const TitleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const MainTitle = styled.h1`
  font-family: var(--primaryfontBold);
  font-weight: 500;
  font-size: 36px;
  margin: 0;
  color: ${(props) => props.theme.infoBgColor};
`;

const Subtitle = styled.h4`
  font-family: var(--secondaryfont);
  font-weight: 100;
  font-size: 16px;
  margin: 0;
  color: ${({ theme }) =>
    theme.currentTheme === "light" ? theme.infoBgColor900 : theme.infoBgColor};
`;

const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.accentBgColor500};
  padding: 0.25rem;
  border-radius: 3px;
`;

const ArrowIcon = styled(KeyboardArrowUpOutlinedIcon)`
  transform: ${(props) =>
    props.showmore !== "true" ? "rotate(180deg)" : "rotate(0deg)"};
  transition: all ease-in-out 0.5s;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.greyColor
      : theme.lightMode.infoBgColor900};
`;

const IdList = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  min-height: ${(props) => (props.showmore === "true" ? "25rem" : "18rem")};
  gap: 1rem;
  flex-wrap: wrap;
  transition: min-height 0.5s ease-in-out;
  position: relative;
`;

const IdTitle = styled.p`
  font-family: var(--primaryfont);
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
  color: ${(props) => props.theme.infoBgColor};
  display: block;
`;

const IdImage = styled(ImageView)`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  transition: all 0.5s ease-in-out;
`;

const BuyButton = styled.button`
  width: 8rem;
  height: 30px;
  border-radius: 5px;
  text-align: center;
  font-family: var(--primaryfont);
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.mainBgColor
      : theme.darkMode.accentBgColor500};
  display: none;
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.darkMode.accentBgColor800
      : theme.lightMode.infoBgColor900};
  letter-spacing: 1px;
`;

const IdContainer = styled.section`
  z-index: 2;
  position: relative;
  min-width: 26%;
  min-height: 8rem;
  max-height: 12rem;
  border-radius: 2rem;
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.accentBgColorGradient700
      : theme.darkMode.primaryBgColor900};
  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.infoBgColor800
        : theme.primaryBgColor900};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.5s ease-in-out;
  -webkit-box-shadow: -1px 8px 14px -4px ${({ theme }) => theme.mainBgColor};
  -moz-box-shadow: -1px 8px 14px -4px ${({ theme }) => theme.mainBgColor};
  box-shadow: -1px 8px 14px -4px ${({ theme }) => theme.mainBgColor};
  /* box-shadow: ${({ theme }) =>
    theme.currentTheme === "light" && " 0px 5px 5px 0px transparent"}; */

  &:hover {
    flex-direction: column;
    background: ${({ theme }) =>
      theme.currentTheme === "light" &&
      theme.lightMode.accentBgColorGradient500};
    min-height: 12rem;
  }

  &:hover ${BuyButton} {
    display: block;
  }

  &:hover ${IdTitle} {
    display: none;
  }
`;

const Expand = styled.button`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor900
      : theme.darkMode.accentBgColor800};
  font-family: var(--secondaryfont);
  font-weight: 100;
  font-size: 16px;
  margin: 0;
  text-align: center;
  margin: 0 auto;
`;
