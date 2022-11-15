class Api {
  constructor({ host, token }) {
    this._host = host;
    this._token = token;
  }
  _getJsonOnError(res) {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Ошибка при загрузке данных');
  }
  _getHeaders() {
    return {
      'Authorization': localStorage.getItem("jwt"),
      'Content-Type': 'application/json',
    };
  }
  getCards() {
    return fetch(`${this._host}/cards`, {
      // mode: 'no-cors',
      // credentials: 'include',
      headers: this._getHeaders(),
    }).then((res) => this._getJsonOnError(res));
  }
  addCard(data) {
    return fetch(`${this._host}/cards`, {
      method: 'POST',
      // credentials: 'include',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => this._getJsonOnError(res));
  }
  deleteCard(cardId) {
    return fetch(`${this._host}/cards/${cardId}`, {
      method: 'DELETE',
      // credentials: 'include',
      headers: this._getHeaders(),
    }).then((res) => this._getJsonOnError(res));
  }
  getUserInfo() {
    return fetch(`${this._host}/users/me`, {
      method: 'GET',
      headers: this._getHeaders(),
    }).then((res) => this._getJsonOnError(res));
  }
  editUserInfo(data) {
    return fetch(`${this._host}/users/me`, {
      method: 'PATCH',
      // credentials: 'include',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => this._getJsonOnError(res));
  }

  editAvatar(data) {
    return fetch(`${this._host}/users/me/avatar`, {
      method: 'PATCH',
      // credentials: 'include',
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: data.link,
      }),
    }).then((res) => this._getJsonOnError(res));
  }
  setLikeCard(cardId) {
    return fetch(`${this._host}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._getHeaders(),
    }).then((res) => this._getJsonOnError(res));
  }
  removeLikeCard(cardId) {
    return fetch(`${this._host}/cards/${cardId}/likes`, {
      method: 'DELETE',
      // credentials: 'include',
      headers: this._getHeaders(),
    }).then((res) => this._getJsonOnError(res));
  }
}
const api = new Api({
  host: 'http://localhost:4000',
  // host: "https://mesto.nomoreparties.co/v1/cohort-47/",
  // token: "dfd0d591-2c36-49ee-a6dc-331afeedf1bc",
});
export default api;
