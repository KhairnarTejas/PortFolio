var express = require("express");
var router = express.Router();

/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});
router.get("/education", function (req, res, next) {
  res.render("education", { title: "Education" });
});

router.get("/projects", function (req, res, next) {
  res.render("projects", { title: "Projects" });
});

router.get("/Skills", function (req, res, next) {
  res.render("Skills", { title: "Skills" });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

module.exports = router;
