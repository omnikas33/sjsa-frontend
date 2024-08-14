import React from 'react';
import { useParams } from 'react-router-dom';
import schemes from '../corpData.js';
import SchemeDetails from './Scheme/SchemeDetailsPage.js';

const SubSchemeCorp = () => {
  const { schemeId, subSchemeId } = useParams();
  const scheme = schemes.find(s => s.id === parseInt(schemeId, 10));
  const subScheme = scheme?.subSchemes.find(ss => ss.id === parseInt(subSchemeId, 10));

  return (
    <div className=" mt-1">
      {subScheme ? (
        <SchemeDetails subScheme={subScheme} />
      ) : (
        <p>Sub-scheme not found</p>
      )}
    </div>
  );
};

export default SubSchemeCorp;
