import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from '../Modal/Modal';
// import Loader from '../Loader';


class ImageGalleryItem extends Component {
  static propTypes = {
    webImg: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleClick = () => {
    const { isModalOpen } = this.state;
    if (!isModalOpen) {
      this.openModal();
    }
  };

  render() {
    const { webImg, alt, largeImageURL } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <li className="ImageGalleryItem" onClick={this.handleClick}>
          <img src={webImg} alt={alt} className="ImageGalleryItem-image" />
        </li>

        {/* {!isModalOpen && (<Loader></Loader>)} */}

        {isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={alt}
            closeModal={this.closeModal}
          ></Modal>
        )}

      </>
    );
  }
}

export default ImageGalleryItem;
