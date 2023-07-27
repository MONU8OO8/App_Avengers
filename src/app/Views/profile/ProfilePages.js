import styled from "styled-components";
import { ProfilePageList, pageList } from "./ProfilePageList";
import { useState } from "react";
import { Title } from "./Title";
import ConnectID from "./ConnectID";
import Proposals from "./Propsosals";
import MyPortfolio from "./MyPortfolio";
import Credentials from "./Credentials";
import Reputation from "./Reputation";
import CitizenshipMinting from "./CitizenshipMinting";
import MyCommunity from "./MyCommunity";
import Verify from "./Verify";
import Issue from "./Issue";

export default function ProfilePages() {
  const [currentPage, setCurrentPage] = useState(pageList[0]);

  const Page = () => {
    switch (currentPage?.title) {
      case pageList[0].title:
        return <ConnectID />;
      case pageList[1].title:
        return <MyPortfolio />;
      case pageList[2].title:
        return <Credentials />;
      case pageList[3].title:
        return <Reputation />;
      case pageList[4].title:
        return <CitizenshipMinting />;
      case pageList[5].title:
        return <Proposals />;
      case pageList[6].title:
        return <MyCommunity />;
      case pageList[7].title:
        return <Verify />;
      case pageList[8].title:
        return <Issue />;

      default:
        break;
    }
  };

  return (
    <ProfilePageWrapper>
      <ProfilePageList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ProfilePageContent>
        <Title title={currentPage?.title} subtitle={currentPage?.subtitle} />
        {Page()}
      </ProfilePageContent>
    </ProfilePageWrapper>
  );
}

const ProfilePageWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: flex-start;
`;

const ProfilePageContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2%;
  width: 80%;
`;
