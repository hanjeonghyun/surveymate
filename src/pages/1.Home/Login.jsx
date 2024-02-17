import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import { NextButton, TitleWrapper, Title , InputLabel, AuthInput, ButtonText} from '../../components/AuthComponents';
import {Link, useNavigate} from 'react-router-dom'
import coloredLogo from "../../assets/images/aColoredLogo.png"

import axios from 'axios'

export default function Login() {
    const [inputId,setInputId] = useState('');
    const [inputPw,setInputPw] = useState('');

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [pwType, setpwType] = useState({type: "password", visible: false});
    const [notAllow, setNotAllow]= useState(true);
    const [isLogin, setIsLogin] = useState('true');

    const handleId = (e) =>{
        setInputId(e.target.value);
        setIdValid(e.target.value.trim());
    };

    const handlePw=(e)=>{
        setInputPw(e.target.value);
        setPwValid(e.target.value.trim());
    };

    const handlePasswordType = () => {
        setpwType(() => {
        if (!pwType.visible) {
            return { type: "text", visible: true };
        } else {
            return { type: "password", visible: false };
        }
        });
    };


    useEffect(()=>{
        localStorage.removeItem('token');
        if(idValid && pwValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);

    },[idValid,pwValid])

    const navigate = useNavigate();
    const handleSubmit =async()=>{
        try{
            const response = await axios.post("/api/auth/login",{
                id: inputId,
                password: inputPw,
            });
            navigate('/main');
            //alert('로그인 성공!');
            console.log('서버 응답:', response);
            console.log(response.data.data.jwt);
            localStorage.setItem("token", response.data.data.jwt);

        }catch (error){
            setIsLogin(false);
            if (error.response) {
                // 서버 응답이 있을 경우
                console.error('서버 응답 상태 코드:', error.response.status);
                console.error('서버 응답 데이터:', error.response.data);
            } else if (error.request) {
                // 서버 응답이 없을 경우 (요청은 보냈지만 응답이 없음)
                console.error('서버 응답 없음');
            } else {
                // 오류가 발생한 경우
                console.error('Axios 오류:', error.message);
            }
        }
    };

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
        </InputLabel>
        <LoginInput type="email" inputMode="email" placeholder="surmate@example.ac.kr"
        value={inputId} onChange={handleId}>
        </LoginInput>
        
    <Content>
        <InputLabel>
            비밀번호
        </InputLabel>
        <Wrapper>
            <LoginInput type={pwType.type} placeholder="비밀번호를 입력해주세요"
            value={inputPw} onChange={handlePw}>
            </LoginInput>
            <BtnE 
                type='button' 
                onClick={handlePasswordType}
                style={{ background: !pwType.visible ? "" : "url('src/assets/images/cEyeopen.svg')" }}
            ></BtnE>
        </Wrapper>
        <ErrorMessageWrap className={!isLogin ? "Alert" : ""}>
                아이디 또는 비밀번호를 잘못 입력하셨습니다.
        </ErrorMessageWrap>
        </Content>

        <NextButton disabled={notAllow} onClick={handleSubmit}>
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
const Content = styled.div`
    margin-top: 4vh;
    margin-bottom:4vh;
`

const Wrapper = styled.div`
    position: relative;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginInput=styled(AuthInput)`
    margin-bottom: 0vh;
    margin-top:0vh;
`;

const BtnE = styled.button`
    background: url('src/assets/images/cEye.svg') no-repeat;
    width: 24px;
    height: 24px;
    border: none;
    background-size:cover;
`
const ErrorMessageWrap = styled.div`
    font-size: 10px;
    font-weight: 400;
    display: none;
    margin-top: 1vh;
    &.Alert{
        color: #FF0000;
        display: inline;
        
    }
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
