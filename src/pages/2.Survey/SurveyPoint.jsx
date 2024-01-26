import styled from "styled-components";
import * as C from "../../components/SurveyComponents";
import Warning from "../../assets/images/dwarning.svg";
import Back from "../../assets/images/dicon_back.svg";
import SideBar from "../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SurveyPoint() {
  let [point, setPoint] = useState(0);
  const [showBottom, setBottom] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    navigate("/");
  };

  const confirmPoint = (value) => {
    setPoint(value * 10);
  };

  const clickNext = () => {
    setBottom(true);
  };

  const clickCancel = () => {
    setBottom(false);
  };

  return (
    <>
      <TitleWrapper>
        <BackButton onClick={handleBack}>
          <img
            src={Back}
            alt='BackButton'
          />
        </BackButton>
        <C.Title>설문조사 등록</C.Title>
        <C.NextSmallButton onClick={clickNext}>
          <C.SmallButtonText>다음</C.SmallButtonText>
        </C.NextSmallButton>
      </TitleWrapper>
      <ProcessTitle>기간별 사용 포인트 선택</ProcessTitle>
      <ProcessExplain>
        기간별 최대 시간이 되면, 게시물이 자동 삭제됩니다.
        <br /> 1일 = 24시간 기준
      </ProcessExplain>
      <ButtonWrapper>
        {[1, 2, 3, 4, 5, 6, 7].map((day) => (
          <DayButton
            key={day}
            onClick={() => confirmPoint(day)}
            value={day}
          >
            <DayButtonText>{day}일</DayButtonText>
          </DayButton>
        ))}
        {showBottom && (
          <PointBottom
            onCancel={clickCancel}
            point={point}
            handleSubmit={handleSubmit}
          />
        )}
        <SizedBox />
      </ButtonWrapper>
      <InputLabel>사용포인트</InputLabel>
      <NotifyBox>
        <DayButtonText>{point} POINT</DayButtonText>
      </NotifyBox>
      <SizedBox />
      <InputLabel>설문 대상 기간</InputLabel>
      <NotifyBox>
        <TermText>0000년 00월 00일 ~ 0000년 00월 00일</TermText>
      </NotifyBox>
      <SideBar />
    </>
  );
}

//설문등록 확인 바텀시트
function PointBottom({ onCancel, point, handleSubmit }) {
  return (
    <>
      <BackgroundBottomSheet>
        <BottomSheetWrapper>
          <BottomSheetInfo>
            <InputLabel>설문등록 확인</InputLabel>
            <ProcessExplain>
              {point}포인트를 사용하여 <br />
              설문을 등록하시겠습니까?
            </ProcessExplain>
            <img
              src={Warning}
              alt='warning'
            />
          </BottomSheetInfo>
          <BottomButtonWrapper>
            <CancelButton onClick={onCancel}>
              <C.ButtonText>취소</C.ButtonText>
            </CancelButton>
            <ConfirmButton>
              <C.ButtonText onClick={handleSubmit}>등록</C.ButtonText>
            </ConfirmButton>
          </BottomButtonWrapper>
        </BottomSheetWrapper>
      </BackgroundBottomSheet>
    </>
  );
}

//바텀시트 스타일 컴포넌트

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

const BottomSheetWrapper = styled.div`
  background-color: #ffffff;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  border: none;
  border-radius: 20px 20px 0px 0px;
  align-items: center;
`;

const BottomSheetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  text-align: center;
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

//설문조사 등록 페이지 스타일 컴포넌트
const TitleWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 10vh;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: var(--white, #fff);
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.div`
  display: flex;
  cursor: pointer;
`;

const ProcessTitle = styled.p`
  color: #6046ff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 2vh 0;
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

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

const DayButton = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 70%;
  background-color: #efedff;
  border: none;
  cursor: pointer;
  filter: drop-shadow(0px 2px 11px rgba(0, 0, 0, 0.2));
  &:hover {
    background-color: #6046ff;
    color: #efedff;
  }
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

const DayButtonText = styled.p`
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const NotifyBox = styled.div`
  width: 90vw;
  height: 5vh;
  border-radius: 10px;
  border: 2px solid #cfc8ff;
  background: var(--white, #fff);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1vh 0;
`;

const TermText = styled.p`
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const SizedBox = styled.div`
  width: 90vw;
  height: 3vh;
`;
