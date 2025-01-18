import ImageCard from './ImageCard';

function ImageGallery({ picture }) {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <ImageCard picture={picture} />
      </div>
    </div>
  );
}

export default ImageGallery;
