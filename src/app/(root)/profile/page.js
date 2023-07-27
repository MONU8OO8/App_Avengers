"use client";
import { styled } from "styled-components";
import BaseLayout from "../../Components/BaseLayout";
import ProfileDisplay from "../../Views/profile/ProfileDisplay";
import ProfilePages from "../../Views/profile/ProfilePages";

export default function Profile() {
  return (
    <BaseLayout>
      <Main>
        <ProfileDisplay />
        <ProfilePages />
      </Main>{" "}
    </BaseLayout>
  );
}

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.primaryBgColor800
      : theme.infoBgColor700};
  padding: 8% 5% 8% 12.5%;
  transition: 0.5s background ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;
