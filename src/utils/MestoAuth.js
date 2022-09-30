export const BASE_URL = "https://auth.nomoreparties.co";

export function handleRequest({ url, method = "POST", token, data }) {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      ...(!!token && { Authorization: `Bearer ${token}` }),
    },
    ...(!!data && { body: JSON.stringify(data) }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
}
export function register({email, password}) {
  return handleRequest({
    url: "/signup",
    data: { email, password },
  });
}

export function authorize({email, password}) {
    return handleRequest({
        url: '/signin',
        data: {email, password},

    })
}

export function getContent(token) {
    return handleRequest({
        url: '/users/me',
        method: 'GET',
        token
    })
}
