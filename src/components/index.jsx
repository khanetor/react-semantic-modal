import React, { Component } from 'react';
import Modal from './modal';

class ModalDemo extends Component {
  render() {
    return (
      <Modal style='basic' size='fullscreen' trigger={<button className='ui button blue'>Click me</button>}>
        <div className='header'>
          Profile Picture
        </div>
        <div className='image content'>
          <div className='ui medium image'>
            <img src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
          </div>
          <div className='description'>
            <div className="ui header">We've auto-chosen a profile image for you.</div>
            <p>We've grabbed the following image from the <a href='https://www.gravatar.com' target='_blank'>gravatar</a> image associated with your registered e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </div>
        </div>
        <div className='actions'>
          <div className='ui black deny button'>
            Nope
          </div>
          <div className='ui positive right labeled icon button'>
            Yep, that's me
            <i className='checkmark icon'></i>
          </div>
        </div>
      </Modal>
    );
  }
}

React.render(<ModalDemo />, document.getElementById('content'));
