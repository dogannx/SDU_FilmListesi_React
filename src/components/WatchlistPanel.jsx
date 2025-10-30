import React from 'react';

const WatchlistPanel = ({ watchlist, onRemove, onClear }) => (
  <div className="watchlist-panel" style={{ minWidth: 260, background: '#fff', borderRadius: 10, padding: 16, boxShadow: '0 2px 6px #eee' }}>
    <h3>Gösterime Girecekler ({watchlist.length})</h3>
    {watchlist.length === 0 && <div>Listeye eklenmiş yapım yok.</div>}
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {watchlist.map(show => (
        <li key={show.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <span style={{ flex: 1 }}>{show.name}</span>
          <button onClick={() => onRemove(show.id)} style={{ color: 'red' }}>Kaldır</button>
        </li>
      ))}
    </ul>
    {watchlist.length > 0 && (
      <button style={{ marginTop: 6 }} onClick={onClear}>
        Listeyi Temizle
      </button>
    )}
  </div>
);

export default WatchlistPanel;
