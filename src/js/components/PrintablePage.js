import React from 'react';

const PrintablePage = () => {
  return (
    <div
      className="printable-page"
      id="printable-page"
      style={{ fontSize: '120px' }}
    >
      <h2>heading</h2>
      <div className="printable-page__description">
        <p>
          <span>text</span>
        </p>
      </div>
    </div>
  );
};

export default PrintablePage;
