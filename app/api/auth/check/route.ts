import { NextResponse } from 'next/server';
import { auth } from '@/app/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export async function GET() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      
      if (user) {
        resolve(NextResponse.json({ success: true }));
      } else {
        resolve(NextResponse.json({ error: 'Unauthorized' }, { status: 401 }));
      }
    });
  });
} 