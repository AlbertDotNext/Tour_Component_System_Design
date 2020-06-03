##  Server API

### GET 
- Get `/tour/:id`

**Path Parameters:**

-   `id` params : id

**Success Status Code:** `200`

**Returns:** JSON
```json
{
  "id": "Number",
  "name": "String",
  "overview": "String",
  "cancellation_policy": "String",
  "return_details": "String",
  "createdAt": "String",
  "updatedAt": "String",
  "Attractions": [
      {
      "id": "Number",
      "name": "laborum beatae dolor",
      "latitude": "Number",
      "longitude": "Number",
      "description": "String",
      "rating": "Number",
      "attraction_url": "Null",
      "image_path": "String",
      "image_alt": "String",
      "createdAt": "String",
      "updatedAt": "String",
      "ToursAttractions": {
              "createdAt": "String",
              "updatedAt": "String",
              "AttractionId": "Number",
              "TourId": "Number",
              }
    }
  ]
}
```


###################
###################


### POST 
- Post `/tour/`

**Success Status Code:** `201`

```json
{
    "name": "String",
    "overview": "String",
}；
```


- Post `/attraction/`

**Success Status Code:** `201`

```json
{   
    "name": "String",
    "latitude": "Number",
    "longitude": "Number",
    "description": "String",
    "rating": "Number",
    "attraction_url": "String",
    "image_path": "String",
    "image_alt": "String",
}；
```


- Post `/tour/:id/attraction/:id`

**Success Status Code:** `201`

```json
{
     "attraction_id": "Number",
     "tour_id": "Number"
},
```


###################
###################



### Update 
- Patch `/tour/:id`

**Path Parameters:**

-   `id` params : id

**Success Status Code:** `204`

Request Body: Expects JSON with any of the following keys (include only keys to be updated)

```json
{
    "name": "String",
    "overview": "String",
},
```


- Patch `/attraction/:id`

**Path Parameters:**

-   `id` params : id

**Success Status Code:** `204`

Request Body: Expects JSON with any of the following keys (include only keys to be updated)

```json
{   
    "name": "String",
    "description": "String",
    // "rating": "Number",
    "image_path": "String",
    "image_alt": "String",
},
```


###################
###################


### Delete tour  //same as POST 
- DELETE `/tour/:id`

**Path Parameters:**

- `id` tour : id

**Success Status Code:** `204`



<!-- - DELETE `/attractions/:id`

**Path Parameters:**

- `id` tour : id

**Success Status Code:** `204` -->



<!-- - DELETE `/tour/:tour_id/tourAttraction/:attraction_id`

**Path Parameters:**

- `id` tour : id

**Success Status Code:** `204` -->

