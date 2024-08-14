import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../AdminPanel.css';
import PageHeading from '../../Global/PageHeading';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch images from the server
    axios.get('http://localhost:5001/api/images')
      .then(response => setImages(response.data))
      .catch(error => {
        console.error('Error fetching images:', error);
        setError('Error fetching images. Please try again later.');
      });
  }, []);

  const handleImageUpload = async (event) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5001/api/upload', formData);
      console.log('Image uploaded:', response.data);
      setImages(prevImages => [...prevImages, { url: response.data.url }]);
      setFile(null);
    } catch (error) {
      console.error('Error uploading image:', error);
      setError('Error uploading image. Please try again later.');
    }
  };

  const handleImageDelete = async (filename) => {
    console.log('Attempting to delete image with filename:', filename);
    try {
      await axios.delete(`http://localhost:5001/api/deleteImage/${filename}`);
      console.log('Image deleted successfully');
      setImages(images.filter(image => image.url.split('/').pop() !== filename));
    } catch (error) {
      console.error('Error deleting image:', error);
      setError('Error deleting image. Please try again later.');
    }
  };
  
  return (
    <div className='card'>
      <PageHeading heading='Image Slider'/>
      {/* Image Upload Form */}
      <form className='image-upload-form' onSubmit={handleImageUpload}>
        <input
          className='file-input'
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className='button-upload'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" stroke="#ffffff" strokeWidth="2"></path>
            <path d="M17 15V18M17 21V18M17 18H14M17 18H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          Upload Image
        </button>
      </form>
      {error && <p className={styles.errorMessage}>{error}</p>}
      {/* Image Table */}
      <table className={styles.imageTable}>
        <thead>
          <tr>
            <th>Preview</th>
            <th>Filename</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {images.map(image => (
            <tr key={image.url}>
              <td>
                <img 
                  src={image.url} 
                  alt={`Preview of ${image.url.split('/').pop()}`} 
                  style={{ width: '200px', height: 'auto' }} 
                />
              </td>
              <td>{image.url.split('/').pop()}</td>
              <td>
                <button 
                  className='button-delete'
                  onClick={() => handleImageDelete(image.url.split('/').pop())}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height="25" width="25">
                    <path fill="#6361D9" d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.2502 14.7095L5.49883 7.24939H5.00017C4.58595 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58595 5.74939 5.00017 5.74939H7.16638Z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
                  <span className={styles.tooltipTextDelete}>Remove</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImageSlider;
