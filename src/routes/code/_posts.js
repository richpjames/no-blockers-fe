import all from "./posts/*.html";

export default all
  .map((post) => {
    return { title: "hello", slug: "first", html: post.render().html };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));
