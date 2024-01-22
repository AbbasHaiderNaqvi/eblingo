"use client"
// pages/admin/index.tsx

import { useEffect } from 'react';

const AdminPage: React.FC = () => {
  useEffect(() => {
    window.location.href = '/admin/login';
  }, []);

  return (
    <div>
      Redirecting to /admin/login...
    </div>
  );
};

export default AdminPage;


