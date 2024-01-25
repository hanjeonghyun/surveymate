import styled,{css} from "styled-components";

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
export const NextSmallButton = styled.button`
  border-radius: 5px;
  background: #6046ff;
  color: var(--white, #fff);
  display: flex;
  width: 10vw;
  height: 3vh;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.2);
`;

export const SmallButtonText = styled.p`
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const NextButton = styled.button`
  border-radius: 10px;
  background: #6046ff;
  color: var(--white, #fff);
  display: flex;
  width: 90vw;
  height: 6vh;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  ${props=>
    (props.disabled)&&
    css`
        background-color:#D9D9D9;
        pointer-events: none; 
    `}
`;

export const ButtonText = styled.p`
  font-size: 16px;
  font-weight: 600;
`;
