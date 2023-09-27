import React from "react";

function ImageViewer(props) {
  // Veriler alınırken bir yükleme mesajı görüntüle
  if (!props.viewData) return <h3>Yükleniyor...</h3>;

  // object destructuring
  const { title, date, explanation, media_type, url, hdurl } = props.viewData;
  // Veriler alındıktan sonra bileşeninizi normal şekilde görüntüleyin
  return (
    <>
      <h1>🚀 {title}</h1>
      <span>{date}</span>
      <p>{explanation}</p>
      <span>{media_type}</span>
      <img src={url} alt={explanation} />
    </>
  );
}

export default ImageViewer;
