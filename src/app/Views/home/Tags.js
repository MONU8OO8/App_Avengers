import { useState } from "react";
import styled from "styled-components";

export default function Tags() {
  const tags = ["City", "Art", "Education", "Culture", "Events", "Developers"];

  const [selectedTags, setSelectedTags] = useState([]);

  const checkSelected = (tag) => selectedTags.includes(tag);

  const handleClick = (tag) => {
    const alreadySelected = selectedTags.includes(tag);
    if (alreadySelected) {
      setSelectedTags((tagList) => tagList.filter((item) => item !== tag));
      return;
    }
    setSelectedTags((tagList) => [...tagList, tag]);
  };

  return (
    <TagList>
      {tags && tags.length
        ? tags.map((item, i) => (
            <Tag
              onClick={handleClick.bind(this, item)}
              selected={checkSelected(item)}
              key={i}
            >
              {item}
            </Tag>
          ))
        : null}
    </TagList>
  );
}

const TagList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  z-index: 1;
`;

const Tag = styled.button`
  min-width: 4rem;
  height: 30px;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.globalColors.greyColor};
  text-align: center;
  padding: 4px 12px;
  font-family: var(--secondaryfont);
  font-weight: 400;
  color: ${({ theme, selected }) =>
    theme.currentTheme === "light"
      ? selected
        ? theme.lightMode.infoBgColor900
        : theme.globalColors.greyColor
      : selected
      ? theme.darkMode.mainBgColor
      : theme.darkMode.infoBgColor};
  background: ${(props) =>
    props.selected && props.theme.accentBgColorGradient700};
  transition: all 0.25s ease-in-out;
`;
