import * as React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import './AdminResult.css'
import { IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { changeLoginCheck } from "../../store/counter";
import { useDispatch } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';
import { useCallback } from 'react';



let total, social, environment, governance, pub;

// 리스트 불러오는 요청\
function slice(x) {
    x = String(x);

    if (x.length > 10) {

        return x.substr(0, 15) + "...";
    } else if (x == "null") return "작성된 피드백이 없습니다.";
    else return x;
}

function AdminResult() {

    let admin_name = localStorage.getItem('admin_name');

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const menuId = 'primary-search-account-menu';

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let ent_mrg_email = localStorage.getItem('login_email');
    let ent_mrg_name = localStorage.getItem('login_name');

    const [data, setData] = React.useState([]);

    // 글 리스트 개수
    const [lastIdx, setLastIdx] = useState(0);

    let adminEmail = localStorage.getItem('admin_email');

    useEffect(() => {
        axios.get('/esg/admin/get/result/all',  // 진단 결과 리스트 요청
            {
                params: {
                    'adminEmail': adminEmail,
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

    const onbtnHandlerr = (e) => {
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
                // popo = JSON.stringify(popo.replace('{', '').replace('}', ''));
                // console.log("popo : " + popo);
                // let papa = popo.split(','); 
                setData(papa);

                localStorage.setItem('total', papa.total);
                localStorage.setItem('public', papa.public);
                localStorage.setItem('social', papa.social);
                localStorage.setItem('environment', papa.environmentList);
                localStorage.setItem('governance', papa.governance);
                localStorage.setItem('entName', papa.entName);
                // 데이터 불러오는 부분
                // total = parseFloat(localStorage.getItem('total')).toFixed(1);
                // pub = parseFloat(localStorage.getItem('public'));
                // social = parseFloat(localStorage.getItem('social'));
                // environment = parseFloat(localStorage.getItem('environment'));
                // governance = parseFloat(localStorage.getItem('governance'));
                // ent_mrg_name = localStorage.getItem('ent_mrg_name');
                // console.log(typeof(popo));
                setData(localpopa);
                navigate("/Result");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // const logout = () => {
    //     dispatch(changeLoginCheck({ check: "unLogined" }));
    //     alert("로그아웃 하시겠습니까?");

    //     // 로컬스토리지 삭제
    //     localStorage.clear();
    //     navigate('/');
    // }

    // 로그아웃
    const logout = React.useCallback(() => {
        dispatch(changeLoginCheck({ check: "unLogined" }));
        if (window.confirm("로그아웃 하시겠습니까?")) {
            localStorage.clear();
            alert("로그아웃 되었습니다.");
            navigate("/");
        } else {

        }
    }, [dispatch]);


    return (
        <>
            <Outlet />
            <div className="AdminPage_body">
                <div className="AdminPage_main">
                    {/* 네비게이션 */}
                    <div className="AdminPage_navigation">
                        <ul>
                            <Link to="/" className="main_title3">
                                <p className="main_title3">ESG 자가진단</p>
                            </Link>
                            <li>
                                <a href="/Adminpage">
                                    <span className="icon">
                                        <IconButton
                                            size="large"
                                            edge="end"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"
                                            onClick={handleProfileMenuOpen}
                                            color="inherit">
                                            <DashboardIcon />
                                        </IconButton>
                                    </span>
                                    <span className="title">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <Link to="/Adminpage/Member">
                                    <span className="icon">
                                        <IconButton
                                            size="large"
                                            edge="end"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"
                                            onClick={handleProfileMenuOpen}
                                            color="inherit">
                                            <PeopleIcon />
                                        </IconButton>
                                    </span>
                                    <span className="title">회원관리</span></Link>
                            </li>
                            <li>
                                <Link to="/AdminResult">
                                    <span className="icon">
                                        <IconButton
                                            size="large"
                                            edge="end"
                                            aria-label="account of current user"
                                            aria-controls={menuId}
                                            aria-haspopup="true"
                                            onClick={handleProfileMenuOpen}
                                            color="inherit">
                                            <HistoryEduIcon />
                                        </IconButton>
                                    </span>
                                    <span className="title">진단이력</span></Link>
                            </li>

                            <li>
                            <Link to="/">
                                <span className="icon">
                                    <IconButton
                                        size="large"
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"

                                        color="inherit">
                                        <LogoutIcon />
                                    </IconButton>
                                </span>
                                <span className="title" onClick={logout}>로그아웃</span>
                            </Link>
                            </li>

                        </ul>
                    </div>

                    {/* main */}
                    <div className="Adminpage_dashboard3">
                        <div className="dashboard_topbar3">
                            <div className="Admin_title3">
                                <Typography
                                    style={{ fontWeight: 'bold', fontSize: '20px' }}>진단이력</Typography>
                            </div>

                            {/* 관리자 계정 표시 */}
                            <div className="Admin_user3">
                                <Typography>{admin_name}님</Typography>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit">
                                    <AccountCircle />
                                </IconButton>
                            </div>
                        </div>

                        <div className="resultcheck-body3">
                            <table className="table_body3">
                                <tbody className="result_table_body3">
                                    <tr className="result_table_r3">
                                        <td className="tableListIndex3">번호</td>
                                        <td className="tableListTitle3">기업명</td>
                                        <td className="tableListDate3">진단 날짜</td>
                                        <td className="tableListFeedback3">피드백</td>
                                        <td className="tableListbutton3">결과</td>
                                    </tr>
                                    {/* rowData가 없으면 '작성된 글이 없습니다'를 나타낸다. */}
                                    {lastIdx !== 0 ?
                                        data.map((rowData, idx) => (
                                            // 최초 선언한 기본값은 나타내지 않는다.
                                            // rowData.idx !== '' &&
                                            <>
                                                <tr key={idx}>
                                                    <td className="tableListIndex3">
                                                        {/* router로 이동 시 idx값을 param으로 전달한다. */}
                                                        {idx + 1}
                                                    </td>
                                                    <td className="tableListTitle3">
                                                        {rowData.ent_name}
                                                    </td>
                                                    {/* <td className="tableListTitle">기업명</td> */}
                                                    <td className="tableListDate3">
                                                        {rowData.date}
                                                    </td>
                                                    <td className="tableListFeedback3">
                                                        {slice(rowData.feedback)}
                                                        {/* {rowData.feedback} */}
                                                    </td>
                                                    <td className="tableListButton3">

                                                        <input
                                                            id={idx}
                                                            type="button"
                                                            className="result_btn3"
                                                            onClick={onbtnHandlerr}
                                                            value="조회"
                                                        />

                                                    </td>
                                                </tr>
                                            </>
                                        )) :
                                        <tr>
                                            <td className="tableListIndex3"></td>
                                            <td className="tableListTitle noData">진단 이력이 존재하지 않습니다.</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                        <br></br><br></br>
                        <br></br><br></br>

                    </div>


                </div>
            </div>

        </>
    );

}

export default AdminResult;