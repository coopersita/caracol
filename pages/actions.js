import Link from 'next/link';
import ConvertNumber from '../components/ConvertNumber.js';
import styles from '../styles/Actions.module.css';

export default function Actions() {
  return (
    <>
      <div className={styles.grid}>
        <ConvertNumber />
      </div>
      <div className="buttons">
        <Link href="/math">
          <a className="prev">Previous</a>
        </Link>
      </div>
    </>
  );
}
