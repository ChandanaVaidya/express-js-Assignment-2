# express-js-Assignment-2
Get and post in express js.

## API's
### 1. **GET /:id**
This endpoint accepts a **path parameter** `id` and a **query parameter** `name`, and returns both values as a JSON response.

#### Example Request:
```
GET http://localhost:8000/123?name=alice

```

#### Response:
```
{
  "path_param": "123",
  "query_param": "Alice"
}
```


### 2. **POST /data**
This endpoint accepts **JSON data** in the request body and returns it as an array.

#### Example Request:
```
POST http://localhost:8000/data
{
  "name": "John",
  "age": 30
}
```

#### Response:
```
[
  {
    "name": "John",
    "age": 30
  }
]
```
