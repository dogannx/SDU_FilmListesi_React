import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination" style={{ display: 'flex', gap: '8px', justifyContent: 'center', margin: '20px 0' }}>
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>İlk</button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Önceki</button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          style={{ fontWeight: currentPage === i + 1 ? 'bold' : 'normal' }}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Sonraki</button>
      <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>Son</button>
    </div>
  );
};

export default Pagination;
