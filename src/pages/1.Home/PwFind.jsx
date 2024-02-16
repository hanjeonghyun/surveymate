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

    const [alertMessage, setAlertMessage]=useState({one:"",two:"",three:""})
    const [warningMessage, setWarningMessage]=useState({one:"",two:"",three:""})
    const [pwType, setpwType] = useState({type: "password", visible: false});


    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);
    };

    const onClickEmail=()=>{
            axios.post(`/api/auth/password/certification-request`,{
                receiver: email,
                mailSubject: "[썰매 (Survey Mate)] 회원가입을 위한 인증 코드입니다.",
                mailTitle: "인증 코드",
            })
            .then((response)=>{
                console.log(response);
                setAlertMessage({...alertMessage, one:"인증메일이 발송되었습니다. 확인해주세요.", two:"3분 이내로 입력해주세요."})
                setWarningMessage({one:"",two:"",three:""})
            })
            .catch((response)=>{
                console.log(response);

                if (response.response.status===401){
                    alert('존재하지 않는 아이디입니다.')}
                else{
                    alert('서버 통신 에러')
                }
            })
        }
    

    const onChangeCode=(e)=>{
        const currentCode = e.target.value;
        setCode(currentCode);
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
                setWarningMessage({...warningMessage, two:"인증코드를 잘못 입력하였습니다."})
                setAlertMessage({...warningMessage, two:""})
    
            }else{
            alert("서버 통신 에러")

        }
        })
        
    }

    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPassword(currentPassword);
    };

    const navigate = useNavigate();
    const onClickButton = (e) => {
        e.preventDefault();
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
                    setWarningMessage({...warningMessage, three:"기존 비밀번호와 동일합니다."})
                    setColor(true)
                }else{
                    alert("서버 통신 오류")
                }
            })
        }
    
    const handlePasswordType = (e) => {
        setpwType(() => {
        if (!pwType.visible) {
            return { type: "text", visible: true };
        } else {
            return { type: "password", visible: false };
        }
        });
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
                <BtnA type='button' className={alertMessage.two==="3분 이내로 입력해주세요."?"resend":""} onClick={onClickEmail}></BtnA>
            </Wrapper>
            <P>{alertMessage.one}</P>
            <P className="red">{warningMessage.one}</P>
        </Content0>
        <Content>
            <C.InputLabel>인증코드 6자리</C.InputLabel>
            <Wrapper>
                <AuthInput2 placeholder='000000' type='number'
                id="code" name="code" value={code} onChange={onChangeCode}
                className={token ? "gray" : ""}/>
                <BtnA type='button' className={alertMessage.two==="3분 이내로 입력해주세요."?"":"cant"} onClick={onClickCode}></BtnA>
            </Wrapper>
            <P>{alertMessage.two}</P>
            <P className="red">{warningMessage.two}</P>
        </Content>
        <Content>
            <C.InputLabel>새로운 비밀번호</C.InputLabel>
            <Wrapper>
                <AuthInput2 
                    type={pwType.type} 
                    placeholder='비밀번호를 입력해주세요'
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                     />
                <BtnE 
                    type='button' 
                    onClick={handlePasswordType}
                    style={{ background: !pwType.visible ? "" : "url('src/assets/images/cEyeopen.svg')" }}
                    ></BtnE>
            </Wrapper>
            <P>대소문자, 숫자, 특수문자(@$!*#?&) 포함 8~15자 이내</P>
            <P>{alertMessage.three}</P>
            <P className="red">{warningMessage.three}</P>
        </Content>
        <Blank></Blank>

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
    margin-top: 1vh;
    &.red{
        color:red;
    }
`

const BtnA = styled.input`
    background: url('src/assets/images/cArrow.svg') no-repeat;
    width: 32px;
    height: 32px;
    border: none;
    &.cant{
        background:url('src/assets/images/cArrowgray.svg') no-repeat;
    }
    &.resend{
        background: url('src/assets/images/cResend.svg') no-repeat;
        width: 58px;
        height: 32px;
    }
`
const BtnE = styled.input`
    background: url('src/assets/images/cEye.svg') no-repeat;
    width: 24px;
    height: 24px;
    border: none;
    &.see{
        background: url('src/assets/images/bEye.svg') no-repeat;
    }
`
const AuthInput2 = styled.input`
    position:relative;
    left:-5px;
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
    &.gray{
        color:gray
    }
`;

const Blank=styled.div`
    height:100px;
`