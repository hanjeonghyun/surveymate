import React from "react";
import {
  TitleWrapper,
  Title,
  NextButton,
  ButtonText,
} from "../../components/SurveyComponents";
import profile from "../../assets/images/bGroup 34.svg";
import back from "../../assets/images/bicon_back.svg";
import dot from "../../assets/images/bocticon_kebab-horizontal-16.svg"
import SurveyAlert from "./SurveyAlert";
import SurveyBottomPopUp from "./SurveyBottomPopUp";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SurveyView() {
  const [sameLoggedIn, setSameLoggedIn] = useState(true);
  const [nickName, setNickName] = useState("강이");
  const [showPopUp, setShowPopUp] = useState(false);
  const navigate = useNavigate();
  //화면의 닉네임과 현재 접속자명이 동일한지 판단해서 화면 다르게 띄우기
  //설문조사 등록 과정의 경우 '설문이 등록되었습니다' 버튼 뜨게 만들어야 함
  //서버로부터 현재 접속자명 불러오기
  //서버로부터 글 작성자명 불러오기
  const ButtonClick=()=>{
    if (sameLoggedIn==true){
      setShowPopUp(true)
    }
  }
  useEffect(() => {
    if (nickName === "강이") {
      setSameLoggedIn(true);
    } else {
      setSameLoggedIn(false);
    }
  }, []);
  return (
    <Wrap>
      <TitleWrapper>
        <Title>설문응답</Title>
        <Back src={back} onClick={()=>{navigate("/survey")}}></Back>
      </TitleWrapper>
      <Profile>
        <div>
          <img src={profile}></img>
        </div>
        <ProfileWrite>
          <div>{nickName}</div>
          <div>0000-00-00</div>
        </ProfileWrite>
        <ReportButton>
          <img onClick={ButtonClick} src={sameLoggedIn ? dot:''}></img>
        </ReportButton>
      </Profile>
      <Hr></Hr>
      <Content>
        <TitleFont>제목을 입력하세요(최대 몇자인지)</TitleFont>
        <br></br>
        <div>내용을 입력하세요(최대 몇자인지)</div>
        <br></br>
        <div>1. 어떤 설문인가요?</div>
        <div>2. 어디 소속인지 알려주세요!</div>
        <div>3. 추가적인 경품이 있다면 기재해 주세요</div>
        <div>4. 누구를 대상으로 진행하는 설문인가요?</div>
      </Content>
      <Check>
      <Blank></Blank>
        <NextButton className={sameLoggedIn ? "none" : ""}>
          <ButtonText>설문 참여하기</ButtonText>
        </NextButton>
        <AlertWrapper className={sameLoggedIn ? "" : "none"}>
          <SurveyAlert text="설문이 등록되었습니다"></SurveyAlert>
        </AlertWrapper>
      </Check>
      {showPopUp&&<SurveyBottomPopUp/>}
    </Wrap>
  );
}

const Wrap=styled.div`
  box-sizing: border-box;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ProfileWrite = styled.div`
  margin-left: 10px;
  :first-child {
    margin-bottom: 0.5vh;
    margin-right: 8vw;
  }
  :nth-child(2) {
    font-size: 12px;
    font-weight: 400;
  }
  color: #000;
  text-align: left;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: #efedff;
`;
const Content = styled.div`
  margin-top: 3vh;
  color: #000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

const TitleFont = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
`;

const Check = styled.div`
  .none {
    display: none;
  }
  position:absolute;
  width:90%;
 // bottom:20vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const AlertWrapper = styled.div`
  position: relative;
  top: 10vw;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReportButton = styled.div`
  &.none {
    display: none;
  }
  position:absolute;
  right:0;
  margin-right:5vw;
`;

const Back=styled.img`
  margin-left:5vw;
  position:absolute;
  left:0;  
`
const Blank=styled.div`
  height:700px;
`
