import React from 'react';

const Alerts = () => {
  return (
    <div>
      <h1 className="text-2xl mb-4">Alerts</h1>
      <div className="alert alert-info">This is an info alert</div>
      <div className="alert alert-success">This is a success alert</div>
      <div className="alert alert-warning">This is a warning alert</div>
      <div className="alert alert-error">This is an error alert</div>
    </div>
  );
};

export default Alerts;
