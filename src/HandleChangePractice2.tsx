import React from "react";

const HandleChangePractice2 = () => {
  const [val, setVal] = React.useState<string>("cat");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setVal(event.target.value);
  return (
    <>
      <label>
        <input
          type="radio"
          value="cat"
          onChange={handleChange}
          checked={val === "cat"}
        />
        猫派
      </label>
      <label>
        <input
          type="radio"
          value="dog"
          onChange={handleChange}
          checked={val === "dog"}
        />
        犬派
      </label>
      <p>選択値：{val}</p>
    </>
  );
};

export default HandleChangePractice2;
