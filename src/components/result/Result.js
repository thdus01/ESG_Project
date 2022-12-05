import React from 'react'
import './Result.css'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import styled from "styled-components";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterIcon,
	TwitterShareButton,
} from "react-share";
import { useScript } from "./hooks";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import kakaoLogo from "./kakao.png";
import pdfLogo from "./pdf.png";
import esgLogo from "./esgicon.png";
import homeLogo from "./home.png";
import DountChart from "./chart/DonutChart";
import BarChart from "./chart/BarChart";
import BarChartMobile from "./chart/BarChartMobile";
import axios from 'axios'
import MediaQuery from 'react-responsive';



let total, social, environment, governance, pub;
// 제목과 버튼을 감싸는 컨테이너
const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FlexContainerMobile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// 버튼을 배치시키는 컨테이너
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 48px);
	grid-column-gap: 8px;
	justify-content: center;
	align-items: center;
	margin-bottom: 16px;
`;

const GridContainerMobile = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 48px);
	grid-column-gap: 8px;
	justify-content: center;
	align-items: center;
	margin-bottom: 16px;
`;


//카카오 공유 버튼 핸들러 추가 함수,카카오 아이콘
const KakaoShareButton = styled.a`
	cursor: pointer;
`;
const KakaoIcon = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 24px;
`;
//pdf icon
const PdfButton = styled.a`
	cursor: pointer;
`;
const PdfIcon = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 24px;
`;
//esg icon
const EsgButton = styled.a`
	cursor: pointer;
`;
const EsgIcon = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 24px;
`;
//home icon
const HomeButton = styled.a`
	cursor: pointer;
`;
const HomeIcon = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 24px;
`;

//도넛차트 
const Dount = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Bar = styled.div`
`;

function Result() {
	//axios 연습하기
	const { value } = useParams();
	const [data, setData] = useState([]);

	// let ent_mrg_name = localStorage.getItem('login_name');
	let entName = localStorage.getItem('login_entName');
	
	let message = null;

	useEffect(() => {
		axios.get('/esg/result'
			, { params: { 'eval_result_idx': 3 } }
		)
			.then((res) => {
				console.log(res)
				let popo = JSON.stringify(res.data);
				localStorage.setItem('popo', popo);
				let papa = JSON.parse(localStorage.getItem('popo'));
				// popo = JSON.stringify(popo.replace('{', '').replace('}', ''));
				// console.log("popo : " + popo);
				// let papa = popo.split(','); 
				setData(papa);

				localStorage.setItem('total', papa.total);
				localStorage.setItem('public', papa.public);
				localStorage.setItem('social', papa.social);
				localStorage.setItem('environment', papa.environmentList);
				localStorage.setItem('governance', papa.governance);
				total = parseFloat(localStorage.getItem('total')).toFixed(1);
				pub = parseFloat(localStorage.getItem('public'));
				social = parseFloat(localStorage.getItem('social'));
				environment = parseFloat(localStorage.getItem('environment'));
				governance = parseFloat(localStorage.getItem('governance'));
				let entName = localStorage.getItem('login_entName');
				//ent_mrg_name = localStorage.getItem('ent_mrg_name');
				 console.log(typeof(popo));
				setData(popo);
				/*console.log('is ' + JSON.stringify(data));*/
			}).catch((error) => { // 오류가 떴을때 실행됨
				console.log(error);
			})
		/*
			{data.map(data =>{
				return <div key={data.id}>
					console.log({data.total};)
					
					</div>
					})}
		*/

	}, []);

	/*
		const message = ()=>{
			data.map(data =>{
				return (<span key={data.id}>
					{data.total} {'>='} {0.8} ? <span>A</span> :
					{data.total} {'>='} {0.6} ? <span>B</span> :
					{data.total} {'>='} {0.4} ? <span>C</span> : <span>D</span>
					</span>)
					})
		};
	*/


	

	// window 객체에서 현재 url 가져오기
	const currentUrl = window.location.href;
	// kakao SDK import하기
	const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
	// kakao sdk 초기화하기
	// status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
	useEffect(() => {
		if (status === "ready" && window.Kakao) {
			// 중복 initialization 방지
			if (!window.Kakao.isInitialized()) {
				// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
				window.Kakao.init("4725b2ccf895fb53b02eb1715c0a5a8b");
			}
		}
	}, [status]);
	// 카카오톡 공유 버튼 핸들러 추가 함수
	const handleKakaoButton = () => {
		window.Kakao.Link.sendScrap({
			requestUrl: currentUrl,
			templateId: 84431, // 내가 만든 템플릿 아이디를 넣어주면 된다
		});
	};
	// pdf 저장하기
	const exportPDF = () => {
		const input = document.getElementById("App")
		html2canvas(input, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
			const imgData = canvas.toDataURL('img/png'); //캡쳐 이미지
			const imgHeight = 185;
			const imgWidth = 270; //캡쳐 이미지 가로
			const pdf = new jsPDF('l', 'mm', 'a4'); //pdf 문서*/
			{/*const imgWidth = 210; //캡쳐 너비
      const imgHeight = canvas.height * imgWidth / canvas.width; //캡쳐 높이
      {/*const imgHeight = canvas.height * imgWidth / canvas.width; //캡쳐 높이
      const imgData = canvas.toDataURL('img/png'); //캡쳐 이미지
	  const pdf = new jsPDF('p', 'mm', 'a4'); //pdf 문서*/}
			pdf.addImage(imgData, 'PNG', 8, 10, imgWidth, imgHeight); //pdf에 이미지 추가
			pdf.save("결과.pdf") //저장할 파일명
		})
	}

	
	//<span className='grade'>B</span>
	return (
		<>
		{/*PC*/}
		    <MediaQuery minWidth={801}>
			<div id="App" className="App-header">
				<div className='result-body'>
				<div className="result-item result-left">
					<div className="top">
						ESG 진단결과
					</div>
					<div className="mid1">
						{/* {data.map((data,idx) =>{
						return (<span key={idx}>
							<span>ooo님의 ESG 등급은 : &nbsp;&nbsp;</span>
							<span className='grade'>{parseFloat(data.total) >= 80 ? ('A') : 
								parseFloat(data.total) >= 60 ? ('B') : ('C')}
							</span>
							</span>)
							})} */}
						<span>
							<span>{entName}님의 ESG 등급은 : &nbsp;&nbsp;</span>
							<span className='grade'>{parseFloat(total) >= 80 ? ('A') :
								parseFloat(total) >= 60 ? ('B') : ('C')}
							</span>
						</span>
					</div>

					<div className="mid2">
						{/* {data.map((data,idx) =>{
						return (<span key={idx}>
							<span className='grade'>{parseFloat(data.total) >= 80 ? ('ESG경영의 최고입니다!') : 
								parseFloat(data.total) >= 60 ? ('ESG경영을 잘 실천하고 있습니다.') : ('ESG경영에 노력이 필요합니다.')}
							</span>
							</span>)
							})} */}
						<span>
							<span className='grade'>{total >= 80 ? ('ESG경영의 최고입니다!') :
								total >= 60 ? ('ESG경영을 잘 실천하고 있습니다.') : ('ESG경영에 노력이 필요합니다.')}
							</span>
						</span>

					</div>
					<div className="bottom">
						<Dount className="Donut">
							{/* {data.map((data,idx) =>{
						return (<div key={idx}>
							<DountChart color="#c8e6c9" percent={parseFloat(data.total)} size="300px" />
							</div>)
							})} */}
							<div>
								<DountChart color="#c8e6c9" percent={total} size="300px" />
							</div>

						</Dount>

					</div>

				</div>
				<div className="result-item result-right">
					<div className="container">
						<div className="P">
							<div className="caption">정보공시</div>
							<Bar className="Bar">
								{/* {data.map((data,idx) =>{
								return (<div key={idx}>
									<BarChart color="#f8bbd0" percent={parseFloat(data.public.score)}></BarChart>
							</div>)
							})} */}
								<div>
									<BarChart color="#f8bbd0" percent={pub}></BarChart>
								</div>
							</Bar>
							<div className="notice">
								<div className="bar-left"></div>
								<div className="bar-right">&nbsp;</div>

							</div>

						</div>
						<div className="E">
							<div className="caption">환경</div>
							<Bar className="Bar">
								{/* {data.map((data,idx) =>{
								return (<div key={idx}>
									<BarChart color="#b3e5fc" percent={parseFloat(data.enviroment.score)}></BarChart>
							</div>)
							})} */}
								<div>
									<BarChart color="#b3e5fc" percent={environment}></BarChart>
								</div>
							</Bar>
							<div className="notice">
								<div className="bar-left"></div>
								<div className="bar-right">&nbsp;</div>
							</div>

						</div>

						<div className="S">
							<div className="caption">사회</div>
							<Bar className="Bar">
								{/* {data.map((data,idx) =>{
								return (<div key={idx}>
									<BarChart color="#bcaaa4" percent={parseFloat(data.social.score)}></BarChart>
							</div>)
							})} */}
								<div>
									<BarChart color="#bcaaa4" percent={social}></BarChart>
								</div>
							</Bar>
							<div className="notice">
								<div className="bar-left"></div>
								<div className="bar-right">&nbsp;</div>
							</div>
						</div>

						<div className="G">
							<div className="caption">지배구조</div>
							<Bar className="Bar">
								{/* {data.map((data,idx) =>{
								return (<div key={idx}>
									<BarChart color="#64b5f6" percent={parseFloat(data.goverance.score)}></BarChart>
							</div>)
							})} */}
								<div>
									<BarChart color="#64b5f6" percent={governance}></BarChart>
								</div>
							</Bar>
							<div className="notice">
								<div className="bar-left"></div>
								<div className="bar-right">&nbsp;</div>
							</div>
						</div>

						<div className="comment">
							&nbsp;&nbsp;&nbsp;
							이 설문조사는 ESG에 대해 간단하게 테스트하는 설문조사입니다.<br></br>&nbsp;&nbsp;&nbsp;
							ESG는 <b>실천을 위한 솔루션이 필요하며, 통합적 고려 및 추진 체계 정립이 가장 중요합니다.</b><br></br>&nbsp;&nbsp;&nbsp;
							진단결과에 대한 자세한 피드백은 다음으로 연락바랍니다.<br></br>&nbsp;&nbsp;&nbsp;&nbsp;
							<span className="comment_tel"><b>tel</b> : 010-5499-9000</span>&nbsp;&nbsp;&nbsp;&nbsp;
							<span className="comment_tel"><b>e-mail</b> : g9inlove@naver.com</span><br></br>

						</div>
					</div>



				</div>
				</div>

			</div>



			<div>
				<FlexContainer>
					<br></br><br></br><br></br>


					<div className="share">공유/저장/홈 버튼 </div>
					<GridContainer>
						<FacebookShareButton url={currentUrl}>
							<FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
						</FacebookShareButton>

						<TwitterShareButton url={currentUrl}>
							<TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
						</TwitterShareButton>

						<KakaoShareButton onClick={handleKakaoButton}>
							<KakaoIcon src={kakaoLogo}></KakaoIcon>
						</KakaoShareButton>

						<PdfButton onClick={() => exportPDF()}>
							<PdfIcon src={pdfLogo}></PdfIcon>
						</PdfButton>

						<EsgButton onClick={(e) => {
							e.preventDefault();
							window.location.href = 'https://blog.naver.com/lbamiraean';
						}}>
							<EsgIcon src={esgLogo}></EsgIcon>
						</EsgButton>

						<HomeButton onClick={(e) =>{
							e.preventDefault();
							window.location.href = '/';
						}}>
							<HomeIcon src={homeLogo}></HomeIcon>
						</HomeButton>
						{/*<button onClick={() => exportPDF()}>PDF</button>*/}
					</GridContainer>
				</FlexContainer>
			</div>
		</MediaQuery>



		{/*Mobile*/}
		<MediaQuery maxWidth={800}>
			<div id="App" className="App-header-mobile">
					<div className="container-mobile">
					<div className="top-mobile">
						ESG 진단결과
					</div>
					<div className="mid1-mobile">
						<span>
							<span>{entName}님의 ESG 등급은 : &nbsp;&nbsp;</span>
							<span className='grade-mobile'>{parseFloat(total) >= 80 ? ('A') :
								parseFloat(total) >= 60 ? ('B') : ('C')}
							</span>
						</span>
					</div>
						<div className="P-mobile">
							<div className="caption-mobile">정보공시</div>
							<Bar className="Bar">
								<div>
									<BarChartMobile color="#f8bbd0" percent={pub}></BarChartMobile>
								</div>
							</Bar>
							<div className="notice-mobile">
								<div className="bar-left-mobile"></div>
								<div className="bar-right-mobile">&nbsp;</div>
							</div>

						</div>
						<div className="E-mobile">
							<div className="caption-mobile">환경</div>
							<Bar className="Bar-mobile">
								{/* {data.map((data,idx) =>{
								return (<div key={idx}>
									<BarChart color="#b3e5fc" percent={parseFloat(data.enviroment.score)}></BarChart>
							</div>)
							})} */}
								<div>
									<BarChartMobile color="#b3e5fc" percent={environment}></BarChartMobile>
								</div>
							</Bar>
							<div className="notice-mobile">
								<div className="bar-left-mobile"></div>
								<div className="bar-right-mobile">&nbsp;</div>
							</div>

						</div>

						<div className="S-mobile">
							<div className="caption-mobile">사회</div>
							<Bar className="Bar-mobile">
								{/* {data.map((data,idx) =>{
								return (<div key={idx}>
									<BarChart color="#bcaaa4" percent={parseFloat(data.social.score)}></BarChart>
							</div>)
							})} */}
								<div>
									<BarChartMobile color="#bcaaa4" percent={social}></BarChartMobile>
								</div>
							</Bar>
							<div className="notice-mobile">
								<div className="bar-left-mobile"></div>
								<div className="bar-right-mobile">&nbsp;</div>
							</div>
						</div>

						<div className="G-mobile">
							<div className="caption-mobile">지배구조</div>
							<Bar className="Bar-mobile">
								{/* {data.map((data,idx) =>{
								return (<div key={idx}>
									<BarChart color="#64b5f6" percent={parseFloat(data.goverance.score)}></BarChart>
							</div>)
							})} */}
								<div>
									<BarChartMobile color="#64b5f6" percent={governance}></BarChartMobile>
								</div>
							</Bar>
							<div className="notice-mobile">
								<div className="bar-left-mobile"></div>
								<div className="bar-right-mobile">&nbsp;</div>
							</div>
						</div>
					</div>

					<div className="mid2-mobile">
						<span>
							<span className='grade-mobile'>{total >= 80 ? ('ESG경영의 최고입니다!') :
								total >= 60 ? ('ESG경영을 잘 실천하고 있습니다') : ('ESG경영에 노력이 필요합니다.')}
							</span>
						</span>

					</div>
					<div className="bottom-mobile">
						<Dount className="Donut-mobile">
							{/* {data.map((data,idx) =>{
						return (<div key={idx}>
							<DountChart color="#c8e6c9" percent={parseFloat(data.total)} size="300px" />
							</div>)
							})} */}
							<div>
								<DountChart color="#c8e6c9" percent={total} size="300px" />
							</div>

						</Dount>

					</div>	

					<div className="comment-mobile">
					&nbsp;이 설문조사는 ESG에 대해 간단하게 테스트하는 설문조사입니다.<br></br>
					&nbsp;ESG는 <b>실천을 위한 솔루션과, 통합적고려 및 추진 체계정립이 중요합니다.</b><br></br>
					&nbsp;진단결과에 대한 자세한 피드백은 다음으로 연락바랍니다.<br></br>
							<span className="comment_tel-mobile"><b>&nbsp;tel</b> : 010-5499-9000</span>&nbsp;&nbsp;&nbsp;&nbsp;
							<span className="comment_tel-mobile"><b>&nbsp;e-mail</b> : g9inlove@naver.com</span><br></br>

						</div>		
				
						
			<div>
			<FlexContainerMobile>
					<br></br><br></br><br></br>

					<div className="share-mobile">공유/홈 버튼 </div>
					<GridContainerMobile>
						<FacebookShareButton url={currentUrl}>
							<FacebookIcon size={45} round={true} borderRadius={24}></FacebookIcon>
						</FacebookShareButton>

						<TwitterShareButton url={currentUrl}>
							<TwitterIcon size={45} round={true} borderRadius={24}></TwitterIcon>
						</TwitterShareButton>

						<KakaoShareButton onClick={handleKakaoButton}>
							<KakaoIcon src={kakaoLogo}></KakaoIcon>
						</KakaoShareButton>

						<EsgButton onClick={(e) => {
							e.preventDefault();
							window.location.href = 'https://blog.naver.com/lbamiraean';
						}}>
							<EsgIcon src={esgLogo}></EsgIcon>
						</EsgButton>

						<HomeButton onClick={(e) =>{
							e.preventDefault();
							window.location.href = '/';
						}}>
							<HomeIcon src={homeLogo}></HomeIcon>
						</HomeButton>
						{/*<button onClick={() => exportPDF()}>PDF</button>*/}
					</GridContainerMobile>
				</FlexContainerMobile>
				
			</div>
		</div>
		</MediaQuery>
		</>
	)
}
{/*json-server --watch ./src/db/data.json --port 3001*/ }
export default Result;