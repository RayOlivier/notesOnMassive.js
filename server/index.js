require("dotenv").config() //put this at top of the page bc you need it before port

const express = require("express"),
  app = express(),
  { json } = require("body-parser"), //destructuring body-parser
  port = process.env.PORT || 3001,
  massive = require("massive")

app.use(json()) //do this immediately after declaring variables

app.listen(port, () => console.log(`massive server listening on ${port}`))
