# BugVITa api

## a badly written guide by srikanth :)

### `npm install` and `npm run client-install` after cloning

### `npm run server` to run the Express server

### _`npm run dev`_ to open the application

#### Server runs on http://localhost:4000

#### Client runs on http://localhost:3000

### _Examples_ for Routes

- @route GET api/products <br>
  @desc get ALL products<br>
  **URL**<br>
  `http://localhost:4000/api/products`<br>
  **response body**

  ```
  [
    {
        "_id": "6095d5c75f46d007d08cd5a6",
        "name": "sampleBugs",
        "__v": 0
    },
    {
        "_id": "6095d5cd5f46d007d08cd5a7",
        "name": "BugVITa",
        "__v": 0
    },
    {
        "_id": "6095d6025f46d007d08cd5a8",
        "name": "Apple",
        "__v": 0
    }
  ]
  ```

- @route POST api/products<br>
  @desc add a new product<br>
  **URL**<br>
  `http://localhost:4000/api/products`<br>
  **request body**

  ```
  {
    "name":"BugVITa"
  }
  ```

  **response body**

  ```
  {
    "wasCreated": true
  }
  ```

- @route GET api/bugs <br>
  @desc _GET_ all bugs from database:<br>
  **URL**<br>
  `http://localhost:4000/api/bugs`<br>
  **response body**
  ```
  [
  {
      "product": "sampleBugs",
      "description": "IT servers crash when anyone tries to run BugVITa",
      "_id": "608e1d499950463dd404ca28",
      "name": "BugVITa FATAL crash",
      "author": "G Vishwanathan",
      "date": "2021-05-02T03:32:25.089Z",
      "__v": 0
  },
  {
      "product": "sampleBugs",
      "description": "Chrome crashes when i ask it to download a burger",
      "_id": "608e18829950463dd404ca27",
      "name": "Bug42 Mozilla error",
      "author": "Jesus",
      "date": "2021-05-02T03:12:02.547Z",
      "__v": 0
  }
  ]
  ```
- @route GET api/bugs/:id<br>
  @desc Get a bug by it's id<br>
  **URL**<br>
  `http://localhost:4000/api/bugs/608e18829950463dd404ca27`<br>

  **response body**

  ```
  {
  "product": "sampleBugs",
  "description": "Chrome crashes when i ask it to download a burger",
  "_id": "608e18829950463dd404ca27",
  "name": "Bug42 Mozilla error",
  "author": "Jesus",
  "date": "2021-05-02T03:12:02.547Z",
  "__v": 0
  }
  ```

- @route POST api/bugs<br>
  @desc add/create an bug<br>
  **URL**<br>
  `http://localhost:4000/api/bugs`<br>
  **request body**
  ```
  { "name":"Bug42 Mozilla error", "author":"Jesus", "product":"sampleBugs", "description":"Chrome crashes when i ask it to download a burger" }
  ```
  **response body**
  ```
  { "product": "sampleBugs", "description": "Chrome crashes when i ask it to download a burger", "_id": "608e18829950463dd404ca27", "name": "Bug42 Mozilla error", "author": "Jesus", "date": "2021-05-02T03:12:02.547Z", "__v": 0 }
  ```
- @route PUT api/bugs/:id<br>
  @desc Update a bug by REPLACING it<br>
  **URL**<br>
  `http://localhost:4000/api/bugs/608e1d499950463dd404ca28`<br>
  **request body**
  ```
  {
  "name":"BugVITa FATAL crash (UPDATED)",
  "author":"G Vishwanathan",
  "product":"sampleBugs",
  "description":"VIT servers intact"
   }
  ```
  **response body**
  ```
  {
  "BugUpdated": true,
  "Bugid": "608e1d499950463dd404ca28"
  }
  ```
- @route delete api/bug/:id<br>
  @desc Delete an bug<br>
  **URL**<br>
  `http://localhost:4000/api/bugs/608e1d499950463dd404ca28`<br>
  **response body**
  ```
  {
  "success": true
  }
  ```
- @route GET api/products/:product<br>
  @desc Get all bugs belonging to specified product<br>
  **URL**<br>
  `http://localhost:4000/api/products/sampleBugs`<br>
  **response body**
  ```
  [
  {
      "product": "sampleBugs",
      "description": "Chrome crashes when i ask it to download a burger",
      "_id": "608e18829950463dd404ca27",
      "name": "Bug42 Mozilla error",
      "author": "Jesus",
      "date": "2021-05-02T03:12:02.547Z",
      "__v": 0
  },
  {
      "product": "sampleBugs",
      "description": "VIT servers crash whenever someone tries to run BugVITa",
      "_id": "608e2601b2bcac1608a7976e",
      "name": "BugVITa FATAL crash ",
      "author": "G Vishwanathan",
      "date": "2021-05-02T04:09:37.361Z",
      "__v": 0
  },
  {
      "product": "sampleBugs",
      "description": "Safari won't take me to Kenya to look at lions!",
      "_id": "608e262cb2bcac1608a7976f",
      "name": "Safari error ",
      "author": "Steve jobs",
      "date": "2021-05-02T04:10:20.795Z",
      "__v": 0
  }
  ]
  ```
- @route POST api/users/signup<br>
  @desc add/create a user<br>
  **URL**<br>
  ` http://localhost:4000/api/users/signup`<br>
  **request body** (Always include "sampleBugs")

  ```
  {
  "email":"srikanth@gmail.com",
  "password": "srikanth123"
  }
  ```

  **response body**

  ```
  {
  "signedup": true,
  "user": {
      "_id": "608e2b1fbbe60f0378e87dc3",
      "email": "srikanth@gmail.com",
      "password": "srikanth123",
      "__v": 0
      }
  }
  ```

- @route GET api/users/login<br>
  @desc check if user exists in database.<br>
  **URL**<br>
  `http://localhost:4000/api/users/login `<br>
  **request body**
  ```
  {
  "email":"srikanth@gmail.com",
  "password": "srikanth123"
  }
  ```
  **response body**(in case that user exists)
  ```
  {
  "loggedin": true,
  "currentUser": {
      "_id": "608e2b1fbbe60f0378e87dc3",
      "email": "srikanth@gmail.com",
      "password": "srikanth123",
      "__v": 0
      }
  }
  ```
  **response body**(if user does not exist)
  ```
  {
  "loggedin": false,
  "currentUser": ""
  }
  ```
- @route <br>
  @desc<br>
  **URL**<br>
  ` `<br>
  **request body**

  ```

  ```

  **response body**

  ```

  ```
