class SameEmailError extends Error {
  constructor(message) {
    super(message);
    this.name = 'SameEmailError';
    this.statusCode = 409;
  }
}

module.exports = SameEmailError;
