import React, { useState, useEffect } from 'react'
import { ButtonText, NextButton, NextSmallButton, SmallButtonText, Title, TitleWrapper } from '../../components/SurveyComponents'
import styled, { css } from 'styled-components';
import checkMessage from "../../assets/images/acheck_message.svg";
import { useNavigate } from 'react-router-dom';

export default function SurveyLink() {

    const [showAlert,setShowAlert]=useState(false);
    const [nextBtValid,setNextBtValid]=useState(false);
    const [notAllow,setNotAllow]=useState(true);
    const navigate=useNavigate();
    const pointLink ="https://survey_Google_asdfasdf/asd..";

    const handleCopy =async()=>{
        try{
            await navigator.clipboard.writeText(pointLink);
            setShowAlert(true);
            // setTimeout(() => {
            //     setShowAlert(false);
            //   }, 4000); 
            
        }catch(error){
            alert("복사 실패")
        }
    };

    useEffect(()=>{
        if(showAlert){
            setNextBtValid(true);
            setNotAllow(false);
            return;
        }
        setNextBtValid(false);
        setNotAllow(true);
        

    },[showAlert])



  
  return (
    <>
        <TitleWrapper>
            <BackButton onClick={()=>{navigate(-1)}}></BackButton>
            <Title>
                설문조사 등록
            </Title>
            <ThisNextSmallButton disabled={notAllow} onClick={()=>{navigate("/surveypoint")}}>
                <SmallButtonText>
                    다음
                </SmallButtonText>
            </ThisNextSmallButton>
        </TitleWrapper>
        <BodyTitle>
            포인트 수령 링크 제공
        </BodyTitle>

        <Body>
            아래의 링크를 등록한 설문조사의 가장 마지막 페이지
            <br/>
            구글폼 확인 메시지에 등록해주세요
        </Body>
        
        <CheckWrapper>
            <CheckMessage>
                <img src={checkMessage} alt='확인메시지' style={{ marginLeft: '8px' }} />
                확인 메시지 설정 방법
            </CheckMessage>
            <CheckText>
                구글폼 설정 &gt; 프레젠테이션 &gt; 확인 메시지 &gt; 수정
            </CheckText>
            <PointLinkBox>
                <PointLinkBoxText>
                    {pointLink}   
                </PointLinkBoxText>           
            </PointLinkBox>
        </CheckWrapper>

            <NextButton onClick={handleCopy} disabled={nextBtValid}>
                <ButtonText>
                    복사하기
                </ButtonText>
            </NextButton>
            {showAlert&&<Alert><p>링크가 복사되었어요</p></Alert>}

    </>
  )
}

const BackButton = styled.button`
    background:url('../../src/assets/images/aback_icon.svg') no-repeat;
    position:absolute;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    left:5vw;
    border:none;
`;

const ThisNextSmallButton=styled(NextSmallButton)`
    position:absolute;
    right:5vw;
    cursor: pointer;
    ${props=>
    props.disabled&&
    css`
        background-color:#D9D9D9;
        pointer-events: none; 
    `}
`;


const BodyTitle = styled.div`
    color: #6046FF;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 700;
    line-height: 150%
    letter-spacing: 0px;
    text-align: left;
    height:4vh;
    margin-top:3vh;
    margin-bottom:1vh;
`;

const Body=styled.div`
    color: #000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom:4vh;
`;

const CheckWrapper=styled.div`
    border-radius: 10px;
    background: rgba(96, 70, 255, 0.05);
    width: 90vw;
    height:16vh; 
    flex-shrink: 0;
    margin-bottom:3vh;
`;

const CheckMessage=styled.div`
    display: inline-flex;
    height: 2.75vh;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    padding-top:1vh;
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const CheckText=styled.div`
    color: #000;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.408px;
    text-align:center;
`;

const PointLinkBox=styled.div`
    width:77vw;
    height:4.8vh;
    flex-shrink: 0;
    border-radius: 999px;
    border: 2px solid #6046FF;
    background: #F7F6FF;
    display:flex;
    align-items:center;
    padding-left:5vw;
    margin: 2.5vh 4vw;
    
`;

const PointLinkBoxText=styled.div`
    color: #A7A7A7;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 18px */
`;

const Alert=styled.div`
    position:fixed;
    bottom:13vh;
    left:50%;
    transform:translateX(-50%);
    width: 280px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 999px;
    background: rgba(65, 65, 65, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: var(--white, #fff);
        text-align: center;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      animation: fadeInOut 4s forwards; 
      opacity: 0;
      @keyframes fadeInOut {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
`;