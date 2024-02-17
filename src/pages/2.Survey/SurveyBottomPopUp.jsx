import React from 'react'
import image from "../../assets/images/bicon_photo.svg"
import cancelImage from "../../assets/images/bpajamas_warning-solid.svg"
import * as C from "../../components/SurveyComponents";
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { showPopUpState } from '../../components/RecoilDummys';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { contentState } from '../../components/RecoilDummys';
import { idState } from '../../components/RecoilDummys';

import axios from 'axios';

export default function SurveyBottomPopUp({initialData}) {
  const [showPopUp,setShowPopUp] = useRecoilState(showPopUpState);
  const [currentId, setCurrentId]=useRecoilState(idState);
  const [changeContent, setChangeContent]=useState(initialData);
  const surveyContent=useRecoilValue(contentState)
  const navigate=useNavigate();
  const backgroundClick=(e)=>{
    if (e.target === e.currentTarget) {
      setShowPopUp(false);
  }
}
  const button1Click=()=>{
    if (changeContent.button1==="삭제"){
    setChangeContent(prevState=>({
       ...prevState,
        title: "삭제 확인",
        line1: "게시글을 삭제하시겠습니까?",
        line2: "",
        button1: "취소",
        button2: "삭제",
      }));
    }
    else{
        setShowPopUp(false)
    }
  }
  const button2Click=()=>{
    if (changeContent.button2==="수정"){
      if (window.location.pathname==="/surveyview1"||window.location.pathname==="/surveyview2"){
      navigate("/surveyfix")}
      else{
        navigate("/marketfix")
      }
    }else{
      console.log(surveyContent)
      //삭제시
      const token = localStorage.getItem('token');
      const url=(window.location.pathname==="/surveyview1"||window.location.pathname==="/surveyview2"?
      `/api/survey/${currentId}`:`/api/data/${currentId}`)
      if(token){
      axios.delete(url,{headers: {
        'Authorization': token,
    }})
      .then((response)=>{
        console.log(response)
        setShowPopUp(false)
        alert("삭제되었습니다.")
      })
      .catch(()=>{
       alert("삭제 과정에서 오류가 발생했습니다.")
      })
      .finally(()=>{navigate("/main")})
    }
    }
  }
  
  return (
    <>
    {showPopUp&&<BackgroundBottomSheet onClick={backgroundClick}>
      <BottomSheetWrapper>
        <BottomSheetInfo>
          <InputLabel>{changeContent.title}</InputLabel>
          <ProcessExplain>
            {changeContent.line1} <br />
            {changeContent.line2}
          </ProcessExplain>
          <img
            src={changeContent.title==="삭제 확인"?cancelImage:image}
            alt='image'
            className={changeContent.title==="삭제 확인"?"cancelImage":"image"}
          />
        </BottomSheetInfo>
        <BottomButtonWrapper>
          <CancelButton onClick={button1Click}>
            <C.ButtonText>{changeContent.button1}</C.ButtonText>
          </CancelButton>
          <ConfirmButton onClick={button2Click}>
            <C.ButtonText>{changeContent.button2}</C.ButtonText>
          </ConfirmButton>
        </BottomButtonWrapper>
      </BottomSheetWrapper>
    </BackgroundBottomSheet>
  }
  </>
  )
}

const BottomSheetWrapper = styled.div`
  background-color: #ffffff;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  border: none;
  border-radius: 20px 20px 0px 0px;
  align-items: center;
`;


const BackgroundBottomSheet = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: flex-end;
  z-index: 1;
`;
const BottomSheetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  text-align: center;
  img{
    &.image{
    max-height: initial;
    margin-top: -15%;
    margin-bottom: -15%;
    }
  }
`;

const BottomButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 3vh;
`;

const CancelButton = styled.button`
  border-radius: 10px;
  border: 2px solid #cfc8ff;
  background: var(--white, #fff);
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.2);
  color: rgba(207, 200, 255, 1);
  width: 45vw;
  height: 5vh;
  justify-content: center;
  align-items: center;
  position: flex;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  border-radius: 10px;
  background: #6046ff;
  color: var(--white, #fff);
  width: 45vw;
  height: 5vh;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const InputLabel = styled.p`
  color: #000;
  text-align: left;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const ProcessExplain = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 2vh 0;
`;