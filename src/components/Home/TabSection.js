import React, { useState, useEffect } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import NewsTicker from './NewsTicker';

const TabSection = () => {
  const [newsItems, setNewsItems] = useState([
    { title: 'News 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'News 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'News 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  ]);
  
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch notices data
    fetch('http://localhost:5001/api/notices') // Updated to point to your local API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNotices(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching notices:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const addNewsItem = (newItem) => {
    setNewsItems((prevNewsItems) => [...prevNewsItems, newItem]);
  };

  const FacebookFeedEmbed = () => {
    return (
      <div className="shadow-md rounded-3 mx-5 position-relative social-facebook">
        <span
          className="position-absolute top-0 start-50 translate-middle facebook-icon"
          aria-label="facebook"
          data-bs-toggle="tooltip"
          role="contentinfo"
          data-bs-original-title="Facebook"
          title="Facebook"
        ></span>
        <div className="text-danger bg-light social-tiles">
          <div className="facebook-responsive" style={{ maxHeight: '350px', overflow: 'auto' }}>
            <iframe
              className="fb-link w-100"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMahaSjsa&tabs=timeline&width=400&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Facebook"
              style={{ border: 'none', overflow: 'hidden', height: '600px' }}
              scrolling="yes"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    );
  };

  const TwitterFeedEmbed = () => {
    return (
      <div className="shadow-md rounded-3 mx-5 position-relative social-twitter">
        <span
          className="position-absolute top-0 start-50 translate-middle twitter-icon"
          aria-label="twitter"
          data-bs-toggle="tooltip"
          role="contentinfo"
          data-bs-original-title="Twitter"
          title="Twitter"
        ></span>
        <div className="text-danger bg-light social-tiles">
          <div className="twitter-responsive" style={{ maxHeight: '350px', overflow: 'auto' }}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="mahasjsa"
              options={{ height: 350 }}
            />
          </div>
        </div>
      </div>
    );
  };

  const YouTubeFeedEmbed = () => {
    return (
      <div className="shadow-md rounded-3 mx-5 position-relative social-youtube">
        <span
          className="position-absolute top-0 start-50 translate-middle youtube-icon"
          aria-label="youtube"
          data-bs-toggle="tooltip"
          role="contentinfo"
          data-bs-original-title="YouTube"
          title="YouTube"
        ></span>
        <div className="text-danger bg-light social-tiles">
          <div className="youtube-responsive" style={{ maxHeight: '350px', overflow: 'auto' }}>
            <iframe width="560" height="350" src="https://www.youtube.com/embed/pX8YRrMERvQ?si=ZaryjZ-fFvGhhi_z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  };

  const InstagramFeedEmbed = () => {
    return (
      <div className="shadow-md rounded-3 position-relative social-instagram">
        <span
          className="position-absolute top-0 start-50 translate-middle instagram-icon"
          aria-label="instagram"
          data-bs-toggle="tooltip"
          role="contentinfo"
          data-bs-original-title="Instagram"
          title="Instagram"
        ></span>
        <div className="text-danger bg-light social-tiles">
          <div className="instagram-responsive" style={{ maxHeight: '350px', overflow: 'auto' }}>
            <iframe
              className="insta-link w-100"
              src="https://www.instagram.com/p/CI6hS4Nh-UD/embed"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Instagram"
              style={{ border: 'none', overflow: 'hidden', height: '350px' }}
              scrolling="yes"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
            <iframe
              className="insta-link w-100"
              src="https://www.instagram.com/p/CJp8b2Fh-l2/embed"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Instagram"
              style={{ border: 'none', overflow: 'hidden', height: '350px' }}
              scrolling="yes"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section service gray-bg feature-item col-lg-12">
      <div className='row d-flex'>
        <div className="container col-lg-6">
          <Tab.Container id="newsTab" defaultActiveKey="news">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="news">News</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="notices">Notices</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className='tabcontent'>
              <Tab.Pane eventKey="news">
                <NewsTicker/>
              </Tab.Pane>
              <Tab.Pane eventKey="notices">
                <div>
                  <h3>Notices</h3>
                  {loading && <p>Loading...</p>}
                  {error && <p>Error loading notices: {error.message}</p>}
                  {!loading && !error && (
                    <ul>
                      {notices.length > 0 ? (
                        notices.map((notice, index) => (
                          <li key={index}>
                            <h4>{notice.title}</h4>
                            <p>{notice.content}</p>
                          </li>
                        ))
                      ) : (
                        <p>No notices available.</p>
                      )}
                    </ul>
                  )}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
        <div className="container col-lg-6">
          <Tab.Container id="socialTab" defaultActiveKey="fb">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="insta">Instagram</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fb">Facebook</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="yt">YouTube</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="x">Twitter(X)</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="insta">
                <InstagramFeedEmbed />
              </Tab.Pane>
              <Tab.Pane eventKey="fb">
                <FacebookFeedEmbed />
              </Tab.Pane>
              <Tab.Pane eventKey="yt">
                <YouTubeFeedEmbed />
              </Tab.Pane>
              <Tab.Pane eventKey="x">
                <TwitterFeedEmbed />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
};

export default TabSection;
