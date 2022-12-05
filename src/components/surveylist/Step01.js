import React, { useEffect } from "react";
import { useState } from "react";
import './Step01.css';

// 정보공시
// data : data.json 파일에 들어있는 질문, 보기 선택 데이터 
// onAnswerUpdate: 단계 변경 시 변경되는 질문/답변
// numOfQue : 질문 번호
// actSurvey:
// onSetActiveQue: 
// onSetStep: 

function Step01({ data1, actSurvey, onSetActiveQue, onSetStep, numOfQue, SurveyData,  }) {

  // const data1 = useSelector((state) => state.data.data1[0]);

  const [select, setSelect] = useState(  // answer 선택
    // [{select: "" }]
    () => JSON.parse(window.localStorage.getItem("select")) || 0    // select 객체를 읽어와 JSON 객체로 변환하기  (실패) 시 0을 초기값으로 설정
  );

  const [error, setError] = useState('');  // 에러메시지 
  const radioWrapper = React.useRef();   // 라디오 버튼(선택지) - Ref 설정

  useEffect(() => {
    const findCheckInput = radioWrapper.current.querySelector('input:checked');  // 라디오버튼 체크 했을 때의 변수 findCheckInput
    if (findCheckInput) {
      findCheckInput.checked = false;  // false일 때 다음 step 넘어갈 때 체크상태 풀림               
    }                                  // true일 때 다음 step 넘어갈 때 체크상태 유지
  }, [data1]);


  // 라디오 버튼 클릭 시 실행되는 컴포넌트
  const handleChange = (e) => {
    setSelect(e.target.value);  // 값이 변할 때마다 input값을 값이 렌더링되는 setSelect에 저장

    if (error) {  // 에러 발생 시
      return setError('');
    }
  }

  const handleNextClick = (e) => {   // 다음 버튼을 누르면 다음 단계로 간다.

    if (select == '') {  // 아무것도 선택하지 않았을 때
      return setError('항목을 선택하세요!');
    }


    // onAnswerUpdate(prevState => [...prevState, {q: data1.question, a:select}]);
    //  setSelect(''); 


    // 선택 값 로컬 스토리지 저장
    // let questionNumber = JSON.stringify("data1_question" + data1.qNumber);
    // console.log("questionNumber : " + questionNumber);
    // console.log("select : " + select);
    // window.localStorage.setItem(questionNumber, JSON.stringify(select));
    // console.log("json.parse : " + JSON.parse(localStorage.getItem(questionNumber)));
    // console.log(localStorage.getItem(questionNumber));


    let questionNumber = "dataQuestionOne" + data1.qNumber;
    console.log("questionNumber : " + questionNumber);
    console.log("select : " + select);
    window.localStorage.setItem(questionNumber, JSON.stringify(select));
    console.log("json.parse : " + JSON.parse(localStorage.getItem(questionNumber)));
    console.log(localStorage.getItem(questionNumber));
    
    
    // // 전체 데이터 값 가져오기
    // for(let i=0; i<window.localStorage.length; i++) {
    //   const key = window.localStorage.key(i);
    //   const value = window.localStorage.getItem(key);
    //   const data1_ans = {key : value};
    //   console.log(JSON.parse(localStorage.getItem(data1_ans)));
    //   window.localStorage.setItem(JSON.parse(localStorage.getItem(data1_ans)))
    //   window.localStorage.setItem("data1_ans" + data1_ans)
    //   JSON.parse(localStorage.getItem('data1_ans'));
    // } 

    // for(let i=0; i<window.localStorage.getItem(questionNumber); i++) {

    // }



    if (actSurvey < numOfQue - 1) {  // 
      onSetActiveQue(actSurvey + 1);  // 한 단계 플러스
      onSetStep(1);
    } else {
      onSetStep(1);
    }

    if(actSurvey == numOfQue - 1) {

      setError('하단의 NEXT 버튼을 눌러 다음 단계로 넘어가 주세요!');
    }
  }

  const handleBackClick = (e) => {  // 이전 버튼을 누르면 이전 단계로 간다.
    /*  onAnswerUpdate(prevState => [...prevState, {q: data.question, a:select}]);  // 질문과 답변 업데이트
      setSelect(''); */

    if (actSurvey < numOfQue - 1) {
      onSetActiveQue(actSurvey - 1);
      
    } else {
      onSetStep(1);  // 한 단계씩 이동
    }
  }

  // useEffect(() => {
  //   let questionNumber = JSON.stringify("data1_question" + data1.qNumber);
  //   localStorage.getItem(questionNumber);
  
  //   //window.localStorage.setItem(questionNumber, JSON.stringify(select)); 

  //   if(questionNumber == null) {
  //     questionNumber = [];
  //   } else {
  //     questionNumber = JSON.parse(questionNumber);
  //   }

  //   // questionNumber.push(select);
  //   // questionNumber = [...questionNumber];  // 스프레드 연산자로 안전하게 복사
  //   // localStorage.setItem(questionNumber, JSON.stringify(select));

  // }, []);

  return (
    <>
      <div className="step01_survey_main">
        <div className="que_body">
          <div className="que">
            <h4 className="question">
              {data1.question}
            </h4>

            <div className="control" ref={radioWrapper} >
              {data1.choice.map((choices, i) => (  //map('key', 'value')    // json파일에 들어있는 data에서 choice 객체를 불러온다.
                <label className="radio" key={i}>
                  <input type="radio" name="answer" value={i} onClick={handleChange} />
                  {choices}
                </label>
              ))}
            </div>
            {error && <div className="textDange">{error}</div>}
            <button className="pre_btn" onClick={handleBackClick} disabled={actSurvey === 0} >이전</button>
            <button className="next_btn" onClick={handleNextClick}>다음</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Step01;