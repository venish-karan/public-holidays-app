import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://date.nager.at/api/v3',
  timeout: 10000,
})

export default api
