const initialState = {
  items: [],
  cart: {
    selectedProduct: 1,
    options: [],
    selectedOption: 0,
    places: [],
  },
  flyingCart: {
    isOpened: false,
    haveChange: false,
    locations: [],
    selectedLocation: '',
    amount: 0,
  },
};

const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_IS_OPENED': {
      const flyingCart = {
        ...state.flyingCart,
        isOpened: !state.flyingCart.isOpened,
        haveChange: false,
      };
      return {
        ...state,
        flyingCart: flyingCart,
      };
    }

    case 'SET_LOCATIONS': {
      const newFlyingCart = {
        ...state.flyingCart,
        locations: action.locations,
      };

      return {
        ...state,
        flyingCart: newFlyingCart,
      };
    }

    case 'SET_SELECTED_LOCATION': {
      const newFlyingCart = {
        ...state.flyingCart,
        selectedLocation: action.location,
      };

      return {
        ...state,
        flyingCart: newFlyingCart,
      };
    }

    case 'ADD_TO_CART': {
      const newItems = [
        ...state.items,
        action.userChoice,
      ];
      const newFlyingCart = {
        ...state.flyingCart,
        haveChange: true,
      };

      return {
        ...state,
        items: newItems,
        flyingCart: newFlyingCart,
      };
    }

    case 'UPDATE_ITEM': {
      const indexToUpdate = state.items.findIndex(
        (item) => item.product.id === action.item.product.id,
      );

      const newItems = [
        ...state.items,
      ];

      newItems[indexToUpdate] = action.item;

      return {
        ...state,
        items: newItems,
      };
    }
    case 'SET_AMOUNT': {
      const newFlyingCart = {
        ...state.flyingCart,
        amount: action.amount,
      };

      return {
        ...state,
        flyingCart: newFlyingCart,
      };
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter((item) => item.product.id !== parseInt(action.item));

      return {
        ...state,
        items: newItems,
      };
    }

    case 'SET_SELECTED_PRODUCT': {
      const newCart = {
        ...state.cart,
        selectedProduct: action.selectedProduct,
      };

      return {
        ...state,
        cart: newCart,
      };
    }

    case 'SET_SELECTED_OPTION': {
      const newCart = {
        selectedOption: action.value,
      };

      return {
        ...state,
        cart: newCart,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
