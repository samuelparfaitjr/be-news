exports.errorHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ message: err.message });
  } else {
    next(err);
  }
};

exports.clientErrorHandler = (err, req, res, next) => {
  if (err.code === "22P02") {
    res.status(400).send({ message: "Bad Request" });
  } else {
    next(err);
  }
};

exports.serverErrorHandler = (err, req, res, next) => {
  res.status(500).send({ message: "Internal Server Error" });
};
