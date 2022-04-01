import { useCallback, useEffect, useReducer, useRef } from 'react';

import { API_AUTHORIZATION_TOKEN, API_URL } from '@/config';

interface FetchResponse<T> {
  data?: T[];
  error?: Error;
  isLoading?: boolean;
  fetchMore: () => void;
}

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T[] }
  | { type: 'error'; payload: Error };

function useFetch<T = unknown>(url = '', options?: RequestInit): FetchResponse<T> {
  const cancelRequest = useRef<boolean>(false);

  const initialState: FetchResponse<T> = {
    error: undefined,
    data: undefined,
    isLoading: false,
    fetchMore: () => {},
  };

  const fetchReducer = (
    state: FetchResponse<T> = initialState,
    action: Action<T>
  ): FetchResponse<T> => {
    switch (action.type) {
      case 'loading':
        return { ...state, isLoading: true };
      case 'fetched':
        console.log('fetched', { ...state, data: action.payload, isLoading: false });
        return { ...state, data: action.payload, isLoading: false };
      case 'error':
        return { ...state, error: action.payload, isLoading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch({ type: 'loading' });

    try {
      const response = await fetch(`${API_URL}${url}`, {
        ...options,
        'x-api-key': API_AUTHORIZATION_TOKEN,
      } as RequestInit);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = (await response.json()) as T[];
      if (cancelRequest.current) return;

      return data;
    } catch (error) {
      if (cancelRequest.current) return;
      dispatch({ type: 'error', payload: error as Error });
    }
  }, [url, options, dispatch]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const response = (await fetchData()) as T[];
      dispatch({ type: 'fetched', payload: response });
    };
    fetchInitialData();
    return () => {
      cancelRequest.current = true;
    };
  }, [fetchData, dispatch]);

  const fetchMore = useCallback(async () => {
    const response = (await fetchData()) as T[];
    dispatch({ type: 'fetched', payload: response });
  }, [fetchData, dispatch]);

  return { ...state, fetchMore };
}

export default useFetch;
