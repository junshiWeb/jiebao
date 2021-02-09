import axios from 'axios'

export default function api(option) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://localhost:3000',
      timeout: 5000
    })
    // 请求拦截

    // 响应拦截
    instance(option).then(result => {
      resolve(result)
    }).catch(error => {
      reject(error)
    })
  })
}

