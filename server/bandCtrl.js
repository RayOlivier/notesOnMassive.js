module.exports = {
  getBands(req, res) {
    let db = req.app.get("db") //we have to do this because the controller doesn't have access to app.
    //if you get an error, just log the db object
    //sql will return an array, even if it's empty

    if (req.query.genre) {
      console.log(req.query)
      db.bands.find({ genre: req.query.genre }).then((bands) => {
        return res.status(200).json(bands)
      }) //find() is from massive.js and returns a promise
      //look at massive's documentation for more built in shit
    } else {
      db.getBands().then((bands) => {
        return res.status(200).json(bands)
      })
    }
  },

  postBand(req, res) {
    const { name, year_formed, genre } = req.body //destructuring
    const db = req.app.get("db")
    db.query(
      //this lets you run a query inline
      `INSERT INTO bands (name, year_formed, genre) values($1, $2, $3); SELECT * FROM bands;`,
      [name, year_formed, genre] //$1 will be put into name, $2 into year_formed, $3 into genre
      //inserting has no return value so you need to select for the res to have data (after insert, res would just be an empty array)
    ).then((bands) => {
      return res.status(200).json(bands)
    })
    //invoking query is kind of like inline styling... you can't reuse it but it can be useful for very specific situations. shea avoids it bc it isn't reusable

    //$1 is the first argument passed in, $2 is the second argument etc
  },

  putBand(req, res) {
    const { name, year_formed, genre } = req.body //destructuring
    const db = req.app.get("db")

    if (year_formed) {
      db.putBand([year_formed, req.params.id]).then((bands) => {
        res.status(200).json(bands)
      })
    }

    // db.bands.findByIdAndUpdate(req.params.id, req.body) //this is the easier way to do things, it's on massive's current docs... but it's good to practice SQL right now
  },

  deleteBand(req, res) {
    const db = req.app.get("db")

    db.deleteBand([req.params.id]).then((bands) => {
      //req.params.id doesn't need to be in an array bc it's only one $ thing... more than one param ALWAYS needs to be in an array
      res.status(200).json(bands)
    })
  }
}
