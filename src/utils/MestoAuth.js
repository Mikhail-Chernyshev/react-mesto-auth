export const BASE_URL = "https://auth.nomoreparties.co";

export function request({ url, method = "POST", token, data }) {
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
      return res.JSON();
    }
    return Promise.reject(res.status);
  });
}
export function register({email, password}) {
  return request({
    url: "/signup",
    data: { email, password },
  });
}

export function authorize({email, password}) {
    return request({
        url: '/signin',
        data: {email, password},

    })
//   return fetch(`${BASE_URL}/auth/local`, {
//     method: "POST",
//     headers: {
//       accept: "application/json",
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   }).then((response) => {
//     return response.JSON();
//   });
  // .then((data) => {
  //     if(data.user) {
  //         localStorage.setItem('jwt', data.jwt);
  //         return data;
  //     } else {
  //         return
  //     }
  // })
}

export function getContent(token) {
    return request({
        url: '/users/me',
        method: 'GET',
        token
    })
}
