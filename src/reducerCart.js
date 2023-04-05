import {
  FETCH_ALL,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  CLEAR_ALL,
  SHOW_AMOUNT,
  FETCH_PER_PAGE,
} from './constants/actionTypes';
const reducerCart = (state, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, total: action.payload };
    case FETCH_PER_PAGE:
      return { ...state, itemsPerPage: action.payload };
    case ADD_TO_CART:
      const findItem = state.total.find((item) => item.id === action.payload);

      const newCart =
        state.amount < 13
          ? state.cart.filter((item) => item.id === findItem.id).length > 0
            ? state.cart.map((item) =>
                item.id === findItem.id && item.quantity < 6
                  ? { ...item, quantity: item.quantity + 1 }
                  : { ...item }
              )
            : [...state.cart, findItem]
          : [...state.cart];

      return {
        ...state,
        cart: newCart,
      };
    case REMOVE_CART_ITEM:
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cart: removeItem,
      };
    case INCREMENT_ITEM:
      const findIncreaseItem = state.total.find(
        (item) => item.id === action.payload
      );

      const cartIncrease =
        state.cart.reduce((total, item) => total + item.quantity, 0) < 13
          ? state.cart.map((item) => {
              return item.id === findIncreaseItem.id && item.quantity < 6
                ? { ...item, quantity: item.quantity + 1 }
                : { ...item };
            })
          : [...state.cart];

      return {
        ...state,
        cart: cartIncrease,
      };
    case DECREMENT_ITEM:
      let findDecreaseItem = state.total.find(
        (item) => item.id === action.payload
      );

      let cartDecrease = state.cart.map((item) => {
        return item.id === findDecreaseItem.id && item.quantity >= 1
          ? { ...item, quantity: item.quantity - 1 }
          : { ...item };
      });

      return {
        ...state,
        cart: cartDecrease,
      };
    case CLEAR_ALL:
      return { ...state, cart: [] };
    case SHOW_AMOUNT:
      const caculateAmount = action.payload?.reduce(
        (total, item) => total + item.quantity,
        0
      );
      return { ...state, amount: caculateAmount };
    default:
      return state;
  }
};

export default reducerCart;
