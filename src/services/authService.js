import axios from 'axios';
import { API_BASE_URL_SEC } from 'src/config';

class AuthService {
  login = (email, password) => new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `${API_BASE_URL_SEC}/v1/login`,
      data: {
        email,
        password
      }
    })
      .then((res) => {
        this.setToken(res.data.token);
        resolve(res.data.data);
      })
      .catch((err) => {
        reject(err);
      });
  })

  setToken = (token) => {
    if (token) {
      localStorage.setItem('accessToken', token);
    } else {
      localStorage.removeItem('accessToken');
    }
  }

  logout = () => {
    this.setToken(null);
  }
}

const authService = new AuthService();

export default authService;
