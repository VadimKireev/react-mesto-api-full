class CommonError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CommonError';
    this.statusCode = 500;
  }
}

module.exports = CommonError;
