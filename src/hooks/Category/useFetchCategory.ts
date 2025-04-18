'use client';

import { CategoryProduct } from '@/data-types';
import { useEffect, useState } from 'react';

export default function useFetchCategory() {
  const [dataCategory, setDataCategory] = useState<CategoryProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDataCategory() {
      setLoading(true);
      try {
        const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/category`);
        const response = await fetchData.json();
        setDataCategory(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Error fetch data');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchDataCategory();
  }, []);
  return { dataCategory, loading, error };
}
