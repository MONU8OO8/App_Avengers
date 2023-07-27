import styled from "styled-components";
import ImageView from "./Image";
import { useLayoutEffect, useRef } from "react";

const footerLinks = [
  {
    title: "General",
    links: [
      {
        label: "About",
      },
      {
        label: "Telementary",
      },
      {
        label: "Roadmap",
      },
      {
        label: "Build",
      },
      {
        label: "FAQ",
      },
      {
        label: "Support",
      },
      {
        label: "Careers",
      },
      {
        label: "Grants And Bouties",
      },
    ],
  },
  {
    title: "Technology",
    links: [
      {
        label: "Technology",
      },
      {
        label: "Staking",
      },
      {
        label: "IMT",
      },
      {
        label: "Identity",
      },
      {
        label: "Adoption",
      },
      {
        label: "DAO(Network task)",
      },
      {
        label: "Transition",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "Community",
      },
      {
        label: "Illuminated network",
      },
      {
        label: "Auction",
      },
      {
        label: "Treasury",
      },
      {
        label: "FAQ",
      },
      {
        label: "Documentation",
      },
      {
        label: "Blog",
      },
      {
        label: "Incentive Model",
      },
      {
        label: "Tokenomics",
      },
    ],
  },
];

const socialLinks = [
  {
    title: "Twitter",
    icon: "/assets/icons/twitter.png",
    url: "https://www.google.com",
  },
  {
    title: "Github",
    icon: "/assets/icons/github.png",
    url: "https://www.google.com",
  },
  {
    title: "Youtube",
    icon: "/assets/icons/youtube.png",
    url: "https://www.google.com",
  },
  {
    title: "Reddit",
    icon: "/assets/icons/reddit.png",
    url: "https://www.google.com",
  },
  {
    title: "Discord",
    icon: "/assets/icons/discord.png",
    url: "https://www.google.com",
  },
];

export function Footer() {
  const getYear = new Date().getFullYear();
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0,
    };
    let refValue = footerRef.current;

    const footerObserver = new IntersectionObserver(([footerEntry]) => {
      if (footerEntry.isIntersecting) {
        sidebar.style.position = "absolute";
      } else {
        sidebar.style.position = "fixed";
      }
    }, options);

    if (refValue) {
      footerObserver?.observe(refValue);
    }

    return () => {
      footerObserver && footerObserver?.unobserve(refValue);
    };
  }, []);

  return (
    <FooterBase ref={footerRef}>
      <FooterMain>
        <FooterLinkWrapper>
          {footerLinks.map(({ title, links }, i) => {
            return (
              <FooterLinkColumn key={i}>
                <FooterCategory>{title}</FooterCategory>
                {links.map(({ label }, index) => (
                  <FooterLink key={index}>{label}</FooterLink>
                ))}
              </FooterLinkColumn>
            );
          })}
        </FooterLinkWrapper>
        <SocialLinkSection>
          <SocialLinkWrapper>
            {socialLinks.map(({ title, icon, url }, i) => (
              <SocialIconWrapper href={url} key={i} target='_blank'>
                <SocialIconInnerWrapper>
                  <SocialIcon
                    src={icon}
                    title={title}
                    alt={title}
                    width={200}
                    height={200}
                  />
                </SocialIconInnerWrapper>
              </SocialIconWrapper>
            ))}
          </SocialLinkWrapper>

          <Description>
            Subscribe to our newsletter to hear more about Illuminated Network.
          </Description>
          <SubscribeButton>Subscribe</SubscribeButton>
        </SocialLinkSection>
      </FooterMain>
      <Divider />

      <FooterInfoWrapper>
        <FooterInfoLinkWrapper>
          <FooterInfoText>{getYear} web foundation </FooterInfoText>
          <span>|</span>
          <FooterInfoLink>Impressum</FooterInfoLink>
          <span>|</span>
          <FooterInfoLink>Disclaimer</FooterInfoLink>
          <span>|</span>
          <FooterInfoLink>Privacy</FooterInfoLink>
        </FooterInfoLinkWrapper>
        <FooterInfoText>All rights reserved. </FooterInfoText>
      </FooterInfoWrapper>
    </FooterBase>
  );
}

const FooterBase = styled.footer`
  width: 100%;
  height: 65vh;
  background: ${(props) => props.theme.bgGradient};
`;

const FooterMain = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 80%;
  padding: 3% 10%;
  gap: 10%;
`;

const FooterLinkWrapper = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 5%; */
`;

const FooterLinkColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  height: 45vh;
`;

const FooterCategory = styled.p`
  background-image: ${(props) => props.theme.globalColors.greenGradient};
  -webkit-background-clip: text; /* For cross-browser support */
  background-clip: text;
  color: transparent;
  font-family: var(--primaryfont);
  font-weight: 500;
  font-size: 1.5rem;
  margin: 0;
`;

const FooterLink = styled.button`
  font-family: var(--primaryfontLight);
  font-weight: 500;
  font-size: 1rem;
  text-align: left;
  color: ${(props) => props.theme.globalColors.greyColor};
`;

const SocialLinkSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SocialLinkWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const SocialIcon = styled(ImageView)`
  width: 1.8rem;
  height: 1.8rem;
  object-fit: contain;
  transition: 0.5s all ease-in-out;
  z-index: 2;
`;

const SocialIconWrapper = styled.a`
  background-image: ${(props) => props.theme.globalColors.greenGradient};
  border-image-slice: 1;
  z-index: 1;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover ${SocialIcon} {
    transform: scale(1.2);
  }
`;

const SocialIconInnerWrapper = styled.div`
  padding: 5px;
  background: ${(props) => props.theme.bgGradient};
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -0.5px;
`;

const Description = styled.summary`
  background-image: ${(props) => props.theme.globalColors.greenGradient};
  -webkit-background-clip: text; /* For cross-browser support */
  background-clip: text;
  color: transparent;
  font-family: var(--primaryfont);
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin: 0;
`;

const SubscribeButton = styled.button`
  background-image: ${(props) => props.theme.globalColors.greenGradient};
  -webkit-background-clip: text; /* For cross-browser support */
  background-clip: text;
  color: transparent;
  margin-right: auto;
  font-size: 17px;
  padding: 1rem;
  border-radius: 8px;
  font-family: var(--primaryfontBold);
  letter-spacing: 1px;
  box-shadow: ${({ theme }) =>
    theme.currentTheme === "light"
      ? `-1px 17px 2.5px 0px rgba(255, 255, 255, 0.4) inset, -3px 5px 5px 1px rgba(0, 112, 126, 0.4)`
      : `-1.8px 2.5px 2.5px 0px rgba(255, 255, 255, 0.4) inset, 2.5px -2.5px 2.5px 0px rgba(0, 112, 126, 0.4) inset`};
  backdrop-filter: blur(7.5px);
`;

const Divider = styled.div`
  background-image: ${(props) => props.theme.globalColors.greenGradient};
  height: 2px;
  width: 100%;
`;

const FooterInfoWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2%;
  color: ${(props) => props.theme.globalColors.greyColor};
  font-family: var(--primaryfontLight);
  font-size: 14px;
  font-weight: 400;
  padding: 0 10%;
`;

const FooterInfoLinkWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  letter-spacing: 1.5px;
  margin-right: auto;
`;

const FooterInfoText = styled.p``;

const FooterInfoLink = styled.button``;
