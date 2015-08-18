'use strict';

import React, { Component } from 'react';
import Modal from './modal';

class ModalDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
  }

  open() {
    this.setState({isOpened: true});
  }

  close() {
    this.setState({isOpened: false});
  }

  render() {
    return (
      <div>
        <button className='ui button blue' onClick={this.open.bind(this)}>Click me</button>
        <Modal style='standard' size='fullscreen' isOpened={this.state.isOpened} closeIcon closeOnOutsideClick onClose={this.close.bind(this)}>
          <div className='header'>
            Profile Picture
          </div>
          <div className='image content'>
            <div className='ui medium image'>
              <img src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
            </div>
            <div className='description'>
              <div className='ui header'>We've auto-chosen a profile image for you.</div>
              <p>We've grabbed the following image from the <a href='https://www.gravatar.com' target='_blank'>gravatar</a> image associated with your registered e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </div>
          </div>
          <div className='actions'>
            <div className='ui black deny button' onClick={this.close.bind(this)}>
              Nope
            </div>
            <div className='ui positive right labeled icon button'>
              Yep, that's me
              <i className='checkmark icon'></i>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

React.render(<ModalDemo />, document.getElementById('content'));
