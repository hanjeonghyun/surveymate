import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import * as C from "../../components/SurveyComponents";
import profileImg from "../../assets/images/aprofile_img.svg";
import next_icon from "../../assets/images/anext_icon.svg";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { nicknameState } from '../../components/RecoilDummys';
import { useRecoilState } from 'recoil';


export default function MyPage() {
    const navigate = useNavigate();
    const [point, setPoint]= useState(0);
    const [nickName,setNickName]=useRecoilState(nicknameState);

    
    async function getPoint(){
        const token = localStorage.getItem('token');
        if (token){
        try{
            const response = await axios.get("https://sleigh.college/statement/total",{
                headers: {
                    "accept": "*/*",
                    'Authorization': token,
                  }
                  
            });
            console.log(response)
            const data = response.data.data.totalAmount;
            setPoint(data);
            return data;
        } catch (response) {
            console.log(response)
            //if (error.response) {
              //  console.error('서버 응답 상태 코드:', error.response.status);
              //  console.error('서버 응답 데이터:', error.response.data);
            //} else if (error.request) {
              //  console.error('서버 응답 없음');
            //} else {
              //  console.error('Axios 오류:', error.message);
            //}
        }
    }
    };
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(`api/auth/profile`,
      {
        headers: {
          'Authorization': token,
        },
      })
      //surveyview2일 때에는 다른 곳에서 id 받아오도록 수정
      .then((response)=>{
        setNickName(response.data.data.nickname)
      })
      .catch((response)=>{
        console.log("응답없음")
        console.log(response)
      })
      .finally(()=>{
        //setShowAlert(false)
      })
        getPoint(); 
    }, []);
    const version="v1.1.1";

    const profileFix=()=>{
        navigate("/myprofile");
    };

    const pointList=()=>{
        navigate("/mypointtotal");
    };

  return (
    <>
    <C.TitleWrapper>
        <BackButton onClick={()=>{navigate(-1)}}></BackButton>
      <C.Title>마이페이지</C.Title>
    </C.TitleWrapper>

    <Profile>
        <img src={profileImg}></img>
        <ProfileWrite>
            <Nickname>{nickName}</Nickname>
            <div>보유 포인트:{' '}
                <Point>{point}POINT</Point>
            </div>
        </ProfileWrite>
      </Profile>
    <ButtonWrapper>
        <Btn onClick={profileFix}><BtnText>프로필 변경</BtnText></Btn>
        <Btn onClick={pointList}><BtnText>포인트 내역</BtnText></Btn>
    </ButtonWrapper>
    <Hr></Hr>
    <MenuWrapper>
        <Link to ='/mylist4'>
        <MenuBox>
            <MenuText>
                내가 등록한 설문조사
            </MenuText>
            <img src={next_icon}></img>
        </MenuBox>
        </Link>
        <Link to ="/mylist1">
        <MenuBox>
            <MenuText>
                내가 응답한 설문조사
            </MenuText>
            <img src={next_icon}></img>
        </MenuBox>
        </Link>
        <Link to ="/mylist2">
        <MenuBox>
            <MenuText>
                내가 판매 등록한 설문데이터
            </MenuText>
            <img src={next_icon}></img>
        </MenuBox>
        </Link>
        <Link to ='/mylist3'>
        <MenuBox>
        <   MenuText>
                내가 구매한 설문데이터
            </MenuText>
            <img src={next_icon}></img>
        </MenuBox>
        </Link>
        <MenuBox>
            <MenuText>
                개인정보 처리방침
            </MenuText>
            <img src={next_icon}></img>
        </MenuBox>
        <MenuBox>
            <MenuText>버전 정보</MenuText>      
            <Version>{version}</Version>
        </MenuBox>
    </MenuWrapper>
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

const Profile = styled.div`
    display: inline-flex;
    align-items: flex-end;
    gap: 8px;
    margin-top:2vh;
`;

const ProfileWrite = styled.div`
    font-size: 12px;
    font-weight: 500;
    color:#979797;
    text-align: left;
    font-family: Poppins;
    font-style: normal;
    line-height: normal;
    color:#979797;
`;

const Nickname = styled.div`
    margin-bottom: 0.75vh;
    font-size: 18px;
    font-weight: 700;
    color: #000;
`;

const Point = styled.span`
    color: #979797;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const ButtonWrapper = styled.div`
    gap:2.5vw;
    justify-content: space-evenly;
    display:flex;
    direction:row;
    margin-top:2vh;
    margin-bottom:2vh;
`;

const Btn = styled.button`
    border-radius: 10px;
    background: #6046ff;
    width: 42.5vw;
    height: 5vh;
    justify-content: center;
    align-items: center;
    border: none;
    box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`;

const BtnText=styled.div`
    color: var(--white, #FFF);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 16px */
`;

const Hr = styled.div`
    width: 100%;
    height: 1px;
    background: #efedff;
`;

const MenuWrapper = styled.div`
    width: 90%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin:0 auto;
`;

const MenuBox = styled.div`
    display:flex;
    align-items:center;
    flex-shrink:0;
    text-align: left;
    height: 2.75vh;
    padding: 3.125vh 0vw;
    cursor: pointer;
`;

const MenuText = styled.div`
    color: var(--, #24252E);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    flex-grow:1;
`;

const Version=styled.div`
    color: var(--gray-3-disable, #BFC3D4);
    text-align: right;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
`;
