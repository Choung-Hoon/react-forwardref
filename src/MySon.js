import React, { forwardRef } from "react";
// forwardRef로 컴포넌트를 감싸면 props 외 추가로
// ref 인자를 받아야 한다.
// forwardRef를 export에 감싸도 됨
const MySon = (props, ref) => {
  return <input ref={ref} />;
};

export default forwardRef(MySon);
