```js
{
  session: {
    currentUser: {
      id: 1,
      username: "john123",
    }
  },

  errors: [],

  paths: {
    1: {
      user_id: 1,
      title: "Sample path",
      path: [
          [-71.160281, 42.258729],
          [-71.160837, 42.259113],
          [-71.161144, 42.25932]
        ],
      distance: 3.76,
      elevation: 100,
    },
    2: {
      user_id: 1,
      title: "Sample path",
      path: [
          [-71.160281, 42.258729],
          [-71.160837, 42.259113],
          [-71.161144, 42.25932]
        ],
      distance: 3.76,
      elevation: 100,
    }
  },

  follows: {
    1: {
      id: 1,
      follower_id: 1,
      followee_id: 2
    },
    2: {
      id: 2,
      follower_id: 2,
      followee_id: 1
    },
    3: {
      id: 3,
      follower_id: 1,
      followee_id: 3
    }
  },

  comments: {
    1: {
      id: 1,
      route_id: 1,
      author_id: 2,
      body: "Good job!"
    }
  }
}
```
