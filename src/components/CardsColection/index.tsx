import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import * as Styled from './styles';

type CardColectionProps = {
  cards?: CardInfoColection[];
};

type CardInfoColection = {
  colectionName: string;
  colectionImage: string;
};

export function CardColection({ cards }: CardColectionProps) {
  return (
    <Styled.Wrapper>
      <Styled.WrapperCards>
        {cards &&
          cards.map((card, index) => (
            <Styled.Card key={index}>
              <Styled.InfoCard>
                <Styled.WrapperImage>
                  <img src={card.colectionImage} alt="" />
                </Styled.WrapperImage>
                <Styled.WrapperText>
                  <h3>{card.colectionName}</h3>
                  <span>
                    Mostrar <BsFillArrowRightCircleFill />{' '}
                  </span>
                </Styled.WrapperText>
              </Styled.InfoCard>
            </Styled.Card>
          ))}
      </Styled.WrapperCards>
    </Styled.Wrapper>
  );
}
