import axios from "axios";
import React, { useEffect, useState } from "react";

function NaverLogin({ setGetToken, setUserInfo }) {

    const { naver } = window  // 네이버 로그인 초기화
    const NAVER_CLIENT_ID = '6JDmSgcOtmmbpXTTXKYC'  // 발급받은 Client ID 입력
    const NAVER_CALLBACK_URL = 'http://localhost:3000/NaverLoginLoading'  // 작성했던 Callback URL 입력

    const token = null;

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,

            // 팝업창으로 로그인을 진행할 것인지의 여부
            isPopup: false,

            // 버튼 타입(색상, 타입, 크기 변경 가능)
            loginButton: { color: 'green', type: 3, height: 53 },
            callbackHandle: true,
        })

        naverLogin.init();


        // 선언된 naverLogin을 이용하여 유저 (사용자) 정보를 불러오는데
        // 함수 내부에서 naverLogin을 선언하였기에 지역변수처리가 되어
        // userinfo 정보를 추출하는 것은 지역변수와 같은 함수에서 진행해주어야 함

        // 아래와 같이 로그인한 user (사용자) 정보를 직접 접근하여 추출 가능
        // 이 때, 데이터는 첫 연동시 정보 동의한 데이터만 추출 가능

        // backend 개발자가 정보 전달 시 '요기!' 부분까지는 코드 생략 가능


        naverLogin.getLoginStatus(async function (status) {   // 비동기 처리
            if (status) {
                // 아래처럼 선택하여 추출이 가능하고,
                const id = naverLogin.user.getId();
                const ent_mrg_email = naverLogin.user.getEmail();
                const ent_mrg_name = naverLogin.user.getName();
                const ent_mrg_mobile = naverLogin.user.getPhone();  // 담당자 전화번호
                const ent_mrg_sns = naverLogin.user.ent_mrg_sns();  // 담당자 sns

                const user = {
                    id: id,
                    ent_mrg_name: ent_mrg_name,
                    ent_mrg_email: ent_mrg_email,
                    ent_mrg_mobile: ent_mrg_mobile,
                    ent_mrg_sns: ent_mrg_sns
                }
                console.log(user);

                // 정보 전체를 아래처럼 state에 저장하여 추출하여 사용가능
                setUserInfo(naverLogin.user);
            }
        })
        //  요기!
    }

    // 네이버 소셜 로그인 (네아로) 는 URL 에 엑세스 토큰이 붙어서 전달된다.
    // 우선 아래와 같이 토큰을 추출 할 수 있으며,
    // 3부에 작성 될 Redirect 페이지를 통해 빠르고, 깨끗하게 처리가 가능하다

    const userAccessToken = () => {
        window.location.href.includes('access_token') && setGetToken()
    }

    const getToken = () => {
        const token = window.location.href.split('=')[1].split('&')[0];

        localStorage.setItem('access_token_local', token);
        console.log(token);
        // console.log, alert 창을 통해 토큰이 잘 추출 되는지 확인하자! 

        // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!   
        localStorage.setItem('access_token', token)
        setGetToken(token);

    }


    // 화면 첫 렌더링 이후 바로 실행 위해 useEffect 사용
    useEffect(() => {
        initializeNaverLogin()
        userAccessToken()
        /*axios.get('https://cors-anywhere.herokuapp.com/http://220.66.115.155:81/esg/signUp/naver', token)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })*/
    }, []);


    return (
        <>
            <div>
                <div id="naverIdLogin" />
            </div>

        </>
    );
}

export default NaverLogin;