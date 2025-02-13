export default function ForFilter({ src }) {
  const lowPrice = src.filter(src => src.price > 3500);
  return (
    <dl>
      {lowPrice.map((elem) => (
        <>
          <dt>
            <a
              href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}
            >
              {elem.title} ({elem.price}円aaaa)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </>
      ))}
    </dl>
  );
}
