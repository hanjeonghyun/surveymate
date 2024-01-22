import styled, {css} from "styled-components";

export const TitleWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6vh;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: var(--white, #fff);
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.p`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

export const InputLabel = styled.p`
  color: #000;
  text-align: left;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

export const AuthInput = styled.input`
  width: calc(90vw - 14px);
  height: 3vh;
  padding: 5px;
  border: none;
  margin-bottom: 10vh;
  margin-top: 2vh;
  border-bottom: 0.4px solid rgba(96, 70, 255, 0.3);
  &::placeholder {
    color: #d6d6d6;
  }
  &:focus {
    outline: none;
  }
`;

export const NextButton = styled.button`
  border-radius: 10px;
  background: #6046ff;
  color: var(--white, #fff);
  display: flex;
  width: 90vw;
  height: 5vh;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  ${props=>
  props.disabled &&
  css`
    background-color:#D9D9D9;
    cursor:not-allowed;
    box-shadow:none;
  `}
`;

export const ButtonText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;