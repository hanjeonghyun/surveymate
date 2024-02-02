import styled from "styled-components";
import * as C from "../../components/SurveyComponents";
import SideBar from "../../components/SideBar";
import defaultProfile from "../../assets/images/ddefaultprofile.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function MyProfile() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `api/auth/join?memberId=${encodeURIComponent(
          email
        )}&nickname=${encodeURIComponent(
          nickname
        )}&password=${encodeURIComponent(
          password
        )}&emailToken=${encodeURIComponent(
          number
        )}&messageConsent=true&marketingConsent=true`,
        FormData
      );
      console.log("요청 성공", res);
      return res.data;
    } catch (error) {
      console.log("요청 실패", error);
    }
  };

  const profileFix = () => {
    navigate("/myprofilefix");
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
            src={defaultprofile}
            alt='defaultprofile'
          />
        </DefaultProfile>
      </ProfileWrapper>
      <MyText>스트로베리 초코 생크림 케이크</MyText>
      <Divideline />
      <MenuBox onClick={profileFix}>프로필 변경</MenuBox>
      <MenuBox>비밀번호 변경</MenuBox>
      <MenuBox>아이디 - 학교 메일 변경</MenuBox>
      <MenuBox>회원 탈퇴</MenuBox>
      <SideBar />
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

const Divideline = styled.div`
  width: 90vw;
  height: 1px;
  margin-top: 2vh;
  background: #efedff;
`;

const MenuBox = styled.div`
  text-align: left;
  width: 90vw;
  height: 1vh;
  padding: 25px 10px;
  cursor: pointer;
`;
