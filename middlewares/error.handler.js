function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function errorHadler(err, req, res) {
  res.status(500).json({
    nessage: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = { logErrors, errorHadler, boomErrorHandler };
