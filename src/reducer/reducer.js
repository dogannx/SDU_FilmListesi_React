import axios from 'axios';

export const initialState = {
  query: 'friends',
  filters: {
    genre: '',
    language: '',
    minRating: 0,
  },
  shows: [],
  loading: false,
  error: '',
  watchlist: [],
  page: 1,
  pageSize: 6,
};

export function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, shows: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'SET_QUERY':
      return { ...state, query: action.payload, page: 1 };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload }, page: 1 };
    case 'SET_PAGE_SIZE':
      return { ...state, pageSize: action.payload };
    case 'SET_WATCHLIST':
      return { ...state, watchlist: action.payload };
    case 'ADD_WATCHLIST':
      if (state.watchlist.find((item) => item.id === action.payload.id)) return state;
      return { ...state, watchlist: [...state.watchlist, action.payload] };
    case 'REMOVE_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(item => item.id !== action.payload),
      };
    case 'CLEAR_WATCHLIST':
      return { ...state, watchlist: [] };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
