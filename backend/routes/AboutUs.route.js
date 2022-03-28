let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// About Model
let AboutUsSchema = require("../models/AboutUsModel");

// CREATE About


// READ Team Member
router.get("/", (req, res, next) => {
  AboutUsSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// UPDATE Team Member
router
  .route("/edit-about/:id")
  // Get Single Team Member
  .get((req, res, next) => {
    AboutUsSchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })

  // Update Team Member Data
  .put((req, res, next) => {
    AboutUsSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
          console.log("AboutUs updated successfully !");
        }
      }
    );
  });

// Delete About


module.exports = router;