import React, { useState } from "react";

/* ---------- 親コンポーネント（propsを渡す側） ---------- */
const HandleChangePractice = () => {
  const [inputText, setInputText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <h1>{inputText}</h1>
      <InputTextForm inputText={inputText} handleChange={handleChange} />
    </div>
  );
};

/* ---------- 子コンポーネント（propsを受け取る側） ---------- */
type Props = {
  inputText: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputTextForm = (props: Props) => {
  return (
    <div>
      <input
        type="text"
        value={props.inputText}
        onChange={props.handleChange}
      />
    </div>
  );
};
export default HandleChangePractice;
