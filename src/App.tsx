import React, { useState } from "react";
import "./App.css";
import HandleClickPractice from "./HandleClickPractice";
import PropPractice from "./PropPractice";
import HandleChangePractice from "./HandleChangePractice";
import HandleChangePractice2 from "./HandleChangePractice2";
import HandleChangePractice3 from "./HandleChangePractice3";
import HandleChangePractice4 from "./HandleChangePractice4";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HandleClickPractice />
        <PropPractice />
        <StateSample />
        <HandleChangePractice />
        <HandleChangePractice2 />
        <HandleChangePractice3 />
        <HandleChangePractice4 />
      </header>
    </div>
  );
}

// ステートが持つオブジェクトの構造を型定義
type Todo = {
  id: number;
  body: string;
};

const StateSample = () => {
  // `Todo`という型に沿うオブジェクトの配列を、useStateのジェネリック型<T>として型指定（ Todo[] の部分）
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, body: "この記事を書き上げる" },
  ]); // OK

  return (
    <ul>
      {todos.map((item: Todo) => {
        return <li key={item.id}>{item.body}</li>;
      })}
    </ul>
  );
};

export default App;
