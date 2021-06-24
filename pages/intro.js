import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Intro.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.noGrid}>
        <div>
          <p className="blurb">
            The Maya developed a unique mathematical system. Unlike our decimal
            (base 10) system, it was vigesimal (base 20).
          </p>
          <p className="blurb">
            They also used the concept of zero along with an ingenious way of
            representing numbers. With only 3 hieroglyphs, they managed to
            represent any number:
          </p>
        </div>

        <div className={styles.row}>
          <figure className={styles.figure}>
            <div>
              <Image
                priority
                src="/caracol/zero_iepyh1.svg"
                height={122 / 2}
                width={254 / 2}
                alt="Zero hierogplyph: an oval resempling a sea shell"
              />
            </div>
            <figcaption>Zero</figcaption>
          </figure>
          <figure className={styles.figure}>
            <div>
              <Image
                priority
                src="/caracol/one_rk0wex.svg"
                height={122 / 2}
                width={254 / 2}
                alt="One hierogplyph: a dot"
              />
            </div>
            <figcaption>One</figcaption>
          </figure>
          <figure className={styles.figure}>
            <div>
              <Image
                priority
                src="/caracol/five_tyagxv.svg"
                height={122 / 2}
                width={254 / 2}
                alt="Five hierogplyph: an horizontal line"
              />
            </div>
            <figcaption>Five</figcaption>
          </figure>
        </div>
        <div>
          <p className="blurb">
            So they could combine them to create other numbers:
          </p>
        </div>
        <div className={styles.row}>
          <figure className={styles.figure}>
            <div>
              <Image
                priority
                src="/caracol/three_tk6dat.svg"
                height={122 / 2}
                width={254 / 2}
                alt="Three hierogplyph: 3 dots"
              />
            </div>
            <figcaption>3</figcaption>
          </figure>
          <figure className={styles.figure}>
            <div>
              <Image
                priority
                src="/caracol/nine_jih9t4.svg"
                height={122 / 2}
                width={254 / 2}
                alt="Nine hierogplyph: 4 dots and one bar"
              />
            </div>

            <figcaption>9</figcaption>
          </figure>
          <figure className={styles.figure}>
            <div>
              <Image
                priority
                src="/caracol/fifteen_tjanjt.svg"
                height={122 / 2}
                width={254 / 2}
                alt="Fifteen hierogplyph: three horizontal lines"
              />
            </div>

            <figcaption>15</figcaption>
          </figure>
          <figure className={styles.figure}>
            <div>
              <Image
                priority
                src="/caracol/nineteen_vgtpmh.svg"
                height={122 / 2}
                width={254 / 2}
                alt="Nineteen hierogplyph: 4 dots and 3 bars"
              />
            </div>

            <figcaption>19</figcaption>
          </figure>
        </div>
      </div>
      <div className="buttons">
        <Link href="/">
          <a className="prev">Previous</a>
        </Link>
        <Link href="/math">
          <a className="next">Next</a>
        </Link>
      </div>
    </>
  );
}
