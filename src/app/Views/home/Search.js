import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import styled from "styled-components";
import { useRef, useState } from "react";
import { CloseOutlined } from "@mui/icons-material";

export default function SearchBar() {
  const [selectedfilters, setSelectedFilters] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const filterRef = useRef(null);
  const [searchText, setSearchText] = useState("");

  const handlePopup = (e) => {
    e.stopPropagation();
    if (
      filterRef.current &&
      showFilter &&
      !filterRef.current.contains(e.target)
    ) {
      setShowFilter(false);
    }
  };
  if (typeof window !== "undefined") {
    window && window.addEventListener("mousedown", handlePopup);
  }

  return (
    <SearchBase>
      <SearchIcon fontSize='large' />
      {selectedfilters && selectedfilters.length ? (
        <SelectedFilterList
          selectedfilters={selectedfilters}
          setSelectedFilters={setSelectedFilters}
        />
      ) : (
        <SearchInput
          type='text'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          autoFocus={true}
          placeholder='Search for organizations, people, identities'
        />
      )}
      <FilterButton onClick={() => setShowFilter(true)}>
        <FilterIcon fontSize='large' />
      </FilterButton>
      {showFilter ? (
        <Filter filterRef={filterRef} setSelectedFilters={setSelectedFilters} />
      ) : null}
    </SearchBase>
  );
}

function Filter({ filterRef, setSelectedFilters }) {
  const filters = ["location", "organization", "people", "identities"];
  const handleSelect = (item) => {
    setSelectedFilters((list) => {
      if (list.includes(item)) {
        return list;
      }
      return [...list, item];
    });
  };

  return (
    <FilterList ref={filterRef}>
      {filters && filters.length
        ? filters.map((item, i) => (
            <FilterItem onClick={() => handleSelect(item)} key={i}>
              {item}
            </FilterItem>
          ))
        : null}
    </FilterList>
  );
}

function SelectedFilterList({ selectedfilters, setSelectedFilters }) {
  const handleClear = (item) => {
    setSelectedFilters((list) => {
      return list.filter((listItem) => listItem !== item);
    });
  };
  return (
    <SelectedTagList>
      {selectedfilters && selectedfilters.length
        ? selectedfilters.map((item, i) => {
            return (
              <SelectedTag key={i}>
                <Tag>{item}</Tag>
                <ClearBtn onClick={() => handleClear(item)}>
                  <ClearIcon />
                </ClearBtn>
              </SelectedTag>
            );
          })
        : null}
    </SelectedTagList>
  );
}

const SearchBase = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.5% 0;
  border: 1px solid ${(props) => props.theme.globalColors.blackColor};
  border-radius: 8px;
  position: relative;
  z-index: 2;
`;

const SearchIcon = styled(SearchOutlinedIcon)`
  color: ${(props) => props.theme.globalColors.greyColor};
  height: 2rem !important;
`;

const FilterButton = styled.button``;

const FilterIcon = styled(FilterListOutlinedIcon)`
  color: ${(props) => props.theme.globalColors.greyColor};
  height: 2rem !important;
`;

const SearchInput = styled.input`
  color: ${(props) => props.theme.globalColors.greyColor};
  width: 85%;
  height: 30px;
  font-family: var(--primaryfont);
  padding: 0 10px;
`;

const FilterList = styled.section`
  position: absolute;
  width: 10rem;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
  /* background-color: #12101b; */
  background-color: ${(props) => props.theme.primaryBgColor800};
  z-index: 1;
  border-radius: 8px;
  right: -26px;
  top: 70px;
  -webkit-box-shadow: -4px 7px 17px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -4px 7px 17px -6px rgba(0, 0, 0, 0.75);
  box-shadow: -4px 7px 17px -6px rgba(0, 0, 0, 0.75);
`;

const FilterItem = styled.button`
  color: ${({ theme }) =>
    theme.currentTheme === "dark"
      ? theme.accentBgColor900
      : theme.lightMode.infoBgColor};
  font-family: var(--primaryfont);
  font-weight: 500;
  z-index: 1;
`;

const SelectedTagList = styled.div`
  width: 85%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const SelectedTag = styled.div`
  width: fit-content;
  height: 25px;
  border-radius: 20px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--primaryfont);
  background: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.accentBgColorGradient900
      : theme.accentBgColor800};
  /* color: ${(props) => props.theme.accentBgColor900}; */
`;

const Tag = styled.p`
  margin: 0;
`;

const ClearBtn = styled.button`
  /* margin-top: 8px; */
`;

const ClearIcon = styled(CloseOutlined)``;
