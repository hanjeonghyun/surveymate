import * as C from "../../components/SurveyComponents";
import { useNavigate } from "react-router-dom";
import complete from "../../assets/images/dcomplete.svg";
import completelogo from "../../assets/images/dcompletelogo.svg";
import styled from "styled-components";
import axios from "axios";

export default function MarketPointComplete() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  let dataId = 1;

  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`/api/data/${dataId}`, {
        headers: {
          accept: "*/*",
        },
      });
      //    return res.data; 구현 안 할 시 아래 부분 삭제
      const download = res.data;
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(download);

      XLSX.utils.book_append_sheet(wb, ws, "sheet1");

      XLSX.writeFile(wb, `Surveymate_${dataId}.xlsx`);
    } catch (error) {
      console.error("요청 에러", error);
    }
  };

  //npm i --save https://cdn.sheetjs.com/xlsx-0.19.1/xlsx-0.19.1.tgz
  // https://cdn.sheetjs.com/xlsx-0.19.1/xlsx-0.19.1.tgz  -> 패키지 설치 필요.

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
  background: url("src/assets/images/dicon_back.svg") no-repeat;
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
