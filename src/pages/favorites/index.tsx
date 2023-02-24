import React from 'react';
import { CardItemProduct } from '../../components/CardItemProduct';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeItemToFavorites } from '../../store/favorites';
import { addItemToCart } from '../../store/cart';

export default function Favorites() {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritiesItem,
  );
  const dispatch = useDispatch();
  return (
    <>
      <CardItemProduct
        products={favorites}
        onRemoveItem={(id) => dispatch(removeItemToFavorites(id))}
        onAddFavorites={(product) => dispatch(addItemToCart(product))}
        title="favoritos"
      />
    </>
  );
}
