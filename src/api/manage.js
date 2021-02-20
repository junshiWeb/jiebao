import api from './index'

export function getManageUser() {
  return api({
    url: 'manage',
  })
}
export function getManageUserInfo(user) {
  return api({
    url: 'manage',
    data: {
      user,
    }
  })
}