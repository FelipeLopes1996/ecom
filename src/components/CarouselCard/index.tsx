import * as Styled from './styles';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { ImEye } from 'react-icons/im';
import { IProduct } from '../../interfaces/product';

export type CarouselCardColectionProps = {
  cards?: IProduct[];
  classProd?: string;
};

export function CarouselCard({ cards, classProd }: CarouselCardColectionProps) {
  const addToCart = (card: IProduct) => {
    console.log(card);
  };

  return (
    <>
      {cards &&
        cards.map((card, i) => (
          <Styled.Wrapper key={i} className={classProd}>
            <img src={card.productImage} alt="Image" />
            <Styled.WrapperContent>
              <span>{card.productCategory}</span>
              <h3>{card.productName}</h3>
              <h4>
                {card.price} <del>{card.lastPrice}</del>
              </h4>
            </Styled.WrapperContent>
            <Styled.WrapperIcon>
              <button>
                <AiOutlineHeart size={16} />
              </button>
              <button>
                <FaExchangeAlt size={16} />
              </button>
              <button>
                <ImEye size={16} />
              </button>
            </Styled.WrapperIcon>
            <div className="hidde">
              <button onClick={() => addToCart(card)}>
                Adicionar ao carrinho
              </button>
            </div>
          </Styled.Wrapper>
        ))}
    </>
  );
}
