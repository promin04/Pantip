import React from 'react';
import { Link } from "react-router-dom";

const AllRoom = ({renderList,data}) => (
  <div className="all-room-wrapper">

    <div className="all-room-header">
      <div className="post-item admin-item">
        <div className="post-item-title">
            <a target="_blank" href="https://pantip.com/topic/37534923">
                Pantip.com ร่วมกับ Major Cineplex ชวนคุณโหวต <strong>“​หนังน่าดู”</strong> ลุ้นรับ โค้ดดูหนังประจำสัปดาห์ : <strong>วันที่ 5-11 เม.ย. 61</strong>
            </a>
            <span className="event-in-item-newicon">ข่าวใหม่!!!</span>
        </div>
      </div>
    </div>

    <div className="all-room-filter">
      <div className="first-filter">
        <ul>
          <li className="nav-first"> <a href="#" className="view-list dropdown-filter-mode select">ดูแบบรายการ&nbsp;<small>▼</small></a>
              <ul className="e-filter-mode-view grid-disappear">
                <li className="default-mode" > <a href="#" className="view-list">ดูแบบรายการ</a> </li>
                <li className="minimallist-mode nav-li-first"> <a href="#" className="view-topic">ดูเฉพาะหัวข้อ</a> </li>
                <li className="thumbnail-mode nav-li-last"> <a href="#" className="view-gallery">ดูแบบแกลเลอรี</a> </li>
              </ul>
          </li>
        </ul>
      </div>

      <div className="second-filter">
              <ul>
                <li className="nav-first"> <a href="#" className="post-all dropdown-filter-type select">กระทู้ทั้งหมดยกเว้นขายของ&nbsp;<small>▼</small></a>
                  <ul className="e-filter-type grid-disappear">
                    <li > <a href="#" className="post-all topic_type" id="type_default">กระทู้ทั้งหมดยกเว้นขายของ</a> </li>
                    <li className="nav-li-first"> <a href="#" className="post-asking topic_type" id="type_3">กระทู้คำถาม</a> </li>
                    <li> <a href="#" className="post-chatting topic_type" id="type_1">กระทู้สนทนา</a> </li>
                    <li> <a href="#" className="post-pole topic_type" id="type_2">กระทู้โพล</a> </li>
                    <li> <a href="#" className="post-review topic_type" id="type_4">กระทู้รีวิว</a> </li>
                    <li> <a href="#" className="post-news topic_type" id="type_5">กระทู้ข่าว</a> </li>
                    <li className="nav-li-last"> <a href="#" className="post-market topic_type" id="type_6">กระทู้ขายของ</a> </li>
                  </ul>
                </li>
              </ul>
      </div>

    </div>

    <div className="all-room-content">
      {renderList(data)}
    </div>
  </div>
);

export default AllRoom;
