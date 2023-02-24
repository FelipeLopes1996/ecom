import * as Styled from './styles';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { MdLocationOn, MdAttachMoney } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';

export type InfoHeaderProps = {
  title?: string;
};

export function InfoHeader({ title }: InfoHeaderProps) {
  return (
    <Styled.Wrapper>
      <Styled.WrapperContainer>
        <div>
          <ul>
            <li>
              <AiFillPhone size={15} />
              {'(081) 9.9999-9999'}
            </li>
            <li>
              <AiOutlineMail size={15} />
              {'email@email.com'}
            </li>
            <li>
              <MdLocationOn size={15} />
              {'585 Rua Daqui Mesmo'}
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <MdAttachMoney size={15} />
              {'BRL'}
            </li>
            <li>
              <FiUser size={15} />
              {'Minha conta'}
            </li>
          </ul>
        </div>
      </Styled.WrapperContainer>
    </Styled.Wrapper>
  );
}
