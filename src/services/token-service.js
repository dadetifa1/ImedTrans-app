const { TOKEN_KEY } = require('../config');

const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(TOKEN_KEY);
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
};

export default TokenService;
