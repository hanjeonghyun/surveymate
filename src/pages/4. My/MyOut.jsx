import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as C from "../../components/SurveyComponents";
import axios from "axios";
import back from "../../assets/images/cBack.svg";

import EyeClose from "../../assets/images/cEye.svg";
import EyeOpen from "../../assets/images/cEyeopen.svg";

export default function MyOut() {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [isPassword, setIsPassword] = useState(false);
  const [pwType1, setpwType1] = useState({ type: "password", visible: false });

  const handlePasswordType1 = (e) => {
    setpwType1(() => {
      if (!pwType1.visible) {
        return { type: "text", visible: true };
      } else {
        return { type: "password", visible: false };
      }
    });
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    setIsPassword(true);
  };

  const onClickButton=()=>{
        const token = localStorage.getItem('token');
        if (isPassword){
            axios.post("https://sleigh.college/api/auth/account",{
                currentPassword: password,
            },{
                headers: {
                    'Authorization': token,
                },
            })
            .then((response)=>{
                navigate("/")
            })
            .catch((response)=>{
                if (response.response.status===401){
                    //alert('401 error')
                    console.log(response)
                    console.log(token)
                }else{
                    //alert('404 error')
                    console.log(response)
                    console.log(password)
            }
            })
        }else{

        }
    }

  return (
    <>
      <C.TitleWrapper>
        <BackBtn
          src={back}
          onClick={() => {
            navigate(-1);
          }}
        ></BackBtn>
        <C.Title>회원 탈퇴</C.Title>
      </C.TitleWrapper>

      <Content0>
        <Question>
          정말 계정을 삭제하시겠어요?
          <br />
          삭제 후 보유한 포인트는 되돌릴 수 없습니다.
        </Question>
        <Content>
          <InputLabel>비밀번호 확인</InputLabel>
          <Wrapper>
            <AuthInput2
              placeholder='비밀번호를 입력해주세요'
              type={pwType1.type}
              onChange={onChangePassword}
              id='password'
              name='password'
              value={password}
            />
            <BtnE
              type='button'
              onClick={handlePasswordType1}
              src={pwType.visible ? EyeOpen : EyeClose}
            ></BtnE>
          </Wrapper>
          <P>
            탈퇴 및 가입을 의도적으로 반복할 경우 통보없이 제제의 대상이 될 수
            있습니다.
          </P>
        </Content>
      </Content0>

      <Blank />
      <C.NextButton
        type='submit'
        onClick={onClickButton}
      >
        <C.ButtonText>회원 탈퇴</C.ButtonText>
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
  margin-top: 5vh;
`;
const Content = styled.div`
  margin-top: 3vh;
`;
const Question = styled.p`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
const Wrapper = styled.div`
  position: relative;
  width: auto;
  display: flex;
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
  outline: none;
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

const BtnE = styled.img`
  position:absolute;
  border: none;
  right:0;
`;
const Blank = styled.p`
  margin-top: 8vh;
`;
