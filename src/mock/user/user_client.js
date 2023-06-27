class UserClient {
  login(id, password) {
    return fetch('https://api.twitter.com/') //
      .then((res) => res.json());
  }
}

module.exports = UserClient;
