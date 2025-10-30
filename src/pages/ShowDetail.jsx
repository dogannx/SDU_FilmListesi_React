import React, { useEffect, useState } from 'react';
import { getShowDetail, getShowEpisodes } from '../api/tvmaze';
import { useParams } from 'react-router-dom';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const details = await getShowDetail(id);
        setShow(details);
        const eps = await getShowEpisodes(id);
        setEpisodes(eps);
        setError('');
      } catch (e) {
        setError('Detaylar alınamadı!');
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;
  if (!show) return null;

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 18 }}>
      <h2>{show.name}</h2>
      <img src={show.image?.medium || '/no-poster.jpg'} alt={show.name} />
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
      <h3>Bölümler</h3>
      <ul>
        {episodes.map(ep => (
          <li key={ep.id}>{ep.season}. Sezon - {ep.number}. Bölüm: {ep.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowDetail;
