import React, { useEffect } from 'react';
import './App.css';
import MainPage from './pages/MainPage';
//import Survey from './pages/Survey/Survey';
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SingIn';
import SignUp from './pages/SignUp';
import Step1 from './components/surveylist/Step1';
import Survey from './pages/Survey/Survey';
import { Provider, useSelector } from 'react-redux';

import axios from 'axios';
import Header from './components/basic/Header';
import LogoutComponent from '../src/components/basic/Header'
import SearchPW from './pages/SearchPW';

import Adminpage from './pages/Adminpage/Adminpage';
import Member from './pages/Adminpage/Member';
import SurveyResult from './pages/Adminpage/SurveyResult';
import SetPassword from './pages/SetPassword';
import SignUpNaver from './pages/SignUpNaver';
import Introesg from './pages/Introesg';
import SearchResult from './pages/SearchResult';
import NaverLoginLoading from './pages/NaverLoginLoading';
import Test from './pages/Test';
import SurveyCal from './components/surveylist/SurveyCal';
import Result from './components/result/Result';
import ResultContent from './pages/ResultContent';
import AdminResult from './pages/Adminpage/AdminResult';

function App() {

  //const axios = require('axios');

  useEffect(() => {
    // axios.post('/esg')  // back에서 설정한 포트 주소 입력
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {  // 에러 핸들링
    //     console.log(error);
    //   })
  }, []);
  // let user = useSelector((state) => state.user);

  return (
    <>
      <div className='app_body'>
        <Routes>
          <Route exect={true} path='/' element={<MainPage />} />
          <Route path='/Introesg' element={<Introesg />} />
          <Route path='/:id' element={<Survey />} />
          <Route exect={true} path='/SignIn' element={<SignIn />} />
          <Route exect={true} path='/SignUp' element={<SignUp />} />
          <Route exact={true} path='/SignUpNaver' element={<SignUpNaver />} />
          <Route path='/NaverLoginLoading' element={<NaverLoginLoading />} />
          <Route path='/SurveyCal' element={<SurveyCal />} />
          <Route path='/Test' element={<Test />} />

          <Route path='/SearchResult' element={<SearchResult />} />
          {/* :idx로 param 값을 넘겨준다고 선언한다. */}
          <Route path='/ResultContent/:idx' element={<ResultContent />} />
          <Route exect={true} path='/SearchPW' element={<SearchPW />} />
          <Route path='/SetPassword' element={<SetPassword />} />
          <Route path='/Survey/:id' element={<Step1 />} />
          <Route path='/Result' element={<Result />} />
          <Route exact={true} path='/Adminpage' element={<Adminpage />} />
          <Route path='/Adminpage/:id' element={<Member />} />
          <Route path='Adminpage/:id' render={(props) => (<SurveyResult key={props.match.params.id}/>)} />
          <Route path='AdminResult' element={<AdminResult />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
