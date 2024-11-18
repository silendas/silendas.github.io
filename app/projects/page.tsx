'use client';
import AuthCheck from '../components/AuthCheck';
import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import Sidemenu from '../components/Sidemenu';
import toast from 'react-hot-toast';
import { Project } from '../types';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: [] as string[],
    link: ''
  });
  const [tempTech, setTempTech] = useState('');
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const projectsSnapshot = await getDocs(collection(db, 'projects'));
      const projectsData = projectsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      setProjects(projectsData);
    } catch  {
      toast.error('Gagal mengambil data projects');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingProject) {
        await updateDoc(doc(db, 'projects', editingProject.id), newProject);
        toast.success('Project berhasil diperbarui!');
      } else {
        await addDoc(collection(db, 'projects'), newProject);
        toast.success('Project berhasil ditambahkan!');
      }
      setNewProject({ title: '', description: '', technologies: [], link: '' });
      setEditingProject(null);
      fetchProjects();
    } catch  {
      toast.error('Terjadi kesalahan!');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'projects', id));
      toast.success('Project berhasil dihapus!');
      fetchProjects();
    } catch  {
      toast.error('Gagal menghapus project');
    }
  };

  const handleAddTechnology = () => {
    if (tempTech.trim()) {
      setNewProject({
        ...newProject,
        technologies: [...newProject.technologies, tempTech.trim()]
      });
      setTempTech('');
    }
  };

  const handleRemoveTechnology = (index: number) => {
    setNewProject({
      ...newProject,
      technologies: newProject.technologies.filter((_, i) => i !== index)
    });
  };

  return (
    <AuthCheck>
      <div className="flex min-h-screen bg-gray-900">
        <Sidemenu />
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold text-white mb-6">Kelola Projects</h1>
          
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Judul Project"
                value={newProject.title}
                onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                className="p-2 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="Link Project"
                value={newProject.link}
                onChange={(e) => setNewProject({...newProject, link: e.target.value})}
                className="p-2 rounded bg-gray-700 text-white"
              />
              <textarea
                placeholder="Deskripsi"
                value={newProject.description}
                onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                className="p-2 rounded bg-gray-700 text-white col-span-2"
                rows={4}
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
                  {newProject.technologies.map((tech, index) => (
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
              {editingProject ? 'Update Project' : 'Tambah Project'}
            </button>
          </form>

          <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 p-4 rounded flex justify-between items-center">
                <div>
                  <h3 className="text-white font-bold">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-blue-600 text-white px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 mt-2 inline-block"
                  >
                    Lihat Project
                  </a>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setEditingProject(project);
                      setNewProject({
                        title: project.title,
                        description: project.description,
                        technologies: [...project.technologies],
                        link: project.link
                      });
                    }}
                    className="bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
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
