import { CardColection } from '../../components/CardsColection';
import { SliderCards } from '../../components/Slider';
import * as Styled from './styles';

import mock from './mock';

export function Home() {
  const coletionCard = [
    {
      colectionName: 'Laptop Categoria',
      colectionImage:
        'https://a-static.mlcdn.com.br/618x463/notebook-dell-inspiron-15-i1101-m10s-15-6-full-hd-11a-geracao-intel-core-i5-8gb-256gb-ssd-windows-11/dell/i15i1100m10smp/7d270b509eed586df92dbea7e86b0907.jpg',
    },
    {
      colectionName: 'Smartphone Categoria',
      colectionImage:
        'https://a-static.mlcdn.com.br/618x463/notebook-dell-inspiron-15-i1101-m10s-15-6-full-hd-11a-geracao-intel-core-i5-8gb-256gb-ssd-windows-11/dell/i15i1100m10smp/7d270b509eed586df92dbea7e86b0907.jpg',
    },
    {
      colectionName: 'PC Categoria',
      colectionImage:
        'https://a-static.mlcdn.com.br/618x463/notebook-dell-inspiron-15-i1101-m10s-15-6-full-hd-11a-geracao-intel-core-i5-8gb-256gb-ssd-windows-11/dell/i15i1100m10smp/7d270b509eed586df92dbea7e86b0907.jpg',
    },
  ];

  return (
    <Styled.Wrapper>
      <CardColection cards={coletionCard} />
      <SliderCards cards={mock} />
      <CardColection cards={coletionCard} />
      <SliderCards cards={mock} />
    </Styled.Wrapper>
  );
}
