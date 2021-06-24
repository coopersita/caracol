import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.grid}>
        <div>
          <p className="blurb">
            The Mayan culture developed in Southern Mexico and Central America.
            It originated around 2000BC and flourished between 300AD and 900AD.
            The Maya are renowned for their advanced knowledge of science,
            Astrology and Math in particular. Today, an estimated 2 million
            Mayans still live in the region.
          </p>
        </div>
        <div className={styles.image}>
          <Image
            priority
            src="/caracol/mapa_j2qnuq.svg"
            height={1000}
            width={1000}
            alt="Map of the Mayan civilization encompasing southern Mexico, Guatemala, Belize, and Honduras"
          />
        </div>
      </div>
      <div className="buttons">
        <Link href="/intro">
          <a className="next">Next</a>
        </Link>
      </div>
    </>
  );
}
