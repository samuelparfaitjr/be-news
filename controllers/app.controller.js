const data = require("../endpoints.js");

module.exports = getEndpoints = (req, res) => {
  res.status(200).send({endpoints: data});
};
