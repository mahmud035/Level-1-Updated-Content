import httpStatus from 'http-status';

/**
 * Handles Mongo Server Error
 *
 * @param {object} error - The MongoServerError object.
 * @returns {object} An object of formatted error messages with statusCode, message and errorMessage.
 */

const handleMongoDBError = (error) => {
  const message = error?.errorResponse?.errmsg;
  const statusCode = httpStatus.INTERNAL_SERVER_ERROR;

  return {
    statusCode,
    message: message,
  };
};

export default handleMongoDBError;
