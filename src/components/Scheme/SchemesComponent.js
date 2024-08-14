import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import PageHeading from '../Global/PageHeading';
import { Card, Button, Collapse, Spinner, Form, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SchemesComponent.css';
import jsPDF from 'jspdf';

const SchemesComponent = () => {
  const [modules, setModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [schemes, setSchemes] = useState([]);
  const [expandedSchemeId, setExpandedSchemeId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchModules = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5001/api/modules');
        setModules(response.data);
      } catch (error) {
        console.error('Error fetching modules:', error);
        toast.error('Failed to fetch modules');
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  useEffect(() => {
    if (selectedModule && selectedModule.id) {
      const fetchSchemes = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:5001/api/modules/${selectedModule.id}/schemes`);
          setSchemes(response.data);
        } catch (error) {
          console.error('Error fetching schemes:', error);
          toast.error('Failed to fetch schemes');
        } finally {
        setLoading(false);
        }
      };

      fetchSchemes();
    }
  }, [selectedModule]);

  const handleTabClick = (scheme) => {
    setExpandedSchemeId(expandedSchemeId === scheme.id ? null : scheme.id);
  };

  const handleSubTabClick = (schemeId, subSchemeId) => {
    navigate(`/scheme/${schemeId}/sub-scheme/${subSchemeId}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredSchemes = schemes.filter(scheme =>
    scheme.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleModalShow = (scheme) => {
    setSelectedScheme(scheme);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedScheme(null);
  };

  const handleShare = (scheme) => {
    const schemeUrl = window.location.href;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(schemeUrl).then(() => {
        toast.success('Link copied to clipboard!');
      }).catch((error) => {
        console.error('Error copying link:', error);
        toast.error('Failed to copy link');
      });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = schemeUrl;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        toast.success('Link copied to clipboard!');
      } catch (error) {
        console.error('Error copying link:', error);
        toast.error('Failed to copy link');
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  const handleDownloadPDF = (scheme) => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.setFontSize(18);
    pdf.text(scheme.name, 10, 10);
    
    pdf.setFontSize(12);
    pdf.text(`Description: ${scheme.description}`, 10, 20);
    pdf.text(`Objective: ${scheme.objective}`, 10, 30);
    pdf.text(`Funding: ₹ ${scheme.funding}`, 10, 40);
    pdf.text(`Benefits: ₹ ${scheme.benefits}`, 10, 50);
    pdf.text(`Eligibility: ${scheme.eligibility}`, 10, 60);
    pdf.text(`Beneficiary: ${scheme.beneficiary}`, 10, 70);
    
    pdf.save(`${scheme.name}.pdf`);
  };

  return (
    <div className="container">
      <div className="tab-container mb-4">
        {loading ? (
          <div className="loading-container">
            <Spinner animation="border" variant="primary" />
            <p>Loading modules...</p>
          </div>
        ) : (
          modules.map((module) => (
            <div
              key={module.id}
              className={`tab ${selectedModule && selectedModule.id === module.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedModule(module);
                setSchemes([]);
                setExpandedSchemeId(null);
              }}
              aria-label={`Select ${module.name}`}
            >
              <h6 className="mb-0">{module.name}</h6>
            </div>
          ))
        )}
      </div>

      {selectedModule && (
        <Form.Control
          type="text"
          placeholder="Search schemes..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="mb-4"
        />
      )}

      <div className="row">
        <div className="col-lg-12">
          {loading ? (
            <div className="loading-container">
              <Spinner animation="border" variant="primary" />
              <p>Loading schemes...</p>
            </div>
          ) : filteredSchemes.length > 0 ? (
            <div className="row">
              {filteredSchemes.map((scheme) => (
                <div key={scheme.id} className="col-md-6 col-lg-4 mb-4">
                  <Card className="scheme-card">
                    <Card.Header className="bg-primary text-white">
                      {scheme.name}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <PageHeading heading={scheme.name} />
                      </Card.Title>
                      <Card.Text>
                        <strong>Description:</strong> {scheme.description}
                      </Card.Text>
                      <Button
                        variant="outline-primary"
                        onClick={() => handleModalShow(scheme)}
                        aria-controls={`scheme-details-${scheme.id}`}
                        aria-expanded={expandedSchemeId === scheme.id}
                      >
                        View Details
                      </Button>
                      <Button
                        variant="outline-success"
                        className="ms-2"
                        onClick={() => handleDownloadPDF(scheme)}
                      >
                        Download PDF
                      </Button>
                      <Button
                        variant="outline-danger"
                        className="ms-2"
                        onClick={() => handleShare(scheme)}
                      >
                        Copy Link
                      </Button>
                      <Collapse in={expandedSchemeId === scheme.id}>
                        <div id={`scheme-details-${scheme.id}`} className="mt-3">
                          <Card.Text>
                            <strong>Objective:</strong> {scheme.objective}
                          </Card.Text>
                          <Card.Text>
                            <strong>Funding:</strong> ₹ {scheme.funding}
                          </Card.Text>
                          <Card.Text>
                            <strong>Benefits:</strong> ₹ {scheme.benefits}
                          </Card.Text>
                          <Card.Text>
                            <strong>Eligibility:</strong> {scheme.eligibility}
                          </Card.Text>
                          <Card.Text>
                            <strong>Beneficiary:</strong> {scheme.beneficiary}
                          </Card.Text>
                        </div>
                      </Collapse>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <p>No schemes available for this module</p>
          )}
        </div>
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedScheme?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedScheme && (
            <div>
              <p><strong>Description:</strong> {selectedScheme.description}</p>
              <p><strong>Objective:</strong> {selectedScheme.objective}</p>
              <p><strong>Funding:</strong> ₹ {selectedScheme.funding}</p>
              <p><strong>Benefits:</strong> ₹ {selectedScheme.benefits}</p>
              <p><strong>Eligibility:</strong> {selectedScheme.eligibility}</p>
              <p><strong>Beneficiary:</strong> {selectedScheme.beneficiary}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button
            variant="outline-success"
            onClick={() => handleDownloadPDF(selectedScheme)}
          >
            Download PDF
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => handleShare(selectedScheme)}
          >
            Copy Link
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SchemesComponent;
