import React from "react";
import styled from "styled-components";
import clickedHome from "../assets/images/bocticon_home-24.svg";
import homeBt from "../assets/images/bocticon_home-24 (1).svg";
import clickedSurvey from "../assets/images/bmajesticons_paper-fold-line.svg";
import surveyBt from "../assets/images/bmajesticons_paper-fold-line (1).svg";
import clickedMarket from "../assets/images/bclarity_coin-bag-line.svg";
import marketBt from "../assets/images/bclarity_coin-bag-line (1).svg";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function SideBar() {
  const [selected, setSelected] = useState("main");
  const navigate = useNavigate();
  const onButtonClick = (type) => {
    setSelected(type);
    navigate(`/${type}`)
  };
  useEffect(() => {
    const pathname = location.pathname;
    if (pathname==="/main"){
      setSelected("main")
    }
    else if (pathname==="/survey") {
      setSelected("survey");
    } else if (pathname==="/market") {
      setSelected("market");
    } 
      // 다른 페이지에 따라 필요한 로직 추가
    
  }, [location.pathname]);

  if (['/login', '/auth', '/authimg', '/authrule', '/pwfind', '/'].includes(window.location.pathname)) return null;
  return (
    <BarWrapper>
      <Bar 
        onClick={() => onButtonClick("main")} 
        selected={selected === "main"} 
      >
        <img src={selected === "main" ? clickedHome : homeBt} alt="홈" />
        <Text selected={selected === "main"}>홈</Text>
      </Bar>
      <Bar
        onClick={() => onButtonClick("survey")}
        selected={selected === "survey"}
      >
        <img
          src={selected === "survey" ? clickedSurvey : surveyBt}
          alt="설문조사"
        />
        <Text selected={selected === "survey"}>설문조사</Text>
      </Bar>
      <Bar
        onClick={() => onButtonClick("market")}
        selected={selected === "market"}
      >
        <img
          src={selected === "market" ? clickedMarket : marketBt}
          alt="설문장터"
        />
        <Text selected={selected === "market"}>설문장터</Text>
      </Bar>
    </BarWrapper>
  );
  
}

const BarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 11vh;
  width: 100vw;
  left: 0;
  background: var(--white, #fff);
  box-shadow: 0px -2px 11px 0px rgba(0, 0, 0, 0.25);
`;
const Bar = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

const Text = styled.p`
  color: ${(props) => (props.selected ? "#000000" : "#d6d6d6")};
  text-align: center;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  pointer-events: none;
`;
