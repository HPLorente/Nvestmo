import React from 'react';
import styles from '../styles/Section3.module.css';

// Images
import InvestImage from '../assets/invest.png';
import RedeemImage from '../assets/redeem.png';
import FundSwitchImage from '../assets/fund_switch.png';
import MonitorImage from '../assets/monitor.png';
import Logo from '../assets/Nvestmo.png';

const Section3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header__container}>
        <div className={styles.title__container}>
          <h1 className={styles.title}>
            What you can do with{' '}
            <span>
              <img className={styles.logo} src={Logo} alt='logo' />
            </span>
          </h1>
        </div>
        <h2 className={styles.subtitle}>
          You can easily invest, redeem, fund, switch and track your investment
          in one platform
        </h2>
      </div>
      <div className={styles.infos__container}>
        <div className={styles.info}>
          <img src={InvestImage} alt='Invest'></img>
          <h3 className={styles.info__title}> Invest </h3>
          <p className={styles.info__subtitle}>
            Enjoy investing and doing top-ups without any hassle
          </p>
        </div>
        <div className={styles.info}>
          <img src={RedeemImage} alt='Redeem'></img>
          <h3 className={styles.info__title}> Redeem </h3>
          <p className={styles.info__subtitle}>
            Withdraw from your account easily in just a few simple steps
          </p>
        </div>
        <div className={styles.info}>
          <img src={FundSwitchImage} alt='Fund Switch'></img>
          <h3 className={styles.info__title}> Fund Switch </h3>
          <p className={styles.info__subtitle}>
            Manage your investment by transferring one fund to another fund
          </p>
        </div>
        <div className={styles.info}>
          <img src={MonitorImage} alt='Monitor'></img>
          <h3 className={styles.info__title}> Monitor </h3>
          <p className={styles.info__subtitle}>
            Track the progress of your investment in real time
          </p>
        </div>
      </div>

      <div className={styles.numbered__info}>
        <div className={styles.numbered__info__container}>
          <div className={styles.number}>
            <h2>01</h2>
          </div>
          <h2 className={styles.number__title}>Easy to use</h2>
          <p className={styles.number__subtitle}>
            Nvestmo has an intuitive user-friendly interface designed to make
            the process simple and easy to understand
          </p>
        </div>

        <div className={styles.numbered__info__container}>
          <div className={styles.number}>
            <h2>02</h2>
          </div>
          <h2 className={styles.number__title}>Secured</h2>
          <p className={styles.number__subtitle}>
            Nvestmo has multiple layers of securities to ensure that your
            transactions and investments with Affinity is secured and
            confidential
          </p>
        </div>

        <div className={styles.numbered__info__container}>
          <div className={styles.number}>
            <h2>03</h2>
          </div>
          <h2 className={styles.number__title}>Convenient</h2>
          <p className={styles.number__subtitle}>
            Nvestmo can be used 24/7 to invest, redeem, fund switch, and track
            your investment in one platform
          </p>
        </div>

        <div className={styles.numbered__info__container}>
          <div className={styles.number}>
            <h2>04</h2>
          </div>
          <h2 className={styles.number__title}>Accessible</h2>
          <p className={styles.number__subtitle}>
            Nvestmo can be used across multiple devices such as mobile gadgets
            and laptop computers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
