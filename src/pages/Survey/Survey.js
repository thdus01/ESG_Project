import React from "react";
//import Steps, { Step } from 'rc-steps';
import Footer from "../../components/basic/Footer";
import Header from "../../components/basic/Header";
import Nav from "../../components/basic/Nav";
import styles from './Survey.module.css';
import { Link, Outlet } from "react-router-dom";
import MediaQuery from 'react-responsive';
import surveyIcon1 from '../../assets/surveyIcon1.png';
import surveyIcon2 from '../../assets/surveyIcon2.png';
import surveyIcon3 from '../../assets/surveyIcon3.png';


function Survey() {
    return (
        <>
        {/*PC*/}
		    <MediaQuery minWidth={501}>
            <Outlet />
            <Header />
            <Nav />
            <div className={styles.survey_main}>
                <div>
                    <div className={styles.title}>자가진단 및 주의사항</div>
                    <div className={styles.flex_center_container}>
                        <div className={styles.flex_center_box}>
                            <div className={styles.flex_center_box_picture}>
                                <div className={styles.flex_center_box_picture_1}>&nbsp;</div>
                            </div>
                            총 검사 시간은 5분<br></br> 내외입니다.
                        </div>

                        <div className={styles.flex_center_box}>
                            <div className={styles.flex_center_box_picture}>
                                <div className={styles.flex_center_box_picture_2}>&nbsp;</div>
                            </div>
                            가능하면 답변시 사실에 근거하여<br></br> 답변해주세요.
                        </div>
                        
                        <div className={styles.flex_center_box}>
                            <div className={styles.flex_center_box_picture}>
                                <div className={styles.flex_center_box_picture_3}>&nbsp;</div>
                            </div>
                            자세한 점은 'ESG 경영협동조합'<br></br> 홈페이지를 참고해주세요.
                        </div>
                    </div>
                    {/* button */}
                    <div classname={styles.survey_start_button} style={{ textDecoration: 'none' }}>
                        <div>
                            <Link to="/Survey/Step1" className={styles.btnText}>
                                <div className={styles.button}>
                                    <p className={styles.btnText} style={{ textDecoration: 'none' }}> ESG 자가진단 시작하기</p>
                                    <div className={styles.btnTwo}>
                                        <p className={styles.btnText2}>GO!</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </MediaQuery>


            {/*Mobile*/}
            <MediaQuery maxWidth={500}>
            <>
            <Outlet />
            <Header />
            <Nav />
            <div className={styles.survey_main_mobile}>
            <div className={styles.title_mobile}>자가진단 및 주의사항</div>
                <div>
                    <div className={styles.tips_main_container_mobile}> 
                        <div className={styles.tips_box_mobile}>
                            <img src={surveyIcon1} className={styles.img_mobile}/>
                            총 검사 시간은 5분 내외입니다.
                        </div>

                        <div className={styles.tips_box_mobile}>
                            <img src={surveyIcon2} className={styles.img_mobile}/>
                            <span>가능하면 답변시 사실에 근거하여 답변해주세요.</span>
                        </div>
                        
                        <div className={styles.tips_box_mobile}>
                            <img src={surveyIcon3} className={styles.img_mobile}/>
                            <span>자세한 점은 'ESG 경영협동조합' 홈페이지를 참고해주세요.</span>
                        </div>
                    </div>

                    {/* button */}
                    <div classname={styles.survey_start_button_mobile} style={{ textDecoration: 'none' }}>
                        <div>
                            <Link to="/Survey/Step1" className={styles.btnText_mobile}>
                                <div className={styles.button_mobile}>
                                    <p className={styles.btnText_mobile} style={{ textDecoration: 'none' }}> ESG 자가진단 시작하기</p>
                                    <div className={styles.btnTwo_mobile}>
                                        <p className={styles.btnText2_mobile}>GO!</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>







            </MediaQuery>
        </>
    );
}

export default Survey;