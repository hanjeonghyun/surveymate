import React from "react";
import styled from "styled-components";
import * as C from "../../components/SurveyComponents";
import defaultProfile from "../../assets/images/ddefaultProfile.svg";
import next_icon from "../../assets/images/dicon_next.svg";
import { useNavigate } from "react-router-dom";
import { nicknameState } from "../../components/RecoilDummys";
import { useRecoilValue } from "recoil";
import cBack from "../../assets/images/cBack.svg";

export default function MyProfile() {
  const navigate = useNavigate();
  const nickName = useRecoilValue(nicknameState);

  const handleBack = () => {
    navigate(-1);
  };

  const profileFix = () => {
    navigate("/myprofilefix");
  };

  const pwFix = () => {
    navigate("/mypassword");
  };

  const withdrawal = () => {
    navigate("/myout");
  };

  return (
    <>
      <C.TitleWrapper>
        <BackBtn
          src={cBack}
          onClick={handleBack}
        ></BackBtn>
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
      <MyText>{nickName}</MyText>
      <Divideline />
      <MenuWrapper>
        <MenuContainer>
          <MenuBox onClick={profileFix}>프로필 변경</MenuBox>
          <img src={next_icon}></img>
        </MenuContainer>
        <MenuContainer>
          <MenuBox onClick={pwFix}>비밀번호 변경</MenuBox>
          <img src={next_icon}></img>
        </MenuContainer>
        <MenuContainer>
          <MenuBox onClick={withdrawal}>회원 탈퇴</MenuBox>
          <img src={next_icon}></img>
        </MenuContainer>
      </MenuWrapper>
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

const MyText = styled.p`
  color: #000;
  text-align: center;
  font-family: poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
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
  margin: 20px 0 10px 0;
`;

const MenuWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-align: left;
  height: 1vh;
  padding: 3.125vh 0vw;
  cursor: pointer;
`;
