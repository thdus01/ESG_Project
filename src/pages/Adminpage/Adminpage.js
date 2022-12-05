import * as React from "react";
import './Adminpage.css';
import { useState } from "react";
import ESG_1 from "../../assets/ESG_1.png";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IconButton, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import { changeLoginCheck } from "../../store/counter";

// 메인페이지
function Adminpage(props) {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [isOpen, setMenu] = useState(true);

  let admin_name = localStorage.getItem('admin_name');

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);

    navigate('../AdminResult')

  };

  const logout = () => {
    dispatch(changeLoginCheck({ check: "unLogined" }));
    alert("로그아웃 하시겠습니까?");

    // 로컬스토리지 삭제
    localStorage.clear();
    navigate('/');
  }

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = 'primary-search-account-menu';

  const [expended, setExpended] = React.useState(false);

  return (
    <>
      <Outlet />
      <div className="AdminPage_body">
        <div className="AdminPage_main">
          {/* 네비게이션 */}
          <div className="AdminPage_navigation">
            <ul>
              <Link to="/" className="main_title">
                <p className="main_title">ESG 자가진단</p>
              </Link>
              <li>
                <Link to="/Adminpage">
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
                    </IconButton></span>
                  <span className="title">Dashboard</span>
                </Link>
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
                  <span className="title">진단이력</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                <span className="icon" onClick={logout}>
                  <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={logout}
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
            <div className="dashboard_topbar1">

              <div className="Admin_title">
                <Typography
                  style={{ fontWeight: 'bold', fontSize: '20px' }}>Dashboard</Typography>
              </div>

              {/* 관리자 계정 표시 */}
              <div className="Admin_user">
                <Typography >{admin_name}님</Typography>
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

            {/* card */}
            <div className="cardBox">
              <div className="card">
                <div>
                  <div className="numbers">150 건</div>
                  <div className="cardName">회원관리</div>
                </div>
                <div className="iconBox"> {/* icon */}
                  <div className=""></div>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">180 건</div>
                  <div className="cardName">진단완료</div>
                </div>
                <div className="iconBox"> {/* icon */}
                  <div className=""></div>
                </div>
              </div>
              <div className="card">
                <div>
                  <div className="numbers">150 건</div>
                  <div className="cardName">진단관리</div>
                </div>
                <div className="iconBox"> {/* icon */}
                  <div className=""></div>
                </div>
              </div>
            </div>

            {/*detail list*/}
            <div className="detail_list">
              <div className="admin_volunteer">
                <div className="cardHeader">
                  <h2>진단 이력</h2>
                  <Link to="/AdminResult" className="btn">more +</Link>
                </div>
                <table>

                  <tr>
                    <td width="60px"><div className="imgBox"></div></td>
                    <td><h4>목록 1</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"></div></td>
                    <td><h4>목록 1</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"></div></td>
                    <td><h4>목록 1</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"></div></td>
                    <td><h4>목록 1</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"></div></td>
                    <td><h4>목록 1</h4></td>
                  </tr>


                </table>
              </div>

              {/*new customer*/}
              <div className="volunteer_list">
                <div className="cardHeader">
                  <h2>회원 목록</h2>
                  <Link to="/Adminpage/Member" className="btn">more +</Link>
                </div>
                <table>
                  <tr>
                    <td width="60px"><div className="imgBox"></div></td>
                    <td><h4>(주) 스마트소프트웨어</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"></div></td>
                    <td><h4>(주) sw</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"></div></td>
                    <td><h4>SK</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"></div></td>
                    <td><h4>A 전자</h4></td>
                  </tr>
                  <tr>
                    <td width="60px"><div className="imgBox"></div></td>
                    <td><h4>B 홀딩스</h4></td>
                  </tr>


                </table>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Adminpage;