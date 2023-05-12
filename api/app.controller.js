const db = "../db/connection.js";
const { categoryData } = require("../db/data/test-data");
const { request, response } = require("./app");
const {
  getCategory,
  getReview,
  getReviewById,
  getComment,
} = require("./app.models");
const { endpoint } = require("../endpoints.json");

exports.getStatus = (request, response) => {
  response.status(200).send({ message: "all ok" });
};

exports.getCategories = (request, response, next) => {
  getCategory()
    .then((category) => {
      response.status(200).send({ categories: category });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getReviewsById = (req, response, next) => {
  getReviewById(req.params.review_id)
    .then((review) => {
      response.status(200).send({ review: review });
    })
    .catch((err) => {
      next(err);
    });
};
exports.getReviews = (request, response, next) => {
  getReview()
    .then((review) => {
      response.status(200).send({ reviews: review });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getCommentsById = (request, response, next) => {
  getComment(request.params.review_id)
    .then((comments) => {
      response.status(200).send({ comments: comments });
    })
    .catch((err) => {
      next(err);
    });
};
