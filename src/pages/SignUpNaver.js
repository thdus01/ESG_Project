import React from "react";
import esg_22 from '../assets/esg_22.png';
import naver from '../assets/naver.png';
import Footer from "../components/basic/Footer";
import NaverLogin from "./NaverLogin";
import './SignUpNaver.css';
import { useDispatch } from "react-redux";


function SignUpNaver(props) {

  // const dispatch = useDispatch();

  const data = null;
  
    return(
        <>
        <div>
        <div className="naverRegister">
        <div className="esg_img">
        <img src={esg_22} alt="esg_22" style={{height: '38px'}} />
        </div>

        <div>
            <div className="SignUpBox">
              <div className='naverlogin_1'>
                
                <div className="font-naver"> 네이버 계정으로 로그인하여
                     회원가입을 해주세요. </div>
              </div>
              <div>
                <img src={naver} alt="naver" style={{height: '180px'}}/>
              </div>
              <div>
                <NaverLogin setUserInfo={data} />
              </div>
              
            </div>
        </div>

        </div>
        </div>
       
        </>
    );
}

export default SignUpNaver;