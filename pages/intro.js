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
          <figure>
            <div className={styles.figureGroup}>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/zero_pbqspr.svg"
                    height={107}
                    width={254}
                    alt="Zero hierogplyph: an oval resempling a sea shell"
                  />
                </div>
              </div>
            </div>
            <figcaption>Zero</figcaption>
          </figure>
          <figure>
            <div className={styles.figureGroup}>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/one_nlc4nc.svg"
                    height={31}
                    width={31}
                    alt="One hierogplyph: a dot"
                  />
                </div>
              </div>
            </div>
            <figcaption>One</figcaption>
          </figure>
          <figure>
            <div className={styles.figureGroup}>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/five_kylwqh.svg"
                    height={16}
                    width={254}
                    alt="Five hierogplyph: an horizontal line"
                  />
                </div>
              </div>
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
          <figure>
            <div className={styles.figureGroup}>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/one_nlc4nc.svg"
                    height={31}
                    width={31}
                    alt="One hierogplyph: a dot"
                  />
                </div>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/one_nlc4nc.svg"
                    height={31}
                    width={31}
                    alt="One hierogplyph: a dot"
                  />
                </div>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/one_nlc4nc.svg"
                    height={31}
                    width={31}
                    alt="One hierogplyph: a dot"
                  />
                </div>
              </div>
            </div>
            <figcaption>3</figcaption>
          </figure>
          <figure>
            <div className={styles.figureGroup}>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/one_nlc4nc.svg"
                    height={31}
                    width={31}
                    alt="One hierogplyph: a dot"
                  />
                </div>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/one_nlc4nc.svg"
                    height={31}
                    width={31}
                    alt="One hierogplyph: a dot"
                  />
                </div>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/one_nlc4nc.svg"
                    height={31}
                    width={31}
                    alt="One hierogplyph: a dot"
                  />
                </div>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/one_nlc4nc.svg"
                    height={31}
                    width={31}
                    alt="One hierogplyph: a dot"
                  />
                </div>
              </div>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/five_kylwqh.svg"
                    height={16}
                    width={254}
                    alt="Five hierogplyph: a horizontal line"
                  />
                </div>
              </div>
            </div>
            <figcaption>9</figcaption>
          </figure>
          <figure>
            <div className={styles.figureGroup}>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/five_kylwqh.svg"
                    height={16}
                    width={254}
                    alt="Five hierogplyph: a horizontal line"
                  />
                </div>
              </div>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/five_kylwqh.svg"
                    height={16}
                    width={254}
                    alt="Five hierogplyph: a horizontal line"
                  />
                </div>
              </div>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/five_kylwqh.svg"
                    height={16}
                    width={254}
                    alt="Five hierogplyph: a horizontal line"
                  />
                </div>
              </div>
            </div>

            <figcaption>15</figcaption>
          </figure>
          <figure>
            <div className={styles.figureGroup}>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/one_nlc4nc.svg"
                    height={31}
                    width={31}
                    alt="One hierogplyph: a dot"
                  />
                </div>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/one_nlc4nc.svg"
                    height={31}
                    width={31}
                    alt="One hierogplyph: a dot"
                  />
                </div>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/one_nlc4nc.svg"
                    height={31}
                    width={31}
                    alt="One hierogplyph: a dot"
                  />
                </div>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/one_nlc4nc.svg"
                    height={31}
                    width={31}
                    alt="One hierogplyph: a dot"
                  />
                </div>
              </div>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/five_kylwqh.svg"
                    height={16}
                    width={254}
                    alt="Five hierogplyph: a horizontal line"
                  />
                </div>
              </div>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/five_kylwqh.svg"
                    height={16}
                    width={254}
                    alt="Five hierogplyph: a horizontal line"
                  />
                </div>
              </div>
              <div className={styles.figureOuter}>
                <div className={styles.figureInner}>
                  <Image
                    priority
                    src="/caracol/five_kylwqh.svg"
                    height={16}
                    width={254}
                    alt="Five hierogplyph: a horizontal line"
                  />
                </div>
              </div>
            </div>

            <figcaption>19</figcaption>
          </figure>
        </div>
      </div>
      <Link href="/">
        <a className="prev">Previous</a>
      </Link>
    </>
  );
}
