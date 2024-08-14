import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import AwardIcon from './IconsHome/trophy-star.png';
import EducationIcon from './IconsHome/Education.png';
import PageHeading from '../Global/PageHeading';
import './Counter.css'; // Make sure to import your CSS file

const Counter = () => {
  const counterRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          const elements = counterRef.current.querySelectorAll('.counterMain > div');
          elements.forEach(el => el.classList.add('animate'));
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.9, // Trigger animation when 10% of the element is in view
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <section>
      <PageHeading heading='Awards'/>
      <div className="counter" ref={counterRef}>
        <div className="container">
          <div className="counterMain d-flex justify-content-center text-center">
            <div className="counterItem">
              <img src={EducationIcon} alt="Scholarship Awarded" />
              <h2>{startCounting && <CountUp end={500} duration={2} />}</h2>
              <p>Scholarship Awarded</p>
            </div>
            <div className="counterItem">
              <img src={AwardIcon} alt="Countries Represented" />
              <h2>{startCounting && <CountUp end={100} duration={2} />}</h2>
              <p>Countries Represented</p>
            </div>
            <div className="counterItem">
              <img src={EducationIcon} alt="Fields of Study" />
              <h2>{startCounting && <CountUp end={100} duration={2} />}</h2>
              <p>Fields of Study</p>
            </div>
            <div className="counterItem">
              <img src={AwardIcon} alt="Success Stories" />
              <h2>{startCounting && <CountUp end={200} duration={2} />}</h2>
              <p>Success Stories</p>
            </div>
            <div className="counterItem">
              <img src={EducationIcon} alt="Funding Provided" />
              <h2>{startCounting && <CountUp end={10} duration={2} />}&nbsp;Cr+</h2>
              <p>Funding Provided</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
