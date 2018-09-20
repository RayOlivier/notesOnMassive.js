require("dotenv").config() //put this at top of the page bc you need it before port

const express = require("express"),
  app = express(),
  { json } = require("body-parser"), //destructuring body-parser
  port = process.env.PORT || 3001,
  massive = require("massive"),
  { getBands, postBand, putBand, deleteBand } = require("./bandCtrl")

// console.log(process.env.CONNECTION_STRING) //you want to verify that this variable exists
app.use(json()) //do this immediately after declaring variables

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
  // console.log(dbInstance)
  //dbInstance is scoped so you need to make it global on app's private (hidden) object
  app.set("db", dbInstance) //you can't directly access the hidden object that db is now a property of

  //you NEED to have a db directory at the root and it has to be 'db' with no caps
  dbInstance.init() //this is to make a seed file
})

app.get("/api/bands", getBands)
app.post("/api/bands", postBand)
app.put("/api/bands/:id", putBand)
app.delete("/api/bands/:id", deleteBand)

app.listen(port, () => console.log(`massive server listening on ${port}`))
