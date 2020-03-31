const KJ_USER_TOKEN_KEY = 'BM_USER_TOKEN_KEY';

const storage = sessionStorage;

function setToken(userToken) {
  userToken && (storage[KJ_USER_TOKEN_KEY] = JSON.stringify(userToken));
}

function getToken() {
  const userToken = storage[KJ_USER_TOKEN_KEY];
  if (userToken) {
    try {
      return JSON.parse(userToken);
    } catch (e) {
      console.log(e);
    }
  }
}

function clearToken() {
  storage.removeItem(KJ_USER_TOKEN_KEY);
}

export default {
  setToken,
  getToken,
  clearToken
}
