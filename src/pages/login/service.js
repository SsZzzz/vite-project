import axios from 'axios';

function getCaptcha(params) {
  return axios.get('/api/sys/captcha/generate', { params });
}

function login(data) {
  return axios.post('/api/auth/user/login', data);
}

export default { getCaptcha, login };
