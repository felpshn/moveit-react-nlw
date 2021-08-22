import Head from 'next/head';

import styles from './Main.module.scss';
import Countdown from '@/components/Countdown';
import Profile from '@/components/Profile';

export default function Main() {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>move.it</title>
      </Head>
      <section>
        <div>
          <Profile />
          <Countdown />
        </div>
      </section>
    </div>
  );
}
