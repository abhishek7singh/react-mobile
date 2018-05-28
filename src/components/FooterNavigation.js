import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class FooterNavigation extends React.Component {
  render() {
    const { history, onChange, value, className, children } = this.props;
    return (
      <BottomNavigation
        value={value}
        onChange={(event, val) => {
          onChange(history, event, val);
        }}
        showLabels
        className={className}
      >
        {children}
      </BottomNavigation>
    );
  }
}

FooterNavigation.propTypes = {
  history: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.array
};

export default withRouter(FooterNavigation);
