import React, { useState } from 'react';

function ExpandableSection({ title, children, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);

  return (
    <div style={{ marginBottom: '1rem' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          textAlign: 'left',
          borderRadius: '8px',
          border: '1px solid #ccc',
          backgroundColor: isOpen ? '#e0e0e0' : '#f9f9f9',
          cursor: 'pointer',
          outline: 'none',
          color: '#000000'
        }}
        aria-expanded={isOpen}
      >
        {title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && (
        <div style={{
          padding: '1rem',
          border: '1px solid #ccc',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px',
          backgroundColor: '#fff'
        }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default ExpandableSection;
