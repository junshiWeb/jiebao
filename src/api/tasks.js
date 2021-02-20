import api from './index'

// 待办任务
export function getGtasks(offset = 0, limit = 10) {
  return api({
    url: 'tasks/gtasks',
    params: {
      offset,
      limit
    }
  })
}
// 待办总数
export function getGtasksCount() {
  return api({
    url: 'tasks/gtasks/count',
  })
}
export function getGtasksSelect(selectObj) {
  return api({
    url: 'tasks/gtasks/select',
    data: {
      selectObj
    },
  })
}
export function postGtasksSelect(selectObj) {
  return api({
    url: 'tasks/gtasks/select',
    method: 'post',
    data: {
      selectObj
    },
  })
}
