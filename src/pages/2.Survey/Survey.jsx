import React from "react";
import styled from "styled-components";
import plus from "../../assets/images/bGroup 45.svg";
import marketPlus from "../../assets/images/bmarketupload.svg";
import { useNavigate, Link } from "react-router-dom";
import { alertState } from './SurveyView'
import { useRecoilState } from 'recoil'
import { useEffect, useState } from "react";
export default function SurveyMain() {
  const navigate = useNavigate();
  const [survey, setSurvey] = useState(true);
  const [showAlert, setShowAlert]=useRecoilState(alertState);
  const surveyDummys = [
    {
      title: "설문조사 제목1",
      time: "1일전",
      content:
        "설문조사 미리보기가 들어갈 부분입니다. 설문조사 내용을 입력하세요",
      id: 1,
      status: "",
    },
    { title: "설문조사 제목2", time: "2일전", content: "내용", id: 2 },
    {
      title: "설문조사 제목3",
      time: "2일전",
      content: "내용",
      id: 3,
      status: "finished",
    },
    { title: "설문조사 제목4", time: "2일전", content: "내용", id: 4 },
    { title: "설문조사 제목5", time: "2일전", content: "내용", id: 5 },
  ];
  const surveyViewClick = (e) => {
    setShowAlert(false)
    navigate(survey ? "/surveyview1" : "/marketview1"),
      {
        state: e,
      };
  };
  useEffect(() => {
    if (window.location.pathname === "/survey") {
      setSurvey(true);
    }
    if (window.location.pathname === "/market") {
      setSurvey(false);
    }
  }, [window.location.pathname]);

  return (
    <>
      <All>
        <Top>
          <Logo className={survey ? "survey" : "market"}></Logo>
          <LBtn onClick={() => alert("프로필")}></LBtn>
        </Top>
        <ListWrapper>
          {surveyDummys.map((e) => {
            return (
              <EachListWrapper
                key={e.id}
                onClick={() => surveyViewClick(e)}
                className={e.status}
              >
                <Title>
                  <Font className='title'>{e.title}</Font>
                  <Font className='time'>{e.time}</Font>
                </Title>
                <Font className='content'>{e.content}</Font>
              </EachListWrapper>
            );
          })}
          <Blank></Blank>
        </ListWrapper>
      </All>
      <PlusWrapper>
        <Link to={survey ? "/surveycontent" : "/marketcontent"}>
          <Plus src={survey ? plus : marketPlus}></Plus>
        </Link>
      </PlusWrapper>
    </>
  );
}

const All = styled.div`
  overflow-x: hidden;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`;

const PlusWrapper = styled.div`
  position: fixed;
  top: 77vh;
  left: 75vw;
  width: 92px;
  height: 92px;
`;
const Plus = styled.img`
  position: sticky;
`;

const Top = styled.div`
  width: 90vw;
  height: 41px;
  position: relative;
  margin: 3vh 0vw;
  margin-left: 5vw;
`;

const Logo = styled.div`
  &.survey {
    background: url("src/assets/images/bFrame 16.svg") no-repeat;
  }
  &.market {
    background: url("src/assets/images/bsurveyshop.svg") no-repeat;
  }
  width: 240px;
  height: 41px;
  border: none;
  display: inline-block;
`;
const LBtn = styled.button`
  display: inline-block;
  position: absolute;
  top: 50%;
  margin-top: -15px;
  right: 0%;
  background: url("src/assets/images/bGroup 34 (2).svg") no-repeat;
  width: 32px;
  height: 32px;
  border: none;
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
  padding: 2vh 2vh;
  &.finished {
    background: rgba(0, 0, 0, 0.2);
  }
`;
const Blank = styled.div`
  height: 100px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
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
    font-size: 12px;
    font-weight: 400;
  }
  &.content {
    font-size: 12px;
    font-weight: 500;
  }
`;