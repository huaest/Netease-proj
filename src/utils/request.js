import axios from 'axios'
// 设置baseURLhttp://localhost:3000
axios.defaults.baseURL = 'http://localhost:3000'
// 设置拦截器


// 导出唯一的对象，外部可以重新命名使用
export default axios
