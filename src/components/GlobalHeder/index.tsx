import { Header } from '../Header';
import { InfoHeader } from '../InfoHeader';
import { Nav } from '../nav';

export default function GlobalHeader() {
  const navLinks = [
    { route: '', name: 'Home', index: 0 },
    { route: 'category', name: 'Ótimas opções', index: 1 },
    { route: 'category', name: 'Categorias', index: 2 },
    { route: 'category', name: 'Notbooks', index: 3 },
    { route: 'category', name: 'Smartphones', index: 4 },
    { route: 'category', name: 'Cameras', index: 5 },
    { route: 'category', name: 'Acessories', index: 6 },
  ];
  return (
    <>
      <InfoHeader />
      <Header />
      <Nav navLinks={navLinks} />
    </>
  );
}
