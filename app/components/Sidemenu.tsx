import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { auth } from '../config/firebase';

export default function Sidemenu() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      
      await fetch('/api/auth/logout', {
        method: 'POST',
      });

      toast.success('Berhasil logout');
      router.push('/login');
    } catch (error) {
      toast.error('Gagal logout');
      console.error(error);
    }
  };

  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <div className="text-white text-xl font-bold mb-8">Admin Dashboard</div>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link 
              href="/skills" 
              className={`block p-2 rounded ${
                pathname.includes('/skills') 
                  ? 'bg-blue-600' 
                  : 'hover:bg-gray-700'
              } text-white`}
            >
              Kelola Skills
            </Link>
          </li>
          <li>
            <Link 
              href="/messages" 
              className={`block p-2 rounded ${
                pathname.includes('/messages') 
                  ? 'bg-blue-600' 
                  : 'hover:bg-gray-700'
              } text-white`}
            >
              Pesan Masuk
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className={`block p-2 rounded ${
                pathname.includes('/projects') 
                  ? 'bg-blue-600' 
                  : 'hover:bg-gray-700'
              } text-white`}
            >
              Kelola Projects
            </Link>
          </li>
          <li>
            <button 
              onClick={handleLogout}
              className="block w-full text-left p-2 rounded hover:bg-gray-700 text-white"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
