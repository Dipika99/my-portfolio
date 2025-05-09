import React from 'react';

export const PageLoader = () => {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light1 bg-dark">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };