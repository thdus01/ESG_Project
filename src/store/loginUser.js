// 사용자의 action들을 담아두는 파일
import React from 'react';
import axios from 'axios';

import { LOGIN_USERS, REGISTER_USER, LOGIN_CHECK, AUTH_USER, SET_USER, SURVEY_CAR, SEARCH_USER, RESULT_INFORM, changeLoginCheck } from './counter';

// loginUser function 생성
export function loginUser(dataTosubmit) {  // 로그인

    // axios를 통해 request 진행 
    const request = axios.post('/esg/login', dataTosubmit) // 서버에서 받은 데이터를 request 변수에 저장한다. (post)
        .then((response) => {
            console.log(response.data.role);

            // 로컬 스토리지에 사용자 정보 저장 후 이메일 추출
            localStorage.setItem('login_information', JSON.stringify(response.data));  // json 형식으로 회원 데이터를 로컬스토리지에 담는다.

            if (response.data.role === "admin") {  // 서버로부터 리턴받은 권한이 관리자일 경우
                localStorage.setItem('admin_email', JSON.parse(localStorage.getItem('login_information')).adminInfo.adminEmail);  // 관리자 이메일 추출
                localStorage.setItem('admin_name', JSON.parse(localStorage.getItem('login_information')).adminInfo.adminName);  // 관리자 이름 추출
                localStorage.setItem('role', JSON.parse(localStorage.getItem('login_information')).role);  // 관리자 이름 추출

                window.location.replace('/Adminpage');

            } else if (response.data.role === "user") {  // 서버로부터 리턴받은 권한이 user인 경우

                //localStorage.setItem('login_inform', JSON.parse(localStorage.getItem('login_information')).enterprisesInfo);  // [Object Object]
                localStorage.setItem('login_email', JSON.parse(localStorage.getItem('login_information')).enterprisesInfo.entMrgEmail);  // 회원 이메일 정보
                localStorage.setItem('login_name', JSON.parse(localStorage.getItem('login_information')).enterprisesInfo.entMrgName);  // 회원 이름
                localStorage.setItem('login_entName', JSON.parse(localStorage.getItem('login_information')).enterprisesInfo.entName);  // 기업 이름
                localStorage.setItem('role', JSON.parse(localStorage.getItem('login_information')).role);  // 기업 이름

                window.location.replace('/Survey');
                
            } else {
                alert('로그인 실패');
            }


        })
        
        .catch((error) => {
            console.log(error.data.messege);
            // alert('가입되지 않은 회원입니다.')
            alert(error.data.messege);

        })
        // .catch((messege) => {
        //     alert(messege);
        // })

    return {  // return을 시켜 reducer로 보낸다.
        type: LOGIN_USERS,   // type 이름: LOGIN_USERS
        payload: request    // response(request)를 payload라는 변수명에 저장시킨다.
    }
}

export function registerUser(dataTosubmit) {  // 회원가입

    const request = axios.post('/esg/signUp/new/user', dataTosubmit)  // 서버로 요청 보내기 (post)
        .then((response) => {
            console.log(response.data);
            window.location.replace('/SignIn');
        })
        .catch((error) => {
            console.log(error);

        })

    return {  // return 시켜 reducer로 보냄
        type: REGISTER_USER,
        payload: request
    }
}

export function searchUser(dataTosubmit) {  // 비밀번호 찾기 페이지 (유저정보 db 조회 요청)

    const request = axios.post('esg/check', dataTosubmit)  // 서버로 요청 보내기 (post)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem('member_information', JSON.stringify(response.data)); 
            localStorage.setItem('member_email', JSON.parse(localStorage.getItem('member_information')).entMrgEmail);
            window.location.replace('/SetPassword');
        })
        .catch((error) => {
            console.log(error);
        })

    return {  // return 시켜 reducer로 보냄
        type: SEARCH_USER,
        payload: request
    }
}

export function setUser(dataTosubmit) {  // 비밀번호 재설정

    const request = axios.post('/esg/change/pw', dataTosubmit)  // 서버로 요청 보내기 (post)
        .then((response) => {
            console.log(response.data);
            
            window.location.replace('/SignIn');
            localStorage.clear();
        })
        .catch((error) => {
            console.log(error);
        })

    return {  // return 시켜 reducer로 보냄
        type: SET_USER,
        payload: request
    }
}


export function surveyCal(dataTosubmit) {  // 진단 결과 -> 설문 종료 후 DB 저장 요청
    const request = axios.post('/esg/new/result', dataTosubmit)  // 서버로 요청 보내기 (post)
        .then((response) => {  // 통신 성공 시 결과 페이지로 이동
            console.log(response.data);
            window.location.replace('/Test');
        })
        .catch((error) => {
            console.log(error);
        })

    return {  // return 시켜 reducer로 보냄
        type: SURVEY_CAR,
        payload: request
    }
}

export function resultInform(dataTosubmit) {  // 진단 결과 조회
    const request = axios.get('/esg/result/all', dataTosubmit)  // 서버로 요청 보내기 (get)
        .then((response) => {  // 통신 성공
            console.log(response.data);
            window.location.replace('/');
        })
        .catch((error) => {
            console.log(error);
        })

    return {  // return 시켜 reducer로 보냄
        type: RESULT_INFORM,
        payload: request
    }
}

/*
export function loginCheck(dataTosubmit) {
    const request = Axios.get('https://cors-anywhere.herokuapp.com/http://220.66.115.155:81/esg/naverLoginLoading', dataTosubmit)
        .then(response => response.data)
        .catch((error) => {
            console.log(error);
        })

    return {
        type: LOGIN_CHECK,
        payload: request
    }
}*/
