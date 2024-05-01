import Link from 'next/link';

import styles from '../styles/app.module.css';

export const DocsCard = () => {
  return (
    <Link
      href="https://docs.near.org/build/web3-apps/quickstart"
      className={styles.card}
      target='_blank'
      rel="noopener noreferrer"
    >
      <h2>
        Near Docs <span>-&gt;</span>
      </h2>
      <p>Learn how this application works, and what you can build on Near.</p>
    </Link>);
};

export const HelloNearCard = () => {
  return (
    <Link
      href="/hello-near"
      className={styles.card}
      rel="noopener noreferrer"
    >
      <h2>
        Near Integration <span>-&gt;</span>
      </h2>
      <p>Discover how simple it is to interact with a Near smart contract.</p>
    </Link>
  );
};

export const StartFreelancing = () => {
  return (
    <Link
      href="/freelancer"
      className={styles.card}
      rel="noopener noreferrer"
    >
      <h2>
        Start Freelancing <span>-&gt;</span>
      </h2>
      <p>Control all your data</p>
    </Link>
  );
};
export const BecomeClient = () => {
  return (
    <Link
      href="/client"
      className={styles.card}
      rel="noopener noreferrer"
    >
      <h2>
        Become a Client <span>-&gt;</span>
      </h2>
      <p>Choose from thousands of freelancers</p>
    </Link>
  );
};

export const HelloComponentsCard = () => {
  return (
    <Link
      href="/hello-components"
      className={styles.card}
      rel="noopener noreferrer"
    >
      <h2>
        Web3 Components <span>-&gt;</span>
      </h2>
      <p>See how Web3 components can help you to create multi-chain apps.</p>
    </Link>
  );
};