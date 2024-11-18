'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/config/firebase';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/login');
        return;
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>; // Atau komponen loading yang lebih menarik
  }

  return <>{children}</>;
} 