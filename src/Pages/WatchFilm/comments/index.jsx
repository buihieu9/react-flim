import React, { useEffect, useState } from "react";
import "./style.scss";
function Comments(props) {
  const { comments } = props;

  const [allComments,setAllcomment] = useState([])

  useEffect(()=>{
    setAllcomment(comments)
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
    setAllcomment([...allComments,{
      avatar:"https://cf.shopee.vn/file/6705ccbb67416a1dd07e00ec1eddd49b",
      userName:"dohainam",
      comment:e.target.inputComment.value
    }])
  }
  useEffect(()=>{
    console.log(allComments);
  },[allComments])
  return (
    <div className="comments">
      <form onSubmit={handleSubmit} className="comments__form">
        <img
          src="https://cf.shopee.vn/file/6705ccbb67416a1dd07e00ec1eddd49b"
          alt="logo"
        />
        <input
          autoComplete="off"
          type="text"
          maxLength="185"
          placeholder="Your comments"
          name="inputComment"
        />
        <button type="submit">Comment</button>
      </form>
      <div className="comments__listComment">
        <ul className="comments__listComment__container">
          {allComments.map((item) => (
            <li>
              <div className="comments__listComment__container__img">
                <img src={item.avatar} alt="logo" />
              </div>
              <div className="comments__listComment__container__info">
                <p>{item.userName}</p>
                <p>{item.comment}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="comments__listComment__loading">
                <span>See More...</span>
        </div>
      </div>
    </div>
  );
}

export default Comments;
