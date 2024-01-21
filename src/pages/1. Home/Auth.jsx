import React from 'react'
import styled from 'styled-components';
import * as C from '../../components/AuthComponents';

export default function Auth() {
    return(
        <>
        <C.TitleWrapper>
            <C.Title>회원가입</C.Title>
        </C.TitleWrapper>
        <Content0>
            <C.InputLabel>아이디 - 학교 이메일</C.InputLabel>
            <Wrapper>
                <AuthInput2 placeholder='surmate@example.ac.kr'></AuthInput2>
                <BtnA type='button' onClick={()=>alert("이메일")}></BtnA>
            </Wrapper>
        </Content0>
        <Content>
            <C.InputLabel>인증코드 6자리</C.InputLabel>
            <Wrapper>
                <AuthInput2 placeholder='000000'></AuthInput2>
                <BtnA type='button' onClick={()=>alert("인증코드")}></BtnA>
            </Wrapper>
        </Content>
        <Content>
            <C.InputLabel>비밀번호</C.InputLabel>
            <Wrapper>
                <AuthInput2 type='password' placeholder='비밀번호를 입력해주세요'></AuthInput2>
                <BtnE type='button'></BtnE>
            </Wrapper>
            <P>대소문자, 숫자, 특수문자(@$!*#?&) 포함 8~15자 이내</P>
        </Content>
        <C.NextButton onClick={()=>alert("로그인")}>
            <C.ButtonText>다음</C.ButtonText>
        </C.NextButton>
    </>
    );
}

const Content = styled.div`
    margin-top: 4vh;
`
const Content0 = styled.div`
    margin-top: 8vh;
`
const Wrapper = styled.div`
    position: relative;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const P = styled.p`
    font-size: 10px;
    font-weight: 400;
    color: #848383;
    margin-bottom: 8vh;
    margin-top: 1vh;
`
const BtnA = styled.input`
    background: url('src/assets/images/cArrow.svg') no-repeat;
    width: 32px;
    height: 32px;
    border: none;
`
const BtnE = styled.input`
    background: url('src/assets/images/cEye.svg') no-repeat;
    width: 24px;
    height: 24px;
    border: none;
`
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
`;
