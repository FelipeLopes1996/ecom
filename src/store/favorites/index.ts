import { createSlice, current } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { IProduct } from '../../interfaces/product';

export interface FavoriteState {
  favoritiesItem: IProduct[];
}

const initialState: FavoriteState = {
  favoritiesItem: [],
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,

  reducers: {
    addItemFavorites: (state, action) => {
      const checkProduct = state.favoritiesItem.findIndex(
        (item) => item.productId === action.payload.productId,
      );
      if (checkProduct !== -1) {
        state.favoritiesItem = state.favoritiesItem.filter(
          (v) => v.productId !== action.payload.productId,
        );
        toast.success('Produto removido dos favoritos', {
          autoClose: 1000,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
        });
      } else {
        state.favoritiesItem = [...state.favoritiesItem, action.payload];
        toast.success('Produto adicionado aos favoritos', {
          autoClose: 1000,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
        });
      }
    },

    removeItemToFavorites: (state, action) => {
      state.favoritiesItem = state.favoritiesItem.filter(
        (v) => v.productId !== action.payload,
      );
      toast.success('Produto removido dos favoritos', {
        autoClose: 1000,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
      });
    },
  },
});

export const { addItemFavorites, removeItemToFavorites } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
