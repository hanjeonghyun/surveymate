import React from "react";
import { TitleWrapper, Title } from "../../components/SurveyComponents";
import getPoint from "../../assets/images/bGroup.svg";
import logo from "../../assets/images/bFrame 16 (1).svg";
import back from "../../assets/images/bicon_back.svg";
import SurveyAlert from "./SurveyAlert";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function SurveyResult() {
  const navigate = useNavigate();
  const logoClicked = () => {
    navigate(`/survey`);
  };
  //axios로 서버에서 값 받아서 수령 완료, 불가 판단하기
  return (
    <div>
      <TitleWrapper>
        <Back src={back} onClick={()=>{navigate("/survey")}}></Back>
        <Title>포인트 수령 완료</Title>
      </TitleWrapper>
      <Wrapper>
        <div onClick={logoClicked}>
          <img src={getPoint}></img>
        </div>
        <br></br>
        <br></br>
        <Font>10 POINT가 수령되었습니다.</Font>
        <LogoWrapper>
          <img src={logo}></img>
        </LogoWrapper>
        <Alert>
          <SurveyAlert text="설문응답이 완료되었습니다."></SurveyAlert>
        </Alert>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Logo = styled.p`
  text-align: center;
  font-family: PoppinsBold;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 22px; /* 110% */
  letter-spacing: 6px;
  background: linear-gradient(180deg, #6046ff 0%, rgba(96, 70, 255, 0) 254.55%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 5px;
  margin-top: 20px;
  position: relative;
`;
const Font = styled.p`
  color: #000;
  text-align: center;
  font-family: PoppinsSemiBold;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Alert = styled.div`
  margin-top: 22vh;
`;

//뒤로가기버튼 
const Back=styled.img`
  margin-left:5vw;
  position:absolute;
  left:0;  
`
