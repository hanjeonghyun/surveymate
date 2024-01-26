import React from 'react'
import styled from 'styled-components';
import * as C from '../../components/SurveyComponents';
import { useNavigate } from 'react-router-dom';

export default function SurveyContent() {
    const navigate=useNavigate();
    return(
        <div>
            <C.TitleWrapper>
                <BackBtn onClick={()=>navigate(-1)}></BackBtn>
                <C.Title>설문조사 등록</C.Title>
                <NextBtn onClick={()=>navigate("/surveylink")}>다음</NextBtn>
            </C.TitleWrapper>

            <Title placeholder='제목을 입력하세요(최대 몇자인지)'></Title>
            <Content 
            placeholder='내용을 입력하세요(최대 몇자인지)&#13;&#10;&#13;&#10;1.어떤 설문인가요?&#13;&#10;2.어디 소속인지 알려주세요!&#13;&#10;3.추가적인 경품이 있다면 기재해 주세요&#13;&#10;4.누구를 대상으로 진행하는 설문인가요?
            '></Content>
            <Adress placeholder='google form 링크를 입력해주세요'></Adress>
        </div>
    );
}

const BackBtn = styled.button`
    background: url('src/assets/images/cBack.svg') no-repeat;
    width: 24px;
    height: 24px;
    border: none;
    position: absolute;
    left: 5vw;
`
const NextBtn = styled.button`
    width: 39px;
    height: 26px;
    border: none;
    border-radius: 5px;
    background: #6046FF;
    color: #FFFFFF;
    position: absolute;
    right: 5vw;
    font-size: 12px;
    font-weight: 500;
`
const Title = styled.input`
    &::placeholder {
        color: #D6D6D6;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 22px;
    }
    font-size: 16px;
    font-weight: 600;
    border-width: 0 0 1px;
    border-color: #EFEDFF;
    width: 90vw;
    margin-top: 4vh;
    padding-bottom: 0.5vh;
`
const Content = styled.textarea`
    width: 90vw;
    height: 25vh;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    &::placeholder {
        color: #D6D6D6;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    }
    margin-top: 3vh;
    border: none;
`
const Adress = styled.input`
    width: 70vw;
    border: solid 2px;
    border-color: #6046FF;
    background-color: #F7F6FF;
    border-radius: 999px;
    padding: 13px 5vw;
    font-size: 12px;
    font-weight: 500;
    &::placeholder {
        color: #A7A7A7;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
    }
`