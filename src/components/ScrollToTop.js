import { useEffect, useState } from 'react';
/* npm i react-icons 라이브러리 설치 하기*/
import { BiArrowFromBottom } from 'react-icons/bi';
import './ScrollToTop.css';

export const ScrollToTop = () => { 
    const [isVisable, setIsVisable] = useState(false)

    const toggleVisibility = () => { /* 스크롤이 300px 이상 되면 버튼이 보이게 하기 근데 vh단위로 하는법 몰라서 유동적이게 실패 ㅠ*/
        if (window.pageYOffset > 500) {
            setIsVisable(true);
        } else {
            setIsVisable(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ /* 스크롤을 맨 위로 올리기 */
            top: 0, 
            behavior: "smooth" /* 부드럽게 올라가기 */
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility); /* 스크롤 이벤트 추가 */
        
        return () => {
            window.removeEventListener("scroll", toggleVisibility); /* 스크롤 이벤트 제거 */
        };
        }, []);

    return (
        <div className = 'scroll__container'>
            <button id="top" onClick={scrollToTop} type="button"> 
                <BiArrowFromBottom /> {/*아이콘 추가*/}
                </button>
            
        </div>
    )
};