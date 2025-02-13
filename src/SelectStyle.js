import "./SelectStyle.css";
import cn from "classnames";

export default function SelectStyle({ mode }) {
  return (
    // mode属性に応じてスタイルクラスを切り替え
    <div
      className={cn("box", [
        "panel",
        {
          light: mode === "light",
          dark: mode === "dark",
        },
      ])}
    >
      こんにちは、世界！
    </div>
  );
}
