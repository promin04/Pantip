import React from 'react';
import Navbar from './Navbar';
var classNames = require('classnames');


const Topic = ({data,renderTags}) => (
  <div className={classNames('topic', { comment: !renderTags })}>
    {
      !renderTags ?
      (<div className="topic-title-comment">
        <span className="topic-number" id={`comment${data.comment_no}`}>ความคิดเห็นที่ {data.comment_no}</span>
        </div>
      )
      :
      (<div>
        <div className="topic-title">
          <h2>{data.title}</h2>
        </div>
        <div className="topic-tag">
            <div>
              <div className="topic-favourite remark-four-txt">
                <span>
                      <span className="icon-mini-posttype icon-mini-posttype-que"></span>กระทู้คำถาม
                </span>
              </div>
              <div className="topic-tag-wrapper">
                  {renderTags(data.tags)}
              </div>
            </div>
        </div>
        </div>
      )
    }

      <div className="topic-story" >

            <div dangerouslySetInnerHTML={{__html: data.message}}></div>

            {
              data.last_modified &&
              (
                <div className="topic-edit-history">
                    <em className="relative small-txt-fixed remark-four-txt">
                      <a href="#" className="icon icon-inline icon-clock svn-topic"></a> แก้ไขข้อความเมื่อ&nbsp;
                      <abbr className="topic-timestamp timeago" data-utime={data.last_mod_iso_time} title={data.last_modified_abbrtitle}>
                        4 ชั่วโมงที่แล้ว
                      </abbr>
                    </em>
                </div>
              )
            }
      </div>

      <div className="topic-story-footer">

							<div className="topic-action">

    								<div className="topic-vote">
                      <span className="like-score ">0</span>
                      <a title="กดปุ่มนี้เพื่อบอกว่าเนื้อหานี้ดี (กดอีกทีเพื่อยกเลิก)" className="icon-heart-like " href="#"><span></span></a>
    								</div>
    								<div className="topic-emotion">
                        <a className="emotion-vote" href="#">
                            <span className="icon icon-emotion"></span> <span className="emotion-score has-score">1</span>
                        </a>
                    </div>

    								<div className="topic-avatar">
      												<a href={`https://pantip.com${data.user.link}`} target="_blank">
                                <img src={data.user.avatar.medium} />
                              </a>
      									<div className="topic-avatar-inner">
                              <a className="topic-name owner" id={`${data.user.mid}`} target="_blank" href={`https://pantip.com${data.user.link}`}>
                                {data.user.name}
                              </a>

          										<a title="สมาชิกอย่างเป็นทางการ" className="icon-memberbadge-mini icon-memberbadge-smile" href={`https://pantip.com${data.user.link}`} target="_blank"></a>

          										<br />

          										<span className="topic-timestamp">
                                <abbr title={data.data_addrtitle} data-utime={data.data_utime} className="timeago">
                                  5 ชั่วโมงที่แล้ว
                                </abbr>
          										</span>
                          </div>
    								   </div>

							    </div>

							<div className={classNames('emotion-vote-list' ,'alt02', { comment: !renderTags })}>

								<div className="emotion-vote-user small-txt-fixed">
			             <a href={`https://pantip.com${data.user.link}`}>eskimo_bkk</a>&nbsp;ถูกใจ
                </div>
							</div>
						</div>
  </div>
);

export default Topic;
