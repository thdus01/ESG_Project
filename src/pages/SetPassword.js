import React, { useCallback, useState } from "react";
import Header from "../components/basic/Header";
import Nav from "../components/basic/Nav";
import Footer from "../components/basic/Footer";
import './SetPassword.css';
import { useDispatch } from "react-redux";
import { setUser } from "../store/loginUser";
import MediaQuery from 'react-responsive';

// 비밀번호 재설정 페이지

function SetPassword(props) {

    const dispatch = useDispatch();

    const [ent_mrg_pw, setEnt_mrg_pw] = React.useState('');
    //const [ent_mrg_email, setEnt_mrg_email] = React.useState("");  // 이메일
    const ent_mrg_email = localStorage.getItem('member_email');

    const [showPassword, setShowPassword] = React.useState(true);  // 값: true -> 글자 숨기기 기능

    const togglePass = (e) => {  // 비밀번호 글자 숨기기
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    // const onChangeEnt_mrg_email = useCallback((text) => {
    //     setEnt_mrg_email(text.trim());
    //   }, []);

    //   const onChangeEnt_mrg_pw = useCallback((text) => {
    //     setEnt_mrg_pw(text.trim());
    //   }, []);

  

    const handleEnt_mrg_pw = (event) => {  // 전화번호
        setEnt_mrg_pw(event.target.value);
    }

    const onHandle = (e) => {
        e.preventDefault();

        // if (  // 정규 표현식
        //     !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
        //         ent_mrg_email,
        //     )
        // ) {
        //     return alert('이메일 형식이 올바르지 않습니다..');
        // }

        let body = {  // 서버에 요청할 데이터
            ent_mrg_email: ent_mrg_email,
            ent_mrg_pw: ent_mrg_pw
        }

        dispatch(setUser(body))
            .then(response => {  // 요청 성공 했을 때
                console.log(response.data);

                //localStorage.clear();  // 로컬 스토리지를 비운다.
                //localStorage.setItem('email', response.data.email);  // localStorage에 데이터 저장('key', value)
                //localStorage.setItem('token', response.data.token);  

                // if (response.payload.success) {  // 응답 성공시 
                //   window.location.replace("/Survey");  // 메인페이지로 이동
                // } else {
                //   alert("로그인에 실패했습니다!");
                // }
                //navigate('/Survey');
                window.location.replace("/SignIn");

            })
            .catch((error) => {
                console.log(error);

            })

    }

    return (
        <>
            {/*PC*/}
            <MediaQuery minWidth={501}>
                <Header />
                <Nav />
                <div className="body_setpw">
                    <div className="setpw_wrapper">
                        <div className='Set_PW'>
                            <h2> 비밀번호 찾기 </h2>

                            <div className="reset_password">
                                <div className="reset_pw2">
                                    <div className="set_text">
                                        <h5> 새로운 비밀번호를 설정할 수 있습니다. </h5></div>
                                </div>
                                <div className="set_information">
                                    <div className="set_compName">
                                        <label>비밀번호</label>
                                        <input
                                            type={showPassword ? 'password' : 'text'}
                                            maxLength='20'
                                            onChange={handleEnt_mrg_pw}
                                            name='set_compName'
                                            className="set_compName"
                                            placeholder="새로운 비밀번호를 입력하세요." />
                                    </div>

                                    <div className="set_pw_confirm">
                                        <label>비밀번호 확인</label>
                                        <input
                                            type={showPassword ? 'password' : 'text'}
                                            maxLength='20'
                                            name='set_email'
                                            className="set_email"
                                            placeholder="비밀번호 확인" /></div>
                                </div>

                            </div>

                            <div>

                                <input type='button'
                                    value='변경'
                                    name='set_submit'
                                    onClick={onHandle} />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </MediaQuery>

            {/*moblie*/}
            <MediaQuery maxWidth={500}>
                <div className="body_setpw">
                    <div className="setpw_wrapper">
                        <div className='Set_PW'>
                            <h2> 비밀번호 찾기 </h2>

                            <div className="reset_password">
                                <div className="reset_pw2">
                                    <div className="set_text">
                                        <p className="inform_set"> 새로운 비밀번호를 설정할 수 있습니다. </p></div>
                                </div>
                                <div className="set_information">
                                    <div className="set_compName">
                                        <label>비밀번호</label>
                                        <input
                                            type={showPassword ? 'password' : 'text'}
                                            maxLength='20'
                                            onChange={handleEnt_mrg_pw}
                                            name='set_compName'
                                            className="set_compName"
                                            placeholder="새로운 비밀번호를 입력하세요." />
                                    </div>

                                    <div className="set_pw_confirm">
                                        <label>비밀번호 확인</label>
                                        <input
                                            type={showPassword ? 'password' : 'text'}
                                            maxLength='20'
                                           
                                            name='set_email'
                                            className="set_email"
                                            placeholder="비밀번호 확인" /></div>
                                </div>

                            </div>

                            <div>

                                <input type='button'
                                    value='변경'
                                    name='set_submit'
                                    onClick={onHandle} />
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </>
    );
}

export default SetPassword;