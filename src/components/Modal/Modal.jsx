import React, { Component } from 'react';

export class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.onKeyDown);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.onKeyDown);
  };

  onKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  render() {
    return (
      <div
        className="Overlay"
        onClick={evt => {
          if (evt.currentTarget === evt.target) {
            this.props.onModalClose();
          }
        }}
      >
        <div className="Modal">
          <img src={this.props.largeImageURL} alt="big size" />
        </div>
      </div>
    );
  }
}

export default Modal;
