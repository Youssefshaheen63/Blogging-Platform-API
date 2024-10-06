# Blogging Platform API
### Description:
basic CRUD operations for a personal blogging platform. CRUD stands for Create, Read, Update, and Delete.
## Goals:
- Create a new blog post
- Update an existing blog post
- Delete an existing blog post
- Get a single blog post
- Get all blog posts
- Filter blog posts by a search term


## API Reference

#### Get all posts

```http
  GET /api/v1/posts
```

#### Get post

```http
  GET /api/v1/posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to fetch |

#### Post post

```http
  POST /api/v1/posts
```

#### Patch post

```http
  PATCH /api/v1/posts/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to fetch |


#### delete post

```http
  DELETE /api/v1/posts/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to fetch |

## For more details
visit the [Blogging Platform API Project Idea](https://roadmap.sh/projects/blogging-platform-api).
