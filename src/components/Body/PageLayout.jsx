import React from 'react';


export const PageLayout = ({ title, subtitle, children }) => {
  return (
    
    <div className="d-flex flex-column min-vh-100">
    {/* Global Header */}
    <div className="container py-4">
      <header className="mb-4 text-center">
        <h2 className="h3 text-light fw-semibold mb-2">{title}</h2>
        {subtitle && <p className="text-muted small">{subtitle}</p>}
      </header>
    </div>
  
    <main className="container flex-grow-1">
      {children}
    </main>
  </div>
  );
};
