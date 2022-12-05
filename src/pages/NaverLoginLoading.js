import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginCheck } from "../store/loginUser";
import { changeLoginCheck, changeInformations } from "../store/counter";

// SignUpNaver 페이지에서 네이버 로그인 버튼을 누른 후 정보를 넘기면 이 페이지로 엑세스 토큰이 넘어온다.
// 이 페이지에서 처리해서 SignUp 페이지로 넘긴다.

function NaverLoginLoading(props) {

    //const [loading, setLoading] = React.useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => { // 보통은 통신할때 useEffect() 안에서 처리하는것이 좋다.

        const token = ((window.location.href || '').split('=')[1] || '').split('&')[0];
        console.log(token);
        localStorage.setItem('access_token_local', token);

        const access_token = { access_token: token };
        console.log(access_token);

        let login_check = false; // 통신 성공여부 체크 변수
        let tokenData = null;  // 사용자 타입 (유저 데이터 여부)

        // 통신을 한번만 할 경우
        // axios통신은 무조건 useEffect안에서 선언
        //Axios.post()이면 => '주소', {키1:변수1, 키2:변수2, 키3:변수3} 형식으로 사용해야됨 
        // Axios.get('서버가 리턴하는 주소', {params:{키1:변수1, 키2:변수2, 키3:변수3}}) // 통신 코드 ***야-매***
        axios.get('/esg/signUp/naver',
            { params: { access_token: token } })

            .then((response) => { // 통신 성공하면 실행됨
                console.log(response);
                tokenData = response;
                // 추가로 정보를 입력할 구간으로 이동
                // navigate('/SignUp', {state:{key1:"키1"}}); //이렇게 하면 navigate할 때 파라미터도 동시에 넘길 수 있어서 데이터 처리 가능함.
                navigate('../SignUp',
                    {
                        state: {  // signup 페이지로 넘어가면서 파라미터를 같이 넘겨줌
                            value: tokenData.data.ent_mrg_email,
                            value1: tokenData.data.ent_mrg_name,
                            value2: tokenData.data.ent_mrg_mobile,
                            value3: tokenData.data.ent_mrg_sns
                        }
                    });

            })
        // .catch((error) => { // 오류가 떴을때 실행됨 (통신 실패 시)
        //     console.log("error: " + error);
        //     alert('통신 실패!');
        //     navigate('./SingIn');
        // }),


        // 통신을 여러번 할 경우
        if (login_check !== null) { // 통신이 성공, 유저데이터 존재할 떄

            // 유저 데이터 요청
            /* 유저 데이터 요청란 작성 */

            if (tokenData.data.roll === "user") {
                // 리덕스에 유저 데이터 저장
                dispatch(changeLoginCheck({ check: "Logined" }));
                // dispatch(changeInformations({
                //     id: "",
                //     ent_mrg_name: "강소연",
                //     ent_mrg_email: "",
                //     ent_mrg_mobile: "",
                //     ent_mrg_sns: ""
                // }));

            } else if (tokenData.data.roll === "admin") {
                dispatch(changeLoginCheck({ check: 'Logined' }));
                // dispatch(changeInformations({
                //     id: "",
                //     ent_mrg_name: "",
                //     ent_mrg_email: "",
                //     ent_mrg_mobile: "",
                //     ent_mrg_sns: ""
                // }));
            }

            navigate('../SignUp');

        } else if (login_check == false) {

            dispatch(changeLoginCheck({ check: 'unLogined' }));

        } else if (login_check == true) {

            dispatch(changeLoginCheck({ check: 'unLogined' }));
        }
        else {

            alert("통신이 실패했습니다!"); // 경고문
            navigate('../SignIn'); // 다시 로그인 페이지로 이동
        }
    }, []);

    // 통신을 한번만 하면 => 방법1 : then()에다가 성공했을때의 코드 삽입, catch()에다가 실패했을대의 코드 삽입
    // 통신을 여러번 하면 => 방법2 : if else 방법을 사용

    return (
        <>
        </>
    );
}

export default NaverLoginLoading;