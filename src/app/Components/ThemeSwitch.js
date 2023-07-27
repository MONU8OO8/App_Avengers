"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { uiState, themeFn } from "../Redux/uiSlice";

const lightSwitch = "/assets/images/light-switch.png";
const darkSwitch = "/assets/images/dark-switch.png";
const darkbgSwitch = "/assets/images/darkBg-switch.png";
const lightbgSwitch = "/assets/images/lightBg-switch.png";

export function ThemeSwitch() {
  const { theme } = useSelector(uiState);
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark" ? true : false);

  const handleToggle = (val) => {
    setIsDarkMode(val);
    dispatch(themeFn(val ? "dark" : "light"));
  };

  return (
    <Switch className='switch2'>
      <Input
        checked={isDarkMode}
        type='checkbox'
        onChange={(e) => handleToggle(e.target.checked)}
      />
      <SliderBase isdarkmode={isDarkMode.toString()}>
        <Slider isdarkmode={isDarkMode.toString()}>
          <Img src={isDarkMode ? darkSwitch : lightSwitch} alt='light' />
        </Slider>
      </SliderBase>
    </Switch>
  );
}

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 57px;
  height: 28px;
  border-radius: 20px;
  z-index: 5;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
  display: none;
`;

const SliderBase = styled.div`
  position: relative;
  cursor: pointer;
  background-size: cover;
  transition: background-image 0.5s;
  border-radius: 20px;
  width: 70px;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  ${(props) =>
    props.isdarkmode === "true"
      ? `

  background-color: black;
  background-image: url(${darkbgSwitch});
  border-color: #01927d ;
  box-shadow: 0px 0px 6px 0px #02b69c;
`
      : `
  box-shadow: 0px 7.800000190734863px 11.700000762939453px 0px white inset;
  background-image: url(${lightbgSwitch});

`}
`;

const Img = styled.img`
  object-fit: contain;
  height: 4rem;
  width: 4rem;
`;

const Slider = styled.div`
  position: absolute;
  top: -18px;
  left: -20px;
  transition: transform 0.3s;

  ${(props) =>
    props.isdarkmode === "true" &&
    `
  -webkit-transform: translateX(37px);
  -ms-transform: translateX(37px);
  transform: translateX(37px);

`}
`;
