'use client';

import { Product } from '@/data-types';
import { useEffect, useState } from 'react';

export default function useFetchProduct() {
  const [dataProduct, setDataProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDataProduct() {
      setLoading(true);
      try {
        const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/product`);
        const response = await fetchData.json();
        setDataProduct(response.data);
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

    fetchDataProduct();
  }, []);
  return { dataProduct, loading, error };
}
