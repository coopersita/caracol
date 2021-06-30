import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link';
import ConvertNumber from '../components/ConvertNumber.js';
import styles from '../styles/Actions.module.css';
import stylesIntro from '../styles/Intro.module.css';

import 'react-tabs/style/react-tabs.css';

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
            <p>
              Agnes Caroline Thaarup Obel is a Danish singer/songwriter. Her
              first album, Philharmonics, was released by PIAS Recordings on 4
              October 2010 in Europe. Philharmonics was certified gold in June
              2011 by the Belgian Entertainment Association (BEA) for sales of
              10,000 Copies.
            </p>
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
