'use client';
import AuthCheck from '../components/AuthCheck';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import Sidemenu from '../components/Sidemenu';
import toast from 'react-hot-toast';

interface Message {
  id: string;
  createdAt: Timestamp;
  email: string;
  name: string;
  message: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const messagesQuery = query(
        collection(db, 'messages'),
        orderBy('createdAt', 'desc')
      );
      const messagesSnapshot = await getDocs(messagesQuery);
      const messagesData = messagesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Message[];
      setMessages(messagesData);
    } catch {
      toast.error('Gagal mengambil data pesan');
    }
  };

  const formatDate = (timestamp: Timestamp) => {
    return timestamp.toDate().toLocaleString('id-ID', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  };

  return (
    <AuthCheck>
      <div className="flex min-h-screen bg-gray-900">
        <Sidemenu />
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-white mb-6">Pesan Masuk</h1>
          
          <div className="grid grid-cols-1 gap-4">
            {messages.map((message) => (
              <div key={message.id} className="bg-gray-800 p-4 rounded">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-white font-bold">{message.name}</h3>
                    <p className="text-gray-400 text-sm">{message.email}</p>
                  </div>
                  <span className="text-gray-400 text-sm">
                    {formatDate(message.createdAt)}
                  </span>
                </div>
                <p className="text-gray-300">{message.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthCheck>
  );
}
