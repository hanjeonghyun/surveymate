import React from "react";
import { TitleWrapper, Title } from "../../components/SurveyComponents";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import profile from "../../assets/images/bGroup 34.svg";
import back from "../../assets/images/bicon_back.svg";
import dot from "../../assets/images/bocticon_kebab-horizontal-16.svg";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { contentState } from "../../components/RecoilDummys";
import { pageState } from "../../components/RecoilDummys";
import { idState } from "../../components/RecoilDummys";
import { showPopUpState } from "../../components/RecoilDummys";
import SurveyBottomPopUp from "../2.Survey/SurveyBottomPopUp";

export default function MyView() {
  const navigate = useNavigate();
  const [pageTitle, setPageTitle] = useRecoilState(pageState);
  const [marketContent, setMarketContent] = useRecoilState(contentState);
  const [currentId, setCurrentId] = useRecoilState(idState);
  const [showPopUp, setShowPopUp] = useRecoilState(showPopUpState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    ///수정완료 시에도 setShowAlert 뜨게 해야 함
    if (
      pageTitle === "내가 등록한 설문조사" ||
      pageTitle === "내가 응답한 설문조사"
    ) {
      axios
        .get(`api/survey/${currentId}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.data) {
            setMarketContent(response.data.data);
            console.log(response);
          } else {
            console.log("응답 데이터가 null입니다.");
          }
        })
        .catch((response) => {
          console.log("응답없음");
          console.log(response);
        });
    } else {
      axios
        .get(`api/data/${currentId}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data) {
            setMarketContent(response.data.data);
          } else {
            console.log("응답 데이터가 null입니다.");
          }
        })
        .catch((response) => {
          console.log("응답없음");
          console.log(response);
        });
    }
  }, [currentId]);

  const buttonClick = () => {
    setShowPopUp(true);
  };

  return (
    <Wrap>
      <TitleWrapper>
        <Title>{pageTitle}</Title>
        <Back
          src={back}
          onClick={() => {
            navigate(-1);
          }}
        ></Back>
      </TitleWrapper>
      <Profile>
        <div>
          <img src={profile}></img>
        </div>
        <ProfileWrite>
          <div>
            {marketContent.registrantName
              ? marketContent.registrantName
              : marketContent.seller}
          </div>
          <div>
            {marketContent.createdAt
              ? `${marketContent.createdAt.substring(0, 10)}`
              : ""}
          </div>
        </ProfileWrite>
        <ReportButton>
          <img
            onClick={buttonClick}
            src={
              pageTitle === "내가 등록한 설문조사" ||
              pageTitle === "내가 판매 등록한 설문데이터"
                ? dot
                : ""
            }
          ></img>
        </ReportButton>
      </Profile>
      <Hr></Hr>
      <Content>
        <TitleFont>{marketContent.title}</TitleFont>
        <br></br>
        {marketContent.description}
      </Content>
      {showPopUp && (
        <SurveyBottomPopUp
          initialData={{
            title: "판매 등록 게시글 관리",
            line1: "판매 등록된 게시글을 수정하거나",
            line2: "삭제할 수 있어요",
            button1: "삭제",
            button2: "수정",
          }}
        />
      )}
    </Wrap>
  );
}
const Wrap = styled.div`
  box-sizing: border-box;
`;
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
  white-space: pre-wrap;
`;
const Back = styled.img`
  margin-left: 5vw;
  position: absolute;
  left: 0;
`;
const ReportButton = styled.div`
  &.none {
    display: none;
  }
  position: absolute;
  right: 0;
  margin-right: 5vw;
`;
const TitleFont = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 137.5% */
`;
