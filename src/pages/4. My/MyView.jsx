import React from 'react'
import {TitleWrapper,Title} from "../../components/SurveyComponents";
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import profile from "../../assets/images/bGroup 34.svg";
import back from "../../assets/images/bicon_back.svg";
import dot from "../../assets/images/bocticon_kebab-horizontal-16.svg"
export default function MyView() {
  const nickName="가나다";
  const serverName="가나다";
  const navigate=useNavigate();
  const location = useLocation();
  const {  pageTitle, title, content } = location.state;
  return (
    <Wrap>
    <TitleWrapper>
      <Title>{pageTitle}</Title>
      <Back src={back} onClick={()=>{navigate(-1)}}></Back>
    </TitleWrapper>
    <Profile>
      <div>
        <img src={profile}></img>
      </div>
      <ProfileWrite>
        <div>{nickName}</div>
        <div>0000-00-00</div>
      </ProfileWrite>
      <ReportButton>
        <img  src={nickName===serverName ? dot:''}></img>
      </ReportButton>
    </Profile>
    <Hr></Hr>
    <Content>
      <TitleFont>{title}</TitleFont>
      <br></br>
      {content}
    </Content>
    </Wrap>
  )
}
const Wrap=styled.div`
  box-sizing: border-box;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ProfileWrite = styled.div`
  margin-left: 10px;
  :first-child {
    margin-bottom: 0.5vh;
    margin-right: 8vw;
  }
  :nth-child(2) {
    font-size: 12px;
    font-weight: 400;
  }
  color: #000;
  text-align: left;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: #efedff;
`;
const Content = styled.div`
  margin-top: 3vh;
  color: #000;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`;
const Back=styled.img`
  margin-left:5vw;
  position:absolute;
  left:0;  
`
const ReportButton = styled.div`
  &.none {
    display: none;
  }
  position:absolute;
  right:0;
  margin-right:5vw;
`;
const TitleFont = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
`;
