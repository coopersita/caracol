import dynamic from 'next/dynamic'; // disable ssr
import { Tab, TabList, TabPanel } from 'react-tabs';

import Link from 'next/link';
import ConvertNumber from '../components/ConvertNumber.js';
import CreateNumber from '../components/CreateNumber.js';
import styles from '../styles/Actions.module.css';
import stylesIntro from '../styles/Intro.module.css';

import 'react-tabs/style/react-tabs.css';

const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
);

export default function Actions() {
  return (
    <>
      <div className={stylesIntro.noGrid}>
        <Tabs className={styles.tabs}>
          <TabList>
            <Tab>Convert a number</Tab>
            <Tab>Create a number</Tab>
          </TabList>
          <TabPanel>
            <ConvertNumber />
          </TabPanel>
          <TabPanel>
            <CreateNumber />
          </TabPanel>
        </Tabs>
      </div>
      <div className="buttons">
        <Link href="/math">
          <a className="prev">Previous</a>
        </Link>
      </div>
    </>
  );
}
