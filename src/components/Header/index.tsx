import * as Styled from './styles';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaDragon } from 'react-icons/fa';
import { BsCart4 } from 'react-icons/bs';
import Link from 'next/dist/client/link';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export type HeaderMeProps = {
  children: string;
};

export function Header() {
  const cart = useSelector((state: RootState) => state.cart.cartItem);
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoritiesItem,
  );

  const initialValue = 0;
  const lengthCart = cart.reduce(
    (acc, item) => acc + item.quantity,
    initialValue,
  );
  return (
    <Styled.Wrapper>
      <Link href="/">
        <Styled.WrapperLogo>
          <FaDragon size={37} />
          <h1>Ecom</h1>
        </Styled.WrapperLogo>
      </Link>
      <Styled.WrapperSearch>
        <form>
          <select name="select" id="select">
            <option value="All Categories">Todas categorias</option>
            <option value="All Categories">Eletrônicos</option>
            <option value="All Categories">Smartphones</option>
          </select>
          <input type="text" placeholder="Pesquise Aqui" />
          <button>Pesquisar</button>
        </form>
      </Styled.WrapperSearch>
      <div>
        <Link href="/favorites">
          <Styled.BntFavorites>
            <AiOutlineHeart size={20} />
            Seus favoritos
            {favorites.length > 0 && <span>{favorites.length}</span>}
          </Styled.BntFavorites>
        </Link>
      </div>
      <div>
        <Link href="/cart">
          <Styled.BntCart>
            <BsCart4 size={20} />
            Seu Carrinho
            {cart?.length > 0 && <span>{lengthCart}</span>}
          </Styled.BntCart>
        </Link>
      </div>
    </Styled.Wrapper>
  );
}
