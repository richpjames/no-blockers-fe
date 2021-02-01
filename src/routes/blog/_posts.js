// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const fs = require("fs");
const frontMatter = require("front-matter");
const marked = require("marked");

const posts = fs.readdirSync("./src/routes/blog/posts").map((postFilename) => {
  const postContent = fs.readFileSync(
    `./src/routes/blog/posts/${postFilename}`,
    {
      encoding: "utf8",
    }
  );
  const postFrontMatter = frontMatter(postContent);
  const date = new Date(postFrontMatter.attributes.date);
  return {
    title: postFrontMatter.attributes.title,
    slug: postFrontMatter.attributes.slug,
    excerpt: postFrontMatter.attributes.excerpt,
    date: date,
    html: marked(postFrontMatter.body),
  };
});

posts.forEach((post) => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

posts.sort((a, b) => b.date - a.date);

export default posts;
