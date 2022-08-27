import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "David",
    comment: "안녕하세요, David 입니다.",
  },
  {
    name: "Steve",
    comment: "안녕하세요, Steve 입니다.",
  },
  {
    name: "Jane",
    comment: "안녕하세요, Jane 입니다.",
  },
];

// 댓글 객체를 생성 후 JS의 배열의 map() 함수를 써서 각 댓글 객체에 대해서 Comment 컴포넌트를 리턴하도록
function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
