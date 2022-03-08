# BE News API

### Version: 1.0 (2022 March)

## Description

The BE News API provides a method of requesting fictional news articles filterable by topics and/or authors.

## Available Endpoints

- GET "/"
- GET "/api"
- GET "/api/topics"
- GET "/api/articles"
- GET "/api/articles/:article_id"
- GET "/api/articles/:article_id/comments"
- GET "/api/users"
- GET "/api/comments"
- GET "/api/comments/:comment_id"
- POST "/api/articles/:article_id/comments"
- PATCH "/api/articles/:article_id"
- DELETE "/api/comments/:comment_id"

## Articles Query Parameters

| Parameters | Type   | Default | Description                                                                                                          |
| :--------- | ------ | ------- | -------------------------------------------------------------------------------------------------------------------- |
| sort_by    | string | date    | sorts articles by the following accepted values `article_id, title, topic, author, created_at, votes, comment_count` |

|order | string | desc | sorts articles in ascending or descending order `asc, desc`|
|topic | string | all | filters articles by available topics. _eg. 'food'_. returns all articles if no values is given|
|author|string|all| filters articles by authors. _eg. 'grumpy19'_. returns all articles if no values is given|

## Sample Date Output

### GET

`/api/articles?sort_by=title&order=desc&topic=football&author=tickle122`

```"articles": [
		{
			"article_id": 20,
			"title": "History of Football",
			"topic": "football",
			"author": "tickle122",
			"body": "It may come as a surprise to many, but football has a long and interesting history; sources suggest that the sport was first introduced in England as early as 1170 when an account describes youths going to the fields for a ‘game of ball’. Aspects of the game can even be traced back to as early as the second and third century BC in China. Sources taken from military manuals at the time describe an exercise called Tsu’ Chu, in which opponents used a leather ball filled with feathers and hair. The aim was to get the ball into a small net fixed on to bamboo canes while also defending themselves from attacks. Variations of the game are also documented in Egyptian and Greek society, proving that the sport has a long tradition throughout history.",
			"created_at": "2020-03-10T21:05:00.000Z",
			"votes": 0,
			"comment_count": "5"
		},
```

### GET /api/articles

```articles: [
        {
          article_id: 34,
          title: "The Notorious MSG’s Unlikely Formula For Success",
          topic: "cooking",
          author: "grumpy19",
          body: "The quick brown fox jumps over the lazy dog.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 0,
          comment_count: "11",
        },
      ],
```

### GET /api/articles

```articles: [
        {
          article_id: 34,
          title: "The Notorious MSG’s Unlikely Formula For Success",
          topic: "cooking",
          author: "grumpy19",
          body: "The quick brown fox jumps over the lazy dog.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 0,
          comment_count: "11",
        },
      ],
```

### GET /api/articles

```articles: [
        {
          article_id: 34,
          title: "The Notorious MSG’s Unlikely Formula For Success",
          topic: "cooking",
          author: "grumpy19",
          body: "The quick brown fox jumps over the lazy dog.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 0,
          comment_count: "11",
        },
      ],
```

### GET /api/articles

```articles: [
        {
          article_id: 34,
          title: "The Notorious MSG’s Unlikely Formula For Success",
          topic: "cooking",
          author: "grumpy19",
          body: "The quick brown fox jumps over the lazy dog.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 0,
          comment_count: "11",
        },
      ],
```

### GET /api/articles

```articles: [
        {
          article_id: 34,
          title: "The Notorious MSG’s Unlikely Formula For Success",
          topic: "cooking",
          author: "grumpy19",
          body: "The quick brown fox jumps over the lazy dog.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 0,
          comment_count: "11",
        },
      ],
```

### GET /api/articles

```articles: [
        {
          article_id: 34,
          title: "The Notorious MSG’s Unlikely Formula For Success",
          topic: "cooking",
          author: "grumpy19",
          body: "The quick brown fox jumps over the lazy dog.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 0,
          comment_count: "11",
        },
      ],
```

### GET /api/articles

```articles: [
        {
          article_id: 34,
          title: "The Notorious MSG’s Unlikely Formula For Success",
          topic: "cooking",
          author: "grumpy19",
          body: "The quick brown fox jumps over the lazy dog.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 0,
          comment_count: "11",
        },
      ],
```

### GET /api/articles

```articles: [
        {
          article_id: 34,
          title: "The Notorious MSG’s Unlikely Formula For Success",
          topic: "cooking",
          author: "grumpy19",
          body: "The quick brown fox jumps over the lazy dog.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 0,
          comment_count: "11",
        },
      ],
```
