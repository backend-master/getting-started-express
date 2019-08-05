# Getting Started Express

Express is a NodeJs framework.
NodeJs is an amazing tool for building networking services and applications.
Its Open Source, Free, easy to extend, very performant.

## Installation

Make your project folder and jump to that folder.
You can use `npm init` or `yarn init`

After that install Express using npm :

```sh
npm instal express --save
```

or using yarn :

```sh
yarn add express
```

The simple directory tree is like this :

```sh
.
+-- app.js
+-- package.json
+-- yarn.lock
+-- README.md

```


## Usage

We will make our Express Web Server

here is some code :

```sh
const express = require("express"); // Import express library
const app = express(); // Initialize app as express application
const PORT = 3000; // define port to running express app

// Tell to express to listen for a GET request using ".get()" method
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World !"
  });
});

// Set express app to listen at PORT:3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

and then try to run :
```sh
node app.js
```
