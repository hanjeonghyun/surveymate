import styled from "styled-components";
import * as C from "../../components/AuthComponents";
import defaultProfile from "../../assets/images/defaultProfile.svg";
import fixButton from "../../assets/images/fixButton.svg";

export default function Profile() {
  return (
    <>
      <C.TitleWrapper>
        <C.Title>프로필 설정</C.Title>
      </C.TitleWrapper>
      <ProfileWrapper>
        <DefaultProfile>
          <img
            src={defaultProfile}
            alt='defaultProfile'
          />
          <FixButton>
            <img
              src={fixButton}
              alt='fixButton'
            />
          </FixButton>
        </DefaultProfile>
      </ProfileWrapper>
      <SizedBox></SizedBox>
      <C.InputLabel>닉네임</C.InputLabel>
      <C.AuthInput
        placeholder='스트로베리 초코 생크림 케이크'
        name='nickname'
      ></C.AuthInput>
      <C.NextButton type='submit'>
        <C.ButtonText>다음</C.ButtonText>
      </C.NextButton>
    </>
  );
}

const SizedBox = styled.div`
  width: 90vw;
  height: 7vh;
`;

const ProfileWrapper = styled.div`
  position: relative;
  margin-top: 10vh;
  width: auto;
  display: flex;
  height: 20vh;
  justify-content: center;
  align-items: center;
`;

const DefaultProfile = styled.div`
  position: absolute;
  z-index: 0;
  border-radius: 70%;
  object-fit: cover;
`;

const FixButton = styled.div`
  position: absolute;
  left: 65%;
  top: 85%;
  transform: translateY(-50%);
  z-index: 2;
  margin: 0;
  cursor: pointer;
`;
