export const postsUrl =
  process.env.NODE_ENV === "production"
    ? "https://no-blockers.herokuapp.com/posts"
    : "http://localhost:1337/posts";
