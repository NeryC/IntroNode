function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function errorHadler(err, req, res, next) {
  res.status(500).json({
    nessage: err.message,
    stack: err.stack,
  });
}

module.exports = { logErrors, errorHadler };
