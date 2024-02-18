import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/cLogo.svg";
import { useEffect } from 'react';
import axios from 'axios';
import homeBt from "../../assets/images/bocticon_home-24.svg";
import surveyBt from "../../assets/images/bmajesticons_paper-fold-line (1).svg";
import marketBt from "../../assets/images/bclarity_coin-bag-line-dHFmXY.svg";

export default function MainL() {
    const navigate=useNavigate();
    return(
        <All onClick={()=>navigate("/login")}>
            <Top>
            <Logo src={logo}></Logo>
            <Login><LBtn onClick={()=>navigate("/login")}>로그인</LBtn></Login>
            </Top>
            <Sset>
                <Stitle><B>신규 등록</B> 설문조사</Stitle>
                <Sone>
                <Stwo>
                    <Scontent>설문조사 제목 1</Scontent>
                    <Scontent>설문조사 제목 2</Scontent>
                    <Scontent>설문조사 제목 3</Scontent>
                </Stwo>
                <Stwo>
                    <Scontent>설문조사 제목 4</Scontent>
                    <Scontent>설문조사 제목 5</Scontent>
                    <Scontent>설문조사 제목 6</Scontent>
                </Stwo>
                <Stwo>
                    <Scontent>설문조사 제목 7</Scontent>
                    <Scontent>설문조사 제목 8</Scontent>
                    <Scontent>설문조사 제목 9</Scontent>
                </Stwo>
                <Stwo>
                    <Scontent>설문조사 제목 10</Scontent>
                    <Scontent>설문조사 제목 11</Scontent>
                    <Scontent>설문조사 제목 12</Scontent>
                </Stwo>
                <Stwo>
                    <Scontent>설문조사 제목 13</Scontent>
                    <Scontent>설문조사 제목 14</Scontent>
                    <Scontent>설문조사 제목 15</Scontent>
                </Stwo>
                </Sone>
            </Sset>
            <Sset>
                <Stitle><B>신규 판매 등록</B> 설문조사</Stitle>
                <Sone>
                <Stwo>
                    <Scontent>설문조사 제목 1</Scontent>
                    <Scontent>설문조사 제목 2</Scontent>
                    <Scontent>설문조사 제목 3</Scontent>
                </Stwo>
                <Stwo>
                    <Scontent>설문조사 제목 4</Scontent>
                    <Scontent>설문조사 제목 5</Scontent>
                    <Scontent>설문조사 제목 6</Scontent>
                </Stwo>
                <Stwo>
                    <Scontent>설문조사 제목 7</Scontent>
                    <Scontent>설문조사 제목 8</Scontent>
                    <Scontent>설문조사 제목 9</Scontent>
                </Stwo>
                <Stwo>
                    <Scontent>설문조사 제목 10</Scontent>
                    <Scontent>설문조사 제목 11</Scontent>
                    <Scontent>설문조사 제목 12</Scontent>
                </Stwo>
                <Stwo>
                    <Scontent>설문조사 제목 13</Scontent>
                    <Scontent>설문조사 제목 14</Scontent>
                    <Scontent>설문조사 제목 15</Scontent>
                </Stwo>
                </Sone>
            </Sset>
            <BarWrapper>
                <Bar >
                    <img src={homeBt} />
                    <Text>홈</Text>
                </Bar>
                <Bar>
                    <img
                    src={surveyBt}
                    />
                    <Text>설문조사</Text>
                </Bar>
                <Bar>
                    <img
                    src={marketBt}
                    />
                    <Text>설문장터</Text>
                </Bar>
            </BarWrapper>
        </All>
        
    );
}
const All = styled.div`
  overflow-x: hidden;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`;
const Top = styled.div`
    width: 90vw;
    height: 41px;
    position: relative;
    margin: 3vh 0vw;
    margin-left: 5vw;
`
const Logo = styled.img`
    //background: url('src/assets/images/cLogo.svg') no-repeat;
    //width: 223px;
    //height: 41px;
    border: none;
    display: inline-block;
`
const Login = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  margin-top: -15px;
  right: 0%;
  margin-right: -10px;
`;
const LBtn = styled.button`
    font-size: 12px;
    font-weight: 600;
    color: #6046FF;
    border: none;
    background-color: white;
    width: 55px;
    height: 30px;
`
const Sset = styled.div`
  padding-top: 4vh;
  width: 100vw;
`;
const Stitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 2vh;
  margin-left: 6vw;
`;
const B = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #6046ff;
`;
const Sone = styled.div`
  display: flex;
  overflow-y: hidden;
  padding: 8px;
  margin-left: 3vw;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Stwo = styled.div`
  padding-right: 3vw;
`;
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
`;
const BarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 11vh;
  width: 100vw;
  left: 0;
  background: var(--white, #fff);
  box-shadow: 0px -2px 11px 0px rgba(0, 0, 0, 0.25);
`;
const Bar = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

const Text = styled.p`
  color: #000000;
  text-align: center;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  pointer-events: none;
`;
