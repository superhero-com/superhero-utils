export * from './index';
import React from 'react';
import PropTypes from 'prop-types';
import { createButtonByDiv } from './index';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.button = React.createRef();
    this.componentDidMount = this.componentDidUpdate = () =>
      createButtonByDiv(this.button.current, this.props);
  }

  render() {
    return React.createElement('div', { ref: this.button });
  }
}

Button.propTypes = {
  size: PropTypes.oneOf(['icon', 'small', 'medium', 'large']),
  url: PropTypes.string,
  account: PropTypes.string,
};
