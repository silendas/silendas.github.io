'use client';
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const callbackUrl = searchParams.get('callbackUrl');
        router.push(callbackUrl || '/skills');
      }
    });

    return () => unsubscribe();
  }, [router, searchParams]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login berhasil!');
    } catch (error) {
      toast.error('Login gagal. Periksa email dan password Anda.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-2xl font-bold text-white mb-6">Login Admin</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
