import * as React from "react";
import './Member.css';
import { Link, Outlet, Route, useNavigate } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import axios from "axios";
import styled from 'styled-components'
import { usePagination, useTable } from "react-table";
import { changeLoginCheck } from "../../store/counter";

// 리스트 불러오는 요청
function slice(x) {
    x = String(x);

    if (x.length > 10) {

        return x.substr(0, 15) + "...";
    }
    else return x;
}

function Member(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let admin_name = localStorage.getItem('admin_name');

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [ent_name, setEnt_name] = React.useState('');
    const [compNameSearchPostData, setCompNameSearchPostData] = useState([]); // 서버로 보낼 데이터 합친것

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const menuId = 'primary-search-account-menu';

    

    const [data, setData] = useState([]);
    const [keyword, setKeyword] = useState('');

    // 글 리스트 개수
    const [lastIdx, setLastIdx] = useState(0);

    // 관리자 이메일 로컬스토리지에서 가져온다.
    let adminEmail = localStorage.getItem('admin_email');

    // 서버 통신 구간(axios)
    // const viewInform = (e) => {
    //     console.log(e.currentTarget.value);

    //     axios.get('/esg/admin/get/enterprises/all',
    //         {
    //             params: {
    //                 adminEmail: adminEmail
    //             }
    //         })
    //         .then((response) => {
    //             console.log(response.data);
    //             const _data = response.data.response.map((rowData) => (
    //                 // rowData의 갯수만큼 증가한다.
    //                 setLastIdx(lastIdx + 1),
    //                 {
    //                     eval_idx: rowData.evalIdx,
    //                     ent_mrg_name: rowData.entMrgName,
    //                     ent_name: rowData.entName,
    //                     ent_major_prod: rowData.entMajorProd,
    //                 }
    //             ))
    //             setData(data.concat(_data));


    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })

    // }

    useEffect(() => {
        axios.get('/esg/admin/get/enterprises/all',
            {
                params: {
                    adminEmail: adminEmail
                }
            })
            .then((response) => {
                console.log(response.data);
                const _data = response.data.response.map((rowData) => (
                    // rowData의 갯수만큼 증가한다.
                    setLastIdx(lastIdx + 1),
                    {
                        eval_idx: rowData.evalIdx,
                        ent_mrg_name: rowData.entMrgName,
                        ent_name: rowData.entName,
                        ent_major_prod: rowData.entMajorProd,
                    }
                ))
                setData(data.concat(_data));


            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const logout = () => {
        dispatch(changeLoginCheck({ check: "unLogined" }));
        alert("로그아웃 하시겠습니까?");

        // 로컬스토리지 삭제
        localStorage.clear();
        navigate('/');
    }

    return (
        <>
            <Outlet />
            <div className="AdminPage_body">
                <div className="AdminPage_main">
                    {/* 네비게이션 */}
                    <div className="AdminPage_navigation">
                        <ul>
                            <Link to="/" className="main_title2">
                                <p className="main_title2">ESG 자가진단</p>
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
                                    <span className="icon"><IconButton
                                        size="large"
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        onClick={handleProfileMenuOpen}
                                        color="inherit">
                                        <HistoryEduIcon />
                                    </IconButton></span>
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
                    <div className="Adminpage_dashboard">
                        <div className="dashboard_topbar">
                            <div className="Admin_title">
                                <Typography
                                    style={{ fontWeight: 'bold', fontSize: '20px' }}>회원 관리
                                </Typography>
                            </div>

                            {/* 관리자 계정 표시 */}
                            <div className="Admin_user">
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

                        <div className="detail">
                            {/* card */}
                            <div className="cardBox">
                                {/* search 부분 */}
                                <div className="search_block">
                                    <div className="searchBox">
                                        <table className="company_search">
                                            <tr className="company_search_tr">
                                                <td><span>회사명</span></td>
                                                <td><input
                                                    placeholder="회사명을 입력하세요"
                                                    onChange={(e) => setEnt_name(e.target.value)}
                                                    // onChange={handleChangeClick}
                                                    className='company_search_inputType'
                                                    name="compname_search" /></td>
                                            </tr>
                                        </table>
                                        <div><button
                                            
                                            className="btn_search"
                                            value={keyword}>
                                            조회</button></div>



                                    </div>
                                </div>

                            </div>

                            {/* 봉사자 목록 */}
                            <div className="list_body">
                                <div className="list-div">
                                    {/* {tableComponent} */}
                                    <div className="resultcheck-body3">
                                        <table className="table_body3">
                                            <tbody className="result_table_body3">
                                                <tr className="result_table_r3">
                                                    <td className="tableListIndex3">번호</td>
                                                    <td className="tableListTitle3">기업명</td>
                                                    <td className="tableListDate3">주요 서비스</td>
                                                    <td className="tableListFeedback3">담당자명</td>
                                                </tr>

                                                {/* {data.filter((rowData) => {
                                                    if (ent_name == "") {
                                                        return rowData;
                                                    } else if (rowData.ent_name.toLowerCase().includes(ent_name.toLowerCase())) {
                                                        return rowData;
                                                    }
                                                })} */}

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
                                                                    {rowData.ent_major_prod}
                                                                </td>
                                                                <td className="tableListFeedback3">
                                                                    {slice(rowData.ent_mrg_name)}
                                                                    {/* {rowData.feedback} */}
                                                                </td>
                                                                <td className="tableListButton3">



                                                                </td>
                                                            </tr>
                                                        </>
                                                    )) :
                                                    <tr>
                                                        <td className="tableListIndex3"></td>
                                                        <td className="tableListTitle noData">회원이 존재하지 않습니다.</td>
                                                    </tr>
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* <Table data={data} columns={columns} filterable={true} defaultPageSize={10} />
                                <table><tbody>{tableRows}</tbody></table> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Member;