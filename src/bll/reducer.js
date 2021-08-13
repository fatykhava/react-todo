import {act} from "@testing-library/react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        action.item
      ];
    case 'delete':
      return state.filter(item => item._id !== action.itemId);
    case 'toggle-status':
      return state.map(item => {
        if (item._id === action.itemId)  {
          item.isCompleted = !item.isCompleted;
          return item;
        }

        return item;
      })
    case 'load':
      return [
        ...action.data
      ];
    default:
      return state;
  }
}

export default todoReducer;
