import React from "react";

const HandleChangePractice4 = () => {
  const [val, setVal] = React.useState("react");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setVal(event.target.value);

  return (
    <>
      <select value={val} onChange={handleChange}>
        <option value="react">React</option>
        <option value="vue">Vue.js</option>
        <option value="angular">Angular</option>
      </select>
      <p>選択値：{val}</p>
    </>
  );
};

export default HandleChangePractice4;
