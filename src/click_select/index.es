import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { invoke } from 'nebenan-helpers/lib/utils';


class ClickSelect extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // hack: contentEditable makes iOS selection work
    this.container.setAttribute('contentEditable', true);

    const range = document.createRange();
    range.selectNodeContents(this.container);

    const selection = global.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    this.container.setAttribute('contentEditable', false);

    invoke(this.props.onClick, event);
  }

  render() {
    const className = classNames('c-click_select', this.props.className);
    const ref = (el) => {
      this.container = el;
    };
    return <span {...this.props} className={className} ref={ref} onClick={this.handleClick} />;
  }
}

ClickSelect.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default ClickSelect;