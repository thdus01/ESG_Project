import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import './Header.css';
import esg_22 from '../../assets/esg_22.png';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { changeLoginCheck } from "../../store/counter";
import { loginUser } from "../../store/loginUser";

function Header(props) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const location = useLocation();

  //const [checkLogin, setCheckLogin] = useState("unLogined");

  let ent_mrg_name = localStorage.getItem('login_name');
  let admin_name = localStorage.getItem('admin_name');

  let login_redux = useSelector((state) => state.counter.login_check.check);
  //const nameInfo = useSelector((state) => state.counter.informations.ent_mrg_name);
  //const nameInfo = location.state.value1;
  //const loginsuccess_redux = useSelector((state) => state.counter.loginSuccess.check);

  const logout = () => {
    dispatch(changeLoginCheck({ check: "unLogined" }));  // dispatch함수로 로그인 체크 상태를 unLogined로 바꿔준다.
    alert("로그아웃 하시겠습니까?");

    // 로컬스토리지 삭제
    localStorage.clear();
    navigate('/');
  };



  // const login = useCallback( // 로그인 버튼 누르면 작동
  //   () => {
  //     setCheckLogin("Logined"); // 로그인 상태로 변환
  //   }, [setCheckLogin]
  // )

  // const logout = useCallback( // 로그아웃 버튼 누르면 작동
  //   () => {
  //     setCheckLogin("unLogined"); // 로그인 안된 상태로 변환
  //   }, [setCheckLogin]
  // )

  let loginComponent = null;

  if (login_redux === "unLogined") { // 로그인 안된 상태면 출력
    loginComponent = (
      <>
        <div>
          <Link to='/SignIn' className='header_login' style={{ color: 'rgb(146, 146, 146)' }}>로그인</Link></div>
      </>
    )

  } else if (login_redux === "Logined") { // 로그인 된 상태면 출력
    console.log(login_redux);
    loginComponent = (
      <>
        <a onClick={logout}>
          <div className='header_login' style={{ color: 'rgb(146, 146, 146)' }}>
            로그아웃
          </div></a>
        <div className='header_login'><strong>{ent_mrg_name}</strong>님</div>
      </>
    );
  } 
  else if (login_redux === "admin") { // 로그인 된 상태면 출력
    console.log(login_redux);
    loginComponent = (
      <>
        <a onClick={logout}>
          <div className='header_login' style={{ color: 'rgb(146, 146, 146)' }}>
            로그아웃
          </div></a>
        <div className='header_login'><strong>{admin_name}</strong>님</div>
      </>
    );
  }
  else {
    loginComponent = (
      <>
        <div>
          <Link to='/SignIn' className='header_login' style={{ color: 'rgb(146, 146, 146)' }}>로그인</Link></div>
      </>
    )
  }

  return (
    <>
      <div className="header_main">
        <header className="header_main_box">

          <div className="header_main_link1">
            <div className="page_link"><Link to='/'><img id="esg_icon_image" src={esg_22} alt="esg_22" style={{ height: '26px' }} /></Link></div>
            <div className="page_link"><a href='https://blog.naver.com/lbamiraean' style={{ textDecoration: 'none', color: 'rgb(146, 146, 146)' }}>
              ESG 경영협동조합
            </a></div>
          </div>
          <div className="header_main_link2">
            {loginComponent}
          </div>
        </header>
      </div>

    </>
  );
}

export default Header;