const routeNotFound = (req, _res, next) => {
  const error = new Error(`Route not matched : ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

module.exports = routeNotFound;
