import Image from 'next/image';
import Logo from '/public/logo.png';
import NextLogo from '/public/next.svg';
import styles from '@/styles/app.module.css';
import { BecomeClient,StartFreelancing } from '@/components/cards';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}> </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src={Logo}
          alt="NEAR Logo"
          width={200}
          height={200}
          priority
        />
        
        
      </div>

      <div className={styles.grid}>
        
        <StartFreelancing/>
        <BecomeClient/>
      </div>
    </main>
  );
}