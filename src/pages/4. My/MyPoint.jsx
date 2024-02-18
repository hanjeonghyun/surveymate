import React, { useEffect, useState } from 'react'
import * as C from '../../components/SurveyComponents'
import styled from 'styled-components'
import { useNavigate} from 'react-router'
import * as B from '../../components/BottomSheet'
import axios from 'axios'


export default function MyPoint() {
    const navigate = useNavigate();
    const [point, setPoint]= useState(0);
    const [count, setCount]=useState(0);
    const [selectedcategory, setSelectedcategory] = useState('total');
    const [categoryDummys, setCategoryDummys]= useState([]);

    async function getPoint(){
        const token = localStorage.getItem('token');
        if (token){
        try{
<<<<<<< HEAD
            const response = await axios.get("https://sleigh.college/api/statement/total",{
=======
            const response = await axios.get("https://sleigh.college/statement/total",{
>>>>>>> d4870eaf0b40fa52dc81d005528ec2806dedab99
                headers: {
                    "accept": "*/*",
                    'Authorization': token,
                  }
            });
            const data = response.data.data.totalAmount;
            setPoint(data);
            console.log(data);
            console.log(response)
            return data;
        } catch (error) {
            if (error.response) {
                console.error('서버 응답 상태 코드:', error.response.status);
                console.error('서버 응답 데이터:', error.response.data);
            }
        }
    }
    };
    useEffect(() => {
        getPoint(); 
    }, []);

<<<<<<< HEAD
=======
    const [selectedCategory, setSelectedCategory] = useState('total');
    const [categoryDummys,setCategoryDummys]=useState({
        total:[{description:"설문조사 응답",createAt:"2024-02-14",amount:20,balance:80},
        {description:"설문조사 등록",createAt:"2024-02-15",amount:-30,balance:50}],
        plus:[],
        minus:[],
    });
    // const categoryDummys = {
    //     total:[
    //         {type: "plus", title: "설문조사 응답", time:"2024-01-24",point:"+30",balance:"잔액 80POINT", id:1},
    //         {type: "minus", title: "설문조사 등록", time:"2024-01-24",point:"-30",balance:"잔액 50POINT", id:2}, 
    //         {type: "plus", title: "설문조사 응답", time:"2024-01-25",point:"+30",balance:"잔액 80POINT", id:3},
    //         {type: "plus", title: "설문조사 응답", time:"2024-01-26",point:"+30",balance:"잔액 110POINT", id:4},  
    //         {type: "minus", title: "설문조사 등록", time:"2024-01-26",point:"-30",balance:"잔액 80POINT", id:5},
    //         {type: "plus", title: "설문조사 응답", time:"2024-01-26",point:"+30",balance:"잔액 110POINT", id:6},
    //         {type: "plus", title: "설문조사 응답", time:"2024-01-27",point:"+30",balance:"잔액 140POINT", id:7},
    //         {type: "minus", title: "설문조사 등록", time:"2024-01-28",point:"-30",balance:"잔액 110POINT", id:8},
    //         {type: "minus", title: "설문조사 등록", time:"2024-01-29",point:"-30",balance:"잔액 80POINT", id:9},
    //         {type: "minus", title: "설문조사 등록", time:"2024-01-31",point:"-30",balance:"잔액 50POINT", id:10},
    //         {type: "minus", title: "설문조사 등록", time:"2024-02-01",point:"-30",balance:"잔액 20POINT", id:11},
    //     ],
    //     plus:[],
    //     minus:[],
    // };

    const getData = async()=>{
        const token = localStorage.getItem('token');
        if (token){
        try{
           // const res = await axios.get("https://survey-mate-api.jinhy.uk/statement/list",{
             //   headers: {
               //     "accept": "*/*",
                 //   'Authorization': currentToken,
                 // }
              //  })
            
            const res = await axios.get("https://sleigh.college/statement/list",{
                headers: {
                    "accept": "*/*",
                    'Authorization': token,
                  }
            })
        
            console.log(res);
            setCategoryDummys(res.data.data);
        
        }catch(error) {
            if (error.response) {
                console.error('서버 응답 상태 코드:', error.response.status);
                console.error('서버 응답 데이터:', error.response.data);
            } else if (error.request) {
                console.error('서버 응답 없음');
            } else {
                console.error('Axios 오류:', error.message);
            }
        }
    
    }
    };
    categoryDummys.plus = categoryDummys.total.filter(item => item.amount>0);
    categoryDummys.minus = categoryDummys.total.filter(item => item.amount<0);

    const count = categoryDummys[selectedCategory].length;

>>>>>>> d4870eaf0b40fa52dc81d005528ec2806dedab99
    const handleBackBtnClick = ()=>{
        navigate("/mypage");
    };

    const handleCategoryClick = (category) => {
        setSelectedcategory(category);
        navigate(`../mypoint${category}`);
    };

    const getData = async()=>{
        const token = localStorage.getItem('token');
        if (token){
        try{
            let url;
            if (selectedcategory === "total") {
                url = "https://sleigh.college/api/statement/list";
            } else if (selectedcategory === "plus") {
                url = "https://sleigh.college/api/statement/list/seller";
            } else {
                url = "https://sleigh.college/api/statement/list/buyer";
            }
            
            const res = await axios.get(url, {
                headers: {
                    "accept": "*/*",
                    'Authorization': token,
                }
            });

            console.log(res);
            setCategoryDummys(res.data.data.statements);
            console.log(res.data.data.statements);
            console.log(res.data.data.statements.createdAt);
            setCount(res.data.data.statements.length);
        }catch(error) {
            console.error('서버 응답 상태 코드:', error.response.status);
            console.error('서버 응답 데이터:', error.response.data);
        }
    }
    };
    useEffect(() => {
        console.log(selectedcategory);
        getData();
    }, [selectedcategory]);
    
  return (
    <>
    <C.TitleWrapper>
    <BackButton onClick={handleBackBtnClick}></BackButton>
        <C.Title>
            마이포인트
        </C.Title>
    </C.TitleWrapper>
    <PointWrapper>
        <B.InputLabel>보유 포인트</B.InputLabel> 
        <HoldPointWrapper>
            <HoldPoint>
                {point} POINT
            </HoldPoint>
        </HoldPointWrapper>
    </PointWrapper>
    <CateWrapper>
        <Cate 
        onClick={() => handleCategoryClick('total')}
        selectedCategory={selectedcategory}
        category='total'
        >전체
        </Cate>
        <Cate 
        onClick={() => handleCategoryClick('plus')}
        selectedCategory={selectedcategory}
        category='plus'
        >적립
        </Cate>
        <Cate 
        onClick={() => handleCategoryClick('minus')}
        selectedCategory={selectedcategory}
        category='minus'
       >차감</Cate>
    </CateWrapper>
    <Number>
        {count}건
    </Number>

    <ListWrapper>
        {categoryDummys.map((item,index)=>{
            return(
                <ListItem key={index}>
                    <TextTitle>
                        <Font className="title">{item.description}</Font>
                        <Font className="point" amount ={item.amount}>{item.amount>0 ? `+${item.amount}` : item.amount}</Font>
                    </TextTitle>
                    <TextTitle>
                        <Font className="time">
                         {item.createdAt.substring(0, 10)}</Font>
                        <Font className="balance">잔액 {item.balance}POINT</Font>
                    </TextTitle>
                </ListItem>
            )
        })}
    </ListWrapper>
    </>
  )
}


const BackButton = styled.button`
    background:url('../../src/assets/images/aback_icon.svg') no-repeat;
    position:absolute;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    left:5vw;
    border:none;
`;

const PointWrapper = styled.div`
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    padding-top:5vw;
    padding-bottom:2vw;
`;

const HoldPointWrapper = styled.div`
    border-radius: 10px;
    border: 2px solid #CFC8FF;
    background: var(--white, #FFF);
    display: flex;
    width: 90vw;
    height: 5vh;
    justify-content: center;
    align-items: center;
    margin: 1vh 0;
`;

const HoldPoint = styled.div`
    color: #000;
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
`;

const CateWrapper =styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
`;

const Cate = styled.div`
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    color: ${(props) =>
        props.selectedCategory===props.category ? '#24252E'  : '#BFC3D4'};
    border-bottom: ${(props)=>props.selectedCategory===props.category ? '3px solid #6046FF' : 'none'};
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 18px */
`;

const Number = styled.div`
    display:flex;
    justify-content:flex-end;
    color: #000;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 12px */
    margin-top:1vh;
    margin-bottom:2vh;
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 62vh; 
    overflow-y: auto;
`;

const ListItem = styled.div`
    padding: 2vh 0;
    & > * + * {
        margin-top: 8px;
    }
`;

const TextTitle=styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

`;

const Font=styled.p`
    color: #000;
    font-family: Poppins;
    font-style: normal;
    line-height: 100%;
    &.title{
        color: #000;
        font-size: 14px;
        font-weight: 600;
    }
    &.time{
        color: #979797;
        font-size:12px;
        font-weight: 400;
    }
    &.point{
        color: ${(props) => (props.amount>0 ? '#0148FF' : '#F00')};
        font-size: 14px;
        font-weight: 500;
    }
    &.balance{
        color: #979797;
        font-size: 12px;
        font-weight: 300;
    }
`;