import axios from 'axios';

function getCaptcha(params) {
  return axios.get('/api/sys/captcha/generate', { params });
}

function login(data) {
  return axios.post('/api/auth/login/account', data);
}

export default { getCaptcha, login };
