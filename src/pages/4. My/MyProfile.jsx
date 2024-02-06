import React from 'react'
import styled from "styled-components";
import * as C from "../../components/SurveyComponents";
import defaultProfile from "../../assets/images/ddefaultProfile.svg";
import { useNavigate } from "react-router-dom";

export default function MyProfile() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const profileFix = () => {
    navigate("/myprofilefix");
  };

  const pwFix = ()=>{
    navigate("/mypassword");
  };

  const withdrawal=()=>{
    navigate("/myout");
  };

  return (
    <>
      <C.TitleWrapper>
        <BackBtn onClick={handleBack}></BackBtn>
        <C.Title>마이페이지</C.Title>
      </C.TitleWrapper>
      <ProfileWrapper>
        <DefaultProfile>
          <img
            src={defaultProfile}
            alt='defaultprofile'
          />
        </DefaultProfile>
      </ProfileWrapper>
      <MyText>스트로베리 초코 생크림 케이크</MyText>
      <Divideline />
      <MenuBox onClick={profileFix}>프로필 변경</MenuBox>
      <MenuBox onClick={pwFix}>비밀번호 변경</MenuBox>
      <MenuBox onClick={withdrawal}>회원 탈퇴</MenuBox>
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

const MyText = styled.p`
  color: #000;
  text-align: center;
  font-family: poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ProfileWrapper = styled.div`
  position: relative;
  margin-top: 3vh;
  width: auto;
  display: flex;
  height: 20vh;
  justify-content: center;
  align-items: center;
`;

const DefaultProfile = styled.div`
  position: absolute;
  z-index: 0;
  border-radius: 70%;
  object-fit: cover;
`;

const MenuBox = styled.div`
  text-align: left;
  width: 90vw;
  height: 1vh;
  padding: 25px 10px;
  cursor: pointer;
`;

const Divideline = styled.div`
  width: 90vw;
  height: 1px;
  margin-top: 2vh;
  background: #efedff;
`;
