import React from 'react';
import Container from '../Main/Container/Container'; 
import './Footer.css';
import FooterLogo from '@/assets/landing/footer__logo.svg';
import LogoWest from '@/assets/landing/logo-west.svg';
import ExpertsLogo from '@/assets/landing/experts.svg';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__intro">
          <h3 className="footer__title">
            Жилой комплекс «West Garden» —<br />
            все преимущества жизни на природе
          </h3>
          <img
            className="footer__logo-west"
            src={LogoWest}
            alt="West Garden Logo"
            loading="lazy"
          />
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <div className="footer__office">
            <div className="footer__office-logos">
              <img
                className="footer__office-logo"
                src={FooterLogo}
                alt="Sales Office Logo"
                loading="lazy"
              />
              <span className="footer__separator">|</span>
              <img
                className="footer__office-logo"
                src={ExpertsLogo}
                alt="Experts Logo"
                loading="lazy"
              />
            </div>

            <hr className="footer__subdivider" />

            <div className="footer__office-address">
              <p className="footer__office-label">Офис продаж</p>
              <p className="footer__office-details">
                Москва, Локал наб. 2/4,<br />строение 17, офис 300
              </p>
            </div>

            <hr className="footer__subdivider" />

            <div className="footer__office-phone">
              <p className="footer__office-label">Телефон</p>
              <div className="footer__phone-info">
                <p className="footer__phone-number">+7 999 700 70 70</p>
                <span className="footer__phone-status">· работаем</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
