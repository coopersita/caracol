import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Math.module.css';
import stylesIntro from '../styles/Intro.module.css';

export default function Math() {
  return (
    <>
      <div className={stylesIntro.noGrid}>
        <p className="blurb">
          To create numbers larger than 19, they would stack numbers in columns:
        </p>
      </div>
      <div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>
                20<sup>3</sup>
                <br />
                <span className={styles.smallBlurb}> (8,000)</span>
              </th>
              <td />
              <td />
              <td>
                <figure className={stylesIntro.figure}>
                  <div>
                    <Image
                      priority
                      src="/caracol/ten_zo9epe.svg"
                      height={122 / 3}
                      width={254 / 3}
                      alt="Ten hierogplyph: two horizontal lines"
                    />
                  </div>

                  <figcaption>
                    <span className={styles.smallBlurb}>
                      10 &times; 8,000 =
                    </span>
                    <br />
                    80,000
                  </figcaption>
                </figure>
              </td>
            </tr>
            <tr>
              <th>
                20<sup>2</sup>
                <br />
                <span className={styles.smallBlurb}>(400)</span>
              </th>
              <td />
              <td>
                <figure className={stylesIntro.figure}>
                  <div>
                    <Image
                      priority
                      src="/caracol/nineteen_vgtpmh.svg"
                      height={122 / 3}
                      width={254 / 3}
                      alt="Nineteen hierogplyph: 4 dots and three bars"
                    />
                  </div>
                  <figcaption>
                    <span className={styles.smallBlurb}>19 &times; 400 =</span>
                    <br />
                    7,600
                  </figcaption>
                </figure>
              </td>
              <td>
                <figure className={stylesIntro.figure}>
                  <div>
                    <Image
                      priority
                      src="/caracol/zero_iepyh1.svg"
                      height={122 / 3}
                      width={254 / 3}
                      alt="Zero hierogplyph: an oval resempling a sea shell"
                    />
                  </div>
                  <figcaption>0</figcaption>
                </figure>
              </td>
            </tr>
            <tr>
              <th>
                20<sup>1</sup>
                <br />
                <span className={styles.smallBlurb}>(20)</span>
              </th>
              <td>
                <figure className={stylesIntro.figure}>
                  <div>
                    <Image
                      priority
                      src="/caracol/one_rk0wex.svg"
                      height={122 / 3}
                      width={254 / 3}
                      alt="One hierogplyph: a dot"
                    />
                  </div>

                  <figcaption>
                    <span className={styles.smallBlurb}>1 &times; 20 =</span>
                    <br />
                    20
                  </figcaption>
                </figure>
              </td>
              <td>
                <figure className={stylesIntro.figure}>
                  <div>
                    <Image
                      priority
                      src="/caracol/two_jbna4l.svg"
                      height={122 / 3}
                      width={254 / 3}
                      alt="Two hierogplyph: two dots"
                    />
                  </div>

                  <figcaption>
                    <span className={styles.smallBlurb}>2 &times; 20 =</span>
                    <br />
                    40
                  </figcaption>
                </figure>
              </td>
              <td>
                <figure className={stylesIntro.figure}>
                  <div>
                    <Image
                      priority
                      src="/caracol/eleven_z1cao3.svg"
                      height={122 / 3}
                      width={254 / 3}
                      alt="eleven hierogplyph: a dot and two bars"
                    />
                  </div>

                  <figcaption>
                    <span className={styles.smallBlurb}>11 &times; 20 =</span>
                    <br />
                    220
                  </figcaption>
                </figure>
              </td>
            </tr>
            <tr>
              <th>
                20<sup>0</sup>
                <br />
                <span className={styles.smallBlurb}>(1)</span>
              </th>
              <td>
                <figure className={stylesIntro.figure}>
                  <div>
                    <Image
                      priority
                      src="/caracol/six_dpwjqp.svg"
                      height={122 / 3}
                      width={254 / 3}
                      alt="Six hierogplyph: a dot and a bar"
                    />
                  </div>

                  <figcaption>
                    <span className={styles.smallBlurb}>6 &times; 1 =</span>
                    <br />6
                  </figcaption>
                </figure>
              </td>
              <td>
                <figure className={stylesIntro.figure}>
                  <div>
                    <Image
                      priority
                      src="/caracol/five_tyagxv.svg"
                      height={122 / 3}
                      width={254 / 3}
                      alt="Five hierogplyph: an horizontal line"
                    />
                  </div>

                  <figcaption>
                    <span className={styles.smallBlurb}>5 &times; 1 =</span>
                    <br />5
                  </figcaption>
                </figure>
              </td>
              <td>
                <figure className={stylesIntro.figure}>
                  <div>
                    <Image
                      priority
                      src="/caracol/zero_iepyh1.svg"
                      height={107 / 2}
                      width={254 / 3}
                      alt="Zero hierogplyph: an oval resempling a sea shell"
                    />
                  </div>

                  <figcaption>0</figcaption>
                </figure>
              </td>
            </tr>
            <tr>
              <th>Total</th>
              <td>26</td>
              <td>7,645</td>
              <td>80,220</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="buttons">
        <Link href="/intro" className="prev">
          Previous
        </Link>
        <Link href="/actions" className="next">
          Next
        </Link>
      </div>
    </>
  );
}
