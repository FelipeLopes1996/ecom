import React from 'react';
import * as Styled from './styles';

import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
// import { FaExchangeAlt } from 'react-icons/fa';
import { ImEye } from 'react-icons/im';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart';
import { addItemFavorites, removeItemToFavorites } from '../../store/favorites';
import { changeForMoney } from '../../utils/changeForMoney';
import { IProduct } from '../../interfaces/product';

export type CarouselCardColectionProps = {
  cards?: IProduct[];
  classProd?: string;
};

type ArrowType = {
  currentSlide?: number;
  slideCount?: number;
};

export function SliderCards({ cards }: CarouselCardColectionProps) {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritiesItem,
  );
  const cart = useSelector((state: RootState) => state.cart.cartItem);
  const dispatch = useDispatch();

  const SlickArroRight = ({
    currentSlide,
    slideCount,
    ...props
  }: ArrowType) => {
    return (
      <button
        {...props}
        className={
          'slick-next slick-arrow' +
          (currentSlide === 0 ? 'slick-disabled' : '')
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
        <BsFillArrowRightCircleFill size={20} />
      </button>
    );
  };
  const SlickArroLeft = ({ currentSlide, slideCount, ...props }: ArrowType) => {
    return (
      <button
        {...props}
        className={
          'slick-prev slick-arrow' +
          (currentSlide === 0 ? 'slick-disabled' : '')
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
        <BsFillArrowLeftCircleFill size={20} />
      </button>
    );
  };

  const sliderSettings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <SlickArroRight />,
    prevArrow: <SlickArroLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const checkProduct = (productId) =>
    favorites.findIndex((item) => item.productId === productId);

  return (
    <Styled.Wrapper>
      <Slider {...sliderSettings}>
        {cards &&
          cards.map((card, i) => (
            <div key={i} className="body-card">
              <img src={card.productImage} alt="Logo" />
              <div className="description">
                <span>{card.productCategory}</span>
              </div>
              <div className="category">
                <h3>{card.productName}</h3>
              </div>
              <div className="price">
                <h4>
                  <del>{changeForMoney(Number(card.lastPrice))}</del>
                  {changeForMoney(Number(card.price))}
                </h4>
              </div>
              <div className="icons">
                {' '}
                <button
                  className="heart-icon"
                  onClick={() => dispatch(addItemFavorites(card))}
                >
                  {checkProduct(card.productId) !== -1 ? (
                    <AiFillHeart size={16} color="red" />
                  ) : (
                    <AiOutlineHeart size={16} />
                  )}
                </button>
                {/* <button>
                  <FaExchangeAlt size={16} />
                </button> */}
                <button>
                  <ImEye size={16} />
                </button>
              </div>
              <div className="hidde">
                <button onClick={() => dispatch(addItemToCart(card))}>
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          ))}
      </Slider>
    </Styled.Wrapper>
  );
}
