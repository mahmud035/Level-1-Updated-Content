const sendResponse = (res, data) => {
  const responseData = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    meta: data.meta || null || undefined,
    data: data.data,
  };

  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
