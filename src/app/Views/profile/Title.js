import styled from "styled-components";

export function Title({ title, subtitle }) {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Heading = styled.h1`
  font-weight: 600;
  font-family: var(--primaryfontBold);
  font-size: 26px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.infoBgColor
      : theme.accentBgColor800};
  letter-spacing: 1.5px;
  margin: 0;
`;

const Subtitle = styled.p`
  font-family: var(--secondaryfont);
  font-weight: 100;
  font-size: 16px;
  margin: 0;
  color: ${({ theme }) =>
    theme.currentTheme === "light" ? theme.infoBgColor900 : theme.infoBgColor};
`;
