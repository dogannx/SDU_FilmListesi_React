import React from 'react';
import TVCard from './TVCard';

const TVList = ({ shows, loading, error, page, pageSize, onAddWatchlist, onShowDetail }) => {
  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;
  if (!shows.length) return <div>Sonuç bulunamadı.</div>;

  // Şovları sayfalara böl
  const start = (page - 1) * pageSize;
  const paged = shows.slice(start, start + pageSize);

  return (
    <div className="tvlist" style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {paged.map(({ show }) => (
        <TVCard
          key={show.id}
          show={show}
          onAddWatchlist={onAddWatchlist}
          onShowDetail={onShowDetail}
        />
      ))}
    </div>
  );
};

export default TVList;
