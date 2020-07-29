export function showContentReducer(state = {}, action) {
  switch (action.type) {
    case 'OPEN_FORM':
      return {
        ...state,
        isFormOpen: action.isFormOpen,
      };

    case 'OPEN_CARD': {
      return {
        ...state,
        isCardOpen: action.isCardOpen,
      };
    }
    default:
      return state;
  }
}
