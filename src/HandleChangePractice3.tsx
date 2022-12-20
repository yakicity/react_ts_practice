import React from "react";

const HandleChangePractice3 = () => {
  const [val, setVal] = React.useState(["js"]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // change したのはいいとして、ON なのか OFF なのか判定する必要がある
    if (val.includes(event.target.value)) {
      // すでに含まれていれば OFF したと判断し、
      // イベント発行元を除いた配列を set し直す
      setVal(val.filter((item) => item !== event.target.value));
    } else {
      // そうでなければ ON と判断し、
      // イベント発行元を末尾に加えた配列を set し直す
      setVal([...val, event.target.value]);
      // state は直接は編集できない
      // つまり val.push(e.target.value) はNG ❌
    }
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          value="js"
          onChange={handleChange}
          checked={val.includes("js")}
        />
        JavaScript
      </label>
      <label>
        <input
          type="checkbox"
          value="python"
          onChange={handleChange}
          checked={val.includes("python")}
        />
        Python
      </label>
      <label>
        <input
          type="checkbox"
          value="java"
          onChange={handleChange}
          checked={val.includes("java")}
        />
        Java
      </label>
      <p>選択値：{val.join(", ")}</p>
    </>
  );
};

export default HandleChangePractice3;
