import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const navigate=useNavigate();
    return(
        <All>
            <Top>
                <Logo></Logo>
                <LBtn onClick={()=>alert("프로필")}></LBtn>
            </Top>
            <Sset>
                <Stitle><B>신규 등록</B> 설문조사</Stitle>
                <Sone>
                <Stwo>
                    <Scontent onClick={()=>navigate("/surveyview1")}>설문조사 제목 1</Scontent>
                    <Scontent>설문조사 제목 2</Scontent>
                    <Scontent>설문조사 제목 3</Scontent>
                </Stwo>
                <Stwo>
                    <Scontent>설문조사 제목 4</Scontent>
                    <Scontent>설문조사 제목 5</Scontent>
                    <Scontent>설문조사 제목 6</Scontent>
                </Stwo>
                </Sone>
            </Sset>
            <Sset>
                <Stitle><B>신규 판매 등록</B> 설문조사</Stitle>
                <Sone>
                <Stwo>
                    <Scontent onClick={()=>navigate("/marketview1")}>설문조사 제목 1</Scontent>
                    <Scontent>설문조사 제목 2</Scontent>
                    <Scontent>설문조사 제목 3</Scontent>
                </Stwo>
                <Stwo>
                    <Scontent>설문조사 제목 4</Scontent>
                    <Scontent>설문조사 제목 5</Scontent>
                    <Scontent>설문조사 제목 6</Scontent>
                </Stwo>
                </Sone>
            </Sset>
        </All>
    );
}
const All = styled.div`
    overflow-x: hidden;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
`
const Top = styled.div`
    width: 90vw;
    height: 41px;
    position: relative;
    margin: 3vh 0vw;
    margin-left: 5vw;
`
const Logo = styled.div`
    background: url('src/assets/images/cLogo.svg') no-repeat;
    width: 223px;
    height: 41px;
    border: none;
    display: inline-block;
`
const LBtn = styled.button`
    display: inline-block;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    right: 0%;
    background: url('src/assets/images/cIcon.svg') no-repeat;
    width: 32px;
    height: 32px;
    border: none;
`
const Sset = styled.div`
    padding-top: 4vh;
    width: 100vw;
`
const Stitle = styled.p`
    font-size: 16px;
    font-weight: 500; 
    margin-bottom: 2vh;
    margin-left: 6vw;
`
const B = styled.span`
    font-size: 16px;
    font-weight: 700; 
    color: #6046FF;
`
const Sone = styled.div`
    display: flex;
    overflow-y: hidden;
    padding: 8px;
    margin-left: 3vw;
    &::-webkit-scrollbar {
        display: none;
    }
`
const Stwo = styled.div`
    padding-right: 3vw;
`
const Scontent = styled.div`
    font-size: 14px;
    font-weight: 500; 
    box-shadow: 0px 2px 11px 0px #00000033;
    width: 310px;
    height: 60px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding-left: 5vw;
    margin-bottom: 2vh;
`