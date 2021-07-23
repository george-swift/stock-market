import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

const client = axios.create({ baseURL: API_BASE_URL });

export const fetchListing = () => client.get(`stock/list?apikey=${process.env.REACT_APP_API_KEY}`);

export const fetchNasdaq = () => client.get(`nasdaq_constituent?apikey=${process.env.REACT_APP_API_KEY}`);

export const useFetch = (service) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const fetchAPI = useCallback(async () => {
    try {
      const response = await client.get(`${service}&apikey=${process.env.REACT_APP_API_KEY}`);
      const json = await response.data;
      setData(json);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }, [service]);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  return { data, error, loading };
};
