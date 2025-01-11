import { useState } from "react";
import ReactModal from "react-modal";

function ImageModal() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} className='btn btn-primary'>
        Trigger Modal
      </button>
      <ReactModal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div className='position-relative'>
          <button
            type='button'
            className='btn-close position-absolute top-0 end-0'
            aria-label='Close'
            onClick={handleCloseModal}
          ></button>
          <div>
            <img
              src='https://picsum.photos/id/49/1000/800'
              className='img-thumbnail p-4'
              alt='image'
            />
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default ImageModal;
