import React, { Component, PropTypes } from 'react';
import Portal from 'react-portal';

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
    return (
      <div id='reactInnerModal' className={className} style={{'margin-top': - this.state.modalHeight / 2}}>
        <i className='close icon' onClick={this.props.closePortal}></i>
        {this.props.children}
      </div>
    );
  }
}

InnerModal.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.oneOf(['standard', 'basic']),
  size: PropTypes.oneOf(['', 'small', 'large', 'fullscreen'])
};
InnerModal.defaultProps = {
  style: 'standard',
  size: ''
};

class Modal extends Component {
  render() {
    return (
      <Portal className='ui dimmer modals visible active page transition'
      openByClickOn={this.props.trigger}
      isOpened={this.props.isOpened}
      closeOnEsc={this.props.closeOnEsc}
      closeOnOutsideClick={this.props.closeOnOutsideClick}
      onClose={this.props.onClose}>
        <InnerModal style={this.props.style} size={this.props.size}>
          {this.props.children}
        </InnerModal>
      </Portal>
    );
  }
}

Modal.propTypes = {
  trigger: PropTypes.element,
  isOpened: PropTypes.bool,
  closeOnEsc: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.element.isRequired,
  style: PropTypes.oneOf(['standard', 'basic']),
  size: PropTypes.oneOf(['', 'small', 'large', 'fullscreen'])
};
Modal.defaultProps = {
  // trigger: <button className='ui button'>Open Modal</button>,
  // isOpened: false,
  closeOnEsc: true,
  closeOnOutsideClick: true,
  style: 'standard',
  size: ''
};

export default Modal;
