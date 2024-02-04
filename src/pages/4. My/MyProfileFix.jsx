import styled from "styled-components";
import * as C from "../../components/SurveyComponents";

import ddefaultProfile from "../../assets/images/ddefaultProfile.svg";
import dfixButton from "../../assets/images/dfixButton.svg";
import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MyProfileFix() {
  const [inputName, setInputName] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const [uploadedImage, setUploadedImage] = useState(ddefaultProfile);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  const onUploadImage = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
  };

  const handleName = (e) => {
    setInputName(e.target.value);
    setNameValid(e.target.value.trim());
  };

  useEffect(() => {
    if (nameValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [nameValid]);

  return (
    <>
      <C.TitleWrapper>
        <BackBtn onClick={handleBack}></BackBtn>
        <C.Title>프로필 변경</C.Title>
      </C.TitleWrapper>
      <ProfileWrapper>
        <DefaultProfile>
          {uploadedImage ? (
            <UploadedImg
              src={uploadedImage}
              alt='profileImage'
            />
          ) : null}
          <FixButton>
            <FileInput onChange={onUploadImage} />
          </FixButton>
        </DefaultProfile>
      </ProfileWrapper>
      <SizedBox></SizedBox>
      <InputLabel>닉네임</InputLabel>
      <AuthInput
        placeholder='스트로베리 초코 생크림 케이크'
        name='nickname'
        value={inputName}
        onChange={handleName}
      ></AuthInput>
      <ErrorMsg>이미 사용 중인 닉네임입니다.</ErrorMsg>
      <C.NextButton
        type='submit'
        disabled={notAllow}
      >
        <C.ButtonText>다음</C.ButtonText>
      </C.NextButton>
    </>
  );
}

const FileInput = ({ onChange }) => {
  return (
    <>
      <ImgInput
        type='file'
        id='fileInput'
        accept='image/*'
        onChange={onChange}
      />
      <Imglabel htmlFor='fileInput' />
    </>
  );
};

const BackBtn = styled.button`
  background: url("src/assets/images/dicon_back.svg") no-repeat;
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
  z-index: 0;
  border-radius: 70%;
  object-fit: cover;
`;

const FixButton = styled.div`
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
  margin-bottom: 10vh;
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
