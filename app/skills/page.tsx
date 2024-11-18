'use client';
import AuthCheck from '../components/AuthCheck';
import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import Sidemenu from '../components/Sidemenu';
import toast from 'react-hot-toast';
import { Skill } from '../types';

export default function SkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState({
    title: '',
    percent: 0,
    technologies: [] as string[],
  });
  const [tempTech, setTempTech] = useState('');
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const skillsSnapshot = await getDocs(collection(db, 'skills'));
      const skillsData = skillsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Skill[];
      setSkills(skillsData);
    } catch {
      toast.error('Gagal mengambil data skills');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingSkill) {
        await updateDoc(doc(db, 'skills', editingSkill.id), newSkill);
        toast.success('Skill berhasil diperbarui!');
      } else {
        await addDoc(collection(db, 'skills'), newSkill);
        toast.success('Skill berhasil ditambahkan!');
      }
      setNewSkill({ title: '', percent: 0, technologies: [] });
      setEditingSkill(null);
      fetchSkills();
    } catch {
      toast.error('Terjadi kesalahan!');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'skills', id));
      toast.success('Skill berhasil dihapus!');
      fetchSkills();
    } catch {
      toast.error('Gagal menghapus skill');
    }
  };

  const handleAddTechnology = () => {
    if (tempTech.trim()) {
      setNewSkill({
        ...newSkill,
        technologies: [...newSkill.technologies, tempTech.trim()]
      });
      setTempTech('');
    }
  };

  const handleRemoveTechnology = (index: number) => {
    setNewSkill({
      ...newSkill,
      technologies: newSkill.technologies.filter((_, i) => i !== index)
    });
  };

  return (
    <AuthCheck>
      <div className="flex min-h-screen bg-gray-900">
        <Sidemenu />
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-white mb-6">Kelola Skills</h1>
          
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Judul Skill"
                value={newSkill.title}
                onChange={(e) => setNewSkill({...newSkill, title: e.target.value})}
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="number"
                placeholder="Persentase Kemampuan"
                value={newSkill.percent}
                onChange={(e) => setNewSkill({...newSkill, percent: Number(e.target.value)})}
                className="p-2 rounded bg-gray-700 text-white"
                min="0"
                max="100"
              />
              <div className="col-span-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Tambah Teknologi"
                    value={tempTech}
                    onChange={(e) => setTempTech(e.target.value)}
                    className="p-2 rounded bg-gray-700 text-white flex-1"
                  />
                  <button
                    type="button"
                    onClick={handleAddTechnology}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Tambah
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {newSkill.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-600 text-white px-2 py-1 rounded flex items-center gap-2"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => handleRemoveTechnology(index)}
                        className="text-sm hover:text-red-300"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              {editingSkill ? 'Update Skill' : 'Tambah Skill'}
            </button>
          </form>

          <div className="grid grid-cols-1 gap-4">
            {skills.map((skill) => (
              <div key={skill.id} className="bg-gray-800 p-4 rounded flex justify-between items-center">
                <div>
                  <h3 className="text-white font-bold">{skill.title}</h3>
                  <p className="text-gray-300">Kemampuan: {skill.percent}%</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-600 text-white px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setEditingSkill(skill);
                      setNewSkill({
                        title: skill.title,
                        percent: skill.percent,
                        technologies: [...skill.technologies]
                      });
                    }}
                    className="bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(skill.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthCheck>
  );
}
