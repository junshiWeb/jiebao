import api from './index'

export function getLoginUser(user, pass) {
  return api({
    url: 'user',
    method: 'post',
    data: {
      user,
      pass
    }
  })
}
export function getLoginOut() {
  return api({
    url: 'userout'
  })
}