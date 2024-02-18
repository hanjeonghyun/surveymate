import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as C from "../../components/SurveyComponents";
import back from "../../assets/images/aback_icon.svg";
import EyeClose from "../../assets/images/cEye.svg";
import EyeOpen from "../../assets/images/cEyeopen.svg";
import axios from "axios";

export default function MyPassword() {
  const navigate = useNavigate();
  const [pwType1, setpwType1] = useState({ type: "password", visible: false });
  const [pwType2, setpwType2] = useState({ type: "password", visible: false });
  const [Cpassword, setCPassword] = useState();
  const [isCPassword, setIsCPassword] = useState(false);
  const [Npassword, setNPassword] = useState();
  const [isNPassword, setIsNPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState();

  const handleBack = () => {
    navigate(-1);
  };

  const onChangeCPassword = (e) => {
    const currentCPassword = e.target.value;
    setCPassword(currentCPassword);
    const CpasswordRegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    if (!CpasswordRegExp.test(currentCPassword)) {
      setIsCPassword(false);
    } else {
      setIsCPassword(true);
    }
  };
  const onChangeNPassword = (e) => {
    const currentNPassword = e.target.value;
    setNPassword(currentNPassword);
    const NpasswordRegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    if (!NpasswordRegExp.test(currentNPassword)) {
      setIsNPassword(false);
    } else {
      setIsNPassword(true);
    }
  };

  const handlePasswordType1 = (e) => {
    setpwType1(() => {
      if (!pwType1.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };
  const handlePasswordType2 = (e) => {
    setpwType2(() => {
      if (!pwType2.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  const onClickButton = () => {
    if (isNPassword) {
      const token = localStorage.getItem('token');
      axios
        .patch("https://sleigh.college/api/auth/password/update", {
          currentPassword: Cpassword,
          newPassword: Npassword,
        },{
          headers: {
              'Authorization': token,
          },
        })
        .then((response) => {
          navigate("/myprofile");
          console.log(response);
        })
        .catch((response) => {
          if (response.response.status === 401) {
            alert("401 error");
            console.log(response);
          } else {
            alert("404 error");
          }
        });
    } else {
      setPasswordMessage(
        "비밀번호를 잘못 입력했습니다. 입력 내용을 다시 확인해주세요."
      );
    }
  };

  return (
    <>
      <C.TitleWrapper>
        <BackBtn src={back} onClick={handleBack}></BackBtn>
        <C.Title>비밀번호 변경</C.Title>
      </C.TitleWrapper>

      <Content0>
        <Content>
          <InputLabel>현재 비밀번호</InputLabel>
          <Wrapper>
            <AuthInput2
              placeholder='비밀번호를 입력해주세요'
              type={pwType1.type}
              onChange={onChangeCPassword}
              id='Cpassword'
              name='Cpassword'
              value={Cpassword}
            />
         <BtnE
              type='button'
              onClick={handlePasswordType1}
              src={pwType1.visible ? EyeOpen : EyeClose}
            ></BtnE>
          </Wrapper>
        </Content>
        <Content>
          <InputLabel>비밀번호</InputLabel>
          <Wrapper>
            <AuthInput2
              placeholder='비밀번호를 입력해주세요'
              type={pwType2.type}
              onChange={onChangeNPassword}
              id='Npassword'
              name='Npassword'
              value={Npassword}
            />
            <BtnE
              type='button'
              onClick={handlePasswordType2}
              src={pwType2.visible ? EyeOpen : EyeClose}
            ></BtnE>
          </Wrapper>
          <P>대소문자, 숫자, 특수문자(@$!*#?&) 포함 8~15자 이내</P>
          <PA
            style={{ display: !isNPassword ? "inline" : "inline" }}
            className={!isNPassword ? "AlertR" : "AlertR"}
          >
            {passwordMessage}
          </PA>
        </Content>
      </Content0>

      <Blank />
      <C.NextButton
        type='submit'
        onClick={onClickButton}
      >
        <C.ButtonText>변경</C.ButtonText>
      </C.NextButton>
    </>
  );
}

const BackBtn = styled.img`
  margin-left:5vw;
  position:absolute;
  left:0; 
`;
const Content0 = styled.div`
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 8vh;
`;
const Content = styled.div`
  margin-top: 3vh;
`;
const Wrapper = styled.div`
  position: relative;
  width: auto;
  //display: flex;
  justify-content: center;
  align-items: center;
`;
const InputLabel = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
`;
const AuthInput2 = styled.input`
  width: calc(90vw - 55px);
  height: 3vh;
  padding: 5px;
  border: none;
  border-bottom: 0.4px solid rgba(96, 70, 255, 0.3);
  &::placeholder {
    color: #d6d6d6;
  }
`;
const P = styled.p`
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  color: #848383;
  margin-top: 1vh;
`;
const PA = styled.p`
  font-size: 10px;
  font-weight: 400;
  display: none;
  margin-top: 1vh;
  &.AlertR {
    color: #ff0000;
    display: inline;
  }
  &.AlertG {
    color: #848383;
    display: inline;
  }
`;

const BtnE = styled.img`
  position:absolute;
  border: none;
  //right:0;
`;
const Blank = styled.p`
  margin-top: 8vh;
`;
