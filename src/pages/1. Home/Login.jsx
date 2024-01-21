import React from 'react'
import styled from 'styled-components'
import { NextButton, TitleWrapper, Title , InputLabel, AuthInput, ButtonText} from '../../components/AuthComponents';
import {Link} from 'react-router-dom'
import coloredLogo from "../../assets/images/ColoredLogo.png"


export default function Login() {

    return(
        <LoginWrapper>
        <TitleWrapper>
            <Title>
                로그인
            </Title>
        </TitleWrapper>
        <LogoImg>
            <img src={coloredLogo} alt="로고" />
        </LogoImg>
              
        <InputLabel>
        아이디
        <br/>
        <LoginInput type="email" inputMode="email" placeholder="surmate@example.ac.kr">
        </LoginInput>
        <br/>
        비밀번호
        <br/>
        <LoginInput type="password" placeholder="비밀번호를 입력해주세요">
        </LoginInput>
        </InputLabel>
        <NextButton >
            <ButtonText>
                로그인
            </ButtonText>
        </NextButton>
        <FindPW>
            비밀번호 찾기 &gt;
        </FindPW>

        <Link to="/auth">
        <GoAuth>
            <GoAuthText>
                <GoAuthText1>
                썰매(Survey Mate)가 처음이신가요?
                </GoAuthText1>
                <GoAuthText2>
                회원가입
                </GoAuthText2>
            </GoAuthText>   
        </GoAuth>
        </Link>

        </LoginWrapper>
        
        
    );
}

const LogoImg = styled.div`
    width:54vw;
    height:17.5vh;
    display:block;
    margin:auto;
    margin-top:5vh;
    margin-bottom:3vh;
`;
const LoginWrapper=styled.div`
    // width:100vw;
    // height:100vh;
`;

const LoginInput=styled(AuthInput)`
    margin-bottom: 5vh;
`;

const FindPW=styled.div`
    color:#848383;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin:3.5vh;
`;

const GoAuth=styled.button`
    border-radius: 10px;
    background: rgba(96, 70, 255, 0.10);
    width: 90vw;
    height:7vh;
    flex-shrink:0;
    border:none;

`;

const GoAuthText=styled.div`
    display:inline-flex;
    align-items: center;
    gap: 40px;
`;
const GoAuthText1=styled.div`
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const GoAuthText2=styled.div`
    color: #6046FF;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding:8px;
`;