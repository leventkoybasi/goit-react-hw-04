function ImageCard() {
  return (
    <div className='container' style={{ maxWidth: "1200px" }}>
      <div className='row'>
        {[...Array(16)].map((item, index) => (
          <div
            key={index}
            className='col-12 col-sm-4 col-lg-3 d-flex align-items-center justify-content-center'
          >
            <img
              src={`https://picsum.photos/id/${41 + index}/250/200`}
              className='img-thumbnail'
              alt={`image-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
