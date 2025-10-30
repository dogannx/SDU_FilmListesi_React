import React from 'react';

const TVCard = ({ show, onAddWatchlist, onShowDetail }) => {
  const {
    id,
    name,
    image,
    genres,
    language,
    rating,
    summary,
  } = show;

  return (
    <div className="tvcard">
      <img src={image?.medium || '/no-poster.jpg'} alt={name} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 8 }} />
      <h3>{name}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 4 }}>
        {genres.map(g => <span className="genre-tag" key={g}>{g}</span>)}
        <span className="lang-tag">{language}</span>
        {rating?.average && <span className="rating-tag">⭐ {rating.average}</span>}
      </div>
      <div style={{ fontSize: '0.95em', color: '#333', marginBottom: 10 }} dangerouslySetInnerHTML={{ __html: summary?.slice(0, 110) + '...' }}/>
      <div style={{ display:'flex', gap: 8 }}>
        <button onClick={() => onShowDetail(id)}>Detay</button>
        <button onClick={() => onAddWatchlist(show)} style={{ background:'#FFB200', color:'#222', borderRadius: 8 }}>
          Gösterime Ekle
        </button>
      </div>
    </div>
  );
};

export default TVCard;
