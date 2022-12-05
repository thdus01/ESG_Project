import React, { useCallback, useEffect, useRef, useState } from "react";
import Footer from "../components/basic/Footer";
import Header from "../components/basic/Header";
import Nav from "../components/basic/Nav";
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/loginUser";
import MediaQuery from 'react-responsive';
import { changeLoginCheck } from "../store/counter";

function SignIn(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  // 에러 state 설정
  const [emailError, setEmailError] = useState("");
  const [pwError, setPwError] = useState("");

  // 아이디와 비밀번호 -> 초기값 공백 설정
  const [ent_mrg_email, setEnt_mrg_email] = React.useState("");  // 이메일
  const [ent_mrg_pw, setEnt_mrg_pw] = React.useState("");  // 비밀번호

  // 커서를 옮기기 위한 변수
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [showPassword, setShowPassword] = React.useState(true);  // 값: true -> 글자 숨기기 기능

  const togglePass = (e) => {  // 비밀번호 글자 숨기기
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  const onChangeEnt_mrg_email = useCallback((text) => {
    setEnt_mrg_email(text.trim());
  }, []);

  const onChangeeEnt_mrg_pw = useCallback((text) => {
    setEnt_mrg_pw(text.trim());  // 공백 제거
  }, []);

  const handleEnt_mrg_email = (event) => {  // 이메일
    setEnt_mrg_email(event.target.value);
  }

  const handleEnt_mrg_pw = (event) => {   // 비밀번호
    setEnt_mrg_pw(event.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!ent_mrg_email || !ent_mrg_email.trim()) {
      return setEmailError('이메일을 입력해주세요.')
    }
    if (!ent_mrg_pw || !ent_mrg_pw.trim()) {
      return setPwError('비밀번호를 입력해주세요.');
    }
    if (  // 정규 표현식
      !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
        ent_mrg_email,
      )
    ) {
      return alert('이메일 형식이 올바르지 않습니다..');
    }

    console.log({
      'Email: ': ent_mrg_email,
      'Password: ': ent_mrg_pw
    });

    let body = {  // 서버에 요청할 데이터
      email: ent_mrg_email,
      pw: ent_mrg_pw
    }


    dispatch(loginUser(body))
      .then((response) => {  // 요청 성공 했을 때
        console.log(response.data);
        dispatch(changeLoginCheck({ check: "Logined" }));
        window.location.replace("/Survey");

      })
      .catch((error) => {
        console.log(error);
        alert("로그인에 실패했습니다!");
        setEmailError('');  // 이메일 에러 메시지
        setPwError('');   // pw 에러 메시지
      })


  }

  const goSignUp = useCallback(() => {   // 회원가입 페이지로 이동
    navigate('/SignUpNaver');
  }, []);

  const goSearchPW = useCallback(() => {  // 비밀번호 찾기 페이지로 이동
    navigate('/SearchPW');
  }, []);

  return (
    <>
      {/*PC*/}
      <MediaQuery minWidth={501}>
        <Header />
        <Nav />
        <div className="body_SignIn">
          <div className="login_wrapper">
            <div> <h2 className="text_login">로그인</h2></div>
            <form className="loginBox" >
              <div className="text_area123">
                <input
                  id="email"
                  defaultValue={ent_mrg_email}
                  type="email"
                  ref={emailRef}
                  className="loginInput"
                  placeholder="아이디를 입력하세요."
                  name="id"
                  onChange={handleEnt_mrg_email}
                />
                {emailError && <div className="textDange">{emailError}</div>}
              </div>
              <div className="text_area123">

                <input
                  id="password"
                  type={showPassword ? 'password' : 'text'}
                  className="loginInput"
                  ref={passwordRef}
                  defaultValue={ent_mrg_pw}
                  placeholder="비밀번호를 입력하세요."
                  name="password"
                  onChange={handleEnt_mrg_pw}
                />
                {pwError && <div className="textDange">{pwError}</div>}
              </div>
              <div className="findObject">
                <div className="findObject1" onClick={goSearchPW}> 비밀번호 찾기</div>
              </div>

              <div className="button_login">

                <input
                  type="button"
                  value="로그인"
                  className="btn_Login"
                  onClick={onSubmitHandler}
                />
              </div>

              <div className="goSignUp">
                <p>아직 회원이 아닌가요?</p>

                <h5
                  className="goSignUp_h5"
                  onClick={goSignUp}>회원가입하기</h5>

              </div>

            </form>
          </div>
        </div>
        <Footer />
      </MediaQuery>

      {/*Mobile*/}
      <MediaQuery maxWidth={500}>

        <div className="body_SignIn">
          <div className="login_wrapper">
            <div> <h2 className="text_login">로그인</h2></div>
            <form className="loginBox" >
              <div className="text_area123">
                <input
                  id="email"
                  defaultValue={ent_mrg_email}
                  type="email"
                  ref={emailRef}
                  className="loginInput"
                  placeholder="아이디를 입력하세요."
                  name="id"
                  onChange={handleEnt_mrg_email}
                />
                {emailError && <div className="textDange">{emailError}</div>}
              </div>
              <div className="text_area123">

                <input
                  id="password"
                  type={showPassword ? 'password' : 'text'}
                  className="loginInput"
                  ref={passwordRef}
                  defaultValue={ent_mrg_pw}
                  placeholder="비밀번호를 입력하세요."
                  name="password"
                  onChange={handleEnt_mrg_pw}
                />
                {pwError && <div className="textDange">{pwError}</div>}
              </div>


              <div className="button_login">

                <input
                  type="button"
                  value="로그인"
                  className="btn_Login"
                  onClick={onSubmitHandler}
                />
              </div>

              <div className="findObject">
                <div className="findObject1" onClick={goSearchPW}> 비밀번호 찾기</div>
              </div>

              <div className="goSignUp">
                <p>아직 회원이 아닌가요?</p>

                <h5
                  className="goSignUp_h5"
                  onClick={goSignUp}>회원가입하기</h5>

              </div>

            </form>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}


export default SignIn;