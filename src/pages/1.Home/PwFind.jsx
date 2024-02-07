import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as C from '../../components/AuthComponents';
import { Link } from 'react-router-dom';
import axios from "axios";
import { atom, useRecoilState, RecoilEnv } from 'recoil';
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
const tokenState=atom({
    key:"currentToken",
    default:"",
});

export default function PwFind() {
    const [token, setToken]=useRecoilState(tokenState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode]=useState('');

    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailRegExp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a]+[c]+\.+[k]+[r]/i;

        if (!emailRegExp.test(currentEmail)) {
            setIsEmail(false);
        } else {
            setIsEmail(true);
        }
    };

    const onClickEmail=()=>{
        if (isEmail){
            axios.post(`/api/auth/password/certification-request`,{
                receiver: email,
                mailSubject: "[썰매 (Survey Mate)] 회원가입을 위한 인증 코드입니다.",
                mailTitle: "인증 코드",
            })
            .then((response)=>{
                console.log(response);
                alert("이메일로 인증코드가 전송되었습니다")
            })
            .catch((response)=>{
                console.log(response);
                if (response.response.status===401){
                    alert('존재하지 않는 아이디입니다.')}
                else{
                    alert('서버 통신 에러')
                }
            })
        }else{
            alert("이메일 형식을 지켜주세요")
        }
    }

    const onChangeCode=(e)=>{
        setCode(e.target.value);
    }

    const onClickCode=()=>{
        axios.post("/api/auth/password/certification",{
            emailAddress: email,
            code:code,
        })
        .then((response)=>{
            console.log(response);
            const getToken=response.data.data.emailValidationToken
            if (getToken){
                setToken(getToken)
                alert("인증되었습니다.")
                console.log(token)
            }
        })
        .catch((response)=>{
            if (response.response.status===401){
                alert("잘못된 인증번호입니다.")
            }else{
            alert("서버 통신 에러")
        }
        })
        
    }

    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
        
        if (!passwordRegExp.test(currentPassword)) {
            setIsPassword(false);
        } else { 
            setIsPassword(true);
        }
    };

    const navigate = useNavigate();
    const onClickButton = (e) => {
        e.preventDefault();
        if (isPassword){
            axios.patch('/api/auth/password/reset',{
                passwordResetToken: token,
                newPassword: password,
            })
            .then((response)=>{
                console.log(response);
                navigate("/login");
                
            })
            .catch((response)=>{
                console.log(response);
                if(response.response.status===401){
                    alert("다른 비밀번호를 입력해주세요")
                }else{
                    alert("서버 통신 오류")
                }
            })
        }else{
            alert('이메일 혹은 비밀번호를 정확히 입력해주세요.');
            window.location.reload();
        }
        
    };

    

    return(
        <>
        <C.TitleWrapper>
            <C.Title>비밀번호 찾기</C.Title>
        </C.TitleWrapper>
        <Content0>
            <C.InputLabel>아이디 - 학교 이메일</C.InputLabel>
            <Wrapper>
                <AuthInput2 
                    placeholder='surmate@example.ac.kr'
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={onChangeEmail} />
                <BtnA type='button' onClick={onClickEmail}></BtnA>
            </Wrapper>
        </Content0>
        <Content>
            <C.InputLabel>인증코드 6자리</C.InputLabel>
            <Wrapper>
                <AuthInput2 placeholder='000000' type='number'
                id="code" name="code" value={code} onChange={onChangeCode}/>
                <BtnA type='button' onClick={onClickCode}></BtnA>
            </Wrapper>
        </Content>
        <Content>
            <C.InputLabel>새로운 비밀번호</C.InputLabel>
            <Wrapper>
                <AuthInput2 
                    type='password' 
                    placeholder='비밀번호를 입력해주세요'
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChangePassword} />
                <BtnE type='button' onClick={onClickButton} ></BtnE>
            </Wrapper>
            <P>대소문자, 숫자, 특수문자(@$!*#?&) 포함 8~15자 이내</P>
        </Content>

        <Link to="/login">
            <C.NextButton
                type="submit"
                onClick={onClickButton}
                className="button">
                <C.ButtonText>완료</C.ButtonText>
            </C.NextButton>
        </Link>
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

