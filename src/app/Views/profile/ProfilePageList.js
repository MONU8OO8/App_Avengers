import styled from "styled-components";

export const pageList = [
  {
    title: "Connect Id",
    subtitle: "Unify access, Link your existing IDs from the options below",
  },
  { title: "My Portfolio", subtitle: "Monitor your holdings and investments" },
  {
    title: "Credentials",
    subtitle: "Build your on chain reputation-user profile",
  },
  {
    title: "Reputation",
    subtitle: "Validate your reputation with received Badges",
  },
  {
    title: "Citizenship minting",
    subtitle: "Mint the Citizen NFT and start your journey",
  },
  {
    title: "Proposals",
    subtitle: "Track real time updates of your voted proposals",
  },
  { title: "my community", subtitle: "Track your on chain participation" },
  { title: "Verify", subtitle: "Verify and authorize credentials" },
  { title: "Issue", subtitle: "Issue your first credential" },
];

export function ProfilePageList({ currentPage, setCurrentPage }) {
  return (
    <ListWrapper>
      {pageList && pageList.length
        ? pageList.map((page, i) => (
            <ListItem
              page={currentPage?.title === page?.title ? "true" : ""}
              onClick={() => setCurrentPage(page)}
              key={i}
            >
              {page?.title}
            </ListItem>
          ))
        : null}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  position: relative;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 6% 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: flex-end;
  width: 30%;
  height: 80vh;
  left: -8%;
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.primaryBgColor700
      : theme.accentBgColor500};
`;

const ListItem = styled.li`
  list-style-type: none;
  color: ${({ theme, page }) =>
    theme.currentTheme === "dark"
      ? page === "true"
        ? theme.infoBgColor
        : theme.accentBgColor900
      : page === "true"
      ? theme.infoBgColor
      : theme.globalColors.greyColor};
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "dark"
        ? theme.accentBgColor900
        : theme.globalColors.greyColor};
  padding: 1rem 0 1rem 0;
  font-family: var(--primaryfontLight);
  letter-spacing: 1.5px;
  /* opacity: 0.6; */
  transition: 0.15s all ease-in-out;
  width: 90%;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.infoBgColor};
  }
`;
