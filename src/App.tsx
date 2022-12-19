import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
        <Parent />
      </header>
    </div>
  );
}

function LikeButton() {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <span className="likeButton" onClick={handleClick}>
      ♥ {count}
    </span>
  );
}

// props として受け取る型の定義（`Props`部分の名前はどんな名前でも可）
type PropsOnlyString = {
  text: string;
};

// ① 型推論に任せるパターン
const SampleComponent1 = () => {
  return <div>Hello TypeScript!</div>;
};

// ③ props に直接型注釈を指定するパターン
const SampleComponent2 = (props: PropsOnlyString) => {
  return <div>Hello {props.text}!</div>;
};

type PropsWithChildren = {
  text: string;
  children: React.ReactNode;
};

const SampleComponent3 = (props: PropsWithChildren) => {
  return (
    <div>
      <h1>Hello {props.text}!</h1>
      <p>{props.children}</p>
    </div>
  );
};
/* ---------- 呼び出す側 ---------- */
const Parent = () => {
  return (
    <div>
      {/* ③も④も結果は同じ。propsが不足していたり型が違うものを渡すなどするとエラーになる */}
      <SampleComponent1 />
      <SampleComponent2 text="SampleComponent2 does not need children" />
      <SampleComponent3 text="SampleComponent2 needs children">
        this is children for SampleComponent3
      </SampleComponent3>
    </div>
  );
};

export default App;
