import { useParams } from "react-router-dom";
import books from "../books";
import MyHeader from "./MyHeader";

export default function BookPage() {
  // ルートパラメーターを取得
  const { isbn = "978-4-8156-0182-9" } = useParams();
  const { title, summary } = books.find((b) => isbn === b.isbn);
  return (
    <>
      <MyHeader title={title} keywords={title} description={summary} />
      <p>ISBNコード「{isbn}」のページです。</p>
    </>
  );
}
