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
        <Rect>
          (예시)<br></br>
          제1조(목적) <br></br>이 약관은 업체 회사(전자상거래 사업자)가 운영하는
          업체 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련
          서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의
          권리․의무 및 책임사항을 규정함을 목적으로 합니다. ※「PC통신, 무선 등을
          이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을
          준용합니다.」
          <br></br>
          제2조(정의)
          <br></br>① “몰”이란 업체 회사가 재화 또는 용역(이하 “재화 등”이라
          함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여
          재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러
          사이버몰을 운영하는 사업자의 의미로도 사용합니다.
          <br></br> ② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는
          서비스를 받는 회원 및 비회원을 말합니다.
        </Rect>
        <br></br>
        <div className="textBox">
          <img
            src={check.second}
            alt="체크박스"
            onClick={() => onButtonClick("second")}
          />

          <div>&nbsp;개인정보 수집 및 이용 동의(필수)</div>
        </div>

        <Rect></Rect>

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
`;

const Hr = styled.div`
  background: rgba(96, 70, 255, 0.3);
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
