import { useState } from "react";

export default function StateBasic({ init }) {
  // Props (init) でState(count)を初期化
  const [count, setCount] = useState(init);
  // console.log(`count is ${count}`);
  // [カウント] ボタンクリック時にカウント値をインクリメント
  // const handleClick = () => setCount(count + 1);
  // [カウント]ボタンでカウントアップ
  const handleClick = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}
