import React from "react";
import {
  TitleWrapper,
  Title,
  NextButton,
  ButtonText,
} from "../../components/SurveyComponents";
import profile from "../../assets/images/Group 34.svg";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

export default function SurveyView() {
  const [sameLoggedIn, setSameLoggedIn] = useState(true);
  const [nickName, setNickName] = useState("강이");
  //서버로부터 현재 접속자명 불러오기
  //서버로부터 글 작성자명 불러오기
  useEffect(() => {
    if (nickName === "강이") {
      setSameLoggedIn(true);
    } else {
      setSameLoggedIn(false);
    }
  }, []);
  return (
    <div>
      <TitleWrapper>
        <Title>설문응답</Title>
      </TitleWrapper>
      <Profile>
        <div>
          <img src={profile}></img>
        </div>
        <ProfileWrite>
          <div>{nickName}</div>
          <div>0000-00-00</div>
        </ProfileWrite>
        <ReportButton className={sameLoggedIn ? "none" : ""}>
          <ReportFont>신고</ReportFont>
        </ReportButton>
      </Profile>
      <Hr></Hr>
      <Content>
        <TitleFont>제목을 입력하세요(최대 몇자인지)</TitleFont>
        <br></br>
        <div>내용을 입력하세요(최대 몇자인지)</div>
        <br></br>
        <div>1. 어떤 설문인가요?</div>
        <div>2. 어디 소속인지 알려주세요!</div>
        <div>3. 추가적인 경품이 있다면 기재해 주세요</div>
        <div>4. 누구를 대상으로 진행하는 설문인가요?</div>
      </Content>
      <Check>
        <NextButton className={sameLoggedIn ? "none" : ""}>
          <ButtonText>설문 참여하기</ButtonText>
        </NextButton>
        <SameLogged className={sameLoggedIn ? "" : "none"}>
          <StyledNextButton className="delete">
            <ButtonText>삭제</ButtonText>
          </StyledNextButton>
          <StyledNextButton>
            <ButtonText>수정 완료</ButtonText>
          </StyledNextButton>
        </SameLogged>
        <AlertWrapper className={sameLoggedIn ? "" : "none"}>
          <Alert>
            <p>설문이 등록되었습니다.</p>
          </Alert>
        </AlertWrapper>
      </Check>
    </div>
  );
}

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
  width: 350px;
  height: 1px;
  background: #efedff;
`;
const Content = styled.div`
  margin-top: 3vh;
  color: #000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;

const TitleFont = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
`;

const Check = styled.div`
  .none {
    display: none;
  }
  margin-top: 35vh;
`;
const SameLogged = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNextButton = styled(NextButton)`
  box-shadow: none;
  width: 40vw;
  margin-left: 3vw;
  margin-right: 3vw;
  &.delete {
    background-color: #d9d9d9;
  }
`;
const AlertWrapper = styled.div`
  position: relative;
  top: -10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Alert = styled.div`
  width: 280px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 999px;
  background: rgba(65, 65, 65, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: var(--white, #fff);
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ReportButton = styled.div`
  &.none {
    display: none;
  }
  margin-left: 40vw;
  width: 59px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #d9d9d9;
  text-align: center;
`;
const ReportFont = styled.p`
  color: #000;

  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px; /* 307.692% */
  letter-spacing: -0.408px;
`;
