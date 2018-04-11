import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const data1 = [
  {
    link_url : '/topic/37544644',
    content : 'ยกเลิก!ซีซาร์สลัดที่ร้านพิซซ่าในห้างดังใกล้หาดป่าตอง'
  },
  {
    link_url : '/topic/37543606',
    content : 'วันนี้ป้าทำ"ครีมฮอร์น"ไส้ครีมเนย เป็นขนมที่ป้าชอบมากๆต้องซื้อมาทานตลอด ตัวแป้งจะทำจากแป้งพายชั้น อร่อยมากๆค่ะ'
  },
  {
    link_url : '/topic/37547193',
    content : '"ขาหมูพะโล้" ใครไม่กลัวอ้วนเข้ามาเลยค่ะ'
  },
  {
    link_url : '/topic/37525239',
    content : ' . . . หนึ่งในเมนูโปรดของหญิงชราผู้เสียสละ . . . '
  },
  {
    link_url : '/topic/37535441',
    content : 'เติมน้ำมันรถได้ซอสฟรีหมดอายุตั้งแต่ปี 2007'
  },
  {
    link_url : '/topic/37532788',
    content : 'ใบเหลียงผัดไข่'
  },
  {
    link_url : '/topic/37549484',
    content : 'อัพเดทผลงานหมอบอสในรอบ Semi-Final และร่วมลุ้นต่อในสัปดาห์สุดท้าย Finals Week ของ MasterChef UK 2018่'
  },
  {
    link_url : '/topic/37535397',
    content : 'กุ้งชุบแป้งผสมพริกแกงทอด'
  },
  {
    link_url : '/topic/37544186',
    content : 'พิซซาเกาหลีหน้าหอยนางรม'
  },
  {
    link_url : '/topic/37529158',
    content : 'เปิดตำราทำ "หมูเปีย" เครื่องเคียงแกงเขียวหวาน'
  }
]

const data2 = [
  {
    link_url : '/topic/37545284',
    content : 'ข้าวผัดต้องปรุงยังไงให้อร่อยเหมือนทานที่ร้านคะ'
  },
  {
    link_url : '/topic/37546733',
    content : 'ไม่ทราบว่านี่เป็นปูชนิดไหนคะ ทานได้มั้ยคะ'
  },
  {
    link_url : '/topic/37545998',
    content : 'ชวนทำขนมปังหน้าหมู ทำง่ายๆ'
  },
  {
    link_url : '/topic/37548629',
    content : 'ฟุตบาธกรู ใครอย่าแตะ! พ่อค้า-แม่ค้า เย้ยกฎหมาย ! แห่พ่นสีจองที่ขายของสงกรานต์ ถ.ข้าวสาร'
  },
  {
    link_url : '/topic/13090081',
    content : 'ทดลองทำ "ลูกรอก"'
  },
  {
    link_url : '/topic/37531669',
    content : 'คนไทยไปญี่ปุ่น กินซูชิอย่าลอกกินแต่ปลา เชฟอุตส่าห์ปั้นข้าว ชี้เป็นมารยาท'
  },
  {
    link_url : '/topic/37545706',
    content : 'รีวิว Buffet ใบหยก 1 Baiyok Sky Louge Floor43 ปี 2018 (รีวิวจริงใจ)'
  },
  {
    link_url : '/topic/37548387',
    content : '✶✶✶Sunday Brunch สบายๆกับไลน์อาหารยาวๆที่ Amaya Food Gallery โรงแรม Amari Watergate [by DTVL]✶✶✶'
  },
  {
    link_url : '/topic/33398215',
    content : 'สงสัยค่ะ ไข่ไก่เปลือกสีน้ำตาล กับ ไข่ไก่เปลือกสีขาว ต่างกันยังไง'
  }
]
const renderList = (datas) => {
  return datas.map((e)=>(
    <div key={e.link_url} className="post-item ">
      <div className="post-item-title">
        <a href={e.link_url} target="_blank"> {e.content} </a>
      </div>
    </div>
  ))
}

const RecommandTabs = () => (
  <Tabs className="col-main col-best">
    <TabList>
      <Tab><div className="icon-best-badge"></div><div className="text-space">กระทู้แนะนำโดยสมาชิก </div></Tab>
      <Tab>Pantip Trend</Tab>
    </TabList>

    <TabPanel>

          {renderList(data1)}

    </TabPanel>

    <TabPanel>

          {renderList(data2)}

    </TabPanel>
  </Tabs>

);

export default RecommandTabs;
