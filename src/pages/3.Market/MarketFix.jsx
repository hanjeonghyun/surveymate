import React from "react";
import styled from "styled-components";
import profile from "../../assets/images/bGroup 34.svg";
import axios from 'axios';
import {TitleWrapper,Title} from "../../components/SurveyComponents";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { showPopUpState } from "../../components/RecoilDummys";
import { messageState } from "../../components/RecoilDummys";
import { alertState } from "../../components/RecoilDummys";
import { contentState } from "../../components/RecoilDummys";
import { idState } from "../../components/RecoilDummys";
import { useRecoilValue } from "recoil";

export default function MarketFix() {
    const nickName="가나다"
    const navigate=useNavigate();
    const [showPopUp,setShowPopUp] = useRecoilState(showPopUpState);
    const [alertMessage,setAlertMessage]=useRecoilState(messageState);
    const [showAlert, setShowAlert]=useRecoilState(alertState);
    const [surveyContent,setSurveyContent]=useRecoilState(contentState);
    const currentId=useRecoilValue(idState);
    const {title,description,createdAt,seller,price,fileUrl}=surveyContent;
    const surveyFixClick=()=>{
      const token = localStorage.getItem('token');
      if (token){
        axios.patch(`api/data/${currentId}`,{
          title:title,
          description: description,
          amount:price,
          file:fileUrl,
        },{
          headers: {
            'Authorization': token,
            "Content-Type": "multipart/form-data",
        },
        })
        .then((response)=>{
          setSurveyContent(response.data)
        })
        .catch((res)=>{
          console.log(res)
          console.log("응답없음")
        })
        .finally(()=>{
          setShowPopUp(false)
          setShowAlert(true)
          setAlertMessage("수정내용이 저장되었습니다.")
          navigate(-1)
        })
      }
      }
    
    const handleTitleChange=(e)=>{
        const {name,value}=e.target;
        setSurveyContent((prevInputValue)=>({
            ...prevInputValue,
            [name]:value,
        })
        );
    }

    

  return (
    <>
      <TitleWrapper>
        <BackBtn onClick={() => navigate(-1)}></BackBtn>
        <Title>게시글 수정</Title>
        <NextBtn onClick={surveyFixClick}>저장</NextBtn>
      </TitleWrapper>
      <Profile>
        <div>
          <img src={profile}></img>
        </div>
        <ProfileWrite>
          <div>{seller}</div>
          <div>{createdAt ? `${createdAt.substring(0, 10)}` : ''}</div>
        </ProfileWrite>
        <ReportButton>
          <img src={""}></img>
        </ReportButton>
      </Profile>
      <Hr></Hr>
      <ContentTitle placeholder='제목을 입력하세요(최대 몇자인지)' 
        name="title"
        value={title} 
        onChange={handleTitleChange}>
      </ContentTitle>
        <Content placeholder='내용을 입력하세요(최대 몇자인지)&#13;&#10;&#13;&#10;1.어떤 설문인가요?&#13;&#10;2.어디 소속인지 알려주세요!&#13;&#10;3.추가적인 경품이 있다면 기재해 주세요&#13;&#10;4.누구를 대상으로 진행하는 설문인가요?'
        name="description"
        value={description}
        onChange={handleTitleChange} >
      </Content>
    </>
  );
}

const BackBtn = styled.button`
  background: url("src/assets/images/cBack.svg") no-repeat;
  width: 24px;
  height: 24px;
  border: none;
  position: absolute;
  left: 5vw;
`;
const NextBtn = styled.button`
  width: 39px;
  height: 26px;
  border: none;
  border-radius: 5px;
  background: #6046ff;
  color: #ffffff;
  position: absolute;
  right: 5vw;
  font-size: 12px;
  font-weight: 500;
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

const ReportButton = styled.div`
  &.none {
    display: none;
  }
  position: absolute;
  right: 0;
  margin-right: 5vw;
`;

const ContentTitle = styled.input`
  &::placeholder {
    color: #d6d6d6;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
  }
  font-size: 16px;
  font-weight: 600;
  border-width: 0 0 1px;
  border-color: #efedff;
  width: 90vw;
  margin-top: 4vh;
  padding-bottom: 0.5vh;
`;
const Content = styled.textarea`
  width: 90vw;
  height: 25vh;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  &::placeholder {
    color: #d6d6d6;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }
  margin-top: 3vh;
  border: none;
`;
