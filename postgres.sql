\c nc_news_test

-- Returns total comments for a single article
SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.created_at, articles.votes,
COUNT(comments.article_id) AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id
WHERE articles.article_id = 1 GROUP BY articles.article_id;

SELECT * FROM comments WHERE article_id = 1;

-- Returns total comments per articles
-- SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.body, articles.created_at, articles.votes,
-- COUNT(*) AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id GROUP BY articles.article_id;
