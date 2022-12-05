import React from "react";
import Footer from "../components/basic/Footer";
import Header from "../components/basic/Header";
import Nav from "../components/basic/Nav";
import { ScrollToTop } from "../components/ScrollToTop";
import './Introesg.css';
import MediaQuery from 'react-responsive';


function Introesg() {

  return (
    <>
      <Header />
      <Nav />

      <div>
        {/*PC*/}
        <MediaQuery minWidth={501}>
        <div className="content-header">
          <strong><b>ESG 소개</b></strong>
        </div>

        <div className="content-body">
          <div className="content-body-1"><b>ESG의 개념</b></div>


          <div className="content-body-2">
            <div className="content-body-2-left"></div>
            <div className="content-body-2-right">&nbsp;<b>ESG란?</b></div>
          </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;기존의 기업 가치 측정은 회계학이나 재무학에 기반한 수량적 판단기준(재무적 가치)에 크게 의존하였습니다.&nbsp;
              ESG는 이런 기존 이론과는 다르게 기업을 바라보는 것입니다.&nbsp;
              ESG란 기업에서 재무적인 요소가 아니라 비재무적 요소인 <span className="ESG"><b>환경(Environment),사회(Social),지배구조(Governance)</b></span>를 나타내는 말입니다.&nbsp;
              Environment, Social, Governance의 첫 글자를 조합한 단어로 <b>지속가능한 발전을 위해 국가와 기업 활동 시 고려해야 할 3가지 핵심사항</b>입니다.&nbsp;<br></br>
              환경을 보호하고 사회 이슈를 해결하며 건전하고 투명한 지배구조를 만들어 이 모든 것이 계층, 지역, 성별, 더 나아가 국가 간 차별을 해소하자는 뜻을 내포하고 있습니다.&nbsp;
              지구온난화와 같은 이유로 전 세계적으로 환경문제로 인한 위기를 느끼면서 기업의 장기적인 생존과 번영을 위한 핵심적인 가치로 자리잡고 있습니다.&nbsp;
              특히 코로나 사태 이후 ESG의 중요성이 더욱 강조되고 있는 추세입니다.&nbsp;
              번외의 이야기이지만 2022년 1월 19일, 국립국어원은 ESG 경영을 대체할 쉬운 한국어로 <span className="ESG"><b>환경, 사회, 투명 경영</b></span>을 선정했습니다.</span>
          </div>

          <div className="content-body-4"> </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;중요하게 고려하고 있는 세부요소는 <span className="ESG"><b>E(환경)</b></span>에는 <b>기후변화 및 탄소배출, 대기와 수질오염, 물 부족, 폐기물 관리</b> 등이 포함됩니다.&nbsp;
              <span className="ESG"><b>S(사회)</b></span>에는 <b>고객만족, 데이터보호 및 프라이버시, 성별 및 다양성, 직원참여, 노동기준</b> 등이 있습니다.&nbsp;
              기업의 지속적인 성장을 위해서는 이윤획득이 가능한 환경이 조성되어야 하며,
              사회적 책임경영을 위해서는 물리적·사회적 환경을 적극적으로 책임지고 관리해야 합니다.&nbsp;
              <span className="ESG"><b>G(지배구조)</b></span>에서는 <b>이사회 구성, 감사위원회 구조, 부패정도, 임원 성과와 보상 및 정치기부금, 내부고발자 제도</b> 등을 이야기 할 수 있습니다.&nbsp;
              이러한 요인들은 기업의 지속가능성과 사회적으로 미치는 영향을 측정하는 주요 지표가 됩니다.&nbsp;</span>
            <br></br><br></br>
            <span className="dot"></span>
            <span>&nbsp;&nbsp;지속가능한 발전을 위한 기업과 투자자의 사회적 책임이 중요해지면서 세계적으로 많은 금융기관과 기업들이 ESG 평가 정보를 활용하고 있습니다.&nbsp;
              영국을 시작으로 스웨덴, 독일, 캐나다, 벨기에, 프랑스 등 여러 나라에서 연기금을 중심으로 ESG 정보 공시 의무 제도를 도입했습니다.&nbsp;
              <b>기업의 궁극적인 목표가 ‘이윤 추구’였던 과거와 달리 기업가치 평가의 기준이 ‘지속 가능’으로 변화</b>했기 때문입니다.&nbsp;
              아무리 실적이 좋아도 ESG, 즉 <span className="ESG"><b>환경(Environmental), 사회(Social), 지배구조(Governance)</b></span>라는 <b>비재무적인 요소</b>를 인정받지 못하면 기업 가치가 하락하는 시대가 도래 한 것입니다.&nbsp;</span>
          </div>

          <div className="content-body-5"> </div>

          <div className="content-body-2">
            <div className="content-body-2-left"></div>
            <div className="content-body-2-right">&nbsp;<b>ESG의 중요성</b></div>
          </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;<b>첫째, ESG 공시의 의무화입니다.</b>&nbsp;현재 국제적으로 ESG 공시를 의무화 한 국가는 20개국으로 은행사, 보험사, 자산운용사 등으로 공시의무를 확대하도록 계획했습니다.&nbsp;
              <b>두 번째, 투자자의 ESG 요구가 증대되고 있습니다.</b>&nbsp;우리나라의 국민연금도 2022년까지 운용기금의 50%를 ESG 기반에 투자하겠다고 선언했습니다.&nbsp;
              <b>세 번째, 기업평가에 ESG 반영입니다.</b>&nbsp;글로벌 신용평가사들도 기업의 ESG 평가결과를 신용등급 평가에 반영하기 시작하였습니다.&nbsp;
              국내 신용평가 기관도 영향을 받고 있습니다.&nbsp;
              <b>네 번째, 고객의 ESG 요구증대입니다.</b>&nbsp;고객들도 기업의 제품이 사회적으로, 환경적으로 어떠한 영향을 끼치고 있는지 관심을 보이고 있습니다.&nbsp;
              특히, 미래의 큰 손이라 불리는 MZ세대들이 큰 관심을 갖고 있습니다.</span>
          </div>

          <div className="content-body-6"> </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;기업의 가치가 재무제표의 정량적 지표에 의해 평가됐던 것과 달리, 최근 기후위기대응의 일환으로 ESG와 같은 비재무적 가치가 중시되고 있습니다.&nbsp;
              또한, ESG는 사회에 기여하고자 진행됐던 사회공헌 활동보다 적극적인 개념이며, 사회적 가치를 부가적인 활동이 아닌 경영방식 전반에 적용합니다.&nbsp;
              최근 우리나라에서도 ESG의 중요성에 따라 공공기관 공시 항목에 ESG를 대폭 확대해 온실가스 감축 실적 등의 정보 공개를 의무화하기 시작했습니다.&nbsp;
              그러므로 이제 <span className="ESG"><b>ESG 경영은 생존을 위해 선택이 아닌 필수가 되었습니다.</b></span></span>
            <br></br>
          </div>

          <div className="content-body-2">
            <div className="content-body-2-left"></div>
            <div className="content-body-2-right">&nbsp;<b>기업들의 ESG경영 사례</b></div>
          </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;ESG의 중요성이 커지는 가운데 다양한 기관에서 기업들의 ESG 활동에 대한 평가를 시행하고 있습니다.
              우리나라에서는 ‘한국기업지배구조원(KCGS)’이 가장 공신력 있는 ESG 평가 기관으로 인정받고 있습니다.
            </span>
          </div>

          <div className="content-body-7"> </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;
              한국 기업인 <b>풀무원</b>은 ESG의 모범생이라고 불릴 만큼, 우수한 ESG 평가를 받는 기업 중 하나입니다.
              풀무원은 창업단계 때부터 <span className="ESG"><b>E(환경), S(사회)라는 가치를 기업경영의 이념</b></span>으로 삼아왔습니다.
              풀무원의 정체성은 <span className="ESG"><b>건강과 환경의 지속가능성을 고려하는 로하스(Lifestyle Of Health And Sustainability, LOHAS)</b></span>로 이야기할 만큼,
              사람과 지구의 지속가능한 환경을 중요하게 생각해온 풀무원 정신의 계승이기도 합니다.
            </span>
            <br></br><br></br>

          </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;
              세계적인 IT 회사 <b>마이크로소프트(MS)</b>는 <span className="ESG"><b>AI for Good</b></span> 프로젝트를 통해 환경과 사회에 구체적으로 공헌을 하고 있습니다. AI for Good은 인공지능을 통한 사회적 문제 해결을 목표로 한 프로젝트로 2017년 부터 시작되었고, 다섯개의 분야로 나뉘어져 있습니다.<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>1.&nbsp;&nbsp;AI for Earth</b> : 지구 환경 AI 프로젝트입니다. 코로나19같은 환경 문제 해결을 위해 MS의 클라우드와 인공지능 프로그램을 지원합니다.<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>2.&nbsp;&nbsp;AI for Accessibility</b> : 전 세계 장애인의 자립을 지원합니다. 교육,고용,가정 등 다양한 분야에 AI 기술을 적용해 도움을 주고있습니다.<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>3.&nbsp;&nbsp;AI for Humanitarian Action</b>  : 재난 대응, 난민 보호, 인권 증진 등 지원을 위한 프로젝트입니다.<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>4.&nbsp;&nbsp;AI for Cultural Heritage</b> : 문화유산 보존을 위한 것으로, 위인,문화유적,문화유물,언어 총 4가지 분야에 인공지능 기술을 적용합니다.<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>5.&nbsp;&nbsp;AI for Health</b> : 의학 연구 가속화, 건강 형평성 등 초점을 두고 관련된 단체에게 기술적, 물질적 지원을 합니다.

            </span>
            <br></br><br></br>
          </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;
              <span className="ESG"><b>“지구가 목적, 사업은 수단(We’re in Business to save our home planet)”</b></span>은 글로벌 아웃도어 스포츠 브랜드 <b>파타고니아</b>의 사명입니다.
              기업의 <b>재무적 가치(이윤)</b> 보다 <b>비재무적 가치(환경)</b>를 생각하는 경영철학은 1973년 창립부터 이어지고 있습니다.
              버려진 페트병을 재활용한 폴리에스테르 원단을 개발해 이를 재활용해서 캐필린과 신칠라같은 옷을 만들며,
              무분별한 옷 소비를 지양하고 지구와 환경을 생각해서 옷을 오래입자는 취지로, 어떤 의류 제품이든 무상으로 수선해주는 캠페인인 <b>원웨어(Worn Wear)</b> 프로그램을 만들었습니다.
              또한, 사업 비용의 일부를 환경 단체에 지원하여 다양한 캠페인을 펼치고 문제 해결에 도움을 주고 있습니다.

            </span>
            <br></br>
          </div>
          <br></br><br></br>
          <br></br><br></br>

        </div>
        </MediaQuery>


        {/*Mobile*/}
        <MediaQuery  maxWidth={500}>
        <div className="content-header">
          <strong><b>ESG 소개</b></strong>
        </div>

        <div className="content-body">
          <div className="content-body-1"><b>ESG의 개념</b></div>


          <div className="content-body-2">
            <div className="content-body-2-left"></div>
            <div className="content-body-2-right">&nbsp;<b>ESG란?</b></div>
          </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;기존의 기업 가치 측정은 회계학이나 재무학에 기반한 수량적 판단기준(재무적 가치)에 크게 의존하였습니다.&nbsp;
              ESG는 이런 기존 이론과는 다르게 기업을 바라보는 것입니다.&nbsp;
              ESG란 기업에서 재무적인 요소가 아니라 비재무적 요소인 <span className="ESG"><b>환경(Environment),사회(Social),지배구조(Governance)</b></span>를 나타내는 말입니다.&nbsp;
              Environment, Social, Governance의 첫 글자를 조합한 단어로 <b>지속가능한 발전을 위해 국가와 기업 활동 시 고려해야 할 3가지 핵심사항</b>입니다.&nbsp;<br></br>
              환경을 보호하고 사회 이슈를 해결하며 건전하고 투명한 지배구조를 만들어 이 모든 것이 계층, 지역, 성별, 더 나아가 국가 간 차별을 해소하자는 뜻을 내포하고 있습니다.&nbsp;
              지구온난화와 같은 이유로 전 세계적으로 환경문제로 인한 위기를 느끼면서 기업의 장기적인 생존과 번영을 위한 핵심적인 가치로 자리잡고 있습니다.&nbsp;
              특히 코로나 사태 이후 ESG의 중요성이 더욱 강조되고 있는 추세입니다.&nbsp;
              번외의 이야기이지만 2022년 1월 19일, 국립국어원은 ESG 경영을 대체할 쉬운 한국어로 <span className="ESG"><b>환경, 사회, 투명 경영</b></span>을 선정했습니다.</span>
          </div>

          <div className="content-body-4-mobile"> </div>
          <div className="content-body-4-mobile-2"> </div>
          <div className="content-body-4-mobile-3"> </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;중요하게 고려하고 있는 세부요소는 <span className="ESG"><b>E(환경)</b></span>에는 <b>기후변화 및 탄소배출, 대기와 수질오염, 물 부족, 폐기물 관리</b> 등이 포함됩니다.&nbsp;
              <span className="ESG"><b>S(사회)</b></span>에는 <b>고객만족, 데이터보호 및 프라이버시, 성별 및 다양성, 직원참여, 노동기준</b> 등이 있습니다.&nbsp;
              기업의 지속적인 성장을 위해서는 이윤획득이 가능한 환경이 조성되어야 하며,
              사회적 책임경영을 위해서는 물리적·사회적 환경을 적극적으로 책임지고 관리해야 합니다.&nbsp;
              <span className="ESG"><b>G(지배구조)</b></span>에서는 <b>이사회 구성, 감사위원회 구조, 부패정도, 임원 성과와 보상 및 정치기부금, 내부고발자 제도</b> 등을 이야기 할 수 있습니다.&nbsp;
              이러한 요인들은 기업의 지속가능성과 사회적으로 미치는 영향을 측정하는 주요 지표가 됩니다.&nbsp;</span>
            <br></br><br></br>
            <span className="dot"></span>
            <span>&nbsp;&nbsp;지속가능한 발전을 위한 기업과 투자자의 사회적 책임이 중요해지면서 세계적으로 많은 금융기관과 기업들이 ESG 평가 정보를 활용하고 있습니다.&nbsp;
              영국을 시작으로 스웨덴, 독일, 캐나다, 벨기에, 프랑스 등 여러 나라에서 연기금을 중심으로 ESG 정보 공시 의무 제도를 도입했습니다.&nbsp;
              <b>기업의 궁극적인 목표가 ‘이윤 추구’였던 과거와 달리 기업가치 평가의 기준이 ‘지속 가능’으로 변화</b>했기 때문입니다.&nbsp;
              아무리 실적이 좋아도 ESG, 즉 <span className="ESG"><b>환경(Environmental), 사회(Social), 지배구조(Governance)</b></span>라는 <b>비재무적인 요소</b>를 인정받지 못하면 기업 가치가 하락하는 시대가 도래 한 것입니다.&nbsp;</span>
          </div>

          <div className="content-body-5-mobile"> </div>
          <div className="content-body-5-mobile-2"> </div>
          <div className="content-body-5-mobile-3"> </div>

          <div className="content-body-2">
            <div className="content-body-2-left"></div>
            <div className="content-body-2-right">&nbsp;<b>ESG의 중요성</b></div>
          </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;<b>첫째, ESG 공시의 의무화입니다.</b>&nbsp;현재 국제적으로 ESG 공시를 의무화 한 국가는 20개국으로 은행사, 보험사, 자산운용사 등으로 공시의무를 확대하도록 계획했습니다.&nbsp;
              <b>두 번째, 투자자의 ESG 요구가 증대되고 있습니다.</b>&nbsp;우리나라의 국민연금도 2022년까지 운용기금의 50%를 ESG 기반에 투자하겠다고 선언했습니다.&nbsp;
              <b>세 번째, 기업평가에 ESG 반영입니다.</b>&nbsp;글로벌 신용평가사들도 기업의 ESG 평가결과를 신용등급 평가에 반영하기 시작하였습니다.&nbsp;
              국내 신용평가 기관도 영향을 받고 있습니다.&nbsp;
              <b>네 번째, 고객의 ESG 요구증대입니다.</b>&nbsp;고객들도 기업의 제품이 사회적으로, 환경적으로 어떠한 영향을 끼치고 있는지 관심을 보이고 있습니다.&nbsp;
              특히, 미래의 큰 손이라 불리는 MZ세대들이 큰 관심을 갖고 있습니다.</span>
          </div>

          <div className="content-body-6-mobile"> </div>


          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;기업의 가치가 재무제표의 정량적 지표에 의해 평가됐던 것과 달리, 최근 기후위기대응의 일환으로 ESG와 같은 비재무적 가치가 중시되고 있습니다.&nbsp;
              또한, ESG는 사회에 기여하고자 진행됐던 사회공헌 활동보다 적극적인 개념이며, 사회적 가치를 부가적인 활동이 아닌 경영방식 전반에 적용합니다.&nbsp;
              최근 우리나라에서도 ESG의 중요성에 따라 공공기관 공시 항목에 ESG를 대폭 확대해 온실가스 감축 실적 등의 정보 공개를 의무화하기 시작했습니다.&nbsp;
              그러므로 이제 <span className="ESG"><b>ESG 경영은 생존을 위해 선택이 아닌 필수가 되었습니다.</b></span></span>
            <br></br>
          </div>

          <div className="content-body-2">
            <div className="content-body-2-left"></div>
            <div className="content-body-2-right">&nbsp;<b>기업들의 ESG경영 사례</b></div>
          </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;ESG의 중요성이 커지는 가운데 다양한 기관에서 기업들의 ESG 활동에 대한 평가를 시행하고 있습니다.
              우리나라에서는 ‘한국기업지배구조원(KCGS)’이 가장 공신력 있는 ESG 평가 기관으로 인정받고 있습니다.
            </span>
          </div>

          <div className="content-body-7-mobile"> </div>
          <div className="content-body-7-mobile-2"> </div>
          <div className="content-body-7-mobile-3"> </div>


          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;
              한국 기업인 <b>풀무원</b>은 ESG의 모범생이라고 불릴 만큼, 우수한 ESG 평가를 받는 기업 중 하나입니다.
              풀무원은 창업단계 때부터 <span className="ESG"><b>E(환경), S(사회)라는 가치를 기업경영의 이념</b></span>으로 삼아왔습니다.
              풀무원의 정체성은 <span className="ESG"><b>건강과 환경의 지속가능성을 고려하는 로하스(Lifestyle Of Health And Sustainability, LOHAS)</b></span>로 이야기할 만큼,
              사람과 지구의 지속가능한 환경을 중요하게 생각해온 풀무원 정신의 계승이기도 합니다.
            </span>
            <br></br><br></br>

          </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;
              세계적인 IT 회사 <b>마이크로소프트(MS)</b>는 <span className="ESG"><b>AI for Good</b></span> 프로젝트를 통해 환경과 사회에 구체적으로 공헌을 하고 있습니다. AI for Good은 인공지능을 통한 사회적 문제 해결을 목표로 한 프로젝트로 2017년 부터 시작되었고, 다섯개의 분야로 나뉘어져 있습니다.<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>1.&nbsp;&nbsp;AI for Earth</b> : 지구 환경 AI 프로젝트입니다. 코로나19같은 환경 문제 해결을 위해 MS의 클라우드와 인공지능 프로그램을 지원합니다.<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>2.&nbsp;&nbsp;AI for Accessibility</b> : 전 세계 장애인의 자립을 지원합니다. 교육,고용,가정 등 다양한 분야에 AI 기술을 적용해 도움을 주고있습니다.<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>3.&nbsp;&nbsp;AI for Humanitarian Action</b>  : 재난 대응, 난민 보호, 인권 증진 등 지원을 위한 프로젝트입니다.<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>4.&nbsp;&nbsp;AI for Cultural Heritage</b> : 문화유산 보존을 위한 것으로, 위인,문화유적,문화유물,언어 총 4가지 분야에 인공지능 기술을 적용합니다.<br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;<b>5.&nbsp;&nbsp;AI for Health</b> : 의학 연구 가속화, 건강 형평성 등 초점을 두고 관련된 단체에게 기술적, 물질적 지원을 합니다.

            </span>
            <br></br><br></br>
          </div>

          <div className="content-body-3">
            <span className="dot"></span>
            <span>&nbsp;&nbsp;
              <span className="ESG"><b>“지구가 목적, 사업은 수단(We’re in Business to save our home planet)”</b></span>은 글로벌 아웃도어 스포츠 브랜드 <b>파타고니아</b>의 사명입니다.
              기업의 <b>재무적 가치(이윤)</b> 보다 <b>비재무적 가치(환경)</b>를 생각하는 경영철학은 1973년 창립부터 이어지고 있습니다.
              버려진 페트병을 재활용한 폴리에스테르 원단을 개발해 이를 재활용해서 캐필린과 신칠라같은 옷을 만들며,
              무분별한 옷 소비를 지양하고 지구와 환경을 생각해서 옷을 오래입자는 취지로, 어떤 의류 제품이든 무상으로 수선해주는 캠페인인 <b>원웨어(Worn Wear)</b> 프로그램을 만들었습니다.
              또한, 사업 비용의 일부를 환경 단체에 지원하여 다양한 캠페인을 펼치고 문제 해결에 도움을 주고 있습니다.

            </span>
            <br></br>
          </div>
          <br></br><br></br>
          <br></br><br></br>

        </div>
        </MediaQuery>         
      </div>
      <ScrollToTop />
      <div><Footer /></div>

    </>
  );
}

export default Introesg;