import Link from 'next/link';
import { SiBurgerking } from 'react-icons/si';

const Header = () => {
  return (
    <header>
      <div>
        <SiBurgerking  />
      </div>
      <nav>
        <Link href="/"><a>Домой</a></Link>
        <Link href="/about"><a>О Нас</a></Link>
        <Link href="/reviews"><a>Отзывы</a></Link>
        <Link href="/burgers/"><a>Бургеры</a></Link>
      </nav>
    </header>
  
  );
}
 
export default Header;