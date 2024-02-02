import React from 'react'
import {TitleWrapper,Title} from "../../components/SurveyComponents";
import back from "../../assets/images/bicon_back.svg";
import styled from 'styled-components';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyList() {
  const currentPathname=window.location.pathname;
  const [pageTitle,setPageTitle]=useState("응답한 설문조사")
  const navigate = useNavigate();
  const myViewClick=(e)=>{
    navigate('/myview',{
        state:{
          pageTitle:pageTitle,
          title:e.title,
          content:e.content,
        }
      })
    }
   
  const surveyDummys=
    [{title: "설문조사 제목1", time: "1일전", content:"설문조사 미리보기가 들어갈 부분입니다. 설문조사 내용을 입력하세요", id:1,
    status:""}
    ,{title: "설문조사 제목2", time: "2일전", content:"내용", id:2}
    ,{title: "설문조사 제목3", time: "2일전", content:"내용", id:3, status:"finished"}
    ,{title: "설문조사 제목4", time: "2일전", content:"내용", id:4}
    ,{title: "설문조사 제목5", time: "2일전", content:"내용", id:5}
    ,{title: "설문조사 제목6", time: "2일전", content:"내용", id:6}
   ]
  useEffect(() => {
    //pathname에 따라 받아오는 api 다르게
    if (currentPathname==="/mylist1") {
      setPageTitle("응답한 설문조사");
    } 
    if (currentPathname==="/mylist2") {
      setPageTitle("판매등록 설문조사");
    } 
    if (currentPathname==="/mylist3") {
      setPageTitle("구매완료 설문조사");
    } 
    if (currentPathname==="/mylist4") {
      setPageTitle("등록 설문조사");
    } 

  }, [currentPathname]);
  return (
    <>
    <All>  
    <TitleWrapper>
        <Title>{pageTitle}</Title>
        <Back src={back} onClick={()=>{navigate(-1)}}></Back>
    </TitleWrapper>
    <br></br>
    <ListWrapper>
      {surveyDummys.map((e)=>{
            return(
                <EachListWrapper key={e.id} onClick={()=>myViewClick(e)}
                    className={e.status}>
                    <TextTitle>
                        <Font className="title">{e.title}</Font>
                        <Font className="time">{e.time}</Font>
                    </TextTitle>
                        <Font className="content">{e.content}</Font>
                </EachListWrapper>
   
            )
        })}
      <Blank></Blank>
      </ListWrapper>
      </All>
    </>
  )
}

const All = styled.div`
    overflow-x: hidden;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
`
const Back=styled.img`
  margin-left:5vw;
  position:absolute;
  left:0;  
`
const ListWrapper=styled.div`
    width:90vw;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left:5vw;
    margin-right:5vw;
 
`
const EachListWrapper=styled.div`
    box-sizing:border-box;
    display:block;
    width:100%;
    height: 120px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--white, #FFF);
    box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.20);
    margin: 8px 0;
    padding: 2vh 2vh;

    
`
const Blank=styled.div`
    height:100px;
`

const Font=styled.p`
    color: #000;
    font-family: Poppins;
    font-style: normal;
    line-height: normal;
    &.title{
        font-size: 16px;
        font-weight: 600;
    }
    &.time{
        font-size:12px;
        font-weight: 400;
    }
    &.content{
        font-size: 12px;
        font-weight: 500;
    }
`
const TextTitle=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`