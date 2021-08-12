const TodoAPI = {
  getItems() {
    return fetch('https://mocki.io/v1/d1e46952-b824-444a-bf8a-4cda1815a3ad').then(response => response.json());
  }
}

export default TodoAPI;
