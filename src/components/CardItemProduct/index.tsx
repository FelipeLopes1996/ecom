import React from 'react';
import * as Styled from './styles';

import { MdShoppingBasket } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { changeForMoney } from '../../utils/changeForMoney';
import { IProduct } from '../../interfaces/product';

import { useDispatch } from 'react-redux';
import {
  addQuantity,
  removeQuantity,
  removeItemToCart,
} from '../../store/cart';

export type CardItemsTypes = {
  products: IProduct[];
  onRemoveItem: (value) => void;
  onAddFavorites?: (product) => void;
  title: string;
};

export function CardItemProduct({
  products,
  onRemoveItem,
  title,
  onAddFavorites,
}: CardItemsTypes) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (onRemoveItem) {
      onRemoveItem(id);
    }
  };
  const handleAddFavorites = (product) => {
    if (onAddFavorites) {
      onAddFavorites(product);
    }
  };

  const multipleValues = (a, b) => {
    const result = a * b;
    return result;
  };

  const totalProductsCart = () => {
    const getQuantitys = products.map((product) => product.quantity);
    const sumQuantity = getQuantitys.reduce(
      (accumulator, current) => accumulator + current,
    );
    return sumQuantity;
  };

  const removeOrAddCart = (cartItem: IProduct) => {
    if (cartItem.quantity === 1) {
      console.log('entrei');
      dispatch(removeItemToCart(cartItem.productId));
    } else {
      console.log('doi');
      dispatch(removeQuantity(cartItem));
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.HeadCart isCart={products.length > 0 ? true : false}>
        {products?.length > 0 ? (
          <>
            <div className="info-head">
              {title === 'carrinho' ? (
                <MdShoppingBasket size={25} />
              ) : (
                <AiOutlineHeart size={25} />
              )}
              <h1>Produtos no {title} </h1>
            </div>
            <span>quantidade: {totalProductsCart()}</span>
          </>
        ) : (
          <h1 style={{ textAlign: 'center', width: '100%' }}>
            {title === 'carrinho'
              ? `Não há itens no ${title}`
              : `Não há itens nos ${title}`}
          </h1>
        )}
      </Styled.HeadCart>
      {products.length > 0 &&
        products.map((cartItem, i) => (
          <Styled.cardBody key={i}>
            <img src={cartItem.productImage} alt="Item" />
            <Styled.WrapperDescription>
              <span>{cartItem.productCategory}</span>
              <h2>{cartItem.productName}</h2>
              {title === 'favoritos' ? (
                <button
                  className="btn-add-cart"
                  onClick={() => handleAddFavorites(cartItem)}
                >
                  Adicionar ao carrinho
                </button>
              ) : (
                <>
                  <Styled.WrapperQuantity>
                    <button onClick={() => removeOrAddCart(cartItem)}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => dispatch(addQuantity(cartItem))}>
                      +
                    </button>
                  </Styled.WrapperQuantity>
                </>
              )}
            </Styled.WrapperDescription>
            <div className="price">
              <del>{changeForMoney(Number(cartItem.lastPrice))}</del>
              <span>{changeForMoney(Number(cartItem.price))}</span>
            </div>
            <Styled.ButtonDestroyer
              onClick={() => handleDelete(cartItem.productId)}
            >
              <FaTrash size={25} />
            </Styled.ButtonDestroyer>
          </Styled.cardBody>
        ))}
    </Styled.Wrapper>
  );
}
