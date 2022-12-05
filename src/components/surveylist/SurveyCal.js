import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { surveyCal } from "../../store/loginUser";
import SignIn from "../../pages/SingIn";


// 로컬 스토리지에 저장해둔 설문 응답 데이터를 파싱하는 페이지
// 데이터를 파싱하여 서버로 전송함. (요청)
// 서버에선 요청받은 데이터의 결과 값을 웹으로 넘겨준다.

function SurveyCal(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = useState([]);

    let ent_mrg_email = localStorage.getItem('login_email');  // 로컬 스토리지에 저장된 이메일 주소 불러오기

    // 전체 데이터 값 불러오기 (key) -> 문자열에서 객체 타입으로 변환해주기
    // key값 불러오기 => localStorage.getItem('key')
    // 이중 for문 사용해서 value 불러오기

    //let SurveyData = localStorage.getItem(questionNumber);
    const P = [];
    const E = [];
    const S = [];
    const G = [];

    useEffect(() => {

        for (var i = 1; i <= 4; i++) {
            //    let first = JSON.parse(localStorage.getItem('dataQuestionOne' + i));
            let first = parseInt(JSON.parse(localStorage.getItem('dataQuestionOne' + i)));
            //console.log(localStorage.getItem('dataQuestionOne' + i));
            P.push(first);
            //  console.log(P);
            // ['1', '3', '4', '5']  -> 인덱스가 객체 형태로 반환
        }

        for (var j = 1; j <= 19; j++) {
            // let second = JSON.parse(localStorage.getItem('dataQuestionTwo' + i));
            let second = parseInt(JSON.parse(localStorage.getItem('dataQuestionTwo' + i)));
            E.push(second);
            //  console.log(E);
        }

        for (var k = 1; k <= 10; k++) {
            // let third = JSON.parse(localStorage.getItem('dataQuestionThree' + i));
            let third = parseInt(JSON.parse(localStorage.getItem('dataQuestionThree' + i)));
            S.push(third);
            //   console.log(S);
        }

        for (var g = 1; g <= 9; g++) {
            // let Fouur = JSON.parse(localStorage.getItem('dataQuestionFour' + i));  // 객체 형태로 파싱
            let Fouur = parseInt(JSON.parse(localStorage.getItem('dataQuestionFour' + i)));
            G.push(Fouur);
            // console.log(G);
        }

        console.log(P);
        console.log(E);
        console.log(S);
        console.log(G);

        console.log(ent_mrg_email);

        let SurveyData =
        {
            "ent_mrg_email": ent_mrg_email,
            "public": P,
            "environment": E,
            "social": S,
            "governance": G
        }

        console.log(SurveyData);

        //    //서버와 통신
        //     dispatch(surveyCal(SurveyData))
        //         .then(response => {
        //             console.log(response.data);
        //             if (response.payload.success) {
        //                 navigate('/Test');
        //             } else {
        //                 alert('통신 실패');  // 실패 시 알림창 띄우기
        //             }
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //             alert("통신 실패!")
        //         })

        // 서버와 통신
        axios.post('/esg/new/result', SurveyData)
            .then((response) => { // 통신 성공하면 실행됨
                console.log(response.data);
                localStorage.removeItem('')
                // SurveyData = response;
                axios.get("/esg/result", {
                    params:
                    {
                        "eval_result_idx": response.data.eval_result_idx
                    }
                }).then((res) => {
                    JSON.stringify(localStorage.setItem('local_point', res.data));
                    let localpopa = JSON.stringify(res.data);
                    localStorage.setItem('localpopa', localpopa);
                    let papa = JSON.parse(localStorage.getItem('localpopa'));
                    // popo = JSON.stringify(popo.replace('{', '').replace('}', ''));
                    // console.log("popo : " + popo);

                    setData(papa);
                    localStorage.setItem('total', papa.total);
                    localStorage.setItem('public', papa.public);
                    localStorage.setItem('social', papa.social);
                    localStorage.setItem('environment', papa.environmentList);
                    localStorage.setItem('governance', papa.governance);
                    // 데이터 불러오는 부분
                    // total = parseFloat(localStorage.getItem('total')).toFixed(1);
                    // pub = parseFloat(localStorage.getItem('public'));
                    // social = parseFloat(localStorage.getItem('social'));
                    // environment = parseFloat(localStorage.getItem('environment'));
                    // governance = parseFloat(localStorage.getItem('governance'));
                    // ent_mrg_name = localStorage.getItem('ent_mrg_name');
                    // console.log(typeof(popo));
                    setData(localpopa);
                    navigate("/Result")

                })

                // navigate('/SignUp', {state:{key1:"키1"}}); //이렇게 하면 navigate할 때 파라미터도 동시에 넘길 수 있어서 데이터 처리 가능함.
                //navigate('/Test');

            })
            .catch((error) => {  // 통신 실패 시
                console.log(error);
                alert('통신 실패!');
            })


    }, []);

    // const onHanlder = (e) => {
    //     e.preventDefault();

    //     let SurveyData =
    //     {
    //         "ent_mrg_email": ent_mrg_email,
    //         "P": P,
    //         "E": E,
    //         "S": S,
    //         "G": G
    //     }


    //     console.log(SurveyData);

    //     // 서버와 통신
    //     dispatch(surveyCal(SurveyData))
    //         .then(response => {
    //             console.log(response.data);
    //             SurveyData = response;
    //             if (response.payload.success) {
    //                 navigate('/Test');
    //             } else {
    //                 alert('통신 실패');  // 실패 시 알림창 띄우기
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             alert("통신 실패!")
    //         })



    // }

    return (
        <>
            {/* {onHanlder} */}
        </>
    );
}

export default SurveyCal;