import React from "react";

export default function Article({
  key,
  title,
  date = "January 1, 1970",
  preview,
  minutes,
}) {
  return (
    <>
      <article key={key}>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
      </article>
    </>
  );
}
