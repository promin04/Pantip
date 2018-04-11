import React from 'react';

const Navbar = () => (
  <div className="navbar">

      <ul className="global-navigate">
          <li><a href="#">หน้าแรก<em></em></a></li>
          <li id="menu-main-bar2">
            <a href="#">เลือกห้อง&nbsp;<small>▼</small></a>
          </li>
          <li><a href="#">แท็ก</a></li>
          <li><a href="#" target="_blank">กิจกรรม<em className="notiz">N</em></a></li>
          <li id="menu-main-bar3">
            <a href="#">อื่นๆ&nbsp;<small>▼</small></a>
          </li>
      </ul>

      <div className="search-wrap">
						<div>
						  <input type="text" name="q" size="55" maxLength="256" id="search-box" className="smart-search-input ui-autocomplete-input" placeholder="Search" autoComplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true"/>
						</div>
			</div>

      <ul className="my-menu">
						<li><a href="#"><span className="icon icon-new-post"></span>&nbsp;&nbsp;ตั้งกระทู้<em></em></a></li>
										<li>
							<a href="#" id="login-btn">เข้าสู่ระบบ&nbsp;/&nbsp;สมัครสมาชิก<small></small></a>
						</li>
			</ul>

  </div>

);

export default Navbar;
