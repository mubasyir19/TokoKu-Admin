import { Order } from '@/data-types';
import { getTokenCookies } from '@/helpers/helper';
import { useEffect, useState } from 'react';

export default function useFetchUserOrder({ userId, orderId }: { userId: string; orderId: string }) {
  const [dataUserOrder, setDataUserOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserOrder = async (userId: string, orderId: string) => {
    setLoading(true);
    const jwtToken = getTokenCookies();
    try {
      const fetchData = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_TOKOKU}/order/detail/${userId}/${orderId}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });

      const response = await fetchData.json();
      setDataUserOrder(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Error fetch data');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserOrder(userId, orderId);
  }, [userId, orderId]);

  return { dataUserOrder, loading, error };
}
