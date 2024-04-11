class AuthService {
    static login(username, password) {
      const url = `${BASE_API_URL}/auth/login`;
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      }).then((response) => response.json());
    }
  
    static logout() {
    }
  
  }
  
  export default AuthService;
  