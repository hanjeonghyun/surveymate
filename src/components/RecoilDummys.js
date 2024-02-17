import { RecoilEnv, atom } from "recoil";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

//list 데이터 저장하는 용도(survey.jsx에서)
export const listState=atom({
    key:"listState",
    default:[{surveyId:8,
      title:"설문조사 15자 넘으면 생략되도록",
      description:`설문조사설명내용임.ㅁ나sdfsd
      이마넝리마너ㅣㄹ아머닝라마ㅣㄴ어림ㄴㅇ.
      asdfaㅁ니ㅏ얼미ㅏ넝리ㅏ머나ㅣ런미ㅏ러이ㅏㅁ니아럼니ㅏ어리ㅏㅓ`, createdAt: "3일전"}],
});

//id 저장(market,survey 둘 다)
export const idState=atom({
  key:"idState",
  default:0,
})

export const pageState=atom({
  key:"pageState",
  default:"",
})

export const showPopUpState=atom({
    key:"showPopUpState",
    default:false,
});

//토스트팝업 메시지 저장
export const messageState=atom({
    key:"messageState",
    default:"설문이 등록되었습니다.",
});

//토스트팝업 여부 저장
export const alertState=atom({
  key:"alertState",
  default:false,
});

//상세 내용 저장 용도 
export const contentState=atom({
  key:"contentState",
  default:{surveyId:0, title:"빈 데이터",
  description:`데이터가 존재하지 않습니다.`, createdAt:"0일전"
,registrantName:"등록자명",linkUrl:"https://docs.google.com/forms/d/e/1FAIpQLSeo5MSDPCQl88957cXsGBGDKU9243W0PFjkAEQ5ZFhfwdToyg/viewform", reward:5, rewardUrl:"/surveyresult",isResponed:true, responded:true}
})

export const nicknameState=atom({
  key:"profileState",
  default:"",
})