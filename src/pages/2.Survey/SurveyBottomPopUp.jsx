import React from 'react'
import image from "../../assets/images/bicon_photo.svg"
import * as C from "../../components/SurveyComponents";
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { showPopUpState } from "./SurveyView";

export default function SurveyBottomPopUp() {
  const [showPopUp,setShowPopUp] = useRecoilState(showPopUpState);
  const backgroundClick=(e)=>{
    if (e.target === e.currentTarget) {
      setShowPopUp(false);
  }
}
  return (
    <>
    {showPopUp&&<BackgroundBottomSheet onClick={backgroundClick}>
      <BottomSheetWrapper>
        <BottomSheetInfo>
          <InputLabel>설문등록 관리</InputLabel>
          <ProcessExplain>
            등록된 설문을 수정하거나 <br />
            삭제할 수 있어요
          </ProcessExplain>
          <img
            src={image}
            alt='image'
          />
        </BottomSheetInfo>
        <BottomButtonWrapper>
          <CancelButton >
            <C.ButtonText>삭제하기</C.ButtonText>
          </CancelButton>
          <ConfirmButton>
            <C.ButtonText>수정하기</C.ButtonText>
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
    max-height: initial;
    margin-top: -15%;
    margin-bottom: -15%;
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