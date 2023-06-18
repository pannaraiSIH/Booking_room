const errorHandlerMiddleware = (err, req, res, next) => {
  const defaultError = {
    statusCode: err.statusCode || 500,
    msg: err.message || "Something went wrong, try again later",
  };

  if (err.code && err.code === 11000) {
    defaultError.statusCode = 400;
    defaultError.msg = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field`;
  }

  //   res.status(defaultError.statusCode).json({ err });
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleware;
