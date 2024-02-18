import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as C from "../../components/AuthComponents";
import { Link } from "react-router-dom";
import axios from "axios";
import Arrow from "../../assets/images/cArrow.svg";
import GArrow from "../../assets/images/cArrowgray.svg"
import Resend from "../../assets/images/cResend.svg";
import EyeClose from "../../assets/images/cEye.svg";
import EyeOpen from "../../assets/images/cEyeopen.svg";
export default function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");

  const [emailMessage, setEmailMessage] = useState(
    "현재 대학생 신분인 경우 소속 대학 이메일(~.ac.kr/.edu 등)로 가입해주세요."
  );
  const [numberMessage, setNumberMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [sendNumber, setSendNumber] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const [color, setColor] = useState(true);

  const [pwType, setpwType] = useState({ type: "password", visible: false });

  const [code, setCode] = useState("");
  const [token, setToken] = useState("");

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.+[a-zA-Z0-9-]/i;
    if (!emailRegExp.test(currentEmail)) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const onClickEmail = () => {
    if (isEmail) {
      axios
        .post("/api/auth/email/certification-request", {
          receiver: email,
        })
        .then((response) => {
          console.log(response);
          console.log(code);
          setSendEmail(true);
          setSendNumber(true);
          setColor(true);
          setEmailMessage("인증메일이 발송되었습니다 확인해주세요.");
          setNumberMessage("3분 이내로 입력해주세요.");
        })
        .catch((response) => {
          console.log(response);
          if (response.response.status === 401) {
            alert("존재하지 않는 아이디입니다.");
          } else {
            alert("서버 통신 에러");
          }
        });
    } else {
      setEmailMessage("이메일 형식이 유효하지 않습니다.");
      setColor(false);
      setSendEmail(false);
      setNumberMessage("");
    }
  };

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onClickCode = () => {
    axios
      .post("/api/auth/email/certification", {
        emailAddress: email,
        code: code,
      })
      .then((response) => {
        const getToken = response.data.data.emailValidationToken;
        if (getToken) {
          setToken(getToken);
          setNumberMessage("인증코드가 확인되었습니다.");
          setIsNumber(true);
          setSendNumber(true);
          console.log(token);
        }
      })
      .catch((response) => {
        if (response.response.status === 401) {
        } else {
          setNumberMessage("인증코드를 잘못 입력하였습니다.");
          setSendNumber(false);
          setIsNumber(false);
        }
      });
  };

  const navigate = useNavigate();
  const onClickButton = (e) => {
    e.preventDefault();

    const goToNext = () => {
      navigate("/authimg", {
        state: { memberId: email, emailToken: token, password: password },
      });
    };

    if (!isPassword ? true : false) {
      setPasswordMessage(
        "비밀번호를 잘못 입력했습니다. 입력 내용을 다시 확인해주세요."
      );
    } else if (!isEmail || !isNumber ? true : false) {
      setPasswordMessage("");
    } else {
      goToNext();
    }
  };

  const handlePasswordType = (e) => {
    setpwType(() => {
      if (!pwType.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  return (
    <>
      <C.TitleWrapper>
        <C.Title>회원가입</C.Title>
      </C.TitleWrapper>
      <Content0>
        <C.InputLabel>아이디 - 이메일</C.InputLabel>
        <Wrapper>
          <AuthInput2
            placeholder='surmate@example.ac.kr'
            id='email'
            name='email'
            value={email}
            onChange={onChangeEmail}
            className={!sendEmail ? "" : "resend"}
          />
          <BtnA

            onClick={onClickEmail}
            src={!sendEmail ? Arrow : Resend}
          ></BtnA>
        </Wrapper>
        <PA className={!color ? "AlertR" : "AlertG"}>{emailMessage}</PA>
      </Content0>
      <Content>
        <C.InputLabel>인증코드 6자리</C.InputLabel>
        <Wrapper>
          <AuthInput2
            placeholder='000000'
            maxLength={6}
            id='code'
            name='code'
            value={code}
            onChange={onChangeCode}
          />
          <BtnA

          onClick={onClickEmail}
          src={!sendEmail ? GArrow : Arrow}
          ></BtnA>
          
        </Wrapper>
        <PA
          style={{ display: !sendNumber ? "inline" : "inline" }}
          className={!sendNumber ? "AlertR" : "AlertG"}
        >
          {numberMessage}
        </PA>
      </Content>
      <Content>
        <C.InputLabel>비밀번호</C.InputLabel>
        <Wrapper>
          <AuthInput2
            type={pwType.type}
            placeholder='비밀번호를 입력해주세요'
            id='password'
            name='password'
            value={password}
            onChange={onChangePassword}
          />
          <BtnE
            type='button'
            onClick={handlePasswordType}
            src={pwType.visible ? EyeOpen : EyeClose}
          ></BtnE>
        </Wrapper>
        <P>대소문자, 숫자, 특수문자(@$!*#?&) 포함 8~15자 이내</P>
        <PA
          style={{ display: !isPassword ? "inline" : "inline" }}
          className={!isPassword ? "AlertR" : "AlertR"}
        >
          {passwordMessage}
        </PA>
      </Content>

      <Link to='/login'>
        <Blank />
        <C.NextButton
          type='submit'
          onClick={onClickButton}
          className='button'
        >
          <C.ButtonText>다음</C.ButtonText>
        </C.NextButton>
      </Link>
    </>
  );
}

const Content = styled.div`
  margin-top: 4vh;
`;
const Content0 = styled.div`
  margin-top: 8vh;
`;
const Wrapper = styled.div`
  position: relative;
  width: auto;
  //display: flex;
  justify-content: center;
  align-items: center;
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
const P = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #848383;
  margin-top: 1vh;
`;
const BtnA = styled.img`
  &.Arrow {
    //background: url(${GArrow}) no-repeat;
    width: 32px;
    height: 32px;
  }
  //background: url(${Arrow}) no-repeat;
  width: 32px;
  height: 32px;
  border: none;
  &.resend {
    //background: url(${Resend}) no-repeat;
    width: 58px;
    height: 32px;
  }
`;
const BtnE = styled.img`
  position:absolute;
  border: none;
  //right:0;
  //width: 32px;
    //height: 32px;
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
  &:focus {
    outline: none;
  }
  &.resend {
    width: calc(90vw - 81px);
  }
`;
const Blank = styled.p`
  margin-top: 8vh;
`;
