'use client';

import { useState } from 'react';
import { Lock, Loader2, ArrowRight, Database, LogOut, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [submissions, setSubmissions] = useState([]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmissions(data.data);
        setIsAuthenticated(true);
      } else {
        setError(data.error || 'Invalid password');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSubmissions([]);
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0F0F1A] flex flex-col justify-center items-center p-4 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="relative z-10 w-full max-w-md bg-white border-2 border-[#111111] p-8 shadow-[8px_8px_0px_#E11D48]">
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="w-16 h-16 bg-[#111111] flex items-center justify-center mb-4">
              <Lock size={28} className="text-[#E11D48]" strokeWidth={2.5} />
            </div>
            <h1 className="font-syne font-extrabold text-[#111111] text-3xl tracking-tight">
              Command Center
            </h1>
            <p className="text-stone-500 font-bold uppercase tracking-widest text-[10px] mt-2">
              Authorized Personnel Only
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            {error && (
              <div className="bg-rose-50 border-l-4 border-[#E11D48] p-3 text-sm text-[#E11D48] font-bold">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="password" className="block text-[10px] font-bold uppercase tracking-widest text-stone-600 mb-2">
                Master Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-solid w-full px-4 py-3 text-[#111111] text-sm font-medium rounded-none"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-solid mt-2 flex items-center justify-center gap-2.5 py-4 bg-[#111111] text-white font-bold border-2 border-[#111111] text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <><Loader2 size={18} className="animate-spin" strokeWidth={2.5} /> Authenticating...</>
              ) : (
                <>Unlock System <ArrowRight size={16} strokeWidth={2.5} /></>
              )}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t-2 border-stone-100 flex justify-center">
            <a href="/" className="text-stone-500 hover:text-[#E11D48] text-xs font-bold uppercase tracking-widest flex items-center gap-1 transition-colors">
              Return to Public Site
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      {/* Admin Navbar */}
      <nav className="bg-[#111111] text-white border-b-4 border-[#E11D48]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Database size={20} className="text-[#E11D48]" strokeWidth={2.5} />
            <span className="font-syne font-extrabold tracking-wide">
              ADMIN DASHBOARD
            </span>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-1.5 border-2 border-stone-700 hover:border-[#E11D48] hover:bg-[#E11D48] transition-colors font-bold text-xs uppercase tracking-widest"
          >
            <LogOut size={14} strokeWidth={2.5} /> Lock Session
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-serif font-black text-[#111111] text-4xl mb-2">
              Message Submissions
            </h1>
            <p className="text-stone-600 font-medium">
              Review and manage incoming inquiries from the public portal.
            </p>
          </div>
          <div className="bg-[#111111] text-white px-5 py-2.5 border-2 border-[#111111] shadow-[4px_4px_0px_#E11D48] flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Total Entries</span>
            <span className="font-syne font-extrabold text-2xl">{submissions.length}</span>
          </div>
        </div>

        {/* Data Table Container */}
        <div className="bg-white border-2 border-[#111111] shadow-[8px_8px_0px_#111111] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0F0F1A] text-white">
                  <th className="p-4 text-[11px] font-bold uppercase tracking-[0.15em] border-b-2 border-[#111111] border-r border-stone-800">Date</th>
                  <th className="p-4 text-[11px] font-bold uppercase tracking-[0.15em] border-b-2 border-[#111111] border-r border-stone-800">Name</th>
                  <th className="p-4 text-[11px] font-bold uppercase tracking-[0.15em] border-b-2 border-[#111111] border-r border-stone-800">Contact</th>
                  <th className="p-4 text-[11px] font-bold uppercase tracking-[0.15em] border-b-2 border-[#111111]">Message</th>
                </tr>
              </thead>
              <tbody>
                {submissions.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-12 text-center text-stone-500 font-bold">
                      No submissions found in the database.
                    </td>
                  </tr>
                ) : (
                  submissions.map((sub, idx) => (
                    <tr 
                      key={sub.id} 
                      className={`hover:bg-stone-50 transition-colors ${idx !== submissions.length - 1 ? 'border-b border-stone-200' : ''}`}
                    >
                      <td className="p-4 text-xs text-stone-500 font-bold whitespace-nowrap border-r border-stone-200 align-top">
                        {new Date(sub.created_at).toLocaleString()}
                      </td>
                      <td className="p-4 text-sm font-bold text-[#111111] border-r border-stone-200 align-top">
                        {sub.name}
                      </td>
                      <td className="p-4 text-sm font-medium text-stone-600 border-r border-stone-200 align-top">
                        <a href={`mailto:${sub.email}`} className="text-[#E11D48] hover:underline hover:underline-offset-2">
                          {sub.email}
                        </a>
                      </td>
                      <td className="p-4 text-sm text-stone-700 leading-relaxed font-medium align-top max-w-md">
                        {sub.message}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#111111] border-t-2 border-[#111111] py-6 text-center">
        <p className="text-stone-500 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1.5">
          She Can Foundation Secure Database
        </p>
      </footer>
    </div>
  );
}
