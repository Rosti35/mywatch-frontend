'use client';

import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

export default function Page() {
  const navigation = useRouter();

  useEffect(() => {
    navigation.push('/dashboard');
  }, []);
  return null;
}
