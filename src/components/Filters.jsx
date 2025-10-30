import React from 'react';

const Filters = ({ filters, onChange }) => {
  return (
    <div className="filters">
      <select value={filters.genre} onChange={e => onChange({ genre: e.target.value })}>
        <option value="">Tür (hepsi)</option>
        <option value="Drama">Drama</option>
        <option value="Comedy">Komedi</option>
        <option value="Action">Aksiyon</option>
        <option value="Science-Fiction">Bilim Kurgu</option>
        {/* Diğer türler eklenebilir */}
      </select>
      <select value={filters.language} onChange={e => onChange({ language: e.target.value })}>
        <option value="">Dil (hepsi)</option>
        <option value="English">İngilizce</option>
        <option value="Turkish">Türkçe</option>
        <option value="Japanese">Japonca</option>
        {/* Diğer diller eklenebilir */}
      </select>
      <select value={filters.minRating} onChange={e => onChange({ minRating: e.target.value })}>
        <option value={0}>Min. Puan (0+)</option>
        <option value={6}>6+</option>
        <option value={7}>7+</option>
        <option value={8}>8+</option>
      </select>
    </div>
  );
};

export default Filters;
