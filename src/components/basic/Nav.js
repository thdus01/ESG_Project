import { StylesProvider } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from './Nav.module.css';
import MediaQuery from 'react-responsive';


function Nav() {

    const navigate = useNavigate();
    const check_login = useSelector((state) => state.counter.login_check.check);

    let auth_user = localStorage.getItem('role');

    const checking_result = () => {
        if (check_login == "Logined") {
            navigate('/SearchResult');
        } else {
            alert("로그인이 필요한 서비스입니다.");
            navigate('/SignIn');
        }
    }

    const setAuth = () => {
        if (auth_user == "user") {
            alert("접근 권한이 없습니다!");
        } else if (auth_user == "admin") {
            navigate('/Adminpage');
        }
    }

    return (
        <>
            {/*PC*/}
            <MediaQuery minWidth={501}>
                <div className={styles.Nav_main}>
                    <div className={styles.Nav_sec}>
                        <div className={styles.nav_cont}>
                            <ul className={styles.ul_menu}>
                                <li className={styles.li_menu} >
                                    <a type="button" className={styles.nav_menu} ><Link to='/Introesg' className={styles.page_link2} style={{ color: 'rgb(146, 146, 146)' }}>ESG 소개</Link></a>
                                </li>
                            </ul></div>
                        <div className={styles.nav_cont}>
                            <ul className={styles.ul_menu}>
                                <li className={styles.li_menu}>
                                    <a type="button" onClick={checking_result} className={styles.nav_menu}><span className={styles.page_link2}> 진단결과 조회</span></a>
                                </li>
                            </ul></div>
                        <div className={styles.nav_cont}>
                            <ul className={styles.ul_menu} >
                                <li className={styles.li_menu}>
                                    <a type="button" className={styles.nav_menu} onClick={setAuth}><span className={styles.page_link2} style={{ color: 'rgb(146, 146, 146)' }}>진단 관리</span></a>
                                </li>
                            </ul></div>
                    </div>
                </div>
            </MediaQuery>

            {/*Mobile*/}
            <MediaQuery maxWidth={500}>

                <div className={styles.Nav_main}>
                    <div className={styles.Nav_sec}>
                        <div className={styles.nav_cont}>
                            <ul className={styles.ul_menu}>
                                <li className={styles.li_menu} >
                                    <a type="button" className={styles.nav_menu} ><Link to='/Introesg' className={styles.page_link2} style={{ color: 'rgb(146, 146, 146)' }}>ESG 소개</Link></a>
                                </li>
                            </ul></div>
                        <div className={styles.nav_cont}>
                            <ul className={styles.ul_menu}>
                                <li className={styles.li_menu}>
                                    <a type="button" onClick={checking_result} className={styles.nav_menu}><span className={styles.page_link2}> 진단결과 조회</span></a>
                                </li>
                            </ul></div>
                    </div>
                </div>




            </MediaQuery>
        </>
    );
}

export default Nav;