import React,{ Component } from 'react';
import Announce from '../components/Announce';
import Title from '../components/Title';
import Review from '../components/Review';
import RecommandTabs from '../components/RecommandTabs';
import AllRoom from '../components/AllRoom';
import data from '../data/AllRoom';

class FrontRoom extends Component {

  renderList(data) {
    if (data.item && data.item.topic) {
      let topic = data.item.topic;
      return topic.map((e)=>{
        const renderTags = e.tags.map((tag)=>(
          <div key={tag.tag} className="tag-item "> <a className="tag-title cs-tag_roomlist_topic" href={`/tag/${tag.url}`} target="_blank"> <span data-tag={tag.tag}> <em>{tag.tag}</em> </span> </a> </div>
        ));
      return  (
        <div key={e._id} className="post-item">
                <div className="post-item-type"> <span className={e.topic_class_icon}></span> </div>
                <div className="post-item-title">
                  <a target="_blank" href={`/topic/${e._id}`}>
                  {e.disp_topic}
                  </a>
                </div>
                <div className="post-item-by">
                  <span className="by-name">{e.author}</span>
                   &nbsp;-&nbsp;
                  <span className="timestamp">
                    <abbr className="timeago" data-utime={e.utime} title={e.abbr_title}>
                    1 ชั่วโมงที่แล้ว
                    </abbr>
                  </span>
                  &nbsp;
                  {
                    e.comments > 0 &&  (
                    <div className="post-item-status-i" title={`${e.comments} ความคิดเห็น`}>
                      <span className="icon-postlist-status icon-postlist-chat"></span> {e.comments}
                    </div>)
                  }

                </div>
                <div className="post-item-footer">
                  <div className="post-item-taglist">
                        {renderTags}
                  </div>
          </div>
        </div>
      )
    }
    )
    }else {
      return [];
    }
  }

  render() {
    return (
      <div>
        <Title />
        <div className="container">
            <Announce />
            <RecommandTabs />
            <Review />
            <br />
            <AllRoom data={data} renderList={this.renderList} />
        </div>

      </div>)
  }
}

export default FrontRoom;
