import React from 'react';

const Objdata  = [
  {
    "iframe":'',
    "title": "Happy Baking Day Season 5",
    "link_url": "https://pantip.com/s/fpJy0",
    "image_src": "https://f.ptcdn.info/913/056/000/p6lei2lx96v02HJcM15-o.jpg",
  },{
    "iframe":'',
    "title": "รวมร้านอาหารและคาเฟ่ย่านสะพานควาย",
    "link_url": "https://pantip.com/s/qz5QF",
    "image_src": "https://f.ptcdn.info/928/056/000/p6n7di37oN14985Ih6k-o.jpg",
  },{
    "iframe":'',
    "title": "รีวิว Umeno Cafe",
    "link_url": "https://pantip.com/s/ytnOg",
    "image_src": "https://f.ptcdn.info/803/056/000/p68epf7kztrc3l2DU7p-o.jpg",
  }
];

const renderReview = (datas) => {
  return datas.map((e)=>(
    <a key={e.link_url} href={e.link_url} target="_blank">
      <div className="pantip-review-thumbnail">
        <img src={e.image_src} width="280" height="250"/>
      </div>
    </a>
  ))
}

const Review = () => (
  <div className="pantip-review-block">
      <div className="pantip-review-header">
          <div className="pantip-review-header-img">
            <img src="https://ptcdn.info/images/review_header.png" width="176" height="34"/>
          </div>
          <div className="pantip-review-header-more">
            <a href="/profile/2083903#bookmarks" target="_blank">
              <img src="https://ptcdn.info/images/review-header-more.png" width="72" height="19"/>
            </a>
          </div>
      </div>
      <div className="pantip-review-content">
        {renderReview(Objdata)}
      </div>
  </div>
);

export default Review;
