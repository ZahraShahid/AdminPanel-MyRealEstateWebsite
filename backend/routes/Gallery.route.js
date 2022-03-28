let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Team Member Model
let GallerySchema = require("../models/GalleryModel");

// CREATE Team Member
router.post("/create-gallery", (req, res, next) => {
  GallerySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Team Member
router.get("/", (req, res, next) => {
  GallerySchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// UPDATE Team Member
router
  .route("/edit-gallery/:id")
  // Get Single Team Member
  .get((req, res, next) => {
    GallerySchema.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })

  // Update Team Member Data
  .put((req, res, next) => {
    GallerySchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
          console.log("Gallery updated successfully !");
        }
      }
    );
  });

// Delete Team Member
router.delete("/delete-gallery/:id", (req, res, next) => {
  GallerySchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;