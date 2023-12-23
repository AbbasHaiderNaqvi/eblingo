"use client"
// pages/admin/index.tsx

import { useEffect } from 'react';

const AdminPage: React.FC = () => {
  useEffect(() => {
    // Redirect to /admin/login when the component mounts
    window.location.href = '/admin/login';
  }, []);

  return (
    // Optional: You can render content here if needed
    <div>
      Redirecting to /admin/login...
    </div>
  );
};

export default AdminPage;


