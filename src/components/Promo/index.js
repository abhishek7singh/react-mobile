import React from 'react';
import PromoStyles from './Promo.scss';

export default class Promo extends React.Component {
  render() {
    // {cn(PromoStyles.marginT10, PromoStyles.homeWrapper)}
    return (
      <div
        className={`${PromoStyles.marginT10} ${
          PromoStyles.homeWrapper
        } container`}
      >
        Promo Component
      </div>
    );
  }
}
