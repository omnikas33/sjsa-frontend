import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FindScheme from './FindScheme';
import PageHeading from '../Global/PageHeading';

const schemesData = [
  {
    icon: require('./IconsHome/SeniorCitizen.png'),
    count: 3,
    title: 'Senior Citizen',
    route: '/schemes', // Example route
  },
  {
    icon: require('./IconsHome/EducationT.png'),
    count: 25,
    title: 'Education And Training',
    route: '/schemes',
  },
  {
    icon: require('./IconsHome/EconomicUpliftment1.png'),
    count: 9,
    title: 'Economic Upliftment',
    route: '/schemes',
  },
  {
    icon: require('./IconsHome/self-employed.png'),
    count: 14,
    title: 'Employment Scheme',
    route: '/schemes',
  },
  {
    icon: require('./IconsHome/trophy-star.png'),
    count: 7,
    title: 'Awards',
    route: '/schemes',
  },
  {
    icon: require('./IconsHome/network-connection.png'),
    count: 11,
    title: 'Social Integration',
    route: '/schemes',
  },
  {
    icon: require('./IconsHome/out.png'),
    count: 11,
    title: 'Social Remedies',
    route: '/schemes',
  },
];

const HomeScheme = () => {
  const [counts, setCounts] = useState(Array(schemesData.length).fill(0));

  useEffect(() => {
    const timers = schemesData.map((scheme, index) => {
      let start = 0;
      const end = scheme.count;
      const totalDuration = 2000;
      const incrementTime = (totalDuration / end) * 1.05;

      const timer = setInterval(() => {
        start += 1;
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = start;
          return newCounts;
        });
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return timer;
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, []);

  return (
    <div className=" mt-5 homeschemes">
      <PageHeading heading='Schemes'/>
      <div className="row" style={{ padding:'10px' , justifyContent:'center'}}>
        {schemesData.map((scheme, index) => (
          <Link key={index} to={scheme.route} className="scheme-link col-md-3 col-sm-6 mb-4 text-center">
            <div className="scheme-item">
              <img src={scheme.icon} alt={scheme.title} className="schemes-icon" />
              <div className="oval"></div>

              <h6 style={{ color: 'green', marginTop: '10px' }}>{counts[index]} Scheme</h6>
              <h4>{scheme.title}</h4>
            </div>
          </Link>
        ))}
      </div>
      {/* <FindScheme /> */}
    </div>
  );
};

export default HomeScheme;
