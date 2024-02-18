import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { nicknameState } from "../../components/RecoilDummys";
import { useEffect } from "react";
import { useState } from "react";
import { idState } from "../../components/RecoilDummys";
import logo from "../../assets/images/cLogo.svg";
import face from "../../assets/images/cIcon.svg";
import axios from "axios";
import cLogo from "../../assets/images/cLogo.svg";
import cIcon from "../../assets/images/cIcon.svg";

export default function Main() {
  const navigate = useNavigate();
  const [profile, setProfile] = useRecoilState(nicknameState);
  const [surveyDummys, setSurveyDummys] = useState("");
  const [marketDummys, setMarketDummys] = useState("");
  const [currentId, setCurrentId] = useRecoilState(idState);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(`api/auth/profile`, {
          headers: {
            Authorization: token,
          },
        })
        //surveyview2일 때에는 다른 곳에서 id 받아오도록 수정
        .then((response) => {
          setProfile(response.data.data.nickname);
        })
        .catch((response) => {
          console.log("응답없음");
          console.log(response);
        })
        .finally(() => {
          //setShowAlert(false)
        });

      axios
        .get(`api/survey/new`, {
          headers: {
            Authorization: token,
          },
        })
        //surveyview2일 때에는 다른 곳에서 id 받아오도록 수정
        .then((response) => {
          console.log(response.data.data.surveys);
          setSurveyDummys(response.data.data.surveys);
        })
        .catch((response) => {
          console.log("응답없음");
          console.log(response);
        });

      axios
        .get(`api/data/new`, {
          headers: {
            Authorization: token,
          },
        })
        //surveyview2일 때에는 다른 곳에서 id 받아오도록 수정
        .then((response) => {
          console.log(response.data.data.datas);
          setMarketDummys(response.data.data.datas);
        })
        .catch((response) => {
          console.log("응답없음");
          console.log(response);
        });
    }
  }, []);
  const newSurveyTitle = (e) => {
    return surveyDummys[e] && surveyDummys[e].title;
  };

  const newMarketTitle = (e) => {
    return marketDummys[e] && marketDummys[e].title;
  };

  const gotoSurvey = (e) => {
    if (surveyDummys[e]) {
      setCurrentId(surveyDummys[e].surveyId);
      navigate(`/surveyview1`);
    }
  };

  const gotoMarket = (e) => {
    if (marketDummys[e]) {
      setCurrentId(marketDummys[e].dataId);
      navigate(`/marketview1`);
    }
  };
  return (
    <All>
      <Top>
        <Logo src={logo}></Logo>
        <LBtn onClick={() => navigate("/mypage")} src={face}>
        </LBtn>
      </Top>
      <Sset>
        <Stitle>
          <B>신규 등록</B> 설문조사
        </Stitle>
        <Sone>
          <Stwo>
            <Scontent onClick={() => gotoSurvey(0)}>
              {newSurveyTitle(0)}
            </Scontent>
            <Scontent onClick={() => gotoSurvey(1)}>
              {newSurveyTitle(1)}
            </Scontent>
            <Scontent onClick={() => gotoSurvey(2)}>
              {newSurveyTitle(2)}
            </Scontent>
          </Stwo>
          <Stwo>
            <Scontent onClick={() => gotoSurvey(3)}>
              {newSurveyTitle(3)}
            </Scontent>
            <Scontent onClick={() => gotoSurvey(4)}>
              {newSurveyTitle(4)}
            </Scontent>
            <Scontent onClick={() => gotoSurvey(5)}>
              {newSurveyTitle(5)}
            </Scontent>
          </Stwo>
          <Stwo>
            <Scontent onClick={() => gotoSurvey(6)}>
              {newSurveyTitle(6)}
            </Scontent>
            <Scontent onClick={() => gotoSurvey(7)}>
              {newSurveyTitle(7)}
            </Scontent>
            <Scontent onClick={() => gotoSurvey(8)}>
              {newSurveyTitle(8)}
            </Scontent>
          </Stwo>
          <Stwo>
            <Scontent onClick={() => gotoSurvey(9)}>
              {newSurveyTitle(9)}
            </Scontent>
            <Scontent onClick={() => gotoSurvey(10)}>
              {newSurveyTitle(10)}
            </Scontent>
            <Scontent onClick={() => gotoSurvey1(11)}>
              {newSurveyTitle(11)}
            </Scontent>
          </Stwo>
          <Stwo>
            <Scontent onClick={() => gotoSurvey(12)}>
              {newSurveyTitle(12)}
            </Scontent>
            <Scontent onClick={() => gotoSurvey(13)}>
              {newSurveyTitle(13)}
            </Scontent>
            <Scontent onClick={() => gotoSurvey(14)}>
              {newSurveyTitle(14)}
            </Scontent>
          </Stwo>
        </Sone>
      </Sset>
      <Sset>
        <Stitle>
          <B>신규 판매 등록</B> 설문조사
        </Stitle>
        <Sone>
          <Stwo>
            <Scontent onClick={() => gotoMarket(0)}>
              {newMarketTitle(0)}
            </Scontent>
            <Scontent onClick={() => gotoMarket(1)}>
              {newMarketTitle(1)}
            </Scontent>
            <Scontent onClick={() => gotoMarket(2)}>
              {newMarketTitle(2)}
            </Scontent>
          </Stwo>
          <Stwo>
            <Scontent onClick={() => gotoMarket(3)}>
              {newMarketTitle(3)}
            </Scontent>
            <Scontent onClick={() => gotoMarket(4)}>
              {newMarketTitle(4)}
            </Scontent>
            <Scontent onClick={() => gotoMarket(5)}>
              {newMarketTitle(5)}
            </Scontent>
          </Stwo>
          <Stwo>
            <Scontent onClick={() => gotoMarket(6)}>
              {newMarketTitle(6)}
            </Scontent>
            <Scontent onClick={() => gotoMarket(7)}>
              {newMarketTitle(7)}
            </Scontent>
            <Scontent onClick={() => gotoMarket(8)}>
              {newMarketTitle(8)}
            </Scontent>
          </Stwo>
          <Stwo>
            <Scontent onClick={() => gotoMarket(9)}>
              {newMarketTitle(9)}
            </Scontent>
            <Scontent onClick={() => gotoMarket(10)}>
              {newMarketTitle(10)}
            </Scontent>
            <Scontent onClick={() => gotoMarket(11)}>
              {newMarketTitle(11)}
            </Scontent>
          </Stwo>
          <Stwo>
            <Scontent onClick={() => gotoMarket(12)}>
              {newMarketTitle(12)}
            </Scontent>
            <Scontent onClick={() => gotoMarket(13)}>
              {newMarketTitle(13)}
            </Scontent>
            <Scontent onClick={() => gotoMarket(14)}>
              {newMarketTitle(14)}
            </Scontent>
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
`;
const Top = styled.div`
  width: 90vw;
  height: 41px;
  position: relative;
  margin: 3vh 0vw;
  margin-left: 5vw;
`;
const Logo = styled.img`
  //background: url("src/assets/images/cLogo.svg") no-repeat;
 // width: 223px;
  //height: 41px;
  border: none;
  display: inline-block;
`;
const LBtn = styled.img`
  display: inline-block;
  position: absolute;
  top: 50%;
  white-space: nowrap;
  margin-top: -15px;
  right: 0%;
 // background: url("src/assets/images/cIcon.svg") no-repeat;
  width: 32px;
  height: 32px;
  border: none;
`;
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
