import React from 'react'
import styled from 'styled-components'
export default function SurveyAlert({text}) {
  return (
    <Alert><p>{text}</p></Alert>
  )
}
const Alert = styled.div`
  margin-bottom:7vh;
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
  animation: fadeInOut 6s forwards; 
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