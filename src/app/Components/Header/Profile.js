"use client";

import styled from "styled-components";
import ImageView from "../Image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const navAssets = {
  profilePic: "/assets/images/profilepic.png",
};

const profileObj = {
  name: "JohnDoe.si",
  date: "Wednesday, January 26, 2023 | 5.10 AM",
};

export default function Profile() {
  const profileRef = useRef(null);
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();

  const handlePopup = (e) => {
    e.stopPropagation();
    if (
      profileRef.current &&
      showProfile &&
      !profileRef.current.contains(e.target)
    ) {
      setShowProfile(false);
    }
  };
  if (typeof window !== "undefined") {
    window && window.addEventListener("mousedown", handlePopup);
  }

  return (
    <ProfileWrapper>
      <ProfileImage
        src={navAssets.profilePic}
        alt='Profile'
        width={200}
        height={200}
        onClick={() => setShowProfile(!showProfile)}
      />
      {showProfile ? (
        <ProfilePopup ref={profileRef}>
          <ProfileContent>
            <MainImage
              src={navAssets.profilePic}
              alt='profile'
              width={200}
              height={200}
            />

            <ProfileDetail>
              <Title>{profileObj.name}</Title>
              <ProfileDescription>{profileObj.date}</ProfileDescription>
              <ProfileDescription>
                Embracing the decentralized revolution
              </ProfileDescription>
              <TagContainer>
                <Tag>Tags</Tag>
                <Tag>Tags</Tag>
                <Tag>Tags</Tag>
                <Tag>Tags</Tag>
              </TagContainer>
            </ProfileDetail>
          </ProfileContent>
          <ProfileButton onClick={() => router.push("/profile")}>
            View Profile
          </ProfileButton>
        </ProfilePopup>
      ) : null}
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  position: relative;

  /* width: fit-content; */
`;

const ProfileImage = styled(ImageView)`
  width: 50px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
`;

const ProfilePopup = styled.section`
  position: absolute;
  z-index: 5;
  width: 35rem;
  right: 2rem;
  bottom: -16rem;
  height: 12rem;
  background-color: ${(props) => props.theme.mainBgColor};
  padding: 1.5rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: -1px 8px 14px -4px ${({ theme }) => theme.mainBgColor};
  -moz-box-shadow: -1px 8px 14px -4px ${({ theme }) => theme.mainBgColor};
  box-shadow: -1px 8px 14px -4px ${({ theme }) => theme.mainBgColor};
`;

const ProfileContent = styled.section`
  width: 100%;
  height: 83%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5%;
`;

const MainImage = styled(ImageView)`
  width: 6rem;
  height: 8rem;
  object-fit: contain;
`;

const ProfileDetail = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.p`
  font-weight: 600;
  font-family: var(--primaryfontBold);
  font-size: 20px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor
      : theme.accentBgColor800};
  letter-spacing: 1.5px;
  margin: 0;
`;

const ProfileDescription = styled.p`
  font-weight: 600;
  font-family: var(--secondaryfont);
  color: ${(props) => props.theme.infoBgColor900};
  font-size: 15px;
  margin: 0;
`;

const TagContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Tag = styled.button`
  color: ${({ theme }) =>
    theme.currentTheme === "dark" ? theme.mainBgColor : theme.infoBgColor900};
  padding: 5px 0px;
  width: 4.75rem;
  background: ${(props) => props.theme.accentBgColorGradient700};
  border-radius: 16px;
  text-align: center;
  font-size: 12px;
  font-family: var(--secondaryfont);
  font-weight: 500;
`;

const ProfileButton = styled.button`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor900
      : theme.accentBgColor900};
  background: ${(props) => props.theme.accentBgColorGradient800};
  margin-left: auto;
  border: ${(props) =>
    props.theme.currentTheme === "light" &&
    `2px solid ${props.theme.infoBgColor900}`};
  font-size: 14px;
  padding: 10px 12px;
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
