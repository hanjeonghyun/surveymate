import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as C from '../../components/SurveyComponents';
import { Link } from 'react-router-dom';

export default function MyPassword() {
    
    const [pwType1, setpwType1] = useState({type: "password", visible: false});
    const [pwType2, setpwType2] = useState({type: "password", visible: false});

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

    return(
    <>
        <C.TitleWrapper>
            <BackBtn onClick={()=>alert("back")}></BackBtn>
            <C.Title>비밀번호 변경</C.Title>
        </C.TitleWrapper>
        
        <Content0>
        <Content>
            <InputLabel>현재 비밀번호</InputLabel>
            <Wrapper>
                <AuthInput2 
                    placeholder='비밀번호를 입력해주세요' 
                    type={pwType1.type}/>
                <BtnE 
                    type='button' 
                    onClick={handlePasswordType1}
                    style={{ background: !pwType1.visible ? "" : "url('src/assets/images/cEyeopen.svg')" }}
                ></BtnE>
            </Wrapper>
        </Content>
        <Content>
            <InputLabel>비밀번호</InputLabel>
            <Wrapper>
                <AuthInput2 
                    placeholder='비밀번호를 입력해주세요' 
                    type={pwType2.type}/>
                <BtnE 
                    type='button' 
                    onClick={handlePasswordType2}
                    style={{ background: !pwType2.visible ? "" : "url('src/assets/images/cEyeopen.svg')" }}
                ></BtnE>
            </Wrapper>
            <P>대소문자, 숫자, 특수문자(@$!*#?&) 포함 8~15자 이내</P>
        </Content>
        </Content0>

            <Blank />
            <C.NextButton
                type="submit"
                >
                <C.ButtonText>변경</C.ButtonText>
            </C.NextButton>
    </>
    );
}

const BackBtn = styled.button`
    background: url('src/assets/images/cBack.svg') no-repeat;
    width: 24px;
    height: 24px;
    border: none;
    position: absolute;
    left: 5vw;
`
const Content0 = styled.div`
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 8vh;
`
const Content = styled.div`
    margin-top: 3vh;
`
const Wrapper = styled.div`
    position: relative;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const InputLabel = styled.p`
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
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
`
const P = styled.p`
    font-family: Poppins;
    font-size: 10px;
    font-weight: 400;
    color: #848383;
    margin-top: 1vh;
`
const BtnE = styled.input`
    background: url('src/assets/images/cEye.svg') no-repeat;
    width: 24px;
    height: 24px;
    border: none;
`
const Blank = styled.p`
    margin-top: 8vh;
`