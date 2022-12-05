import React, { useState } from "react";
import styles from './Banner.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLoginCheck } from "../store/counter";
import { loginUser } from "../store/loginUser";
import MediaQuery from 'react-responsive';


function Banner(props) {

    //const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginService, setLoginService] = useState('');

    const login_redux_check = useSelector((state) => state.counter.login_check.check);

    const handleGoLogin = (e) => {
        if (login_redux_check == "Logined") {
            navigate('/Survey');
        } else {
            alert("로그인이 필요한 서비스입니다.");
            navigate('/SignIn');
        }
    };

    return (
        <>
    {/*PC*/}
    <MediaQuery minWidth={501}>
            <div className={styles.banner_main}>
                <div className={styles.banner_explain}>
                    <div className={styles.banner_explain2}>
                        <h1>ESG 자가진단 서비스 </h1><br />
                        <p>우리 회사의 ESG 종합등급, E/S/G 부문별 등급과 현황을 점검해보세요.</p></div>
                    <div className={styles.banner_main_box}>
                        {/* <Link to="/SignIn" className={styles.btnText} > */}
                        <div className={styles.button} onClick={handleGoLogin}>
                            <p className={styles.btnText}>시작하기</p>
                            <div className={styles.btnTwo}>
                                <p className={styles.btnText2}>GO!</p>
                            </div>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>

            </div>
           </MediaQuery>

            {/*Mobile*/}
            <MediaQuery maxWidth={500}>
            <div className={styles.banner_background_mobile}>
            <div className={styles.banner_main_mobile}>
                <div className={styles.banner_explain_mobile}>
                    <div className={styles.banner_explain2_mobile}>
                        <span className={styles.banner_title}>ESG 자가진단 서비스 <br /></span><br />
                        <span className={styles.banner_title2}>우리 회사의 ESG 종합등급, E/S/G 부문별 등급과 현황을 점검해보세요.</span></div>
                    <div className={styles.banner_main_box_mobile}>
                        {/* <Link to="/SignIn" className={styles.btnText} > */}
                        <div className={styles.button_mobile} onClick={handleGoLogin}>
                            <p className={styles.btnText_mobile}>시작하기</p>
                            <div className={styles.btnTwo_mobile}>
                                <p className={styles.btnText2_mobile}>GO!</p>
                            </div>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>

            </div>
            </div>
            </MediaQuery>
        </>
    );
}

export default Banner;