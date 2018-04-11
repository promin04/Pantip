import React,{ Component } from 'react';
import Topic from '../components/Topic';
import Comment from '../components/Comment'
import comments from '../data/Comments';
import topics from '../data/Topic';



class Room extends Component {
  renderTags(tags) {
    return tags.map((e)=>(
      <a key={e.tag} href={`/tag/${e.url}`} target="_blank" className="tag-item cs-tag_topic_title">{e.tag}</a>
    ));
  }

  renderComments(data) {
    return data.map((e)=>(
      <Topic data={e} key={e._id} />
    ));
  }

  render() {
    return (
      <div>

        <div className="container">
            <Topic data={topics}  renderTags={this.renderTags} />
            <Comment data={comments} renderComments={this.renderComments}/>
        </div>

      </div>)
  }
}

export default Room;
