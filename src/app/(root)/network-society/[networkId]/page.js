"use client";

import BaseLayout from "@/app/Components/BaseLayout";
import styled from "styled-components";

export default function NetworkSociety() {
  return (
    <BaseLayout>
      <Main></Main>
    </BaseLayout>
  );
}

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.primaryBgColor800};
  padding: 8% 5% 8% 12.5%;
  transition: 0.5s background ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;
