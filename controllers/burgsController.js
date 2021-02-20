var express = require("express");

var router = express.Router();

var burg = require("../models/burg.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burg.all(function(data) {
    var hbsObject = {
      burgs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgs", function(req, res) {
  burg.create([
    "name", "eaten"
  ], [
    req.body.name, req.body.eaten
  ], function(result) {
   
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burg.update({
    eaten: req.body.eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burg.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
