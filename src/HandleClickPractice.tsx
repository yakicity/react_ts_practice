import React, { useState } from "react";

function HandleClickPractice() {
  // useStateの引数にはstateの初期値をあたえる
  const [count, setCount] = useState(999);
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    setCount(count + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      ♥ {count}
    </span>
  );
}

export default HandleClickPractice;
