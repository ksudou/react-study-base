import React, { useEffect, useState } from "react";
import ColorfulMessage from "./componets/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [msg, setMsg] = useState("Hello");
  const [kao, setKao] = useState(true);

  useEffect(() => {
    if (num % 3 === 0) {
      kao || setKao(true);
    } else {
      kao && setKao(false);
    }
  }, [num]);

  const title = "こんにちは";
  const onClickButton = () => {
    setMsg(document.getElementById("iText").value);
    setNum(num + 1);
    console.log(num);
  };

  const onClickKao = () => {
    setKao(!kao);
  };
  return (
    <>
      <h1 style={{ color: "red" }}>{title}</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>
      <ColorfulMessage color="#ff0067">眠いです</ColorfulMessage>
      <input type="text" id="iText"></input>
      <button onClick={onClickButton}>カウントアップ</button>
      <button onClick={onClickKao}>顔</button>
      <p>{num}</p>
      <p>{msg}</p>
      {kao && <p>^-^</p>}
    </>
  );
};

export default App;
