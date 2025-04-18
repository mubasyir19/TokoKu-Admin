import { PayloadAccount } from '@/data-types';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useState, useEffect } from 'react';

export default function useAuthPayload() {
  const [payload, setPayload] = useState<PayloadAccount | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAndDecodePayload = async () => {
      setLoading(true);
      setError(null);
      try {
        const tokenAuth = Cookies.get('authToken');
        if (tokenAuth) {
          const jwtToken = atob(tokenAuth);
          const decodedPayload = jwtDecode<PayloadAccount>(jwtToken);
          setPayload(decodedPayload);
        } else {
          setPayload(null);
        }
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Error authentication');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAndDecodePayload();
  }, []);

  return { payload, loading, error };
}
