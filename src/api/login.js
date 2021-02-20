import api from './index'

export function getLoginUser(username, password) {
  return api({
    url: 'login/user',
    params: {
      username,
      password
    }
  })
}
export function postLoginUser(username, password) {
  return api({
    url: 'login/user',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
export function getLoginUserInfo() {
  return api({
    url: 'login/userinfo',
  })
}
export function getLoginOut() {
  return api({
    url: 'login/userout'
  })
}