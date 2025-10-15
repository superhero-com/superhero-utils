export * from './index';
import React from 'react';
import PropTypes from 'prop-types';
import { createButtonByDiv } from './index';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.button = React.createRef();
    this.componentDidMount = this.componentDidUpdate = () => {
      const { target, ...props } = this.props;
      createButtonByDiv(this.button.current, target, props);
    };
  }

  render() {
    return React.createElement('div', { ref: this.button });
  }
}

Button.propTypes = {
  size: PropTypes.oneOf(['icon', 'small', 'medium', 'large']),
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
