const { sort_by, order, topic } = {
  sort_by: "title",
  order: "asc",
  foo: "mitch",
};
const sort = sort_by === undefined ? "created_at" : sort_by;
const option = order === undefined ? "DESC" : order.toUpperCase();

let query = `SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.created_at, articles.votes,
COUNT(comments.article_id) 
AS comment_count 
FROM articles 
LEFT JOIN comments 
ON articles.article_id = comments.article_id`;

let sorting = ` GROUP BY articles.article_id 
ORDER BY articles.${sort} ${option};`;

if (topic === undefined) {
    query += sorting;
} else {
    query += ` WHERE articles.topic = ${topic}` + sorting;
}

console.log(query);
