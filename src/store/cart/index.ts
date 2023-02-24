import { createSlice, current } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IProduct } from '../../interfaces/product';

export interface CartState {
  cartItem: IProduct[];
}

const initialState: CartState = {
  cartItem: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItemToCart: (state, action) => {
      const checkProduct = state.cartItem.findIndex(
        (item) => item.productId === action.payload.productId,
      );
      if (checkProduct !== -1) {
        state.cartItem[checkProduct].quantity++;
        toast.success('Produto adicionado ao carrinho', {
          autoClose: 1000,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
        });
      } else {
        state.cartItem = [...state.cartItem, action.payload];
        toast.success('Produto adicionado ao carrinho', {
          autoClose: 1000,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
        });
      }
    },
    addQuantity: (state, action) => {
      const checkProduct = state.cartItem.findIndex(
        (item) => item.productId === action.payload.productId,
      );
      if (checkProduct !== -1) {
        state.cartItem[checkProduct].quantity++;
        toast.success('Produto adicionado ao carrinho', {
          autoClose: 1000,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
        });
      }
    },
    removeQuantity: (state, action) => {
      const checkProduct = state.cartItem.findIndex(
        (item) => item.productId === action.payload.productId,
      );
      if (checkProduct !== -1) {
        state.cartItem[checkProduct].quantity--;
        toast.success('Produto removido do carrinho', {
          autoClose: 1000,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
        });
      }
    },

    removeItemToCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (v) => v.productId !== action.payload,
      );
      toast.success('Produto removido do carrinho', {
        autoClose: 1000,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
      });
    },
  },
});

export const { addItemToCart, removeItemToCart, addQuantity, removeQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
