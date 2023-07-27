"use client";
import { styled } from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Footer } from "./Footer";

export default function BaseLayout({ children }) {
  return (
    <Main>
      <Header />
      <Wrapper>
        <Sidebar />
        {children}
      </Wrapper>
      <Footer />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;
