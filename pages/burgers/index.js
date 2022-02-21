import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Burgers.module.css';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();

  return {
    props: { burgers: data }
  }
}

const Burgers = ({ burgers}) => {
  return (
    <div>
      <h1>Наши Бургеры</h1>
      {burgers.map(burger => (
        <Link href={`/burgers/${burger.id}`} key={burger.id}>
          <a className={styles.burgerCard}>
            <div className={styles.imageContainer}>
              <Image 
                src={`${burger.image}`} 
                alt={`${burger.name}`} 
                width="100%" 
                height="100%" 
                layout="responsive" 
                objectFit="cover"
              />
            </div>
            <div>
              <h3>{ burger.name }</h3>
              <p>{ burger.desc }</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Burgers;