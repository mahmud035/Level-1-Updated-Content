const errorHandler = (err, req, res, next) => {
  if (err.status)
    return res
      .status(err.status)
      .json({ statusCode: err.status, message: err.message });

  res.status(500).json({ message: 'Internal Server Error' });
};

export default errorHandler;
