import styled from "styled-components";
import * as C from "../../components/AuthComponents";
import ddefaultProfile from "../../assets/images/ddefaultProfile.svg";
import dfixButton from "../../assets/images/dfixButton.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  let [nickname, setInputName] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const [exist, setExist] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  let { memberId, emailToken, password } = location.state;

  let [uploadedImage, setUploadedImage] = useState(ddefaultProfile);

  const onUploadImage = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
  };

  const handleName = (e) => {
    setInputName(e.target.value);
    setNameValid(e.target.value.trim() !== "");
    setNotAllow(false);
  };

  useEffect(() => {
    setNotAllow(!(nameValid && !exist));
  }, [nameValid, exist]);

  const handleSubmit = async () => {
    try {
      const res = await axios.get(
        `https://sleigh.college/api/auth/nickname/check?nickname=${nickname}`,
        {
          headers: { "Content-Type": `application/json` },
        }
      );

      if (res.data.nicknameExist) {
        setExist(true);
        return;
      } else {
        const formData = new FormData();
        formData.append("memberId", memberId);
        formData.append("nickname", nickname);
        formData.append("password", password);
        formData.append("emailToken", emailToken);
        formData.append("messageConsent", true);
        formData.append("marketingConsent", true);

        const resJoin = await axios.post(
          `https://sleigh.college/api/auth/join`,
          formData,
          {
            headers: {
              accept: "*/*",
              "Content-Type": "application/json",
            },
          }
        );
        console.log(resJoin.data);
        navigate("/authrule");
      }
    } catch (error) {
      console.error("요청 에러", error);
    }
  };

  return (
    <>
      <C.TitleWrapper>
        <C.Title>프로필 설정</C.Title>
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
      <C.InputLabel>닉네임</C.InputLabel>
      <C.AuthInput
        placeholder='스트로베리 초코 생크림 케이크'
        name='nickname'
        value={nickname}
        onChange={handleName}
      ></C.AuthInput>
      {exist && <ErrorMsg>이미 사용 중인 닉네임입니다.</ErrorMsg>}
      <SizedBox />
      <SizedBox />
      <C.NextButton
        type='submit'
        disabled={notAllow}
        onClick={handleSubmit}
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

const ErrorMsg = styled.p`
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
  color: #ff0000;
  margin: 8px 0;
`;
