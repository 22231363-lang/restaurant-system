import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  order: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find(i => i.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };
    }

    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };

    case 'UPDATE_QTY':
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
        ),
      };

    case 'PLACE_ORDER':
      return {
        ...state,
        order: {
          id: Math.random().toString(36).slice(2, 9),
          status: 'Preparing',
          items: state.items,
        },
        items: [],
      };

    case 'SET_STATUS':
      return { ...state, order: { ...state.order, status: action.payload } };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        order: state.order,
        addItem: item => dispatch({ type: 'ADD_ITEM', payload: item }),
        removeItem: id => dispatch({ type: 'REMOVE_ITEM', payload: id }),
        updateQty: (id, qty) => dispatch({ type: 'UPDATE_QTY', payload: { id, qty } }),
        placeOrder: () => dispatch({ type: 'PLACE_ORDER' }),
        setStatus: s => dispatch({ type: 'SET_STATUS', payload: s }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
