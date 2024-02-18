import React from "react";
import { TitleWrapper, Title } from "../../components/SurveyComponents";
import back from "../../assets/images/bicon_back.svg";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useRecoilState } from "recoil";
import { idState } from "../../components/RecoilDummys";
import { pageState } from "../../components/RecoilDummys";

import { useRecoilValue } from "recoil";

export default function MyList() {
  const currentPathname = window.location.pathname;
  const [currentId, setCurrentId] = useRecoilState(idState);
  const [pageTitle, setPageTitle] = useRecoilState(pageState);
  const [surveyDummys, setSurveyDummys] = useState([
    {
      surveyId: 0,
      title: "데이터 없음",
      description: "데이터가 존재하지 않습니다.",
      createdAt: "",
    },
  ]);

  const navigate = useNavigate();
  const currentDate = (createdAt) => {
    const nowDate = detailDate(new Date(createdAt));
    return nowDate;
  };

  const detailDate = (a) => {
    const milliSeconds = new Date() - a;
    const seconds = milliSeconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    if (days < 1) return `오늘`;
    else if (days < 7) return `${Math.floor(days)}일 전`;
  };
  const myViewClick = (e) => {
    setCurrentId(e.surveyId ? e.surveyId : e.dataId);
    navigate("/myview");
  };
  const fetchData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      //pathname에 따라 받아오는 api 다르게
      try {
        if (currentPathname === "/mylist1") {
          setPageTitle("내가 응답한 설문조사");
          const response = await axios.get("/api/survey/respondent", {
            headers: {
              Authorization: token,
            },
          });
          console.log(response);
          {
            response.data.data.surveys &&
              setSurveyDummys(response.data.data.surveys);
          }
        } else if (currentPathname === "/mylist2") {
          setPageTitle("내가 판매 등록한 설문데이터");
          const response = await axios.get("/api/data/list/seller", {
            headers: {
              Authorization: token,
            },
          });
          console.log(response.data);
          {
            response.data.data.datas &&
              setSurveyDummys(response.data.data.datas);
          }
        } else if (currentPathname === "/mylist3") {
          setPageTitle("내가 구매한 설문데이터");
          const response = await axios.get("/api/data/list/buyer", {
            headers: {
              Authorization: token,
            },
          });
          console.log(response.data);
          {
            response.data.data.datas &&
              setSurveyDummys(response.data.data.datas);
          }
        } else if (currentPathname === "/mylist4") {
          setPageTitle("내가 등록한 설문조사");
          const response = await axios.get("/api/survey/registrant", {
            headers: {
              Authorization: token,
            },
          });
          console.log(response);
          {
            response.data.data.surveys &&
              setSurveyDummys(response.data.data.surveys);
          }
        }
      } catch (error) {
        console.log("에러 발생", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPathname]);

  return (
    <>
      <All>
        <TitleWrapper>
          <Title>{pageTitle}</Title>
          <Back
            src={back}
            onClick={() => {
              navigate(-1);
            }}
          ></Back>
        </TitleWrapper>
        <br></br>
        <ListWrapper>
          {surveyDummys.map((e) => {
            return (
              <EachListWrapper
                key={e.surveyId ? e.surveyId : e.dataId}
                onClick={() => myViewClick(e)}
              >
                <TextTitle>
                  <Font className='title'>
                    {e.title.length > 15
                      ? `${e.title.substring(0, 14)}...`
                      : e.title}
                  </Font>
                  <Font className='time'>{currentDate(e.createdAt)}</Font>
                </TextTitle>
                <ContentWrapper>{e.description}</ContentWrapper>
              </EachListWrapper>
            );
          })}
          <Blank></Blank>
        </ListWrapper>
      </All>
    </>
  );
}

const All = styled.div`
  overflow-x: hidden;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`;
const Back = styled.img`
  margin-left: 5vw;
  position: absolute;
  left: 0;
`;
const ListWrapper = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5vw;
  margin-right: 5vw;
`;
const EachListWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--white, #fff);
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.2);
  margin: 8px 0;
  padding: 2vh 1.2vh;
`;

const ContentWrapper = styled.div`
  width: 100%;
  //331px
  overflow: hidden;
  height: auto;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: pre-line;

  display: -webkit-box;
  -webkit-line-clamp: 3; // 원하는 라인수
  -webkit-box-orient: vertical;

  color: #000;
  font-family: Poppins;
  font-style: normal;
  line-height: normal;
  font-size: 11px;
  font-weight: 500;
`;
const Blank = styled.div`
  height: 100px;
`;

const Font = styled.p`
  color: #000;
  font-family: Poppins;
  font-style: normal;
  line-height: normal;
  &.title {
    font-size: 16px;
    font-weight: 600;
  }
  &.time {
    font-size: 11px;
    font-weight: 400;
  }
  &.content {
    font-size: 11px;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
const TextTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
