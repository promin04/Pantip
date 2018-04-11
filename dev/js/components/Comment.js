import React from 'react';

const Comment = ({data,renderComments}) => (
  <div className="comment">
    <div id="comments-counts">
      <div className="display-post-wrapper pageno-title pageno-title-counter" id="comment-counter">
        <span className="title"><i className="icon-header-badge3 chat"></i>{data.count} ความคิดเห็น</span>
      <div className="pageno-title-line"></div></div>
    </div>

    {renderComments(data.comments)}
  </div>

);

export default Comment;
