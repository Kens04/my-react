export default function ForSort({ src }) {
  src.sort((m, n) => m.price - n.price);
  return (
    // 書籍情報 (src属性) を<dt> / <dd>リストに整形
    <dl>
      {src.map((elem) => (
        <>
          <dt>
            <div>ソート</div>
            <a
              href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}
            >
              {elem.title} ({elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </>
      ))}
    </dl>
  );
}
