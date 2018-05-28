import React from 'react';
import HeaderStyles from './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className={HeaderStyles.headerWrapper}>
        <div className={HeaderStyles.headerContainerWrapper}>
          <div className={HeaderStyles.headerLogoIconWrapper}>
            <div>
              <a href="./">
                <img
                  className={HeaderStyles.headerLogo}
                  alt="RedDoorz"
                  src="//d3i0gjdlegbll.cloudfront.net/assets/mobile/logo-934c6bb48224ac0d22a562bc4c5c4e9e0c4b442d591be555243f78ab97b58025.png"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
