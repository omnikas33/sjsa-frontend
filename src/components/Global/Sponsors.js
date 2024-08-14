import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sponsor1 from './Sponsors/aaplesarkar.png';
import sponsor2 from './Sponsors/GoiWd.png';
import sponsor3 from './Sponsors/GoM.png';
import sponsor4 from './Sponsors/NPI.png';
import sponsor5 from './Sponsors/Right to Information.png';

const Sponsors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section clients">
      <div className="container">
        <Slider {...settings} className="clients-logo">
          <div className="client-thumb">
            <img src={sponsor1} className="img-fluid" alt="Sponsor 1" />
          </div>
          <div className="client-thumb">
            <img src={sponsor2} className="img-fluid" alt="Sponsor 2" />
          </div>
          <div className="client-thumb">
            <img src={sponsor3} className="img-fluid" alt="Sponsor 3" />
          </div>
          <div className="client-thumb">
            <img src={sponsor4} className="img-fluid" alt="Sponsor 4" />
          </div>
          <div className="client-thumb">
            <img src={sponsor5} className="img-fluid" alt="Sponsor 5" />
          </div>
          {/* Add more client logos as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default Sponsors;
