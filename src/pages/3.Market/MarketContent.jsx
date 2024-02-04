import React from "react";
import styled from "styled-components";
import * as C from "../../components/SurveyComponents";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { messageState } from "../2.Survey/SurveyView";
export default function SurveyContent() {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useRecoilState(messageState);
  const [upload, setUpload] = useState(false);
  const [ismessage, setIsMessage] = useState(
    "판매 데이터 업로드 (CSV, XLSX 만 가능)"
  );
  
  const handleClick = () => {
    if (upload) {
      setUpload(false);
      setIsMessage("판매 데이터 업로드 (CSV, XLSX 만 가능)");
    } else {
      setUpload(true);
      setIsMessage("업로드 완료");
    }
  };
  useEffect(() => {
    setAlertMessage("판매등록이 완료되었습니다.")
  }, []);

  return (
    <div>
      <C.TitleWrapper>
        <BackBtn onClick={() => navigate(-1)}></BackBtn>
        <C.Title>설문데이터 판매 등록</C.Title>
        <NextBtn onClick={() => navigate("/marketview2")}>다음</NextBtn>
      </C.TitleWrapper>

      <Title placeholder='제목을 입력하세요(최대 몇자인지)'></Title>
      <Content
        placeholder='내용을 입력하세요(최대 몇자인지)&#13;&#10;&#13;&#10;1. 소속이 어디인가요?&#13;&#10;2. 주제가 무엇인가요?&#13;&#10;3. 대상은 누구인가요?&#13;&#10;4. 응답 소요 시간은 얼마나 되나요?
            '
      ></Content>
      <UploadBtn
        onClick={handleClick}
        className={!upload ? "" : "finish"}
      >
        <UploadImg className={!upload ? "" : "finish"} />
        <UploadText>{ismessage}</UploadText>
      </UploadBtn>
      <Line></Line>

      <Sell>판매가 설정</Sell>
      <SellPoint placeholder='판매희망 포인트를 입력해주세요'></SellPoint>
    </div>
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
const Title = styled.input`
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
  height: 16vh;
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
  overflow: hidden;
`;
const UploadBtn = styled.button`
  width: 320px;
  height: 50px;
  border: none;
  box-shadow: 0px 2px 11px 0px #00000040;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 1vh;
  margin-bottom: 3vh;
  margin-left: auto;
  margin-right: auto;
  &.finish {
    background: #6046ff0d;
  }
`;
const UploadImg = styled.p`
  margin-right: 3vw;
  margin-left: 1vw;
  background: url("src/assets/images/cVector.svg") no-repeat;
  width: 18.75px;
  height: 18.75px;
  &.finish {
    background: url("src/assets/images/cCheck.svg") no-repeat;
    width: 24px;
    height: 24px;
  }
`;
const UploadText = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
const Line = styled.hr`
  border: 1px solid #efedff;
`;
const Sell = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-top: 3vh;
  margin-bottom: 1.5vh;
`;
const SellPoint = styled.input`
  width: 350px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid #cfc8ff;
  font-size: 16px;
  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #d9d9d9;
  }
`;
