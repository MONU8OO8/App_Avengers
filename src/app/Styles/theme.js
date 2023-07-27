const darkMode = {
  primaryBgColor1000: "#0E0B17",
  bgGradient:
    "linear-gradient(180deg, #1c1a25 0%, #1C1A25 7.81%, #1C1A25 100%)",
  primaryBgColor900: "#1C1A25",
  primaryBgColor800: "#12101B",
  primaryBgColor700: "#161616",
  primaryBgColor600: "#0D0D0F",
  primaryBgColor500: "#090A17",
  accentBgColor1000: "#02C7A0",
  accentBgColor900: "#44FFE4",
  accentBgColor800: "#09F1CA",
  accentBgColor700: "#018874",
  accentBgColor600: "#44ffe44d",
  accentBgColor500: "#103D3E",
  accentBgColor400: "#00DA93",
  accentBgColorGradient900:
    "#00DA93 linear-gradient(232deg, rgba(0, 218, 147, 0.80) 0%, rgba(0, 49, 153, 0.80) 100%)",
  accentBgColorGradient800: `
  linear-gradient(
    134deg,
    rgba(2, 199, 160, 0.1) 0%,
    rgba(0, 255, 205, 0) 100%
    );
    `,
  accentBgColorGradient600:
    "linear-gradient( 232deg,rgba(0, 218, 147, 0.2) 0%, rgba(0, 49, 153, 0.2) 100%)",
  accentBgColorGradient700: `linear-gradient(139deg, #09F1CA 0%, #CFFFF8 50%, #EFB9B2 79.17%, #F68475 100%)`,

  infoBgColor: "#FFFFFF",
  infoBgColor900: "#90a8da",
  infoBgColor800: "#262A31",
  infoBgColor700: "#181A1C",
  infoBgColor600: "#1D1B29",
  mainBgColor: "#000000",
};

const lightMode = {
  primaryBgColor1000: "",
  bgGradient: "linear-gradient(180deg, #E1FFE3 0%, #F5F5F5 19.79%)",
  primaryBgColor900: "#EAFBEB",
  primaryBgColor800: "#FFF",
  primaryBgColor700: "#f7fff8",
  primaryBgColor600: "#F5F5F5",
  primaryBgColor500: "",
  accentBgColor1000: "",
  accentBgColor900: "#DDFDEF",
  accentBgColor800: "",
  accentBgColor700: "",
  accentBgColor600: "",
  accentBgColor500: "#EAEDEE",
  accentBgColorGradient900: "linear-gradient(180deg, #D6FEEB 0%, #FFF 100%)",
  accentBgColorGradient800: `


    `,

  accentBgColorGradient700: `linear-gradient(180deg, #FFF 0%,  #D6FEEB   100%)`,
  accentBgColorGradient600: `linear-gradient(180deg, #FFFFFF 8%, rgba(144, 238, 182, 0) 100%);`,
  accentBgColorGradient500: `linear-gradient(180deg, #ffffff 0%, rgba(144, 238, 182, 0) 100%),
    linear-gradient(0deg, #1f8280, #90eeb6)`,
  infoBgColor: "#000000",
  infoBgColor800: "#206224",
  infoBgColor900: "#1F8288",
  infoBgColor700: "#F5F5F5",
  infoBgColor600: "",
  mainBgColor: "#FFFFFF",
};

const globalColors = {
  greenGradient: " linear-gradient(270.58deg, #00DA93 1.41%, #003199 189.72%)",
  greyColor: "#98A4A9",
  blackColor: "black",
  whiteColor: "white",
  darkRedColor: "#FF3C30",
  orangeColor: "#FFAD5B",
};

export { globalColors, lightMode, darkMode };
