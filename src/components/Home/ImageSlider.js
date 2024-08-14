import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch images from the server
    axios.get('http://localhost:5001/api/images')
      .then(response => {
        setImages(response.data); // Assuming response.data contains the array of images
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        setError('Error fetching images. Please try again later.');
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true, // Ensures the slider loops infinitely
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enables autoplay for continuous sliding
    autoplaySpeed: 3000, // Duration of each slide in milliseconds
    arrows: true,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        {dots}
      </div>
    ),
    prevArrow: <div className="slick-prev">‹</div>,
    nextArrow: <div className="slick-next">›</div>
  };

  if (error) {
    return <div className="image-slider-error">Error fetching images: {error}</div>;
  }

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={`Slide ${image.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
