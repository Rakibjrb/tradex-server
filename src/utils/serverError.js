const handleInternalErrors = (err, _req, res, _next) => {
  res.status(err.status || 500).send({
    stautsCode: err.status || 500,
    message: err.message || "Internal server error",
    error: err.errors,
  });
};

module.exports = handleInternalErrors;
