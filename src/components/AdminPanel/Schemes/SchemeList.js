import React from 'react';

const SchemeList = ({ schemes, selectedModuleName, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Schemes for Module: {selectedModuleName}</h2>
      {schemes.length === 0 ? (
        <p>No schemes available for this module.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {schemes.map(scheme => (
              <tr key={scheme.id}>
                <td>{scheme.id}</td>
                <td>{scheme.name}</td>
                <td>{scheme.description}</td>
                <td>
                  <button onClick={() => onEdit(scheme.id)}>Edit</button>
                  <button onClick={() => onDelete(scheme.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SchemeList;
