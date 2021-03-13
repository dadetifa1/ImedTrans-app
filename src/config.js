module.exports = {
  API_SERVER_TOKEN: process.env.REACT_APP_SERVER_API_TOKEN || 'dummy-api-token',
  API_SERVER_URL: process.env.REACT_APP_SERVER_API_URL || 'http://localhost:9000',
  GEOCODE_API_TOKEN: process.env.REACT_APP_GOOGLE_GEOCODE_API_KEY || '00000000000000000000000000',
  TOKEN_KEY: 'Imed-client-auth-token',
};
