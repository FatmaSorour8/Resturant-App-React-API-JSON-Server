const initialState = {
  items: [],
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
        count: state.count + 1,
      };
    case "REMOVE_FROM_CART":
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        items: updatedItems,
        count: state.count - 1,
      };
    case "UPDATE_QUANTITY":
      const itemsWithUpdatedQuantity = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        items: itemsWithUpdatedQuantity,
      };
    default:
      return state;
  }
};

export default cartReducer;
