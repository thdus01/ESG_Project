import React, { useEffect, useState } from "react";
import Footer from "../components/basic/Footer";
import Header from "../components/basic/Header";
import Nav from "../components/basic/Nav";
import './SearchResult.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ErrorRounded } from "@mui/icons-material";


let total, social, environment, governance, pub;

// 리스트 불러오는 요청\
function slice(x) {
    x = String(x);
    //    console.log(x + " : " + x.length);
    if (x.length > 10) {
        // console.log("이 친구 길어 : " + x);
        // console.log("x.substr(0 , 15) : " + x.substr(0, 15));
        return x.substr(0, 15) + "...";
    }else if(x == "null") return "작성된 피드백이 없습니다.";
    else return x;
}

function SearchResult({ props }) {

    const navigate = useNavigate();

    let ent_mrg_email = localStorage.getItem('login_email');
    let ent_mrg_name = localStorage.getItem('login_name');

    // 데이터 state 값
    const [data, setData] = useState([
        // {
        //     eval_result_idx: '',
        //     ent_mrg_email: '',
        //     ent_name: '',
        //     date: '',
        //     feedback: ''
        // }
    ]);

    // 글 리스트 개수
    const [lastIdx, setLastIdx] = useState(0);

    useEffect(() => {
        axios.get('/esg/result/all',  // 진단 결과 리스트 요청
            {
                params: {
                    'ent_mrg_email': ent_mrg_email,
                }
            }
        )
            .then((response) => {
                console.log(response);

                const _data = response.data.response.map((rowData) => (
                    // rowData의 갯수만큼 증가한다.
                    setLastIdx(lastIdx + 1),
                    {
                        eval_result_idx: rowData.evalResultIdx,
                        ent_mrg_email: rowData.entMrgEmail,
                        ent_name: rowData.entName,
                        date: rowData.evalDate,
                        feedback: rowData.evalFeedback
                    }
                ))
                setData(data.concat(_data));

            })
            .catch((error) => {
                console.log(error.message);
            })
    }, []);

    const onbtnHandler = (e) => {
        console.log(e.currentTarget.id);
  
        let idx1 = e.currentTarget.id;
 
        const findsIndex = data[idx1].eval_result_idx;
        console.log(findsIndex);

        // 버튼 클릭시 세부 목록 요청
        axios.get('/esg/result', { params: { 'eval_result_idx': findsIndex } }
        )
            .then((res) => {
                console.log(res.data);
                let localpopa = JSON.stringify(res.data);
                localStorage.setItem('localpopa', localpopa);
                let papa = JSON.parse(localStorage.getItem('localpopa'));
               
                setData(papa)

                localStorage.setItem('total', papa.total);
                localStorage.setItem('public', papa.public);
                localStorage.setItem('social', papa.social);
                localStorage.setItem('environment', papa.environmentList);
                localStorage.setItem('governance', papa.governance);
                
                setData(localpopa);
                navigate("/Result");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    console.log("setData:", data);

    return (
        <>
            <Header />
            <Nav />
            <div>
                <div className="header"><b>진단결과 조회</b></div>


                <div className="resultcheck-body">
                    <table className="table_body">
                        <tbody className="result_table_body">
                            <tr className="result_table_r">
                                <td className="tableListIndex">번호</td>
                                <td className="tableListTitle">기업명</td>
                                <td className="tableListDate">진단 날짜</td>
                                <td className="tableListFeedback">피드백</td>
                                <td className="tableListbutton">결과</td>


                            </tr>
                            {/* rowData가 없으면 '작성된 글이 없습니다'를 나타낸다. */}
                            {lastIdx !== 0 ?
                                data.map((rowData, idx) => (
                                    // 최초 선언한 기본값은 나타내지 않는다.
                                    // rowData.idx !== '' &&
                                    <>
                                        <tr key={idx}>
                                            <td className="tableListIndex">
                                                {/* router로 이동 시 idx값을 param으로 전달한다. */}
                                                {idx + 1}
                                            </td>
                                            <td className="tableListTitle">
                                                {rowData.ent_name}
                                            </td>
                                            {/* <td className="tableListTitle">기업명</td> */}
                                            <td className="tableListDate">
                                                {rowData.date}
                                            </td>
                                            <td className="tableListFeedback">
                                                {slice(rowData.feedback)}
                                                {/* {rowData.feedback} */}
                                            </td>
                                            <td className="tableListButton">

                                                <input
                                                    id={idx}
                                                    type="button"
                                                    className="result_btn"
                                                    onClick={onbtnHandler}
                                                    value="조회"
                                                />

                                            </td>
                                        </tr>
                                    </>
                                )) :
                                <tr>
                                    <td className="tableListIndex"></td>
                                    <td className="tableListTitle noData">진단 이력이 존재하지 않습니다.</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <br></br><br></br>
                <br></br><br></br>

            </div>



            <Footer />
        </>
    );
}

export default SearchResult;