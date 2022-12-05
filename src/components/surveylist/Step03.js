import React from "react";
import './Step03.css';
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// 사회
// data : data.json 파일에 들어있는 질문, 보기 선택 데이터 
// onAnswerUpdate: 단계 변경 시 변경되는 질문/답변
// numOfQue : 질문 번호
// actSurvey:
// onSetActiveQue: 
// onSetStep: 

function Step03({ data3, onAnswerUpdate, numOfQue, actSurvey, onSetActiveQue, onSetStep, SurveyData }) {

  //const data3 = useSelector((state) => state.data.data3[0]);

  const [select, setSelect] = useState(
    () => JSON.parse(window.localStorage.getItem("select")) || 0
  );
  const [error, setError] = useState('');
  const radioWrapper = useRef();

  useEffect(() => {
    const findCheckInput = radioWrapper.current.querySelector('input:checked');
    if (findCheckInput) {
      findCheckInput.checked = false;
    }
  }, [data3]);

  const handleChange = (e) => {
    setSelect(e.target.value);
    if (error) {
      setError('');
    }
  }

  // [다음] 버튼 클릭 시 이벤트
  const handleNextClick = (e) => {
    if (select === '') {          // 아무것도 선택하지 않았을 때
      return setError('항목을 선택하세요!');
    }
    // onAnswerUpdate(preState => [...preState, {q: data3.question, a:select}]);
    // setSelect('');

    // 선택 값 로컬 스토리지 저장
    // let questionNumber = JSON.stringify("data3_question" + data3.qNumber);
    // console.log("questionNumber : " + questionNumber);
    // console.log("select : " + select);
    // window.localStorage.setItem(questionNumber, JSON.stringify(select));
    // console.log("json.parse : " + JSON.parse(localStorage.getItem(questionNumber)));
    // console.log(localStorage.getItem(questionNumber));

    let questionNumber = "dataQuestionThree" + data3.qNumber;
    console.log("questionNumber : " + questionNumber);
    console.log("select : " + select);
    window.localStorage.setItem(questionNumber, JSON.stringify(select));
    console.log("json.parse : " + JSON.parse(localStorage.getItem(questionNumber)));
    console.log(localStorage.getItem(questionNumber));

    if (actSurvey < numOfQue - 1) {
      onSetActiveQue(actSurvey + 1);  // 한 단계 플러스
    } else {
      onSetStep(1);  // 1단계씩 이동
    }

    if(actSurvey == numOfQue - 1) {
      setError('하단의 NEXT 버튼을 눌러 다음 단계로 넘어가 주세요!');
    }
  }

  // [이전] 버튼 클릭 시 이벤트
  const handleBackClick = (e) => {
    /* onAnswerUpdate(preState => [...preState, {q: data3.question, a:select}]);
     setSelect('');*/
    if (actSurvey < numOfQue - 1) {
      onSetActiveQue(actSurvey - 1);  // 한 단계 이전
    } else {
      onSetStep(1);
    }
  }


  return (
    <>
      <div className="step03_survey_main">
        <div className="que_body">
          <div className="que">
            <h4 className="question">{data3.question}</h4>
            <div className="control" ref={radioWrapper}>
              {data3.choice.map((choices, i) => (
                <label className="radio" key={i}>
                  <input type="radio" name="answer" value={i} onChange={handleChange} />
                  {choices}
                </label>
              ))}
            </div>
            {error && <div className="textDange">{error}</div>}
            <button className="pre_btn" onClick={handleBackClick}>이전</button>
            <button className="next_btn" onClick={handleNextClick}>다음</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Step03;