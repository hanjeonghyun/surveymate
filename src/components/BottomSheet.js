import styled from "styled-components";

//바텀시트 스타일 컴포넌트

//바텀시트 배경 어두워지는 효과
export const BackgroundBottomSheet = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: flex-end;
  z-index: 2;
`;

//바텀시트
export const BottomSheetWrapper = styled.div`
  background-color: #ffffff;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  border: none;
  border-radius: 20px 20px 0px 0px;
  align-items: center;
`;

//그림 윗 부분 설명사항 wrapper
export const BottomSheetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  text-align: center;
`;

//버튼 wrapper, 하나일 시 필요X
export const BottomButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 3vh;
`;

//하얀색 버튼
export const CancelButton = styled.button`
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

//보라색 버튼
export const ConfirmButton = styled.button`
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

//진한 글씨
export const InputLabel = styled.p`
  color: #000;
  text-align: left;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

//연한 글씨
export const ProcessExplain = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 2vh 0;
`;
