import * as Styled from './styles';
import Link from 'next/dist/client/link';
import React from 'react';
import { useRouter } from 'next/dist/client/router';

type NavMeProps = {
  navLinks: MapProps[];
};

type MapProps = {
  name: string;
  index: number;
  route: string;
};

export function Nav({ navLinks }: NavMeProps) {
  const [routeIndex, setRouteIndex] = React.useState(0);

  const handleFindName = (ind: number) => {
    setRouteIndex(ind);
  };

  const router = useRouter();

  const routerName = router.pathname;

  console.log('eu sou a rota', routerName);
  return (
    <>
      {routerName === '/cart' || routerName === '/favorites' ? null : (
        <Styled.Wrapper>
          {navLinks &&
            navLinks.map((link, index) => (
              <Styled.Li
                onClick={() => {
                  handleFindName(index);
                }}
                key={index}
                className={routeIndex === index ? 'active' : null}
              >
                <Link href={`/${link.route}`}>{link.name}</Link>
              </Styled.Li>
            ))}
        </Styled.Wrapper>
      )}
    </>
  );
}
