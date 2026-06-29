import { useState,useEffect } from 'react'
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T = unknown>(url: string, options?: RequestInit) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setState({ data: null, loading: true, error: null });
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = (await res.json()) as T;
        if (isMounted) setState({ data: json, loading: false, error: null });
      } catch (err) {
        if (isMounted)
          setState({
            data: null,
            loading: false,
            error: err instanceof Error ? err.message : String(err),
          });
      }
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return state;
}