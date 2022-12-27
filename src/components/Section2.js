import React from 'react';
import styles from '../styles/Section2.module.css';

import PhoneImage from '../assets/phone.png';

const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header__container}>
        <div className={styles.title__container}>
          <h1 className={styles.main__title}>
            Let's make the <br /> <span> wealth work for you</span>
          </h1>
        </div>
        <div className={styles.rectangle}></div>
        <h2 className={styles.main__subtitle}>
          Our personalized private wealth experience combines dedicated
          relationship management with the power of technology
        </h2>
      </div>

      <div className={styles.checked__info__container}>
        <img src={PhoneImage} alt='phone' className={styles.phone__image}></img>
        <div className={styles.info}>
          <h2 className={styles.checked}>✅</h2>
          <h2 className={styles.info__title}>
            Well-rounded planning of your finances
          </h2>
          <p>
            Financial health advisory to risk advisory, financial goals to
            retirement plans - the holistic plan you need
          </p>
        </div>

        <div className={styles.info}>
          <h2 className={styles.checked}>✅</h2>
          <h2 className={styles.info__title}>
            Transparent and jargon-free management
          </h2>
          <p>
            Web dashboard with up-to-date performance reports, portfolio details
            does all the talking
          </p>
        </div>

        <div className={styles.info}>
          <h2 className={styles.checked}>✅</h2>
          <h2 className={styles.info__title}>
            No bias, only the portfolio that's be st for you
          </h2>
          <p>
            Customized portfolios made with institutional rule-based investing
            with high-quality assets
          </p>
        </div>

        <div className={styles.info}>
          <h2 className={styles.checked}>✅</h2>
          <h2 className={styles.info__title}>
            Backed by our powerful investment and research team
          </h2>
          <p>
            All funds go through a quality assessment by our investment team
            with regular algo-based monitoring
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
