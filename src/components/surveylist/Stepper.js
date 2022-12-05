import React, { useState, useEffect } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Step01 from './Step01';
import './Stepper.css';
import Step02 from './Step02';
import Step03 from './Step03';
import Step04 from './Step04';
import SurveyData from '../../data/data.json'
import { useNavigate } from 'react-router-dom';
import SurveyCal from './SurveyCal';
import { useFlexLayout } from 'react-table';

// step 기능 구현 페이지

const useStyles = makeStyles({  // 스타일 적용
  stepper: {  // step 넘어가는 부분 
    background: 'white',
    margin: '15px'
  },

  content: {  // survey box 부분
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.19)'
  },

  button: {  // step 진행 버튼 부분
    background : 'white',
    marginTop : '0.125px',
    display : 'grid',
    gridAutoFlow : 'column',
    padding : '10px'
  }
});

const StepperHooks = (props) => {

  const navigate = useNavigate();

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);  // 전체 단계 (P, E, S, G) -> 초기값: 0(단계)

  const [step, setStep] = useState(1);  // 작은 단계 (컴포넌트별)

  const [actSurvey, setActSurvey] = useState(0);  // 질문
  const [answer, setAnswer] = useState([]);

  const [stepNumber, setStepNumber] = useState(0);

  // 진행률 표시 bar
  const [filled, setFilled] = useState(0);  // 진행률

  const [isRunning, setIsRunning] = useState(false);

  const steps = ['0. 정보공시(Public)', '1. 환경(Environment)', '2. 사회(Social)', '3. 지배구조(Governance)'];

  const getStepContent = stepNumber => {
    if (stepNumber === 0) {
      // 정보공시
      return <Step01   // 정보공시 단계 (step 0 일 경우)
        data1={SurveyData.data1[actSurvey]}
        // onAnswerUpdate={setAnswer}  // 답변 업뎃
        numOfQue={SurveyData.data1.length}  // data의 길이만큼의 숫자
        actSurvey={actSurvey}
        onSetActiveQue={setActSurvey}  // 질문 업뎃
        onSetStep={setStep}
      />;
    } else if (stepNumber === 1) { // 환경

      return <Step02
        data2={SurveyData.data2[actSurvey]}
        numOfQue={SurveyData.data2.length}
        actSurvey={actSurvey}
        onSetActiveQue={setActSurvey}
        onSetStep={setStep}
      />;
    } else if (stepNumber === 2) {// 사회
      return <Step03
        data3={SurveyData.data3[actSurvey]}
        //onAnswerUpdate={setAnswer}
        numOfQue={SurveyData.data3.length}
        actSurvey={actSurvey}
        onSetActiveQue={setActSurvey}
        onSetStep={setStep}

      />;
    } else if (stepNumber === 3) {  // 지배구조
      return <Step04
        data4={SurveyData.data4[actSurvey]}
        //onAnswerUpdate={setAnswer}
        numOfQue={SurveyData.data4.length}
        actSurvey={actSurvey}
        onSetActiveQue={setActSurvey}
        onSetStep={setStep}
      />;
    } else {

      return '알 수 없는 페이지입니다.';
    }
  }

  // progress bar
  useEffect(() => {
    if (filled < 25 && isRunning) {
      setTimeout(() => setFilled(prev => prev += 2), 50);

    }
  }, [filled, isRunning]);

  const handleNextstep = () => {  // 다음 단계로 넘어간다.
    setIsRunning(true);
    setFilled(prevActive => prevActive + 25);
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setActSurvey(0);
  }

  const handleBackstep = () => {  // 이전 버튼 -> 이전 페이지로 넘어감
    setIsRunning(true);
    setFilled(prevActive => prevActive - 25);
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const handleResetstep = () => {  // 단계 reset (처음 단계로 돌아가기)
    setActiveStep(0);
  }

  // const handleFinishstep = (e) => {  // 설문 메인페이지로 이동 (Survey.js로 페이지 이동)
  //   alert("설문에 응해주셔서 감사합니다.");
  //   navigate("/Survey");
  // }

  const handleResultStep = (e) => {
    alert('검사를 모두 마쳤습니다. 결과를 조회하세요!');

    navigate("/Result");
  }

  return (
    <>
      <div className='stepper_main'>
        <div className='stepper'>
        <Stepper className={classes.stepper} activeStep={activeStep}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel className={classes.text}>
                {label}

              </StepLabel>
            </Step>
          ))}
        </Stepper>
        </div>
        <div>
          {activeStep === steps.length ? (
            <div>
              <div className='survey_main'>
                <div className={classes.content}>
                  <SurveyCal />
                  {/* 선택 현황 조회(리스트) */}


                </div>
              </div>
              {/* <div className={classes.button} >
                <Button variant="contained" color="primary" onClick={handleResetstep}>다시 시작하기</Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: '10px' }}
                  onClick={handleResultStep}>검사결과 조회</Button>
              </div> */}

            </div>

          ) : (
            <div>
              <div className='survey_main'>

                {/* 진행률 표시 (progressbar) */}
                <div className='progressBar'>
                    <div className="progress">
                      <div style={{
                        height: "100%",
                        width: `${filled}%`,
                        backgroundColor: "lightgreen",
                        transition: "width 0.5s"
                      }}>
                        <span className="progressPercent">{filled}%</span>
                      </div>
                  </div>
                </div>

                {/*설문 body*/}
                <div className={classes.content}>
                  {getStepContent(activeStep)}
                </div>

                <div className={classes.button}>
                  {/* 이전 페이지 이동 버튼*/}
                  <Button
                    style={{float : 'left'}}
                    variant="contained"
                    color="primary"
                    disabled={activeStep === 0}
                    onClick={handleBackstep}>
                    이전
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNextstep} style={{float : 'right'}}>
                    {activeStep === steps.length - 1 ? (
                      // <Link to='/Result' style={{ textDecoration: 'none', color: 'white' }}>Next</Link>
                      '결과 확인'
                    ) : (
                      'Next'
                    )}

                  </Button>
                </div>
              </div>

            </div>
          )
          }
        </div>
      </div>
    </>
  )
}
export default StepperHooks;