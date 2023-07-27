import styled from "styled-components";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import ImageView from "@/app/Components/Image";
import { useDispatch, useSelector } from "react-redux";
import { uiState, networkSocietyViewFn } from "@/app/Redux/uiSlice";
import { useRouter } from "next/navigation";

const list = "list";
const grid = "grid";

export default function NetworkSociety() {
  const dispatch = useDispatch();
  const { networkSocietyView } = useSelector(uiState);
  const router = useRouter();

  const handleview = (_) => {
    let currentView = networkSocietyView;
    dispatch(networkSocietyViewFn(currentView === list ? grid : list));
  };

  const networkList = [
    {
      title: "Nation3",
      icon: "/assets/images/nation3.png",
      tags: ["City", "Education", "Art"],
    },
    {
      title: "Aave",
      icon: "/assets/images/aave.png",
      tags: ["City", "Education", "Art"],
    },
    {
      title: "Decentraland",
      icon: "/assets/images/decentraland.png",
      tags: ["City", "Education", "Art"],
    },
    {
      title: "Optimism collective",
      icon: "/assets/images/optimism-collective.png",
      tags: ["City", "Education", "Art"],
    },
    {
      title: "Aave",
      icon: "/assets/images/aave.png",
      tags: ["City", "Education", "Art"],
    },
    {
      title: "Decentraland",
      icon: "/assets/images/decentraland.png",
      tags: ["City", "Education", "Art"],
    },
  ];

  return (
    <NetworkWrapper>
      <TitleContainer>
        <MainTitle>network societies</MainTitle>
        <HeaderButtonWrapper>
          <ArrowBtn>
            <LeftArrow />
          </ArrowBtn>
          <ArrowBtn>
            <RightArrow />
          </ArrowBtn>
          <ViewButton onClick={handleview}>
            {networkSocietyView === list ? (
              <ListIcon fontSize='large' />
            ) : (
              <GridIcon fontSize='large' />
            )}
          </ViewButton>
        </HeaderButtonWrapper>
      </TitleContainer>

      <AccordionHeader>
        <Accordiontitle>All organization</Accordiontitle>
      </AccordionHeader>
      <Networklist view={networkSocietyView}>
        {networkList && networkList.length
          ? networkList.map(({ title, icon, tags }, index) => {
              return (
                <NetworkContainer key={index} view={networkSocietyView}>
                  <ListTitleWrapper view={networkSocietyView}>
                    <NetworkIconWrapper view={networkSocietyView}>
                      <NetworkIcon
                        src={icon}
                        title={title}
                        alt={title}
                        width={200}
                        height={200}
                        view={networkSocietyView}
                      />
                    </NetworkIconWrapper>
                    <Networktitle view={networkSocietyView}>
                      {title}
                    </Networktitle>
                  </ListTitleWrapper>
                  <TagList view={networkSocietyView}>
                    {tags && tags.length
                      ? tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)
                      : null}
                  </TagList>
                  <ProfileButton
                    onClick={() => router.push(`/network-society/${index}`)}
                  >
                    view profile
                  </ProfileButton>
                </NetworkContainer>
              );
            })
          : null}
      </Networklist>
    </NetworkWrapper>
  );
}

const NetworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  margin: 2rem 0;
  position: relative;
  z-index: 2;
`;

const TitleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const MainTitle = styled.h1`
  font-family: var(--primaryfontBold);
  font-weight: 500;
  font-size: 36px;
  margin: 0;
  color: ${(props) => props.theme.infoBgColor};
`;

const HeaderButtonWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ArrowBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftArrow = styled(ArrowBackIosOutlinedIcon)`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.greyColor
      : theme.lightMode.infoBgColor900};
`;

const RightArrow = styled(ArrowForwardIosOutlinedIcon)`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.greyColor
      : theme.lightMode.infoBgColor900};
`;

const ViewButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.accentBgColor500};
  padding: 0.25rem;
  border-radius: 3px;
`;

const ListIcon = styled(ListOutlinedIcon)`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.greyColor
      : theme.lightMode.infoBgColor900};
`;

const GridIcon = styled(GridViewSharpIcon)`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.greyColor
      : theme.lightMode.infoBgColor900};
`;

const AccordionHeader = styled.header`
  width: 100%;
  height: 40px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${(props) => props.theme.primaryBgColor900};
  padding: 5px 10px;
  border: 1px solid ${(props) => props.theme.globalColors.greyColor};
  display: flex;
  align-items: center;
`;

const Accordiontitle = styled.h3`
  font-family: var(--primaryfont);
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  color: ${(props) => props.theme.infoBgColor};
`;

const Networklist = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  row-gap: ${({ view }) => (view === grid ? "6rem" : "1rem")};
  flex-direction: ${({ view }) => (view === grid ? "row" : "column")};
  margin-top: ${({ view }) => view === grid && "2rem"};
  transition: all 0.5s ease-in-out;
`;

const NetworkContainer = styled.section`
  display: flex;
  align-items: center;
  gap: ${({ view }) => view === grid && "2rem"};
  justify-content: ${({ view }) =>
    view === list ? "space-between" : "center"};
  width: ${({ view }) => (view === list ? "99%" : "28%")};
  -webkit-box-shadow: -1px 8px 14px -4px ${({ theme }) => theme.mainBgColor};
  -moz-box-shadow: -1px 8px 14px -4px ${({ theme }) => theme.mainBgColor};
  box-shadow: -1px 8px 14px -4px ${({ theme }) => theme.mainBgColor};

  border: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.infoBgColor800
        : theme.primaryBgColor900};
  background: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.primaryBgColor1000
      : theme.lightMode.accentBgColorGradient700};
  border-radius: 18px;
  height: ${({ view }) => (view === list ? "5rem" : "14rem")};
  flex-direction: ${({ view }) => (view === list ? "row" : "column")};
  position: relative;
  padding: ${({ view }) => (view === list ? "2px" : "1rem")} 1rem;
`;

const ListTitleWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: ${({ view }) => (view === list ? "50%" : "100%")};
  flex-direction: ${({ view }) => (view === list ? "row" : "column")};
`;

const NetworkIconWrapper = styled.section`
  width: ${({ view }) => (view === list ? "4rem" : "8.5rem")};
  height: ${({ view }) => (view === list ? "4rem" : "8.5rem")};
  position: ${({ view }) => (view === list ? "relative" : "absolute")};
  top: ${({ view }) => view === grid && "-25%"};
  background-color: ${({ theme }) => theme.mainBgColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 2px 7px -4px ${({ theme }) => theme.currentTheme === "dark" && theme.mainBgColor};
`;

const NetworkIcon = styled(ImageView)`
  width: ${({ view }) => (view === list ? "3.5rem" : "7rem")};
  height: ${({ view }) => (view === list ? "3.5rem" : "7rem")};
  object-fit: contain;
  z-index: 5;
`;

const Networktitle = styled(Accordiontitle)`
  font-size: 18px;
  letter-spacing: 2px;
  position: relative;
  bottom: ${({ view }) => view === grid && "-3.5rem"};
`;

const TagList = styled.div`
  width: ${({ view }) => (view === list ? "30%" : "100%")};
  display: flex;
  align-items: center;
  justify-content: ${({ view }) => (view === list ? "flex-start" : "center")};
  margin-right: auto;
  gap: 1rem;
  margin-top: ${({ view }) => view === grid && "3rem"};
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

const ProfileButton = styled.button`
  /* width: 8rem; */
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

  margin-top: ${({ view }) => view === grid && "0rem"};
`;
