import React from "react";
import styled from "styled-components";
import * as C from "../../components/SurveyComponents";
import * as B from "../../components/BottomSheet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Upload from "../../assets/images/cUpload.svg";
import Notfile from "../../assets/images/cNotfile.svg";
import back from "../../assets/images/cBack.svg";
import cVector from "../../assets/images/cVector.svg";
import cCheck from "../../assets/images/cCheck.svg";
import { useRecoilState } from "recoil";
import { contentState } from "../../components/RecoilDummys";

export default function SurveyContent() {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  let [point, setPoint] = useState();
  const [file, setFile] = useState();
  const [upload, setUpload] = useState(false);
  const [showFBottom, setFBottom] = useState(false);
  const [showPBottom, setPBottom] = useState(false);
  const [isFile, setIsFile] = useState();
  const [isMessage, setIsMessage] = useState(
    "판매 데이터 업로드 (CSV, XLSX 만 가능)"
  );

  const [surveyContent, setSurveyContent] = useRecoilState(contentState);

  const fileInput = React.useRef(null);
  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const onChangeTitle = (e) => {
    const currentTitle = e.target.value;
    setTitle(currentTitle);
  };
  const onChangeContent = (e) => {
    const currentContent = e.target.value;
    setContent(currentContent);
  };
  const onChangeFile = (e) => {
    var fileInfo = e.target.files[0].name;
    if (e.target.files == null) return;
    const currentFile = e.target.files[0];
    setFile(currentFile);
    console.log(file);
    const fileRegExp1 = /^[가-힣a-zA-Z0-9\s+-.]+\.(csv)$/i;
    const fileRegExp2 = /^[가-힣a-zA-Z0-9\s+-.]+\.(xlsx)$/i;
    //const fileRegExp1 = /^[a-zA-Z0-9+-_.]+\.+[j]+[s]+[x]/i;
    //const fileRegExp2 = /^[a-zA-Z0-9+-_.]+\.+[s]+[v]+[g]/i;
    //const fileRegExp1 = /^[a-zA-Z0-9+-_.]+\.+[c]+[s]+[v]/i;
    //const fileRegExp2 = /^[a-zA-Z0-9+-_.]+\.+[x]+[l]+[s]+[x]/i;
    if (!fileRegExp1.test(fileInfo) && !fileRegExp2.test(fileInfo)) {
      setIsFile(false);
      setFBottom(true);
      setUpload(false);
      setIsMessage("판매 데이터 업로드 (CSV, XLSX 만 가능)");
      console.log(fileInfo);
    } else {
      setIsFile(true);
      setUpload(true);
      setIsMessage("업로드 완료");
      console.log(fileInfo);
    }
  };
  const onChangePoint = (e) => {
    const currentPoint = e.target.value;
    setPoint(currentPoint);
  };

  const clickNext = () => {
    if (isFile) {
      setPBottom(true);
    } else {
      setFBottom(true);
    }
  };
  const clickCancel = () => {
    setPBottom(false);
    setFBottom(false);
  };

  const onClickUpload = () => {
    console.log(isFile);
    const token = localStorage.getItem("token");
    if (token) {
      if (isFile) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", content);
        formData.append("amount", point);
        formData.append("file", file);
        axios
          .post("https://sleigh.college/api/data", formData, {
            headers: {
              Authorization: token,
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response);
            navigate("/marketview2");
          })
          .catch((response) => {
            console.log(response);
            if (response.response.status === 401) {
              alert("401 error");
              console.log(response);
            }
          });
      } else {
      }
    }
  };

  return (
    <div>
      <C.TitleWrapper>
        <BackBtn src={back} onClick={() => navigate(-1)}></BackBtn>
        <C.Title>설문데이터 판매 등록</C.Title>
        <ThisNextSmallButton onClick={clickNext}>
          <C.SmallButtonText>다음</C.SmallButtonText>
        </ThisNextSmallButton>
      </C.TitleWrapper>

      <Title
        placeholder='제목을 입력하세요(최대 몇자인지)'
        id='title'
        name='title'
        value={title}
        onChange={onChangeTitle}
      ></Title>
      <Content
        placeholder='내용을 입력하세요(최대 몇자인지)&#13;&#10;&#13;&#10;1. 소속이 어디인가요?&#13;&#10;2. 주제가 무엇인가요?&#13;&#10;3. 대상은 누구인가요?&#13;&#10;4. 응답 소요 시간은 얼마나 되나요?'
        id='content'
        name='content'
        value={content}
        onChange={onChangeContent}
      ></Content>
      <UploadBtn
        onClick={handleButtonClick}
        className={!upload ? "" : "finish"}
      >
        <UploadImg className={!upload ? "" : "finish"} />
        <UploadText>{isMessage}</UploadText>
      </UploadBtn>
      <UploadFile
        type='file'
        id='file'
        name='file'
        onChange={onChangeFile}
        ref={fileInput}
      ></UploadFile>
      <Line></Line>
      <Sell>판매가 설정</Sell>
      <SellPoint
        placeholder='판매희망 포인트를 입력해주세요'
        type='number'
        id='point'
        name='point'
        value={point}
        onChange={onChangePoint}
      ></SellPoint>
      {showPBottom && (
        <PointBottom
          onCancel={clickCancel}
          point={point}
          onClickUpload={onClickUpload}
        />
      )}
      {showFBottom && <FileBottom onCancel={clickCancel} />}
    </div>
  );
}

function FileBottom({ onCancel }) {
  return (
    <>
      <B.BackgroundBottomSheet>
        <B.BottomSheetWrapper>
          <B.BottomSheetInfo>
            <B.InputLabel>유효하지 않은 파일이 등록되었어요</B.InputLabel>
            <B.ProcessExplain>
              업로드한 파일의 확장자가 CSV,XLSX인지
              <br />
              확인해주세요.
            </B.ProcessExplain>
            <img
              src={Notfile}
              alt='Notfile'
            />
          </B.BottomSheetInfo>
          <B.BottomButtonWrapper>
            <ConfirmButton onClick={onCancel}>
              <C.ButtonText>확인</C.ButtonText>
            </ConfirmButton>
          </B.BottomButtonWrapper>
        </B.BottomSheetWrapper>
      </B.BackgroundBottomSheet>
    </>
  );
}

function PointBottom({ onCancel, point, onClickUpload }) {
  return (
    <>
      <B.BackgroundBottomSheet>
        <B.BottomSheetWrapper>
          <B.BottomSheetInfo>
            <B.InputLabel>{point}포인트로 판매 등록 하시겠어요?</B.InputLabel>
            <B.ProcessExplain>
              등록 후 파일 변경과 가격 변경은 불가합니다.
              <br />
              파일 변경과 가격 변경 시 삭제 후 재등록해주세요.
            </B.ProcessExplain>
            <img
              src={Upload}
              alt='Upload'
            />
          </B.BottomSheetInfo>
          <B.BottomButtonWrapper>
            <B.CancelButton onClick={onCancel}>
              <C.ButtonText>취소</C.ButtonText>
            </B.CancelButton>
            <B.ConfirmButton>
              <C.ButtonText onClick={onClickUpload}>등록</C.ButtonText>
            </B.ConfirmButton>
          </B.BottomButtonWrapper>
        </B.BottomSheetWrapper>
      </B.BackgroundBottomSheet>
    </>
  );
}


const BackBtn = styled.img`
  margin-left:5vw;
  position:absolute;
  left:0; 
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
  white-space: nowrap;
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
  outline: none;
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
  outline: none;
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
  background: url(${cVector}) no-repeat;
  width: 18.75px;
  height: 18.75px;
  &.finish {
    background: url(${cCheck}) no-repeat;
    width: 24px;
    height: 24px;
  }
`;
const UploadText = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
const UploadFile = styled.input`
  display: none;
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
  text-align: center;
  outline: none;
  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #d9d9d9;
  }
`;
export const ConfirmButton = styled.button`
  border-radius: 10px;
  background: #6046ff;
  color: var(--white, #fff);
  width: 80vw;
  height: 5vh;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
const ThisNextSmallButton = styled(C.NextSmallButton)`
  position: absolute;
  right: 5vw;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      background-color: #d9d9d9;
      pointer-events: none;
    `}
`;
