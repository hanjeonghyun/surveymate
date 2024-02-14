import React, { useEffect } from "react";
import {
  TitleWrapper,
  Title,
  NextButton,
  ButtonText,
} from "../../components/AuthComponents.js";
import checkBt from "../../assets/images/bComponent 28.svg";
import originalBt from "../../assets/images/bRectangle 64.svg";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {textDummys} from "./textDummys.js";
export default function AuthRule() {
  const [check, setCheck] = useState({
    all: originalBt,
    first: originalBt,
    second: originalBt,
  });
  const navigate = useNavigate();
  const onButtonClick = (key) => {
    if (key === "all") {
      onAllBoxChange();
    } else {
      onSingleBoxChange(key);
    }
  };
  const onAllBoxChange = () => {
    const newAllValue = check.all === originalBt ? checkBt : originalBt;
    setCheck({
      all: newAllValue,
      first: newAllValue,
      second: newAllValue,
    });
  };
  const onSingleBoxChange = (key) => {
    const newSingleValue = check[key] === originalBt ? checkBt : originalBt;

    setCheck((prevCheck) => ({
      ...prevCheck,
      [key]: newSingleValue,
      all:
        (check[key] === originalBt && prevCheck.second === checkBt) ||
        (check[key] === originalBt && prevCheck.first === checkBt)
          ? checkBt
          : originalBt,
    }));
  };
  const [notAllow, setNotAllow] = useState(true);

  const checkNotAllow = useEffect(()=>{
    if(check.all===checkBt){
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  },[check.all])

  return (
    <Rule>
      <TitleWrapper>
        <Title>약관동의</Title>
      </TitleWrapper>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (check.all === checkBt) {
            navigate("/login")
            checkNotAllow
          }
        }}
      >
        <div className="textBox">
          <img
            src={check.all}
            alt="체크박스"
            onClick={() => onButtonClick("all")}
          />
          <span>&nbsp;아래 약관에 모두 동의합니다</span>
        </div>
        <Hr></Hr>

        <div className="textBox">
          <img
            src={check.first}
            alt="체크박스"
            onClick={() => onButtonClick("first")}
          />
          <div>&nbsp;서비스이용약관 동의(필수)</div>
        </div>
        <Rect>{textDummys.service}</Rect>
        <br></br>
        <div className="textBox">
          <img
            src={check.second}
            alt="체크박스"
            onClick={() => onButtonClick("second")}
          />

          <div>&nbsp;개인정보 수집 및 이용 동의(필수)</div>
        </div>

        <Rect>{textDummys.personal}</Rect>

        <br></br>
        <br></br>
        <NextButton disabled={notAllow}>
          <ButtonText>다음</ButtonText>
        </NextButton>
      </form>
    </Rule>
  );
}

const Rule = styled.div`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  .textBox {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Rect = styled.div`
  color: #000;
  font-family: Poppins;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  height: 101px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(96, 70, 255, 0.05);
  box-sizing: border-box;
  padding: 3px;
  overflow: auto;
  white-space: pre-line; 
`;

const Hr = styled.div`
  background: rgba(96, 70, 255, 0.3);
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
