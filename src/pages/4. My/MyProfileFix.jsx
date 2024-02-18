import styled from "styled-components";
import * as C from "../../components/SurveyComponents";
import * as B from "../../components/BottomSheet";
import cBack from "../../assets/images/cBack.svg";
import ddefaultProfile from "../../assets/images/ddefaultProfile.svg";
import dfixButton from "../../assets/images/dfixButton.svg";
import dchangeProfile from "../../assets/images/dchangeprofile.svg";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { nicknameState } from "../../components/RecoilDummys";
import { useRecoilValue } from "recoil";

export default function MyProfileFix() {
  const [nickname, setNickname] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [exist, setExist] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showBottom, setShowBottom] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(ddefaultProfile);
  const nickName = useRecoilValue(nicknameState);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const onFixClick = () => {
    setShowBottom(true);
  };

  const onDelete = () => {
    setUploadedImage(ddefaultProfile);
    setShowBottom(false);
  };

  const onUploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setShowBottom(false);
    } else {
      setUploadedImage(ddefaultProfile);
    }
  };

  const handleName = (e) => {
    const value = e.target.value;
    setNickname(value);
    setNameValid(value.trim() !== "");
    setExist(false);
  };

  useEffect(() => {
    setNotAllow(!(nameValid && !exist));
  }, [nameValid, exist]);

  const profileFix = async () => {
    const token = localStorage.getItem("token");

    let resFix;
    try {
      resFix = await axios.patch(
        `/api/auth/nickname`,
        {
          newNickname: nickname,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setShowAlert(true);
    } catch (error) {
      if (resFix && resFix.data.status === "NICKNAME409") {
        setExist(true);
        console.error("요청 에러", error);
      }
    }
  };

  return (
    <>
      <C.TitleWrapper>
        <BackBtn
          src={cBack}
          onClick={handleBack}
        ></BackBtn>
        <C.Title>프로필 변경</C.Title>
      </C.TitleWrapper>
      <ProfileWrapper>
        <DefaultProfile>
          <UploadedImg
            src={uploadedImage}
            alt='profileImage'
          />
          <FixButton>
            <Imglabel onClick={onFixClick} />
          </FixButton>
          {showBottom && (
            <ProfileBottom
              onDelete={onDelete}
              onUploadImage={onUploadImage}
            />
          )}
        </DefaultProfile>
      </ProfileWrapper>
      <SizedBox></SizedBox>
      <InputLabel>닉네임</InputLabel>
      <AuthInput
        placeholder={nickName}
        name='nickname'
        value={nickname}
        onChange={handleName}
      ></AuthInput>
      {exist && <ErrorMsg>이미 사용 중인 닉네임입니다.</ErrorMsg>}
      <SizedBox />
      <C.NextButton
        type='submit'
        disabled={notAllow}
        onClick={profileFix}
      >
        <C.ButtonText>변경</C.ButtonText>
      </C.NextButton>
      {showAlert && (
        <Alert>
          <p>변경 내용이 저장되었습니다.</p>
        </Alert>
      )}
    </>
  );
}

function ProfileBottom({ onDelete, onUploadImage }) {
  return (
    <>
      <B.BackgroundBottomSheet>
        <B.BottomSheetWrapper>
          <B.BottomSheetInfo>
            <B.InputLabel>프로필 사진 관리</B.InputLabel>
            <B.ProcessExplain>
              프로필 사진을 변경하거나
              <br /> 기본 프로필로 되돌릴 수 있어요.
            </B.ProcessExplain>
            <img
              src={dchangeProfile}
              alt='changeprofile'
            />
          </B.BottomSheetInfo>
          <B.BottomButtonWrapper>
            <B.CancelButton onClick={onDelete}>
              <C.ButtonText>삭제</C.ButtonText>
            </B.CancelButton>
            <FileInput onUploadImage={onUploadImage} />
          </B.BottomButtonWrapper>
        </B.BottomSheetWrapper>
      </B.BackgroundBottomSheet>
    </>
  );
}

function FileInput({ onUploadImage }) {
  return (
    <>
      <B.ConfirmButton>
        <label
          htmlFor='fileInput'
          style={{ cursor: "pointer" }}
        >
          <C.ButtonText>
            앨범에서 선택
            <input
              type='file'
              id='fileInput'
              accept='image/*'
              onChange={onUploadImage}
              style={{ display: "none" }}
            />
          </C.ButtonText>
        </label>
      </B.ConfirmButton>
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

const SizedBox = styled.div`
  width: 90vw;
  height: 7vh;
`;

const ProfileWrapper = styled.div`
  position: relative;
  margin-top: 10vh;
  width: auto;
  display: flex;
  height: 20vh;
  justify-content: center;
  align-items: center;
`;

const DefaultProfile = styled.div`
  position: absolute;
  /* z-index: 0; */
  border-radius: 70%;
  object-fit: cover;
`;

const FixButton = styled.img`
  position: absolute;
  left: 65%;
  top: 85%;
  transform: translateY(-50%);
  z-index: 2;
  margin: 0;
  cursor: pointer;
`;

const UploadedImg = styled.img`
  border-radius: 70%;
  width: 125px;
  height: 125px;
`;

const ImgInput = styled.input`
  display: none;
`;

const Imglabel = styled.label`
  background-image: url(${dfixButton});
  background-size: cover;
  width: 32px;
  height: 32px;
  display: inline-block;
  cursor: pointer;
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

const AuthInput = styled.input`
  width: calc(90vw - 14px);
  height: 3vh;
  padding: 5px;
  border: none;
  margin-top: 2vh;
  border-bottom: 0.4px solid rgba(96, 70, 255, 0.3);
  &::placeholder {
    color: #d6d6d6;
  }
  &:focus {
    outline: none;
  }
`;

const ErrorMsg = styled.p`
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  color: #ff0000;
`;

const Alert = styled.div`
  position: fixed;
  bottom: 13vh;
  left: 50%;
  transform: translateX(-50%);
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

  animation: fadeInOut 4s forwards;
  opacity: 0;
  @keyframes fadeInOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
