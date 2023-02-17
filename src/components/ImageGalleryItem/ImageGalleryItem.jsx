import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../Modal/Modal';
// import Loader from '../Loader';
function ImageGalleryItem({ webImg, largeImageURL, alt }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    if (!isModalOpen) {
      openModal();
    }
  };

  return (
    <>
      <li className="ImageGalleryItem" onClick={handleClick}>
        <img src={webImg} alt={alt} className="ImageGalleryItem-image" />
      </li>

      {/* {!isModalOpen && (<Loader></Loader>)} */}

      {isModalOpen && (
        <Modal
          largeImageURL={largeImageURL}
          alt={alt}
          closeModal={closeModal}
        ></Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  webImg: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
