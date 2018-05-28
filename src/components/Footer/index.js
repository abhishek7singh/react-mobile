import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FooterNavigation from '../FooterNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FooterStyles from './Footer.scss';

const styles = {
  root: {}
};

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }
  handleChange(history, value) {
    this.setState({ value });
    history.push(this.footerRoutes[value - 1].path);
  }
  footerRoutes;
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    this.footerRoutes = [
      {
        label: 'Search',
        path: '/search',
        icon: <RestoreIcon />
      },
      {
        label: 'Promo',
        path: '/promo',
        icon: <FavoriteIcon />
      },
      {
        label: 'Bookings',
        path: '/bookings',
        icon: <LocationOnIcon />
      },
      {
        label: 'Account',
        path: '/account',
        icon: <LocationOnIcon />
      }
    ];
    return (
      <div className={FooterStyles.footerWrapper}>
        <FooterNavigation
          value={value}
          onChange={(history, event, val) => {
            this.handleChange(history, val);
          }}
          showLabels
          className={classes.root}
        >
          {' '}
          {this.footerRoutes.map(route => (
            <BottomNavigationAction
              key={route.path}
              label={route.label}
              icon={route.icon}
            />
          ))}
        </FooterNavigation>
      </div>
    );
  }
}
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object
};
export default withStyles(styles)(Footer);
