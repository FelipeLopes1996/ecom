import React from 'react';
import * as Styled from './styles';
import { changeForMoney } from '../../utils/changeForMoney';
import { IProduct } from '../../interfaces/product';

export type CardItemsTypes = {
  products: IProduct[];
};

export function CartSummary({ products }: CardItemsTypes) {
  const totalProductsCart = () => {
    if (products.length > 0) {
      const getPrices = products.map((product) => Number(product.price));
      const sumPrices = getPrices.reduce(
        (accumulator, current) => accumulator + current,
      );
      return sumPrices;
    }
    return null;
  };
  return (
    <Styled.Wrapper>
      <h1>total</h1>
      <div>
        <h2>price:</h2>
        <span>{totalProductsCart()}</span>
      </div>
    </Styled.Wrapper>
  );
}
