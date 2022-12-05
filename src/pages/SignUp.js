import React, { useCallback, useState } from "react";
import Footer from "../components/basic/Footer";
import Header from "../components/basic/Header";
import Nav from "../components/basic/Nav";
import axios from "axios";
import './SignUp.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { registerUser } from "../store/loginUser";
//import ent_mrg_email from "./NaverLoginLoading";


function SignUp(props) {

  const navigate = useNavigate();  // 특정 행동을 할 때 해당 주소로 이동
  const dispatch = useDispatch();
  const location = useLocation();

  const [loading, setLoading] = useState(true);  // 로딩창

  const ent_mrg_email = location.state.value;  // 네이버 로그인 후 가져올 데이터 (이메일)
  const ent_mrg_name = location.state.value1;  // // 네이버 로그인 후 가져올 데이터 (담당자 이름)
  const ent_mrg_mobile = location.state.value2;  // // 네이버 로그인 후 가져올 데이터 (담당자 전화번호)
  const ent_mrg_sns = location.state.value3;  // // 네이버 로그인 후 가져올 데이터 (담당자 이름)

  const [ent_mrg_pw, setEnt_mrg_pw] = React.useState("");  // 비밀번호

  const [ent_name, setEnt_name] = React.useState("");  // 기업명
  // const [ent_mrg_name, setEnt_mrg_name] = React.useState("");  // 담당자명
  const [ent_reg_no, setEnt_reg_no] = React.useState("");  // 사업자 등록번호
  const [ent_boss_name, setEnt_boss_name] = React.useState("");  // 대표자명
  const [ent_cat, setEnt_cat] = React.useState('');  // 업태
  const [ent_details_cat, setEnt_details_cat] = React.useState(''); // 업종
  const [ent_major_prod, setEnt_major_prod] = React.useState('');  // 생산제품 및 서비스
  const [account, setAccount] = React.useState('');  // 주요 거래처
  const [sales, setSales] = React.useState('');  // 매출액

  const [ent_major_clnt, setEnt_major_clnt] = React.useState('');  // 주요 거래처 (매출액) 합친 값

  const [showPassword, setShowPassword] = React.useState(true);  // 값: true -> 글자 숨기기 기능

  const togglePass = (e) => {  // 비밀번호 글자 숨기기
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  const [industrialList, setIndustrialList] = React.useState([  // 업종, 업태 select 목록
    "산업군을 선택해주세요.",
    "화학", "종이목재", "유틸리티", "철강금속", "비금속광물", "운수창고", "운수장비 및 부품", "제약 및 바이오", "기계",
    "조선", "음식료품", "전기전자", "엔터테인먼트 및 미디어", "IT 서비스", "내구소비재 및 의류", "유통", "통신", "가정용품",
    "금융", "건설", "서비스", "의료기기", "기타제조", "지주", "지주(유사)", "기타"
  ]);


  const state = {
    ent_major_clnt: { account: '', sales: '' }
  }

  // const onChangeEnt_mrg_email = useCallback((text) => {
  //   setEnt_mrg_email(text.trim());
  // }, []);

  const onChangeeEnt_mrg_pw = useCallback((text) => {
    setEnt_mrg_pw(text.trim());  // 공백 제거
  }, []);

  const onChangeEnt_name = useCallback((text) => {  // 기업명
    setEnt_name(text.trim());  // 공백 제거
  }, []);

  const onChangeEnt_reg_no = useCallback((text) => {  // 사업자 등록번호
    setEnt_reg_no(text.trim());  // 공백 제거  
  }, []);


  const handleEnt_name = (event) => {  // handleCompName function 생성
    setEnt_name(event.currentTarget.value);  // setCompName을 통해 event.currentTarget.value로 value를 바꿔준다.
  }

  const handleEnt_reg_no = (event) => {  // 사업자 등록번호
    setEnt_reg_no(event.target.value);
  }

  const handleent_boss_name = (event) => {  // 대표자명
    setEnt_boss_name(event.target.value);
  }

  const handleEnt_cat = (event) => {  // 업태
    setEnt_cat(event.target.value);
  }

  const handleEnt_details_cat = (event) => {  // 업종
    setEnt_details_cat(event.target.value);
  }

  const handleEnt_major_prod = (event) => {  // 생산제품 및 서비스
    setEnt_major_prod(event.target.value);
  }

  // const handleEnt_mrg_email = (event) => {  // 이메일
  //   setEnt_mrg_email(event.currentTarget.value);
  // }

  const handleEnt_mrg_pw = (event) => {   // 비밀번호
    setEnt_mrg_pw(event.currentTarget.value);
  }

  const handleAccount = (event) => {  // 거래처
    setAccount(event.currentTarget.value);
  }

  const handleSales = (event) => {  // 주요 거래처 매출액
    setSales(event.currentTarget.value);
  }

  const handleEnt_major_clnt = (event) => {
    setEnt_major_clnt(event.target.value);

  };

  // 회원가입 button 클릭 시 onSubmitHandler 이벤트 일어나도록 form에 onChange를 이용해 추가해준다.
  const onSubmitHandler = (e) => {   // loginUser로 보내기
    e.preventDefault();

    if (!ent_name || !ent_name.trim()) {  // 기업명 또는 기업명에 공백이 생겼을 경우
      return alert('기업명은 필수입니다.');  // 알림창 띄우기
    }

    if (!ent_major_prod || !ent_major_prod.trim()) {
      return alert('주요 생산제품을 입력해주세요.')
    }
    /* if(!email || !email.trim()) {
       return alert('이메일을 입력해주세요.');
     } */
    if (!ent_mrg_pw || !ent_mrg_pw.trim()) {
      return alert('비밀번호를 입력해주세요.');
    }
    if (!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@^!%*#?&]).{8,50}$/.test(ent_mrg_pw)) {
      return alert('비밀번호는 영문, 숫자, ,특수문자($@^!%*#?&)를 모두 포함하여 8자 이상 입력해야 합니다.');
    }

    let body = {
      // 서버에 요청할 데이터
      ent_mrg_email: ent_mrg_email,   // 이메일 (네이버 로그인을 통해 파라미터로 가져온 값)
      ent_mrg_name: ent_mrg_name,  // 담당자 이름 (네아로)
      ent_mrg_pw: ent_mrg_pw,   // 비밀번호
      ent_name: ent_name,  // 기업명
      ent_reg_no: ent_reg_no,  // 사업자 등록 번호
      ent_boss_name: ent_boss_name,  // 대표자명
      ent_details_cat: ent_details_cat,  // 업종
      ent_cat: ent_cat,  // 업태
      ent_major_prod: ent_major_prod,  // 주요 서비스
      ent_major_clnt: ent_major_clnt,  // 주요 거래처(매출)
      ent_mrg_mobile: ent_mrg_mobile,  // 담당자 연락처
      ent_mrg_sns: ent_mrg_sns  // 담당자 연동 sns 정보
    }

    // redux를 사용하므로 dispatch를 통해 action인 loginUser로 보내줌
    dispatch(registerUser(body))
      .then(response => {
        console.log(response.data);
        if (response.payload.success) {  // loginSuccess가 true일 때
          navigate('/SignIn');  // 로그인 페이지로 navigate
        } else {
          alert('회원가입 실패');  // 실패 시 알림창 띄우기
        }
      })

  }

  return (
    <>
      <Header />
      <Nav />
      <div className="body_SignUp">
        <div className="Signup_wrapper">
          <div> <h3 className="text_Signup">회원가입</h3></div>
          <div className="SignUp_information">
            <form className="signupBox" >

              <div className="signupData">
                <div className="text_Box">
                  <div className="label"> * 기업명 (필수)</div>
                  <div className="text_area">
                    <input
                      id="ent_name"
                      type="ent_name"
                      className="signupInput"
                      placeholder="기업명을 입력하세요."
                      name="ent_name"
                      value={ent_name}
                      onChange={handleEnt_name}
                    />

                  </div>
                </div>

                <div className="text_Box">
                  <div className="label">(사업자/법인) 등록번호</div>
                  <div className="text_area">
                    <input
                      id="ent_reg_no"
                      className="signupInput"
                      placeholder="사업자 등록번호를 입력하세요."
                      name="ent_reg_no"
                      value={ent_reg_no}
                      type="ent_reg_no"
                      onChange={handleEnt_reg_no}

                    />
                  </div>
                </div>

              </div>

              <div className="signupData">
                <div className="text_Box">
                  <div className="label">대표자</div>
                  <div className="text_area">
                    <input
                      className="signupInput"
                      placeholder="대표자 성함을 입력하세요."
                      name="ent_boss_name"
                      id="ent_boss_name"
                      value={ent_boss_name}
                      type="ent_boss_name"
                      onChange={handleent_boss_name}

                    />
                  </div> </div>

                <div className="text_Box">
                  <div className="label">업태</div>
                  <div className="text_area">
                    <div>
                      <select
                        name='ent_cat'
                        className='signupInput'
                        placeholder="업태를 선택하세요."
                        id="ent_cat"
                        value={ent_cat}
                        type="ent_cat"
                        onChange={handleEnt_cat}>
                        {industrialList.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}

                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="signupData">
                <div className="text_Box">
                  <div className="label">업종</div>
                  <div className="text_area">
                    <input
                      className="signupInput"
                      placeholder="업종을 입력해주세요."
                      name="ent_details_cat"
                      id="ent_details_cat"
                      value={ent_details_cat}
                      type="ent_details_cat"
                      onChange={handleEnt_details_cat}

                    />
                  </div>
                </div>
                <div className="text_Box">
                  <div className="label"> * 주요 생산제품 및 서비스 (필수)</div>
                  <div className="text_area">
                    <input
                      className="signupInput"
                      placeholder="주요 생산 제품 또는 서비스를 입력하세요."
                      name="ent_major_prod"
                      id="ent_major_prod"
                      value={ent_major_prod}
                      type="ent_major_prod"
                      onChange={handleEnt_major_prod}

                    />
                  </div>
                </div>
              </div>

              <div className="signupData">
                <div className="text_Box">
                  <div className="label"> 주요 거래처 </div>
                  <div className="text_area">
                    <input
                      className="signupInput"
                      placeholder="거래처명을 입력해주세요."
                      name="account"
                      id="account"
                      value={account}
                      type="text"
                      onChange={handleAccount}

                    />
                  </div>
                </div>

                <div className="text_Box">
                  <div className="label">주요 거래처 (매출)</div>
                  <div className="text_area">
                    <input
                      className="signupInput"
                      placeholder="(매출액)을 입력해주세요."
                      name="sales"
                      id="sales"
                      value={sales}
                      type="sales"
                      onChange={handleSales}

                    />
                  </div>
                </div>
              </div>

              <div className="signupData">
                <div className="text_Box">
                  <div className="label">이메일</div>
                  <div className="text_area">
                    <input
                      className="signupInput"
                      placeholder="아이디(이메일)를 입력하세요."
                      name="ent_mrg_email"
                      id="ent_mrg_email"
                      value={ent_mrg_email}
                      type="ent_mrg_email"
                      onChange={ent_mrg_email}
                    />
                  </div>
                </div>

                <div className="text_Box">
                  <div className="label">* 비밀번호 (필수)</div>
                  <div className="text_area">
                    <input
                      type={showPassword ? 'password' : 'text'}
                      className="signupInput"
                      placeholder="비밀번호를 입력하세요."
                      name="company_password"
                      onChange={handleEnt_mrg_pw}
                      id="password"
                      value={ent_mrg_pw}
                    />
                  </div>
                </div>
              </div>

              <div>

                <input
                  type="button"
                  value="회원가입"
                  className="btn_SignUp"
                  //name="회원가입"
                  onClick={onSubmitHandler}
                />
              </div>

            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;