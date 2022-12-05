import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import Footer from "../components/basic/Footer";
import Header from "../components/basic/Header";
import Nav from "../components/basic/Nav";
import './SearchPW.css';
import { useCallback } from "react";
import { searchUser } from "../store/loginUser";
import MediaQuery from 'react-responsive';

function SearchPW(props) {

  const dispatch = useDispatch();

  // 담당자 전화번호, 이메일 state 값 설정
  const [ent_mrg_mobile, setEnt_mrg_mobile] = React.useState("");
  const [ent_mrg_email, setEnt_mrg_email] = React.useState("");  // 이메일

  const onChangeEnt_mrg_email = useCallback((text) => {
    setEnt_mrg_email(text.trim());
  }, []);

  const onChangeEnt_mrg_mobile = useCallback((text) => {
    setEnt_mrg_mobile(text.trim());
  }, []);

  const handleEnt_mrg_email = (event) => {  // 이메일
    setEnt_mrg_email(event.target.value);
  }

  const handleEnt_mrg_mobile = (event) => {  // 전화번호
    setEnt_mrg_mobile(event.target.value);
  }

  const onSubmitHandle = (e) => {
    e.preventDefault();

    let body = {  // 서버에 요청할 데이터
      ent_mrg_mobile: ent_mrg_mobile,
      ent_mrg_email: ent_mrg_email
    }

    dispatch(searchUser(body))
      .then((response) => {  // 요청 성공 했을 때
        console.log(response.data);
        window.location.replace("/SetPassword");

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
        <div className="body_searchpw">
          <div className="searchpw_wrapper123">
            <div className='Search_PW'>
              <h2> 비밀번호 찾기 </h2>

              <div className="searchEmail">
                <div className="searchEmail2">
                  <div className="search_text">
                    <h5> 회원정보에 등록된 이메일로 비밀번호를 찾을 수 있습니다. </h5></div></div>
              </div>
              <div className="search_information">
                <div className="search_compName">
                  <label>담당자 번호</label><br />
                  <input type='text'
                    maxLength='20'
                    name='search_compName'
                    value={ent_mrg_mobile}
                    onChange={handleEnt_mrg_mobile}
                    className="search_compName"
                    placeholder="담당자 번호를 입력하세요." />
                </div>

                <div className="search_email_id">
                  <label>아이디</label><br />
                  <input type='text'
                    maxLength='20'
                    name='search_email'
                    value={ent_mrg_email}
                    onChange={handleEnt_mrg_email}
                    className="search_email"
                    placeholder="아이디(이메일)를 입력하세요." />

                </div>
              </div>

              <div>
                <input type='button'
                  onClick={onSubmitHandle}
                  name='confirm_email'
                  className="search_submit"
                  value="다음" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </MediaQuery>

      {/*moblie*/}
      <MediaQuery maxWidth={500}>
        <div className="body_searchpw">
          <div className="searchpw_wrapper123">
            <div className='Search_PW'>
              <h2> 비밀번호 찾기 </h2>

              <div className="searchEmail">
                <div className="searchEmail2">
                  <div className="search_text">
                    <p className="inform_search"> 회원정보에 등록된 이메일로<br /> 비밀번호를 찾을 수 있습니다. </p></div></div>
              </div>
              <div className="search_information">
                <div className="search_compName">
                  <label>담당자 번호</label><br />
                  <input type='text'
                    maxLength='20'
                    name='search_compName'
                    value={ent_mrg_mobile}
                    onChange={handleEnt_mrg_mobile}
                    className="search_compName"
                    placeholder="담당자 번호를 입력하세요." />
                </div>

                <div className="search_email_id">
                  <label>아이디</label><br />
                  <input type='text'
                    maxLength='20'
                    name='search_email'
                    value={ent_mrg_email}
                    onChange={handleEnt_mrg_email}
                    className="search_email"
                    placeholder="아이디(이메일)를 입력하세요." />

                </div>
              </div>

              <div>

                <input type='button'
                  onClick={onSubmitHandle}
                  name='confirm_email'
                  className="search_submit"
                  value="다음" />
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}

export default SearchPW;