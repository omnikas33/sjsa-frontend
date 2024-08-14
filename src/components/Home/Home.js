import React, { useEffect, useRef } from 'react';
import ImageSlider from '../Home/ImageSlider';
import TabSection from '../Home/TabSection';
import HomeScheme from './HomeScheme';
import KeyPersonsTab from './KeyPersonsTab';
import Counter from './Counter';
import DepartmentSection from './DepartmentSection';
import './Home.css'; // Ensure correct path to CSS file

function Home() {
  const homeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = homeRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger scroll event on mount to handle initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='main-content' ref={homeRef}>
      <ImageSlider className="animate-on-scroll" />
      <KeyPersonsTab className="animate-on-scroll" />
      <DepartmentSection className="animate-on-scroll" />
      <Counter className="animate-on-scroll" />
      {/* <HomeScheme /> */}
      <TabSection className="animate-on-scroll" />
    </div>
  );
}

export default Home;
