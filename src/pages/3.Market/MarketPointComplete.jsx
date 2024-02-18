import * as C from "../../components/SurveyComponents";
import { useNavigate } from "react-router-dom";
import complete from "../../assets/images/dcomplete.svg";
import completelogo from "../../assets/images/dcompletelogo.svg";
import styled from "styled-components";
import axios from "axios";
import { contentState } from "../../components/RecoilDummys";
import { useRecoilValue } from "recoil";
import cBack from "../../assets/images/cBack.svg";

export default function MarketPointComplete() {
  const navigate = useNavigate();
  const surveyContent = useRecoilValue(contentState);

  const handleBack = () => {
    navigate("/market");
  };

  const handleDownload = () => {
    window.open(surveyContent.fileUrl);
  };

  return (
    <>
      <C.TitleWrapper>
        <BackBtn onClick={handleBack}></BackBtn>
        <C.Title>데이터 구매 완료</C.Title>
      </C.TitleWrapper>
      <ContentsWrapper>
        <img
          src={complete}
          alt='purchasecomplete'
        />
        <C.Title>응답 데이터 구매가 완료되었습니다.</C.Title>

        <img
          src={completelogo}
          alt='logo'
        />
        <C.NextButton onClick={handleDownload}>
          데이터 파일 다운로드
        </C.NextButton>
      </ContentsWrapper>
    </>
  );
}

const BackBtn = styled.button`
  background: url(${cBack}) no-repeat;
  width: 24px;
  height: 24px;
  border: none;
  position: absolute;
  left: 5vw;
`;

const ContentsWrapper = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 20vh 0;
  :nth-child(n) {
    margin: 1vh 0;
  }
`;
