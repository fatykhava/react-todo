const REQUEST_URL = process.env.REACT_APP_REST_DB_API_URL;
const API_KEY = process.env.REACT_APP_REST_DB_API_KEY;
const API_SETTINGS = {
  crossDomain: true,
  headers: {
    "x-apikey": API_KEY,
  }
};

const fetchTodoAPI = {
  url: REQUEST_URL + 'react-todo',

  getItems() {
    const fetchOptions = Object.assign({method: "GET"}, API_SETTINGS);

    return fetch(this.url, fetchOptions).then(response => response.json());
  },

  addItem(item) {
    const fetchOptions = Object.assign({
      method: "POST",
      body: JSON.stringify(item)
    }, API_SETTINGS);

    return fetch(this.url, fetchOptions).then(response => response.json());
  },

  changeCompleteStatus(itemId, isCompleted) {
    const url = this.url + `/${itemId}`;
    const fetchOptions = Object.assign({
      method: "PUT",
      body: JSON.stringify({isCompleted})
    }, API_SETTINGS);

    return fetch(url, fetchOptions).then(response => response.json());
  }
}

export default fetchTodoAPI;
