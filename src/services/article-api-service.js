const { API_SERVER_URL } = require('../config');

const AuthApiService = {
  postLogin({ user_name, password }) {
    return fetch(`${API_SERVER_URL}/api/imedtransport/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user_name, password }),
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
  postUser(user) {
    return fetch(`${API_SERVER_URL}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()));
  },
};

export default AuthApiService;
