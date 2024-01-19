import React from "react";
import { TitleWrapper, Title } from "../../components/SurveyComponents";
import profile from "../../assets/images/Group 34.svg";
import styled from "styled-components";

export default function SurveyView() {
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
          <div>닉네임</div>
          <div>0000-00-00</div>
        </ProfileWrite>
      </Profile>
      <Hr></Hr>
      <Content>
        <div>제목을 입력하세요(최대 몇자인지)</div>
        <br></br>
        <div>내용을 입력하세요(최대 몇자인지)</div>
        <br></br>
        <div>1. 어떤 설문인가요?</div>
        <div>2. 어디 소속인지 알려주세요!</div>
        <div>3. 추가적인 경품이 있다면 기재해 주세요</div>
        <div>4. 누구를 대상으로 진행하는 설문인가요?</div>
      </Content>
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
  margin-left: 5vw;
  :first-child {
    margin-bottom: 0.5vh;
    margin-right: 8vw;
  }

  color: #000;
  text-align: center;
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
