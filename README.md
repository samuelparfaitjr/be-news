# Be-News

The Be-News REST API provides a method of requesting fictional news articles filterable by topics, date and popularity (votes).

I've built a small blog using this API. You can check it out [here](https://shiny-cocada-dea6ac.netlify.app)

## Versions
**Be News API**: 1.0.0</br>
**Node**: 17.8.0</br>
**postgresSQL**: 14.2

# Installation
**1 -  Clone the repository**
```
git clone https://github.com/wakenado/be-news.git
```
**2 - Install dependencies**
``` 
npm install 
```
## Setup Test and Development database
Run the following command in your root directory
```bash
echo 'PGDATABASE=nc_news' > .env.development
echo 'PGDATABASE=nc_news_test' > .env.test
```

## Create the databases
```
npm run setup-dbs
npm run seed
npm run start
```
The server will be running on port 9090 (http://localhost:9090/api)

## Available Endpoints

```
GET /articles
GET /articles/:article_id
GET /articles/:article_id/comments
GET /topics
GET /users
GET /articles/:username
GET /comments
GET /comments/:comment_id
POST /articles
POST /articles/article_id/comments
PATCH /articles/article_id 
PATCH /comments/:comment_id
DELETE /articles/:article_id
DELETE /articles/:article_id/comments
```

## Examples
Updating an article vote count using the **PATCH** method
```
{ "inc_votes": 2 }
```

Adding an article using the **POST** method
```
{ 
    "title": "Oven Baked Potatoes",
    "topic": "cooking",
    "author": "tickle122",
    "body": "Lorem ipsum dolor sit amet, consectetu."
}
```

Posting a comment on an article using the **POST** method
```
{
	"username": "tickle122",
	"body": "A new comment by me"
}
```

## Error Handling
```
- 200 - OK
- 404 - Not Found
- 400 - Bad Request
- 500 - Internal Server Error
```








