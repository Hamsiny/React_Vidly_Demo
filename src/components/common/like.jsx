import React from "react";

const Like = (props) => {
  return (
    <i
      className={props.liked ? "fa fa-heart" : "fa fa-heart-o"}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
    />
  );
};
export default Like;
