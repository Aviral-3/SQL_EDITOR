class ApiService {
    static executeQuery(database, query) {
      const url = `${BASE_API_URL}/execute-query`;
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ database, query }),
      }).then((response) => response.json());
    }
  
  }
  
  export default ApiService;
  