import React from 'react';
import { CardItemProduct } from '../../components/CardItemProduct';
import { CartSummary } from '../../components/CartSummary';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeItemToCart } from '../../store/cart';

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cartItem);
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', margin: '3rem 18rem' }}>
      <div>
        <CartSummary products={cart} />
      </div>
      <CardItemProduct
        products={cart}
        onRemoveItem={(id) => dispatch(removeItemToCart(id))}
        title="carrinho"
      />
    </div>
  );
}
