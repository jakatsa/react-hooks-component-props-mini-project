import React from "react";
import Article from "./Article";
export default function ArticleList({ post }) {
  const posts = post.map((posted) => {
    return (
      <>
        <Article
          key={posted.id}
          title={posted.title}
          date={posted.date}
          preview={posted.preview}
          minutes={posted.minutes}
        />
      </>
    );
  });
  return (
    <>
      <main>{posts}</main>
    </>
  );
}
