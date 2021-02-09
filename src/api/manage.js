import api from './index'

export function getManageUser(user) {
  return api({
    url: 'manage',
    method: 'post',
    data: {
      user,
    }
  })
}