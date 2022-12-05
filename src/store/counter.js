// 액션 타입 정의
export const LOGIN_USERS = "counter/LOGIN_USERS";  // 로그인
export const REGISTER_USER = "counter/REGISTER_USER";  // 회원가입
export const AUTH_USER = "counter/AUTH_USER";    // 권한 부여 
export const SEARCH_USER = "counter/SEARCH_USER";    // 비밀번호 찾기 
export const SET_USER = "counter/SET_USER";    // 비밀번호 수정
export const LOGIN_CHECK = "counter/LOGIN_CHECK";

export const SURVEY_CAR = "counter/SURVEY_CAR";  // 설문 결과

export const NAME_COMPANY = "counter/NAME_COMPANY";
export const INFORMATIONS = 'counter/INFORMATIONS';

export const RESULT_INFORM = "counter/RESULT_INFORM";  // 사용자가 보는 결과조회
export const ADMIN_RESULT = "counter/ADMIN_RESULT";  // 관리자페이지의 결과조회

export const MEMBER_INFORM = "counter/MEMBER_INFORM";  // 관리자 페이지의 회원관리

// 액션함수 정의
export const changeLoginUser = (login_user) => ({ type: LOGIN_USERS, login_user });
export const changeLoginCheck = (login_check) => ({ type: LOGIN_CHECK, login_check });
export const changeNameCompany = (name_company) => ({ type: NAME_COMPANY, name_company });
export const changeInformations = (informations) => ({ type: INFORMATIONS, informations });

// action: state를 바꾸는 행위/ 동작
// dispatch: action을 실제로 실행하는 함수
// reducer: action이 실제로 실행되면 state를 바꾸는 로직

// 초기상태 정의
const initialState = {
    login_check: { check: "unLogined" },

    informations: {
        id: "아이디",
        ent_mrg_name: "이름",
        ent_mrg_email: "이메일",
        ent_mrg_mobile: "전화번호"
    },

    result_inform: [],


}
// reducer 작성
export default function counter(state = initialState, action) {  // parameter로 전 state와 action을 받아온다.
    switch (action.type) {  // switch 문법을 사용 (action의 type의 case별로 관리하기 위함)
        case LOGIN_USERS:
            return {  // state를 return 시킵
                ...state,  // 전에 있는 것을 가져옴
                loginSuccess: action.payload  //loginSuccess에 해당 action의 payload를 넣어준다.
            }
            break;

        case REGISTER_USER:
            return {
                ...state,
                register: action.payload
            }
            break;

        case AUTH_USER:
            return {
                ...state,
                userData: action.payload
            }

        case SEARCH_USER:
            return {
                ...state,
                searchData: action.payload
            }
            break;

        case SET_USER:
            return {
                ...state,
                setData: action.payload
            }
            break;

        case SURVEY_CAR:
            return {
                ...state,
                surveyCal: action.payload
            }
            break;

        case LOGIN_CHECK:
            return {
                ...state,
                login_check: action.login_check
            }
            break;

        case NAME_COMPANY:
            return {
                ...state,
                nameCompany_Success: action.payload
            }

        case INFORMATIONS:
            return {
                ...state,
                informations: action.payload
            }

        case RESULT_INFORM:
            return {
                ...state,
                resultInform: action.payload
            }

        default:
            return state;
    }


}