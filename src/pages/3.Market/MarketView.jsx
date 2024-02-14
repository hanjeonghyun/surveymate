import React from "react";
import {
  TitleWrapper,
  Title,
  NextButton,
  ButtonText,
} from "../../components/SurveyComponents";
import profile from "../../assets/images/bGroup 34.svg";
import back from "../../assets/images/bicon_back.svg";
import dot from "../../assets/images/bocticon_kebab-horizontal-16.svg";
import SurveyAlert from "../2.Survey/SurveyAlert";
import SurveyBottomPopUp from "../2.Survey/SurveyBottomPopUp";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { atom,useRecoilState,RecoilEnv } from "recoil";
import axios from "axios";

import { showPopUpState } from "../../components/RecoilDummys";
import { messageState } from "../../components/RecoilDummys";
import { alertState } from "../../components/RecoilDummys";
import { contentState } from "../../components/RecoilDummys";
import { idState } from "../../components/RecoilDummys";

export default function MarketView() {
  const [showPopUp, setShowPopUp] = useRecoilState(showPopUpState);
  const [alertMessage, setAlertMessage] = useRecoilState(messageState);
  const [showAlert, setShowAlert]=useRecoilState(alertState);
  const [surveyContent,setSurveyContent]=useRecoilState(contentState);
  const [finished, setFinished]=useState(false);
  const [currentId, setCurrentId]=useRecoilState(idState);
  const navigate = useNavigate();
  const nickName = "가나다라";
  const serverName = "가나다";
  const currentPathname = window.location.pathname;
  //화면의 닉네임과 현재 접속자명이 동일한지 판단해서 화면 다르게 띄우기
  //marketview1:메인화면에서 접속시 marketview2:설문등록시
  //서버로부터 현재 접속자명 불러오기
  //서버로부터 글 작성자명 불러오기
  const ButtonClick = () => {
    if (nickName === serverName || currentPathname === "/marketview2") {
      setShowPopUp(true);
    }
  };
  useEffect(() => {
    setShowPopUp(false)
    if (currentPathname === "/marketview2") {
      setShowAlert(true);
    }else{
      axios.get(`api/data/${currentId}`)
      //surveyview2일 때에는 다른 곳에서 id 받아오도록 수정
      .then((response)=>{
        setSurveyContent(response.data)
      })
      .catch((response)=>{
        console.log("응답없음")
        console.log(response)
      })
      .finally(()=>{
        setShowAlert(false)
      })

    }
  }, [currentPathname,location]);

  const BackButtonClick=()=>{
    if (currentPathname==="/marketview2"){
      navigate("/market")
    }
    else{
      navigate(-1)
    }
  }
  const nextButtonClick=()=>{
    if (finished===false){
      navigate("/marketpoint")
    }
  }
  return (
    <Wrap>
      <TitleWrapper>
        <Title>설문데이터</Title>
        <Back
          src={back}
          onClick={BackButtonClick}
        ></Back>
      </TitleWrapper>
      <Profile>
        <div>
          <img src={profile}></img>
        </div>
        <ProfileWrite>
          <div>{surveyContent.registrantName}</div>
          <div>{surveyContent.createdAt}</div>
        </ProfileWrite>
        <ReportButton>
          <img
            onClick={ButtonClick}
            src={
              nickName === serverName || currentPathname === "/marketview2"
                ? dot
                : ""
            }
          ></img>
        </ReportButton>
      </Profile>
      <Hr></Hr>
      <Content>
        <TitleFont>{surveyContent.title}</TitleFont>
        <br></br>
        {surveyContent.description}
      </Content>
      <NextButtonWrapper
        className={
          nickName === serverName || currentPathname === "/marketview2"
            ? "none"
            : ""
        }
      >
          <NextButton onClick={nextButtonClick}>
            <ButtonText>{finished? "데이터 파일 다운로드":"설문 응답 데이터 구매"}</ButtonText>
          </NextButton>
      </NextButtonWrapper>
      {showAlert && 
        <AlertWrapper>
          <AlertPosition>
            <SurveyAlert text={alertMessage}></SurveyAlert>
          </AlertPosition>
        </AlertWrapper>
      }
      {showPopUp && (
        <SurveyBottomPopUp
          initialData={{
            title: "판매 등록 게시글 관리",
            line1: "판매 등록된 게시글을 수정하거나",
            line2: "삭제할 수 있어요",
            button1: "삭제",
            button2: "수정",
          }}
        />
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  box-sizing: border-box;
`;
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
  white-space: pre-wrap;
`;

const TitleFont = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
`;

const NextButtonWrapper = styled.div`
  &.none {
    display: none;
  }
  margin-top: 300px;
`;

const AlertWrapper = styled.div`
  &.none {
    display: none;
  }
  position: fixed;
  top: 50vh;
  left: 0;
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AlertPosition = styled.div`
  position: sticky;
  top: 70%;
`;
const ReportButton = styled.div`
  &.none {
    display: none;
  }
  position: absolute;
  right: 0;
  margin-right: 5vw;
`;

const Back = styled.img`
  margin-left: 5vw;
  position: absolute;
  left: 0;
`;
