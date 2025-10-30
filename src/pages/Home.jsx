import React, { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { initialState, reducer } from '../reducer/reducer';
import { searchShows } from '../api/tvmaze';
import Filters from '../components/Filters';
import SearchBox from '../components/SearchBox';
import TVList from '../components/TVList';
import WatchlistPanel from '../components/WatchlistPanel';
import Pagination from '../components/Pagination';

const Home = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { query, filters, shows, watchlist, loading, error, page, pageSize } = state;

  useEffect(() => {
    (async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        let data = await searchShows(query);
        // Filtreleme:
        if (filters.genre) data = data.filter(s => s.show.genres.includes(filters.genre));
        if (filters.language) data = data.filter(s => s.show.language === filters.language);
        if (+filters.minRating) data = data.filter(s => (s.show.rating.average || 0) >= filters.minRating);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAILURE', payload: 'Veriler alınamadı!' });
      }
    })();
  }, [query, filters]);

  const totalPages = Math.ceil(shows.length / pageSize);

  return (
    <div style={{ display: 'flex', padding: 24 }}>
      <div style={{ flex: 1, marginRight: 40 }}>
        <h2>🎬 Kampüs Film Kulübü</h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: 18 }}>
          <SearchBox query={query} onSearch={q => dispatch({ type: 'SET_QUERY', payload: q })} />
          <Filters filters={filters} onChange={partial => dispatch({ type: 'SET_FILTERS', payload: partial })} />
        </div>
        <button onClick={() => dispatch({type: 'SET_QUERY', payload: 'friends'})}>Sıfırla</button>
        <TVList
          shows={shows}
          loading={loading}
          error={error}
          page={page}
          pageSize={pageSize}
          onAddWatchlist={show => dispatch({ type: 'ADD_WATCHLIST', payload: show })}
          onShowDetail={id => navigate(`/show/${id}`)}
        />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={num => dispatch({type:'SET_PAGE',payload:num})}
        />
      </div>
      <WatchlistPanel
        watchlist={watchlist}
        onRemove={id => dispatch({ type: 'REMOVE_WATCHLIST', payload: id })}
        onClear={() => dispatch({ type: 'CLEAR_WATCHLIST' })}
      />
    </div>
  );
};

export default Home;
