'use client';

import { Order } from '@/data-types';
import { getTokenCookies } from '@/helpers/helper';
import { useEffect, useState } from 'react';

export default function useFetchOrder() {
  const [dataOrder, setDataOrder] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDataOrder() {
      setLoading(true);
      const jwtToken = getTokenCookies();
      try {
        const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/order`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });
        const response = await fetchData.json();
        console.log('ini semua order = ', response.data);
        setDataOrder(response.data);
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

    fetchDataOrder();
  }, []);
  return { dataOrder, loading, error };
}
