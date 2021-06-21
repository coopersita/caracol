import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import stylesBg from '../styles/background.module.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Mayan Math</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className={stylesBg.imgWrapper}>
        <Image
          priority
          src="/caracol/back_yqkwpt.jpg"
          height={2500}
          width={2500}
          alt=""
        />
      </div>
      <h1 className={styles.title}>Mayan Math</h1>

      <div className={styles.container}>
        <motion.div
          key={router.route}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
                duration: 0.6,
              },
            },
          }}
          className={styles.content}
        >
          <main className={styles.main}>
            <Component {...pageProps} />
          </main>
        </motion.div>

        <footer className={styles.footer}>
          &copy; {new Date().getFullYear()} Alicia Ramírez, background image by{' '}
          <a href="https://unsplash.com/@jezael?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            {' '}
            Jezael Melgoza{' '}
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            {' '}
            Unsplash{' '}
          </a>
        </footer>
      </div>
    </>
  );
}

export default MyApp;