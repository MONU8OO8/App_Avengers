"use client";
import { styled } from "styled-components";
import BaseLayout from "@/app/Components/BaseLayout";
import SearchBar from "../Views/home/Search";
import Tags from "../Views/home/Tags";
import SoverignId from "../Views/home/SoverignId";
import ImageView from "../Components/Image";
import NetworkSociety from "../Views/home/NetworkSociety";

const colorGradient = "/assets/images/colorgradient.png";

export default function Home() {
  return (
    <BaseLayout>
      <Main>
        <SearchBar />
        <ColorBg src={colorGradient} alt='gradient' width={400} height={400} />
        <Tags />
        <SoverignId />
        <NetworkSociety />
      </Main>{" "}
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

const ColorBg = styled(ImageView)`
  position: absolute;
  /* z-index: 1; */
  width: 80%;
  height: 100%;
  display: ${(props) =>
    props.theme.currentTheme === "dark" ? "block" : "none"};
`;
