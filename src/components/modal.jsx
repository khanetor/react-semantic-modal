'use strict';

const React = require('react');
const Component = React.Component;
const PropTypes = React.PropTypes;

const Portal = require('react-portal');

class InnerModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modalHeight: 0 };
  }

  componentDidMount() {
    let modalHeight = window.$('#reactInnerModal').outerHeight();
    this.setState({modalHeight: modalHeight});
  }

  render() {
    let className = `ui modal transition visible active ${this.props.style} ${this.props.size}`;

    let closeIcon = null;
    if (this.props.closeIcon) {
      closeIcon =  <i className='close icon' onClick={this.props.closePortal}></i>;
    }

    return (
      <div id='reactInnerModal' className={className} style={{'margin-top': - this.state.modalHeight / 2}}>
        {closeIcon}
        {this.props.children}
      </div>
    );
  }
}

InnerModal.propTypes = {
  style: PropTypes.oneOf(['standard', 'basic']),
  size: PropTypes.oneOf(['', 'small', 'large', 'fullscreen']),
  closeIcon: PropTypes.bool
};
InnerModal.defaultProps = {
  style: 'standard',
  size: ''
};

class Modal extends Component {
  render() {
    let className = `ui dimmer modals visible active page transition ${this.props.className}`;
    return (
      <Portal className={className}
      isOpened={this.props.isOpened}
      closeOnEsc={this.props.closeOnEsc}
      closeOnOutsideClick={this.props.closeOnOutsideClick}
      onClose={this.props.onClose}>
        <InnerModal style={this.props.style} size={this.props.size} closeIcon = {this.props.closeIcon}>
          {this.props.children}
        </InnerModal>
      </Portal>
    );
  }
}

Modal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  closeOnEsc: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  onClose: PropTypes.func,
  closeIcon: PropTypes.bool,
  style: PropTypes.oneOf(['standard', 'basic']),
  size: PropTypes.oneOf(['', 'small', 'large', 'fullscreen'])
};
Modal.defaultProps = {
  style: 'standard',
  size: ''
};

module.exports = Modal;
