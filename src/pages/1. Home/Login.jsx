import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import { NextButton, TitleWrapper, Title , InputLabel, AuthInput, ButtonText} from '../../components/AuthComponents';
import {Link} from 'react-router-dom'
import coloredLogo from "../../assets/images/aColoredLogo.png"


export default function Login() {
    const [inputId,setInputId] = useState('');
    const [inputPw,setInputPw] = useState('');

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow]= useState(true);

    const handleId = (e) =>{
        setInputId(e.target.value);
        const regex=
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(e.target.value)){
            setIdValid(true);
        } else{
            setIdValid(false);
        }
    };

        const handlePw=(e)=>{
        setInputPw(e.target.value);
        const regex=
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[@$!*#?&])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,15}$/;
        if(regex.test(e.target.value)){
            setPwValid(true);
        } else{
            setPwValid(false);
        }
    };

    useEffect(()=>{
        if(idValid && pwValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);

    },[idValid,pwValid])

    return(
        <>
        <TitleWrapper>
            <Title>
                로그인
            </Title>
        </TitleWrapper>
        <LogoImg>
            <img src={coloredLogo} alt="로고" style={{position: 'absolute'}}/>
        </LogoImg>
        
        <InputLabel>
            아이디
            <br/>
            <LoginInput type="email" inputMode="email" placeholder="surmate@example.ac.kr"
            value={inputId} onChange={handleId}>
            </LoginInput>
            <br/>
            비밀번호
            <br/>
            <LoginInput type="password" placeholder="비밀번호를 입력해주세요"
            value={inputPw} onChange={handlePw}>
            </LoginInput>
        </InputLabel>

        <NextButton disabled={notAllow} >
            <ButtonText>
                로그인
            </ButtonText>
        </NextButton>
        <Link to="/pwfind">
        <FindPW>
            비밀번호 찾기 &gt;
        </FindPW>
        </Link>

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
        </>  
        
    );
}


const LogoImg = styled.div`
    position:relative;
    display:block;
    margin:auto;
    margin-top:5vh;
    margin-bottom:3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width:50vw;
    height:17.5vh;

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
    height:6.25vh;
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
