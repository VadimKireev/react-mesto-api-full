class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
  }

  get _headers() {
    return {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Что-то не так с запросом информации о пользователе');
    });
  }

  editUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Не удалось изменить информацию о пользователе')
    });
  }

  editUserAvatar(newAvatarUrl) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(newAvatarUrl)
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Что-то не так с загрузкой нового аватара')
    });
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Не удалось отобразить карточки');
    });
  }

  postCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Не удалось загрузить карточку')
    });
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Карточка удалилась криво')
    });
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this._headers
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Не удалось поставить или удалить лайк')
    });
  }

  register({password, email}) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({password, email})
    }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Что-то пошло не так')
      })
  }

  login({password, email}) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({password, email})
    }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Что-то пошло не так');
      })
  }

  getContent(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      }
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Сначала авторизуйтесь');
    });
  }
}

const api = new Api({
  baseUrl: 'https://api.mesto.tdm.nomoredomains.xyz'
});

export default api;
