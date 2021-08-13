import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_REST_DB_API_URL,
  crossDomain: true,
  headers: {
    "x-apikey": process.env.REACT_APP_REST_DB_API_KEY,
  }
})

const TodoAPI = {
  getItems() {
    return instance.get('react-todo').then(response => response.data);
  },
  deleteItem(itemId) {
    return instance.delete('react-todo/' + itemId);
  },
  addItem(item) {
    return instance.post('react-todo', item);
  },
  updateItemStatus(itemId, isCompleted) {
    return instance.put('react-todo/' + itemId, {isCompleted});
  }
}

export default TodoAPI;
