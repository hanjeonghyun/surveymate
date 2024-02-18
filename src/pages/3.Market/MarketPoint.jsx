import { styled, css } from "styled-components";
import * as C from "../../components/SurveyComponents";
import * as B from "../../components/BottomSheet";
import Warning from "../../assets/images/dwarning.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { contentState } from "../../components/RecoilDummys";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";
import { idState } from "../../components/RecoilDummys";
import cBack from "../../assets/images/cBack.svg";

export default function MarketPoint() {
  const [amount, setAmount] = useState(0);
  const [showBottom, setBottom] = useState(false);
  const [totalPoint, setTotalPoint] = useState(0);
  const [surveyContent, setSurveyContent] = useRecoilState(contentState);
  const currentId = useRecoilValue(idState);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = async () => {
    try {
      const resAmount = await axios.post(
        `/api/data/buy/${currentId}`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(resAmount);
      //const amountData = resAmount.data.data;
      //setAmount(amountData);
      navigate("/marketpointcomplete");
    } catch (error) {
      console.error("요청 에러", error);
      // alert("에러 발생");
    }
  };

  const clickConfirm = () => {
    setBottom(true);
  };

  const clickCancel = () => {
    setBottom(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/statement/total`, {
          headers: {
            accept: "*/*",
            Authorization: token,
          },
        });
        console.log(res);
        const totalPointData = res.data.data.totalAmount;
        setTotalPoint(totalPointData);
      } catch (error) {
        console.error("요청 에러", error);
        // alert("에러 발생");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <C.TitleWrapper>
        <BackBtn
          src={cBack}
          onClick={handleBack}
        ></BackBtn>
        <C.Title>설문데이터 구매</C.Title>
      </C.TitleWrapper>
      <ProcessTitle>포인트 차감 내용</ProcessTitle>
      <B.InputLabel>차감 포인트</B.InputLabel>
      <NotifyBox>
        <DayButtonText>{surveyContent.price} POINT</DayButtonText>
      </NotifyBox>
      <HavingPoint>보유 포인트 {totalPoint}POINT</HavingPoint>
      <SizedBox />
      <C.NextButton onClick={clickConfirm}>
        <C.ButtonText>구매 확인</C.ButtonText>
      </C.NextButton>
      {showBottom && (
        <PointBottom
          onCancel={clickCancel}
          amountt={amount}
          handleSubmit={handleSubmit}
          token={token}
        />
      )}
    </>
  );
}

//설문등록 확인 바텀시트
function PointBottom({ onCancel, amount, handleSubmit, token }) {
  return (
    <>
      <B.BackgroundBottomSheet>
        <B.BottomSheetWrapper>
          <B.BottomSheetInfo>
            <B.InputLabel>데이터 구매 확인</B.InputLabel>
            <B.ProcessExplain>
              {amount}포인트를 사용하여 <br />
              응답 데이터를 구매하시겠습니까?
            </B.ProcessExplain>
            <img
              src={Warning}
              alt='warning'
            />
          </B.BottomSheetInfo>
          <B.BottomButtonWrapper>
            <B.CancelButton onClick={onCancel}>
              <C.ButtonText>취소</C.ButtonText>
            </B.CancelButton>
            <B.ConfirmButton>
              <C.ButtonText onClick={token && handleSubmit}>구매</C.ButtonText>
            </B.ConfirmButton>
          </B.BottomButtonWrapper>
        </B.BottomSheetWrapper>
      </B.BackgroundBottomSheet>
    </>
  );
}

const BackBtn = styled.img`
  width: 24px;
  height: 24px;
  border: none;
  position: absolute;
  left: 5vw;
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

//설문조사 등록 페이지 스타일 컴포넌트

const ProcessTitle = styled.p`
  color: #6046ff;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 2vh 0;
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

const HavingPoint = styled.p`
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
  text-align: right;
`;

const SizedBox = styled.div`
  width: 90vw;
  height: 5vh;
`;
