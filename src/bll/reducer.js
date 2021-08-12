const todoReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: (state[state.length-1].id + 1),
          text: action.value,
          created_at: new Date(),
          is_complete: false
        }
      ];
    case 'load':
      return [
        ...action.items
      ];
    default:
      return state;
  }
}

export default todoReducer;
