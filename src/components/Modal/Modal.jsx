import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount () {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidWillUnmount(){
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackDropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL, alt } = this.props;

    return (
      <div className="overlay" onClick={this.handleBackDropClick}>
        <div className="modal">
          <img src={largeImageURL} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
