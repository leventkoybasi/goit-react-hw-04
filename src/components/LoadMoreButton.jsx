/* eslint-disable react/prop-types */

function LoadMoreButton({ handleOpenModal }) {
  return (
    <div className='d-flex align-items-center justify-content-center mt-4'>
      <button onClick={handleOpenModal} className='btn btn-primary px-4 py-2'>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreButton;
