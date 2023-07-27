import styled from "styled-components";
import ImageView from "../Image";
import FullscreenOutlinedIcon from "@mui/icons-material/FullscreenOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
const livefeedIcon = "/assets/icons/livefeed-icon.png";

export default function LiveFeed() {
  return (
    <LiveFeedContainer>
      <LiveFeedWrapper>
        <Headingcontainer className='livefeed-heading-container'>
          <HeadingText>Live Feed</HeadingText>
          <HeadingText2>Blockchain and decentralized finance</HeadingText2>
        </Headingcontainer>
        <LiveFeedContentContainer className='LiveFeedContentContainer'>
          <ButtonContainer>
            <Button>
              <FullscreenOutlinedIcon />
            </Button>
            <Button>
              <FullscreenExitOutlinedIcon />
            </Button>
          </ButtonContainer>

          <LiveFeedContent>
            <LiveFeedImage
              src={livefeedIcon}
              width={200}
              height={200}
              alt='Live Feed'
            />
            <LiveFeedDetails>
              <LiveFeedTitle>Live Feed</LiveFeedTitle>
              <LiveFeedSubtitle>
                Blockchain and decentralized finance
              </LiveFeedSubtitle>
              <LiveFeedDescription>
                How it is beneficial for a user and how we could govern in a
                decentralized environment
              </LiveFeedDescription>
            </LiveFeedDetails>
          </LiveFeedContent>
        </LiveFeedContentContainer>
      </LiveFeedWrapper>
    </LiveFeedContainer>
  );
}

const LiveFeedContainer = styled.div`
  /* width: ; */
  position: relative;
  width: 25rem;
  /* w */
`;

const LiveFeedWrapper = styled.div`
  width: 100%;
  /* position: ; */
  position: absolute;
  top: -1rem;
  z-index: 10;
  height: 2rem;
  /* max-height: 0; */
  background: ${(props) => props.theme.accentBgColorGradient900};
  border-radius: 14px;
  transition: height 0.6s ease;
  &:hover {
    height: 10rem;
    /* position: absolute; */
    /* margin-top: 2rem; */

    & > .livefeed-heading-container {
      display: none;
    }

    & > .LiveFeedContentContainer {
      height: 100%;
    }
  }
`;

const Headingcontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  cursor: pointer;
`;

const HeadingText = styled.p`
  border-radius: 14px;
  margin: 0;
  width: fit-content;
  height: 2rem;
  padding: 0 0.5rem;
  font-family: var(--primaryfontBold);
  background-color: ${(props) => props.theme.accentBgColor900};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &:before {
    width: 0.8rem;
    height: 0.8rem;
    background-color: red;
    border-radius: 50%;
    content: "";
    display: block;
  }
`;

const HeadingText2 = styled.p`
  margin: 0;
  width: 60%;
  font-family: var(--primaryfont);
  color: ${(props) => props.theme.infoBgColor};
  font-size: 11px;
  letter-spacing: 1px;
  line-height: 0.8rem;
  margin-top: 3px;
`;

const LiveFeedContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  height: 0;
  overflow: hidden;
`;

const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1rem;
  width: 100%;
  gap: 0.5rem;
`;

const Button = styled.button`
  color: white;
`;

const LiveFeedContent = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.25rem 1rem;
`;

const LiveFeedImage = styled(ImageView)`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.accentBgColor1000};
`;

const LiveFeedDetails = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const LiveFeedTitle = styled.p`
  font-size: 32px;
  font-family: var(--primaryfontBold);
  font-weight: 500;
  margin: 0;
  color: ${(props) => props.theme.infoBgColor};
  letter-spacing: 2px;
`;

const LiveFeedSubtitle = styled(LiveFeedTitle)`
  font-size: 10px;
  font-family: var(--primaryfont);
`;

const LiveFeedDescription = styled(LiveFeedSubtitle)`
  font-family: var(--primaryfontLight);
  line-height: 0.75rem;
`;
